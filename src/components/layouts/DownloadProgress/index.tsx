import { Check, CloudDownload, Triangle } from 'lucide-react';
import { Skeleton } from '../Loading/SkeletonScreen';
import { BrowserWindow } from '@/components/ui/browser-window';
import { ProgressBar } from '../Loading/ProgressBarScreen';

type DownloadProgressComponentProps = {
  loadingType: 'skeleton' | 'progress';
};

const DownloadProgressComponent = ({
  loadingType,
}: DownloadProgressComponentProps) => {
  return (
    <BrowserWindow>
      {loadingType === 'skeleton' && (
        <>
          <div className="w-full relative">
            <Skeleton className="w-full h-15 rounded-md" />
            <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
              <CloudDownload className="h-4 w-4 mr-2" />
              Downloading...
            </div>
          </div>
        </>
      )}
      {loadingType === 'progress' && (
        <div className="w-full h-15 flex flex-col gap-2 items-center justify-center">
          <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
            <CloudDownload className="h-4 w-4 mr-2" />
            Downloading...
          </div>
          <ProgressBar interval={10000} />
        </div>
      )}
    </BrowserWindow>
  );
};

export const DownloadProgress = () => {
  return (
    <div className="w-full p-6 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div className="flex flex-col">
          <DownloadProgressComponent loadingType="skeleton" />
          <Triangle className="h-10 w-10 text-red-400 self-center mt-2" />
        </div>
        <div className="flex flex-col">
          <DownloadProgressComponent loadingType="progress" />
          <Check className="h-10 w-10 text-green-400 self-center mt-2" />
        </div>
      </div>
    </div>
  );
};
