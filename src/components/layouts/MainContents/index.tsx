import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import {
  contentItems,
  getContentItems,
  type ContentItem,
} from '@/lib/mock-data';
import { Suspense, use, useMemo, type ReactNode } from 'react';
import { SkeletonScreen } from '../Loading/SkeletonScreen';
import SidebarLayout from '../SideBarLayout/sidebar-layout';
import { SpinnerScreen } from '../Loading/SpinnerScreen';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { BlankSpinner } from '../Loading/BlankSpinner';
import { Badge } from '@/components/ui/badge';
import { ModeToggle } from '@/components/ui/ModeToggle';

const ContentCard = ({ item }: { item: ContentItem }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge
            variant="default"
            className="text-blue-500 bg-blue-100 dark:text-blue-300 dark:bg-blue-900"
          >
            {item.category}
          </Badge>
          <span className="text-xs text-gray-500">{item.date}</span>
        </div>
        <CardTitle className="text-lg mb-2 text-gray-900 dark:text-gray-100">
          {item.title}
        </CardTitle>
        <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
          {item.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-1">
          {item.tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-gray-500 dark:text-gray-400"
            >
              #{tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const CardList = ({
  itemsPromise,
}: {
  itemsPromise: Promise<ContentItem[]>;
}) => {
  const items = use(itemsPromise);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {items.map((item) => (
        <ContentCard key={item.id} item={item} />
      ))}
    </div>
  );
};

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
    <SidebarLayout>
      <Suspense fallback={fallback}>
        <main className="w-full p-6 relative">
          <SidebarTrigger className="m-3 absolute top-0 left-0 md:hidden" />
          <div className="m-3 absolute top-0 right-0">
            <ModeToggle />
          </div>
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Sorry for the wait!
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              This is a sample page. How long did you feel like you were
              waiting?
            </p>
          </div>

          <CardList itemsPromise={itemsPromise} />
        </main>
      </Suspense>
    </SidebarLayout>
  );
};
