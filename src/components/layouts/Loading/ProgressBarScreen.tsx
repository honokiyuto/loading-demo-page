import { getIntervalFromLocalStorage } from '@/lib/mock-data';
import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

type ProgressBarProps = {
  interval?: number;
};

export const ProgressBar = ({ interval }: ProgressBarProps) => {
  const divideTime = 5;
  const dividedTime = (interval || getIntervalFromLocalStorage()) / divideTime;

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

export const ProgressBarScreen = () => {
  return (
    <div className="w-full p-6">
      <div className="h-dvh flex flex-col items-center justify-center gap-2">
        <ProgressBar />
      </div>
    </div>
  );
};
