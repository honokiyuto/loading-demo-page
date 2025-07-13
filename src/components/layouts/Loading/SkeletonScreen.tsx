import { Skeleton } from '@/components/ui/skeleton';

export const SkeletonScreen = () => {
  return (
    <main className="w-full p-6">
      <div className="mb-8 flex flex-col items-center justify-center gap-2">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-4 w-100" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} className="w-full h-50" />
        ))}
      </div>
    </main>
  );
};
