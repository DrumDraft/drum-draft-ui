import { LibraryPattern } from '@/entities/library/types';
import { useUpdatePattern } from '@/features/library/lib';
import { usePatternEditorStore } from '@/features/pattern-editor/model';
import { PatternEditorModal } from '@/features/pattern-editor/ui/modal/PatternEditorModal';
import { Input, Switch } from '@heroui/react';
import { FC, useCallback, useEffect, useState } from 'react';

interface EditLibraryPatternModalProps {
  isOpen: boolean;
  onClose: () => void;
  pattern: LibraryPattern;
}

export const EditLibraryPatternModal: FC<EditLibraryPatternModalProps> = ({
  isOpen,
  onClose,
  pattern,
}) => {
  const [title, setTitle] = useState(pattern.title);
  const [isPublic, setIsPublic] = useState(pattern.isPublic);
  const [error, setError] = useState<string | null>(null);

  const { updatePattern, isUpdating, error: updateError } = useUpdatePattern();
  const { setPattern, setGridResolution, clear, beatMap, signature } =
    usePatternEditorStore();

  const initEditor = useCallback(
    (pattern: LibraryPattern) => {
      clear();
      setPattern(pattern.pattern);
      setGridResolution("1/16");
      setTitle(pattern.title);
      setIsPublic(pattern.isPublic);

      console.log("initEditor", pattern);
    },
    [clear, setPattern, setGridResolution, setTitle, setIsPublic]
  );

  // Инициализация редактора при открытии модала
  useEffect(() => {
    if (isOpen) {
      initEditor(pattern);
    }
  }, [isOpen, initEditor, pattern]);

  // Очистка при закрытии
  useEffect(() => {
    if (!isOpen) {
      clear();
    }
  }, [isOpen, clear]);

  // Обработка ошибок из хука
  useEffect(() => {
    if (updateError) {
      setError(updateError.message);
    }
  }, [updateError]);

  const handleSubmit = useCallback(async () => {
    if (!beatMap || !signature) {
      setError("Ошибка: редактор не инициализирован");
      return;
    }

    if (!title.trim()) {
      setError("Введите название ритма");
      return;
    }

    // Импортируем beatMapToPattern динамически
    const { beatMapToPattern } = await import("@/features/pattern-editor/lib");

    // Преобразуем beatMap в Pattern
    const currentPattern = beatMapToPattern(
      beatMap,
      signature.numerator,
      signature.denominator as number,
      pattern.pattern.tags
    );

    const updatedPattern: LibraryPattern = {
      ...pattern,
      title,
      isPublic,
      pattern: currentPattern,
    };

    await updatePattern(pattern.id, updatedPattern);
    onClose();
  }, [pattern, title, isPublic, updatePattern, onClose, beatMap, signature]);

  const handleCancel = useCallback(() => {
    setTitle(pattern.title);
    setIsPublic(pattern.isPublic);
    setError(null);
    onClose();
  }, [pattern.title, pattern.isPublic, onClose]);

  const editorHeaderStartContent = (
    <Input
      className="max-w-xs"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      label="Название ритма"
      placeholder="Введите название ритма"
    />
  );

  const editorHeaderEndContent = (
    <div className="flex items-center gap-2">
      <label className="flex items-center gap-2 text-sm">
        Публичный
        <Switch isSelected={isPublic} onValueChange={setIsPublic} size="sm" />
      </label>
    </div>
  );

  return (
    <PatternEditorModal
      isOpen={isOpen}
      onClose={onClose}
      pattern={pattern.pattern}
      modalHeader="Редактировать ритм"
      editorHeaderStartContent={editorHeaderStartContent}
      editorHeaderEndContent={editorHeaderEndContent}
      submitLabel="Сохранить"
      cancelLabel="Отмена"
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      error={error}
      onErrorClear={() => setError(null)}
      isLoading={isUpdating}
    />
  );
};
