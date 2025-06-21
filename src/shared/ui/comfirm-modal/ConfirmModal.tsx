import { useAsync } from '@/shared/hooks';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalProps,
} from '@heroui/react';
import React, { ReactNode, useCallback, useState } from 'react';
import { LoadingOverlay } from '../loading-overlay';

interface ConfirmModalProps
  extends Omit<
    ModalProps,
    | "isDismissable"
    | "isKeyboardDismissDisabled"
    | "hideCloseButton"
    | "children"
  > {
  headerContent: ReactNode;
  bodyContent: ReactNode;
  onConfirm: () => Promise<any>;
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
  confirmLabel?: string;
  cancelLabel?: string;
}

export function ConfirmModal({
  isOpen: isOpenProp,
  defaultOpen = false,
  onOpenChange,
  headerContent,
  bodyContent,
  onConfirm,
  color: confirmButtonColor = "primary",
  confirmLabel = "Подтвердить",
  cancelLabel = "Отмена",
  ...props
}: ConfirmModalProps) {
  const isControlled = isOpenProp !== undefined && onOpenChange !== undefined;
  const [openInternal, setOpenInternal] = useState(defaultOpen);

  const { execute: handleConfirm, isLoading } = useAsync(onConfirm);

  const open = isControlled ? isOpenProp! : openInternal;
  const setOpen = useCallback(
    (value: boolean) => {
      if (isControlled) {
        onOpenChange!(value);
      } else {
        setOpenInternal(value);
      }
    },
    [isControlled, onOpenChange]
  );

  const handleConfirmAndClose = useCallback(async () => {
    await handleConfirm();
    setOpen(false);
  }, [handleConfirm, setOpen]);

  return (
    <Modal
      isOpen={open}
      onOpenChange={setOpen}
      isDismissable={!isLoading}
      isKeyboardDismissDisabled={isLoading}
      hideCloseButton
      {...props}
    >
      <ModalContent className="relative">
        <LoadingOverlay
          isLoading={isLoading}
          backdrop="semi-transparent"
          size="lg"
          color={confirmButtonColor}
        >
          <ModalHeader>{headerContent}</ModalHeader>
          <ModalBody>{bodyContent}</ModalBody>
          <ModalFooter className="flex justify-end space-x-2">
            <Button
              variant="bordered"
              onPress={() => setOpen(false)}
              disabled={isLoading}
            >
              {cancelLabel}
            </Button>
            <Button color={confirmButtonColor} onPress={handleConfirmAndClose}>
              {confirmLabel}
            </Button>
          </ModalFooter>
        </LoadingOverlay>
      </ModalContent>
    </Modal>
  );
}
