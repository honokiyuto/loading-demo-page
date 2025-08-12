import { Check, Triangle } from 'lucide-react';
import { Skeleton } from '../Loading/SkeletonScreen';
import { BrowserWindow } from '@/components/ui/browser-window';

type FullScreenComponentProps = {
  loadingType: 'full' | 'partial';
};

const FullScreenComponent = ({ loadingType }: FullScreenComponentProps) => {
  return (
    <BrowserWindow>
      {loadingType === 'full' && (
        <Skeleton className="w-full h-full rounded-t-md" />
      )}
      {loadingType === 'partial' && (
        <div className="w-full h-full flex flex-col gap-2">
          <Skeleton className="w-1/3 h-1/10 rounded-md " />
          <Skeleton className="w-4/5 h-2/10 rounded-md" />
          <div className="w-full grid grid-cols-2 gap-4">
            <Skeleton className="w-full aspect-video rounded-md" />
            <Skeleton className="w-full aspect-video rounded-md" />
            <Skeleton className="w-full aspect-video rounded-md" />
            <Skeleton className="w-full aspect-video rounded-md" />
          </div>
        </div>
      )}
    </BrowserWindow>
  );
};

export const FullScreen = () => {
  return (
    <div className="w-full p-6 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div className="flex flex-col">
          <FullScreenComponent loadingType="full" />
          <Triangle className="h-10 w-10 text-red-400 self-center mt-2" />
        </div>
        <div className="flex flex-col">
          <FullScreenComponent loadingType="partial" />
          <Check className="h-10 w-10 text-green-400 self-center mt-2" />
        </div>
      </div>
    </div>
  );
};
