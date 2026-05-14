import React from 'react';
import { skeletonPatternToComponent } from '@/lib/constants';

const SkeletonComparisonPage = () => {
  const skeletonPatterns = Object.keys(skeletonPatternToComponent);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Skeleton Screen UI Comparison</h1>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        {skeletonPatterns.map((pattern) => {
          const SkeletonComponent = skeletonPatternToComponent[pattern];
          return (
            <div key={pattern} style={{ textAlign: 'center' }}>
              <h2>{pattern.charAt(0).toUpperCase() + pattern.slice(1)}</h2>
              <SkeletonComponent />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkeletonComparisonPage;
