import React from 'react';
import Button from '../Button';
import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf';
import { ToastContext } from '../ToastProvider';

import { ToastVariant, VARIANT_OPTIONS } from '../Toast/toastTypes';

function ToastPlayground(): React.JSX.Element {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error(
      'ToastPlayground must be rendered within a ToastProvider component',
    );
  }
  const {
    variant,
    setVariant,
    message,
    setMessage,
    createToast,
    textareaRef,
    handleFocusElement,
    error,
    setError,
  } = context;

  function handleCreateToast(): void {
    createToast(variant, message);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (!message) {
      handleFocusElement(textareaRef);
      setError('Message is required');
      return;
    }
    handleCreateToast();
    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='./assets/toast.png' />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form onSubmit={handleSubmit} className={styles.controlsWrapper}>
        {!message && <div className={styles.error}>{error}</div>}
        <div className={styles.row}>
          <label htmlFor='message' className={styles.label}>
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              ref={textareaRef}
              id='message'
              className={styles.messageInput}
              value={message}
              placeholder='Enter a message to toast'
              onChange={(e) => {
                setMessage(e.target.value);
                if (e.target.value === '') {
                  setError('Message is required');
                } else {
                  setError('');
                }
              }}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variantOption) => (
              <label htmlFor={`variant-${variantOption}`} key={variantOption}>
                <input
                  id={`variant-${variantOption}`}
                  type='radio'
                  name='variant'
                  value={variantOption}
                  checked={variant === variantOption}
                  onChange={(e) => {
                    setVariant(e.target.value as ToastVariant);
                  }}
                />
                {variantOption}
              </label>
            ))}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
