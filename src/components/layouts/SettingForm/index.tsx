import { Slider } from '@/components/ui/slider';
import {
  getIntervalFromLocalStorage,
  getSkeletonPatternFromLocalStorage,
  setIntervalToLocalStorage,
  setSkeletonPatternToLocalStorage,
} from '@/lib/functions';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import {
  DEFAULT_SKELETON_PATTERN,
  skeletonPattern,
  type SkeletonPattern,
} from '@/lib/constants';

type SettingFormProps = {
  isDisplaySkeleton: boolean;
};

export const SettingForm = ({ isDisplaySkeleton }: SettingFormProps) => {
  const [intervalState, setIntervalState] = useState(
    getIntervalFromLocalStorage()
  );
  const [skeletonPatternState, setSkeletonPatternState] =
    useState<SkeletonPattern>(getSkeletonPatternFromLocalStorage());
  return (
    <div className="w-full p-6 relative flex flex-col gap-8">
      {/* Loading Duration */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h2 className="text-sm font-bold">Loading Duration (ms)</h2>
          <Badge variant="outline" className="text-sm">
            {intervalState} ms
          </Badge>
        </div>
        <Slider
          max={10000}
          step={1000}
          defaultValue={[intervalState]}
          onValueChange={(value) => {
            setIntervalState(value[0]);
            setIntervalToLocalStorage(value[0]);
          }}
        />
      </div>
      {/* Skeleton Pattern */}
      {isDisplaySkeleton && (
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <h2 className="text-sm font-bold">Skeleton Pattern</h2>
          </div>
          <RadioGroup
            defaultValue={DEFAULT_SKELETON_PATTERN}
            value={skeletonPatternState}
            onValueChange={(value) => {
              setSkeletonPatternState(value as SkeletonPattern);
              setSkeletonPatternToLocalStorage(value as SkeletonPattern);
            }}
          >
            {Object.entries(skeletonPattern).map(([key, value]) => (
              <div className="flex items-center gap-3" key={key}>
                <RadioGroupItem value={value} id={key} />
                <Label htmlFor={key}>{value}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      )}
    </div>
  );
};
