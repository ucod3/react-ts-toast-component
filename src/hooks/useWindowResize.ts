import * as React from 'react';

export default function useWindowResize(callback: () => void): void {
  React.useEffect(() => {
    window.addEventListener('resize', callback);

    return () => {
      window.removeEventListener('resize', callback);
    };
  }, [callback]);
}
