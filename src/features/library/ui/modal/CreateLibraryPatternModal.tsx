import { CreateLibraryPatternDto } from '@/entities/library/types/create-library-pattern-dto';
import { useCreatePattern } from '@/features/library/lib';
import { usePatternEditorStore } from '@/features/pattern-editor/model';
import { PatternEditorModal } from '@/features/pattern-editor/ui/modal/PatternEditorModal';
import { Input, Switch } from '@heroui/react';
import { useCallback, useEffect, useState } from 'react';

interface CreateLibraryPatternModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateLibraryPatternModal: React.FC<
  CreateLibraryPatternModalProps
> = ({ isOpen, onClose }) => {
  const [patternName, setPatternName] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { createPattern, isCreating, error: createError } = useCreatePattern();
  const { clear, beatMap, signature } = usePatternEditorStore();

  // Очистка при закрытии
  useEffect(() => {
    if (!isOpen) {
      clear();
    }
  }, [isOpen, clear]);

  // Обработка ошибок из хука
  useEffect(() => {
    if (createError) {
      setError(createError.message);
    }
  }, [createError]);

  const clearForm = useCallback(() => {
    setPatternName("");
    setIsPublic(false);
    setError(null);
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!beatMap || !signature) {
      setError("Ошибка: редактор не инициализирован");
      return;
    }

    if (!patternName.trim()) {
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
      []
    );

    const newPattern: CreateLibraryPatternDto = {
      title: patternName,
      signatureBits: currentPattern.signatureBits,
      signatureMeasure: currentPattern.signatureMeasure,
      beats: currentPattern.beats,
      tags: currentPattern.tags,
      isPublic,
    };

    await createPattern(newPattern);
    clearForm();
    onClose();
  }, [
    patternName,
    isPublic,
    createPattern,
    onClose,
    clearForm,
    beatMap,
    signature,
  ]);

  const handleCancel = useCallback(() => {
    clearForm();
    onClose();
  }, [onClose, clearForm]);

  const editorHeaderStartContent = (
    <Input
      className="max-w-xs"
      value={patternName}
      onChange={(e) => setPatternName(e.target.value)}
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
      pattern={{
        id: null,
        signatureBits: 4,
        signatureMeasure: 4,
        beats: [],
        tags: [],
        createdAt: null,
        updatedAt: null,
      }}
      modalHeader="Создать новый ритм"
      editorHeaderStartContent={editorHeaderStartContent}
      editorHeaderEndContent={editorHeaderEndContent}
      submitLabel="Создать"
      cancelLabel="Отмена"
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      error={error}
      onErrorClear={() => setError(null)}
      isLoading={isCreating}
    />
  );
};
