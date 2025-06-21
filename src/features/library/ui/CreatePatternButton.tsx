import { CreateLibraryPatternModal } from '@/features/library/ui/modal/CreateLibraryPatternModal';
import { Button } from '@heroui/react';
import { PlusIcon } from 'lucide-react';
import { FC, useState } from 'react';

export const CreatePatternButton: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        color="primary"
        onPress={handleOpenModal}
        startContent={<PlusIcon size={20} />}
      >
        Добавить ритм
      </Button>

      <CreateLibraryPatternModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};
