import {
  Check,
  Loader2,
  Play,
  Scan,
  SkipForward,
  Triangle,
  Volume2,
} from 'lucide-react';
import { Skeleton } from '../Loading/SkeletonScreen';

type MoviePlayerComponentProps = {
  loadingType: 'skeleton' | 'spinner';
};

const MoviePlayerComponent = ({ loadingType }: MoviePlayerComponentProps) => {
  return (
    <div className="flex flex-col">
      {/* 動画本体 */}
      <div className="aspect-video border-1 border-gray-300 dark:border-gray-800">
        {loadingType === 'skeleton' && <Skeleton className="w-full h-full" />}
        {loadingType === 'spinner' && (
          <div className="w-full h-full flex items-center justify-center">
            <Loader2 className="h-15 w-15 animate-spin text-gray-400" />
          </div>
        )}
      </div>
      {/* バー */}
      <div className="flex flex-row border-b-1 border-x-1 border-gray-300 dark:border-gray-800">
        <div className="w-1/3 h-1 bg-gray-300 dark:bg-gray-800"></div>
        <div className="w-2/3 h-1 bg-gray-500 dark:bg-gray-800"></div>
      </div>
      {/* コントローラー */}
      <div className="h-10 w-full border-b-1 border-x-1 border-gray-300 bg-gray-500 dark:bg-gray-800 dark:border-gray-800 flex flex-row justify-between p-2 items-center">
        <div className="flex flex-row gap-2 items-center">
          <Play className="h-4 w-4 text-white" />
          <SkipForward className="h-4 w-4 text-white" />
          <Volume2 className="h-4 w-4 text-white" />
        </div>
        <Scan className="h-4 w-6 text-white" />
      </div>
    </div>
  );
};

export const MoviePlayer = () => {
  return (
    <div className="w-full p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div className="flex flex-col">
          <MoviePlayerComponent loadingType="skeleton" />
          <Triangle className="h-10 w-10 text-red-400 self-center mt-2" />
        </div>
        <div className="flex flex-col">
          <MoviePlayerComponent loadingType="spinner" />
          <Check className="h-10 w-10 text-green-400 self-center mt-2" />
        </div>
      </div>
    </div>
  );
};
