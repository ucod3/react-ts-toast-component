import React from 'react';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import { ToastContext } from '../ToastProvider';

function ToastShelf(): React.JSX.Element {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error(
      'ToastShelf must be rendered within a ToastProvider component',
    );
  }
  const { toasts, setToasts } = context;

  return (
    <>
      <ol
        className={styles.wrapper}
        role='list'
        aria-live='polite'
        aria-label='Notifications'
      >
        {toasts.length > 1 && (
          <li className={styles.buttonWrapper}>
            {toasts.length > 1 && (
              <button
                type='button'
                className={styles.dismissAllButton}
                onClick={() => {
                  setToasts([]);
                }}
              >
                Dismiss All
              </button>
            )}
          </li>
        )}
        {toasts.map(({ id, variant, message }) => (
          <li className={styles.toastWrapper} key={id}>
            <Toast id={id} variant={variant} message={message} />
          </li>
        ))}
      </ol>
      {/* {toasts.length > 1 && (
        <div className={styles.buttonWrapper}>
          {toasts.length > 1 && (
            <button
              type='button'
              className={styles.dismissAllButton}
              onClick={() => {
                setToasts([]);
              }}
            >
              Dismiss All
            </button>
          )}
        </div>
      )} */}
    </>
  );
}

export default ToastShelf;
