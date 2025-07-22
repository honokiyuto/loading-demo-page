import type { CSSProperties } from 'react';

export const Skeleton = ({ className }: { className: string }) => {
  const shimmerStyle: CSSProperties = {
    background:
      'linear-gradient(110deg, #eeeeee 10%, #ffffff 20%, #eeeeee 30%)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 2s linear infinite',
  };

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
      <div
        className={`${className} opacity-50 dark:opacity-20`}
        style={shimmerStyle}
      />
    </>
  );
};

export const SkeletonScreen = () => {
  return (
    <div className="w-full p-6">
      <div className="mb-8 flex flex-col items-center justify-center gap-2">
        <Skeleton className="rounded-2xl h-8 w-1/2" />
        <Skeleton className="rounded-2xl h-4 w-3/4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} className="rounded-2xl w-full h-60" />
        ))}
      </div>
    </div>
  );
};
