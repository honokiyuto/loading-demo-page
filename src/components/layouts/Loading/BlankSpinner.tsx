import { INTERVAL_TIME } from '@/lib/mock-data';
import { Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { SpinnerScreen } from './SpinnerScreen';

export const BlankSpinner = () => {
  const halfTime = INTERVAL_TIME / 2;

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
