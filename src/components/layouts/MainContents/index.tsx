import { getContentItems } from '@/lib/mock-data';
import { Suspense, useMemo } from 'react';
import { SkeletonScreen } from '../Loading/SkeletonScreen';
import { SpinnerScreen } from '../Loading/SpinnerScreen';
import { BlankSpinner } from '../Loading/BlankSpinner';
import { ContentCardList } from './parts/ContentsCardList';
import SidebarLayoutMain from '../SideBarLayout/sidebar-layout';

type MainContentsProps = {
  fallbackType: 'spinner' | 'skeleton' | 'blank' | 'blank-spinner';
};

export const MainContents = ({ fallbackType }: MainContentsProps) => {
  const itemsPromise = getContentItems();

  const fallback = useMemo(() => {
    switch (fallbackType) {
      case 'spinner':
        return <SpinnerScreen />;
      case 'skeleton':
        return <SkeletonScreen />;
      case 'blank':
        return null;
      case 'blank-spinner':
        return <BlankSpinner />;
      default:
        return null;
    }
  }, [fallbackType]);

  return (
    <SidebarLayoutMain>
      <Suspense fallback={fallback}>
        <div className="w-full p-6">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Sorry for the wait!
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              This is a sample page. How long did you feel like you were
              waiting?
            </p>
          </div>
          <ContentCardList itemsPromise={itemsPromise} />
        </div>
      </Suspense>
    </SidebarLayoutMain>
  );
};
