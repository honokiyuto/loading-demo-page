import { getIntervalFromLocalStorage } from '@/lib/mock-data';
import { useState, useEffect } from 'react';
type HalfBlankCommonProps = {
  children: React.ReactNode;
};

export const HalfBlankCommon = ({ children }: HalfBlankCommonProps) => {
  const halfTime = getIntervalFromLocalStorage() / 2;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, halfTime);
  }, [halfTime]);

  if (isLoading) {
    return null;
  }

  return <>{children}</>;
};
