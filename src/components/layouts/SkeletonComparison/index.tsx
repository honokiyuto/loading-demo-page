import { skeletonPatternToComponent } from "@/lib/constants";

export const SkeletonComparison = () => {
  const skeletonPatterns = Object.keys(skeletonPatternToComponent);

  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">
        Skeleton Screen UI Comparison
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skeletonPatterns.map((pattern) => {
          const SkeletonComponent = skeletonPatternToComponent[pattern];
          return (
            <div key={pattern} className="p-4 border rounded-lg text-center">
              <h2 className="text-xl font-semibold capitalize mb-4">
                {pattern}
              </h2>
              <SkeletonComponent className="rounded-lg h-32" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
