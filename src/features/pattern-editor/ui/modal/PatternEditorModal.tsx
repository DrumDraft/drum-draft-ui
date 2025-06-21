import { Pattern } from '@/entities/pattern/types';
import { PatternEditorGridResolutionSelect } from '@/features/pattern-editor/ui/controls/PatternEditorGridResolutionSelect';
import { PatternEditorSignatureSelect } from '@/features/pattern-editor/ui/controls/PatternEditorSignatureSelect';
import { PatternEditor } from '@/features/pattern-editor/ui/core/PatternEditor';
import { LoadingOverlay } from '@/shared/ui/loading-overlay/LoadingOverlay';
import {
  Alert,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@heroui/react';
import { ReactNode, useCallback } from 'react';

interface PatternEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  pattern: Pattern;
  modalHeader?: ReactNode;
  editorHeaderStartContent?: ReactNode;
  editorHeaderEndContent?: ReactNode;
  submitLabel?: string;
  cancelLabel?: string;
  onSubmit?: () => void;
  onCancel?: () => void;
  error?: string | null;
  onErrorClear?: () => void;
  isLoading?: boolean;
}

export const PatternEditorModal: React.FC<PatternEditorModalProps> = ({
  isOpen,
  onClose,
  modalHeader,
  editorHeaderStartContent,
  editorHeaderEndContent,
  submitLabel = "Сохранить",
  cancelLabel = "Отмена",
  onSubmit,
  onCancel,
  error,
  onErrorClear,
  isLoading = false,
}) => {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <Modal hideCloseButton size="5xl" isOpen={isOpen} onClose={handleClose}>
      <ModalContent>
        {(onClose) => (
          <LoadingOverlay
            isLoading={isLoading}
            backdrop="semi-transparent"
            size="lg"
          >
            <ModalHeader>{modalHeader}</ModalHeader>

            <ModalBody>
              {error && (
                <Alert
                  color="danger"
                  title={`Произошла ошибка`}
                  description={error}
                  endContent={
                    <Button
                      color="danger"
                      size="sm"
                      variant="flat"
                      onPress={onErrorClear}
                    >
                      Закрыть
                    </Button>
                  }
                />
              )}

              <div className="flex gap-2 items-center justify-between">
                <div className="flex gap-2 items-center">
                  {editorHeaderStartContent}
                </div>

                <div className="flex gap-2 items-center">
                  <PatternEditorGridResolutionSelect />

                  <PatternEditorSignatureSelect />
                </div>

                <div className="flex gap-2 items-center">
                  {editorHeaderEndContent}
                </div>
              </div>

              <PatternEditor />
            </ModalBody>

            <ModalFooter>
              <Button
                variant="light"
                onPress={onCancel || handleClose}
                disabled={isLoading}
              >
                {cancelLabel}
              </Button>

              <Button color="primary" onPress={onSubmit} disabled={isLoading}>
                {submitLabel}
              </Button>
            </ModalFooter>
          </LoadingOverlay>
        )}
      </ModalContent>
    </Modal>
  );
};
