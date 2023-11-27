import * as React from 'react';

function useAutoDismissToasts<T>(
  items: T[],
  setItems: React.Dispatch<React.SetStateAction<T[]>>,
  timeoutDuration: number,
): void {
  React.useEffect(() => {
    let timeout: number;
    if (window.innerWidth < 768) {
      timeout = window.setTimeout(() => {
        setItems([]);
      }, timeoutDuration);
    }
    return () => {
      window.clearTimeout(timeout);
    };
  }, [items, setItems, timeoutDuration]);
}

export default useAutoDismissToasts;
