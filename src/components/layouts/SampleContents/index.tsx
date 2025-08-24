import { getContentItems } from '@/lib/functions';
import { Suspense } from 'react';
import { ContentCardList } from './parts/ContentsCardList';
import { fallBackDict, type Urls } from '@/lib/constants';
import { FloatDialogButton } from '@/components/layouts/FloatDialogButton';
import { SettingForm } from '../SettingForm';
import { Settings, Timer } from 'lucide-react';

type SampleContentsProps = {
  fallbackType: Urls;
};

export const SampleContents = ({ fallbackType }: SampleContentsProps) => {
  const itemsPromise = getContentItems();
  const Fallback = fallBackDict[fallbackType];
  return (
    <>
      <Suspense fallback={Fallback ? <Fallback /> : null}>
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
      <FloatDialogButton
        icon={Settings}
        buttonLabel="Settings"
        title="Settings"
      >
        <SettingForm
          isDisplaySkeleton={
            fallbackType === '/skeleton-only' ||
            fallbackType === '/blank-skeleton'
          }
        />
      </FloatDialogButton>
    </>
  );
};
