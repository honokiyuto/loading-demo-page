import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  getIntervalFromLocalStorage,
  setIntervalToLocalStorage,
} from '@/lib/mock-data';
import { useState } from 'react';

export const SettingForm = () => {
  const [interval, setInterval] = useState(getIntervalFromLocalStorage());
  return (
    <div className="w-full p-6 relative">
      <div className="flex flex-row gap-2 mb-4">
        <p>{interval} ms</p>
      </div>
      <Slider
        max={10000}
        step={1000}
        defaultValue={[interval]}
        onValueChange={(value) => {
          setInterval(value[0]);
          setIntervalToLocalStorage(value[0]);
        }}
      />
    </div>
  );
};
