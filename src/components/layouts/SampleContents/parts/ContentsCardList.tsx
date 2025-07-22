import { use } from 'react';
import { ContentCard } from './ContentCard';
import type { ContentItem } from '@/lib/mock-data';

type ContentCardListProps = {
  itemsPromise: Promise<ContentItem[]>;
};

export const ContentCardList = ({ itemsPromise }: ContentCardListProps) => {
  const items = use(itemsPromise);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {items.map((item) => (
        <ContentCard key={item.id} item={item} />
      ))}
    </div>
  );
};
