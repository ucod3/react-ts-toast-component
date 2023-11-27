import React from 'react';

export default function useKeyDown(key: string, callback: () => void): void {
  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === key) {
        callback();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [callback, key]);
}
