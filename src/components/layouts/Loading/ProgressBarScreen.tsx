import { getIntervalFromLocalStorage } from '@/lib/mock-data';
import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

export const ProgressBarScreen = () => {
  const divideTime = 5;
  const dividedTime = getIntervalFromLocalStorage() / divideTime;

  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value < 100) {
      setTimeout(() => {
        setValue((prev) => prev + 100 / divideTime);
      }, dividedTime);
    }
  }, [value]);

  return (
    <div className="w-full p-6">
      <div className="h-dvh flex flex-col items-center justify-center gap-2">
        <Progress value={value} className="w-3/4 md:w-1/2 h-1" />
      </div>
    </div>
  );
};
