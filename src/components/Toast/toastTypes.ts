export const VARIANT_OPTIONS = [
  'notice',
  'warning',
  'success',
  'error',
] as const;
export type ToastVariant = (typeof VARIANT_OPTIONS)[number];

export type Message = string;

export interface ToastType {
  id: string;
  variant: ToastVariant;
  message: Message;
}

export type Toasts = ToastType[];
