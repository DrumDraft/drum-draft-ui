import { LibraryPattern } from '@/entities/library/types';
import { PatternCard } from '@/entities/pattern/ui/pattern-card/PatternCard';
import { ConfirmModal } from '@/shared/ui';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Spinner,
} from '@heroui/react';
import {
  EllipsisVerticalIcon,
  SquareMinusIcon,
  SquarePenIcon,
} from 'lucide-react';
import { FC, useState } from 'react';
import { useDeletePattern } from '../lib';
import { EditLibraryPatternModal } from './modal/EditLibraryPatternModal';

interface LibraryPatternPreviewProps {
  pattern: LibraryPattern;
  onAction?: () => void;
  actionLabel?: string;
  actionIcon?: React.ReactNode;
  onDelete?: () => void;
}

export const LibraryPatternPreview: FC<LibraryPatternPreviewProps> = ({
  pattern,
  onAction,
  actionLabel,
  actionIcon,
  onDelete,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { deletePattern, isDeleting } = useDeletePattern();

  const handleDeleteClick = () => {
    setIsDropdownOpen(false);
    setIsConfirmOpen(true);
  };

  const handleEditClick = () => {
    setIsDropdownOpen(false);
    setIsEditModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    await deletePattern(pattern.id.toString());
    setIsConfirmOpen(false);
    onDelete?.();
  };

  const handleEditClose = () => {
    setIsEditModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">
          {pattern.title || "Без названия"}
        </h3>

        <Dropdown isOpen={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
          <DropdownTrigger>
            <Button variant="bordered" isIconOnly disabled={isDeleting}>
              {isDeleting ? <Spinner size="sm" /> : <EllipsisVerticalIcon />}
            </Button>
          </DropdownTrigger>

          <DropdownMenu disabledKeys={isDeleting ? ["edit", "delete"] : []}>
            <DropdownItem
              key="edit"
              startContent={<SquarePenIcon />}
              onPress={handleEditClick}
            >
              Редактировать
            </DropdownItem>
            <DropdownItem
              key="delete"
              className="text-danger"
              color="danger"
              startContent={<SquareMinusIcon />}
              onPress={handleDeleteClick}
            >
              Удалить из библиотеки
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      <PatternCard pattern={pattern.pattern} />

      <ConfirmModal
        isOpen={isConfirmOpen}
        onOpenChange={setIsConfirmOpen}
        headerContent="Удаление ритма"
        bodyContent={
          <p>
            {`Вы уверены, что хотите удалить ритм "${pattern.title || "Без названия"}" из библиотеки? Это действие нельзя отменить.`}
          </p>
        }
        onConfirm={handleConfirmDelete}
        color="danger"
      />

      <EditLibraryPatternModal
        isOpen={isEditModalOpen}
        onClose={handleEditClose}
        pattern={pattern}
      />
    </div>
  );
};
