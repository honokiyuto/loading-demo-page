import { ModeToggle } from '@/components/ui/ModeToggle';
import { SidebarTrigger } from '@/components/ui/sidebar';
import SidebarLayout from '../SideBarLayout/sidebar-layout';
import { ArrowLeft, ArrowRight, Check, Triangle } from 'lucide-react';
import { Skeleton } from '../Loading/SkeletonScreen';

type FullScreenComponentProps = {
  loadingType: 'full' | 'partial';
};

const FullScreenComponent = ({ loadingType }: FullScreenComponentProps) => {
  return (
    <div className="flex flex-col">
      {/* ブラウザのタブバー */}
      <div className="w-full h-8 bg-gray-100 border-x-1 border-t-1 border-gray-300 dark:bg-gray-900 dark:border-gray-800 flex items-center px-3">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500"></div>
        </div>
      </div>
      {/* アドレスバー */}
      <div className="w-full h-10 bg-white border-1 border-gray-300 dark:bg-gray-900 dark:border-gray-800 flex items-center px-3 gap-2">
        <ArrowLeft className="text-gray-400 h-5 w-5" />
        <ArrowRight className="text-gray-400 h-5 w-5" />
        <div className="w-full max-w-xl bg-gray-100 h-6 rounded flex items-center px-3 gap-2 dark:bg-gray-800">
          <span className="text-xs text-gray-400">https://</span>
        </div>
      </div>
      {/* コンテンツエリア */}
      <div className="flex-1 bg-white border-x border-gray-300 dark:bg-gray-900 dark:border-gray-800 aspect-3/2 pt-6 px-6">
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
      </div>
    </div>
  );
};

export const FullScreen = () => {
  return (
    <SidebarLayout>
      <main className="w-full p-6 relative">
        <SidebarTrigger className="m-3 absolute top-0 left-0 md:hidden" />
        <div className="m-3 absolute top-0 right-0">
          <ModeToggle />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="flex flex-col">
            <FullScreenComponent loadingType="full" />
            <Triangle className="h-10 w-10 text-red-400 self-center mt-10" />
          </div>
          <hr className="md:hidden w-full border-gray-300 my-10" />
          <div className="flex flex-col">
            <FullScreenComponent loadingType="partial" />
            <Check className="h-10 w-10 text-green-400 self-center mt-10" />
          </div>
        </div>
      </main>
    </SidebarLayout>
  );
};
