import { getIntervalFromLocalStorage } from '@/lib/mock-data';
import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

type ProgressBarProps = {
  interval?: number;
  isHalf?: boolean;
};

export const ProgressBar = ({ interval, isHalf }: ProgressBarProps) => {
  const divideTime = 5;
  const dividedTime =
    (interval || getIntervalFromLocalStorage()) / divideTime / (isHalf ? 2 : 1);

  const [value, setValue] = useState(10);

  useEffect(() => {
    if (value < 100) {
      setTimeout(() => {
        setValue((prev) => prev + 100 / divideTime);
      }, dividedTime);
    }
  }, [value]);
  return <Progress value={value} className="w-3/4 md:w-1/2 h-1" />;
};

export const ProgressBarScreen = ({ isHalf }: ProgressBarProps) => {
  return (
    <div className="w-full p-6">
      <div className="h-dvh flex flex-col items-center justify-center gap-2">
        <ProgressBar isHalf={isHalf} />
      </div>
    </div>
  );
};
