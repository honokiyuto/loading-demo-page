import React from 'react';
import { skeletonPatternToComponent } from '@/lib/constants';

const SkeletonComparison = () => {
  const skeletonPatterns = Object.keys(skeletonPatternToComponent);

  return (
    <div className="p-8 font-sans bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Skeleton Screen UI Comparison</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skeletonPatterns.map((pattern) => {
          const SkeletonComponent = skeletonPatternToComponent[pattern];
          return (
            <div key={pattern} className="p-4 border rounded-lg bg-white shadow text-center">
              <h2 className="text-xl font-semibold capitalize mb-4">{pattern}</h2>
              <div className="flex justify-center items-center h-32">
                <SkeletonComponent />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkeletonComparison;
