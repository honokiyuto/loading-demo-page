import { getIntervalFromLocalStorage } from '@/lib/mock-data';
import { useState, useEffect } from 'react';
import { SpinnerScreen } from './SpinnerScreen';

export const BlankSpinner = () => {
  const halfTime = getIntervalFromLocalStorage() / 2;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, halfTime);
  }, []);

  if (isLoading) {
    return null;
  }

  return <SpinnerScreen />;
};
