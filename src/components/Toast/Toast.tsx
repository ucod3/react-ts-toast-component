import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';
import { ToastType, ToastVariant } from '../Toast/toastTypes';
import VisuallyHidden from '../VisuallyHidden';
import styles from './Toast.module.css';
import { ToastContext } from '../ToastProvider';

const ICONS_BY_VARIANT: Record<ToastVariant, React.ComponentType> = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant, message, id }: ToastType): React.JSX.Element {
  const Icon = ICONS_BY_VARIANT[variant] as React.ComponentType<{
    size: number;
  }>;

  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error('Toast must be rendered within a ToastProvider component');
  }
  const { handleDismiss, iconSize } = context;

  return (
    <>
      <div className={`${styles.toast} ${styles[variant]}`}>
        <div className={styles.iconContainer}>
          <Icon size={iconSize} />
        </div>
        <p className={styles.content}>
          <VisuallyHidden>${variant} -</VisuallyHidden>
          {message}
        </p>

        <button
          type='button'
          aria-label='Dismiss message'
          aria-live='off'
          className={styles.closeButton}
          onClick={() => {
            handleDismiss(id);
          }}
        >
          <X size={iconSize} />
        </button>
      </div>
    </>
  );
}

export default Toast;
