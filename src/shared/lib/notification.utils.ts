import { addToast } from '@heroui/react';
import { HeroUiColor } from '../types/heroui';

const createShowMessage =
  (color: HeroUiColor) => (title: string, message?: string) => {
    addToast({ title, description: message, color });
  };

export const showMessage = createShowMessage("default");

export const showInfoMessage = createShowMessage("primary");

export const showSuccessMessage = createShowMessage("success");

export const showErrorMessage = createShowMessage("danger");

export const showWarningMessage = createShowMessage("warning");
