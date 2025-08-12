import { BlankSpinnerScreen } from '@/components/layouts/Loading/BlankSpinnerScreen';
import { ProgressBarScreen } from '@/components/layouts/Loading/ProgressBarScreen';
import { SkeletonScreen } from '@/components/layouts/Loading/SkeletonScreen';
import { SpinnerScreen } from '@/components/layouts/Loading/SpinnerScreen';
import { UnusualSpinner } from '@/components/layouts/Loading/UnusualSpinner';
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
import type { ReactNode } from 'react';

type MenuItem = {
  title: string;
  url: `/${string}`;
  icon: React.ElementType;
};

/**
 * Home
 */
export const home = {
  title: 'Home',
  url: '/',
  icon: Home,
} as const satisfies MenuItem;

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
  {
    title: 'Unusual Spinner',
    url: '/unusual-spinner',
    icon: LoaderCircle,
  },
] as const satisfies MenuItem[];

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
] as const satisfies MenuItem[];

export type Urls =
  | (typeof loadingUIComparison)[number]['url']
  | (typeof antiPatterns)[number]['url']
  | (typeof home)['url'];

export const urlToTitleDict = {
  [home.url]: home.title,
  ...Object.fromEntries(
    loadingUIComparison.map((item) => [item.url, item.title])
  ),
  ...Object.fromEntries(antiPatterns.map((item) => [item.url, item.title])),
} as Record<Urls, string>;

export const fallBackDict = {
  '/spinner-only': SpinnerScreen,
  '/skeleton-only': SkeletonScreen,
  '/blank-only': null,
  '/blank-spinner': BlankSpinnerScreen,
  '/progress-bar': ProgressBarScreen,
  '/unusual-spinner': UnusualSpinner,
  '/movie-loading': null,
  '/full-screen-loading': null,
  '/settings': null,
  '/': null,
} as const satisfies Record<Urls, React.ElementType | null>;
