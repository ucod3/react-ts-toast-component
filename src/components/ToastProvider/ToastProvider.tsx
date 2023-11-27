import * as React from 'react';
import { useKeyDown, useWindowResize, useAutoDismissToasts } from '../../hooks';

import {
  Message,
  ToastType,
  ToastVariant,
  Toasts,
  VARIANT_OPTIONS,
} from '../Toast/toastTypes';

interface ToastContextType {
  variant: ToastVariant;
  setVariant: React.Dispatch<React.SetStateAction<ToastVariant>>;
  message: Message;
  setMessage: React.Dispatch<React.SetStateAction<Message>>;
  toasts: Toasts;
  setToasts: React.Dispatch<React.SetStateAction<Toasts>>;
  createToast: (variant: ToastVariant, message: string) => void;
  handleDismiss: (id: string) => void;
  iconSize: number;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
  handleFocusElement: (inputElement: React.RefObject<HTMLElement>) => void;
  handleCheckMessage: (error: string, callback?: () => void) => void;
}

export const ToastContext = React.createContext<ToastContextType | undefined>(
  undefined,
);

interface ToastProviderProps {
  children: React.ReactNode;
}

declare const crypto: {
  randomUUID: () => string;
};

function ToastProvider({ children }: ToastProviderProps): React.JSX.Element {
  const [toasts, setToasts] = React.useState<Toasts>([]);
  const [variant, setVariant] = React.useState<ToastVariant>(
    VARIANT_OPTIONS[0],
  );
  const [message, setMessage] = React.useState<Message>('');
  const [iconSize, setIconSize] = React.useState(
    window.innerWidth < 768 ? 16 : 24,
  );
  const [error, setError] = React.useState<Message>('');

  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  function handleFocusElement(
    inputElement: React.RefObject<HTMLElement>,
  ): void {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }

  function handleCheckMessage(error: string, callback?: () => void): void {
    if (!message) {
      setError(error);
      return;
    }
    callback?.();
  }

  function createToast(variant: ToastVariant, message: Message): void {
    const id = crypto.randomUUID();
    const newToast: ToastType = {
      id,
      variant,
      message,
    };

    setToasts([...toasts, newToast]);

    // Focus on textarea after creating a toast
    handleFocusElement(textareaRef);
  }

  function handleDismiss(id: string): void {
    setToasts(toasts.filter((toast) => toast.id !== id));
  }

  const handleEscapeKey = React.useCallback(() => {
    setToasts([]);
  }, [setToasts]);

  // Dismiss all toasts on escape key
  useKeyDown('Escape', handleEscapeKey);

  // Resize icon size inside toast on window resize
  useWindowResize(() => {
    if (window.innerWidth < 768) {
      setIconSize(16);
    } else {
      setIconSize(24);
    }
  });

  // Dismiss all toasts on mobile after 25 seconds
  useAutoDismissToasts(toasts, setToasts, 10000);

  //onload focus on textarea
  React.useEffect(() => {
    handleFocusElement(textareaRef);
  }, []);

  const value = {
    toasts,
    setToasts,
    variant,
    setVariant,
    message,
    setMessage,
    createToast,
    handleDismiss,
    iconSize,
    error,
    setError,
    textareaRef,
    handleFocusElement,
    handleCheckMessage,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
