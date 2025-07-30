import {
  ChartBarBig,
  FileVideo,
  Grid2x2,
  Home,
  LoaderCircle,
  Monitor,
  Settings,
  SquareDashed,
  SquaresUnite,
} from 'lucide-react';

/**
 * Home
 */
export const home = {
  title: 'Home',
  url: '/',
  icon: Home,
};

/**
 * Loading UI Comparison
 */
export const loadingUIComparison = [
  {
    title: 'Settings',
    url: '/settings',
    icon: Settings,
  },
  {
    title: 'Skeleton Only',
    url: '/skeleton-only',
    icon: Grid2x2,
  },
  {
    title: 'Spinner Only',
    url: '/spinner-only',
    icon: LoaderCircle,
  },
  {
    title: 'Blank Only',
    url: '/blank-only',
    icon: SquareDashed,
  },
  {
    title: 'Progress Bar',
    url: '/progress-bar',
    icon: ChartBarBig,
  },
  {
    title: 'Blank -> Spinner',
    url: '/blank-spinner',
    icon: SquaresUnite,
  },
];

/**
 * Anti Patterns
 */
export const antiPatterns = [
  {
    title: 'Movie Loading',
    url: '/movie-loading',
    icon: FileVideo,
  },
  {
    title: 'Full Screen Loading',
    url: '/full-screen-loading',
    icon: Monitor,
  },
];
