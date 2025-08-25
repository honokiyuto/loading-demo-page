import { BlankSpinnerScreen } from '@/components/layouts/Loading/BlankSpinnerScreen';
import { BlankSkeletonScreen } from '@/components/layouts/Loading/BlankSkeletonScreen';
import { ProgressBarScreen } from '@/components/layouts/Loading/ProgressBarScreen';
import {
  ShimmerSkeleton,
  SkeletonScreen,
  StaticSkeleton,
} from '@/components/layouts/Loading/SkeletonScreen';
import { Skeleton as PulseSkeleton } from '@/components/ui/skeleton';
import { SpinnerScreen } from '@/components/layouts/Loading/SpinnerScreen';
import { UnusualSpinner } from '@/components/layouts/Loading/UnusualSpinner';
import {
  Blend,
  ChartBarBig,
  Download,
  FileVideo,
  Home,
  LayoutDashboard,
  LoaderCircle,
  Monitor,
  Settings,
  SquareDashed,
} from 'lucide-react';
import { BlankProgressBarScreen } from '@/components/layouts/Loading/BlankProgressBarScreen';
import { BlankUnusualSpinnerScreen } from '@/components/layouts/Loading/BlankUnusualSpinnerScreen';

/**
 * メニューの型定義
 */
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
    title: 'Skeleton Only',
    url: '/skeleton-only',
    icon: LayoutDashboard,
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
    title: 'Progress Bar Only',
    url: '/progress-bar-only',
    icon: ChartBarBig,
  },
  {
    title: 'Unusual Spinner Only',
    url: '/unusual-spinner-only',
    icon: LoaderCircle,
  },
  {
    title: 'Blank -> Spinner',
    url: '/blank-spinner',
    icon: Blend,
  },
  {
    title: 'Blank -> Skeleton',
    url: '/blank-skeleton',
    icon: Blend,
  },
  {
    title: 'Blank -> Progress Bar',
    url: '/blank-progress-bar',
    icon: Blend,
  },
  {
    title: 'Blank -> Unusual Spinner',
    url: '/blank-unusual-spinner',
    icon: Blend,
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
  {
    title: 'Downloading',
    url: '/downloading',
    icon: Download,
  },
] as const satisfies MenuItem[];

/**
 * ページのURLの型定義
 */
export type Urls =
  | (typeof loadingUIComparison)[number]['url']
  | (typeof antiPatterns)[number]['url']
  | (typeof home)['url'];

/**
 * ページのURLとタイトルのマッピング
 */
export const urlToTitleDict = {
  [home.url]: home.title,
  ...Object.fromEntries(
    loadingUIComparison.map((item) => [item.url, item.title])
  ),
  ...Object.fromEntries(antiPatterns.map((item) => [item.url, item.title])),
} as Record<Urls, string>;

/**
 * ページのURLとコンポーネントのマッピング
 */
export const fallBackDict = {
  '/spinner-only': SpinnerScreen,
  '/skeleton-only': SkeletonScreen,
  '/progress-bar-only': ProgressBarScreen,
  '/unusual-spinner-only': UnusualSpinner,
  '/blank-only': null,
  '/blank-spinner': BlankSpinnerScreen,
  '/blank-skeleton': BlankSkeletonScreen,
  '/blank-progress-bar': BlankProgressBarScreen,
  '/blank-unusual-spinner': BlankUnusualSpinnerScreen,
  '/movie-loading': null,
  '/full-screen-loading': null,
  '/': null,
  '/downloading': null,
} as const satisfies Record<Urls, React.ElementType | null>;

/**
 * モックデータの型定義
 */
export type ContentItem = {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  tags: string[];
  url: string;
};

/**
 * モックデータ
 */
export const contentItems: ContentItem[] = [
  {
    id: 1,
    title: loadingUIComparison[0].title,
    description:
      'Skeleton Screen is a loading UI that shows a skeleton of the content while the content is loading. The skeleton is a placeholder for the content.',
    category: 'Loading UI',
    date: '2025-09-06',
    tags: ['Skeleton', 'Loading', 'UX'],
    url: loadingUIComparison[0].url,
  },
  {
    id: 2,
    title: loadingUIComparison[1].title,
    description:
      'Spinner is a loading UI that shows a spinner while the content is loading. The spinner is a circle that rotates.',
    category: 'Loading UI',
    date: '2025-09-06',
    tags: ['Spinner', 'Loading', 'UX'],
    url: loadingUIComparison[1].url,
  },
  {
    id: 3,
    title: loadingUIComparison[2].title,
    description:
      'Blank Screen is a loading UI that shows a blank screen while the content is loading. The blank screen is not any content, just a blank screen.',
    category: 'Loading UI',
    date: '2025-09-06',
    tags: ['Blank', 'Loading', 'UX'],
    url: loadingUIComparison[2].url,
  },
  {
    id: 4,
    title: loadingUIComparison[3].title,
    description:
      'Progress Bar is a loading UI that shows a progress bar while the content is loading. The progress bar is 100% when the content is loaded.',
    category: 'Loading UI',
    date: '2025-09-06',
    tags: ['Progress Bar', 'Loading', 'UX'],
    url: loadingUIComparison[3].url,
  },
  {
    id: 5,
    title: loadingUIComparison[4].title,
    description:
      'Blank and Spinner is a loading UI that shows a blank screen and a spinner while the content is loading. The ratio of blank and spinner is 1:1.',
    category: 'Loading UI',
    date: '2025-09-06',
    tags: ['Blank', 'Spinner', 'Loading', 'UX'],
    url: loadingUIComparison[4].url,
  },
  {
    id: 6,
    title: loadingUIComparison[5].title,
    description:
      'Blank and Skeleton is a loading UI that shows a blank screen and a skeleton while the content is loading. The ratio of blank and skeleton is 1:1.',
    category: 'Loading UI',
    date: '2025-09-06',
    tags: ['Blank', 'Skeleton', 'Loading', 'UX'],
    url: loadingUIComparison[5].url,
  },
  {
    id: 7,
    title: loadingUIComparison[6].title,
    description:
      'Unusual Spinner is a loading UI that shows a spinner that is not a general spinner. The spinner looks like a worm that is moving.',
    category: 'Loading UI',
    date: '2025-09-06',
    tags: ['Unusual Spinner', 'Loading', 'UX'],
    url: loadingUIComparison[6].url,
  },
  {
    id: 8,
    title: antiPatterns[0].title,
    description:
      'When movie player is loading, it shows a loading animation. What can be a better UX?',
    category: 'Anti Patterns',
    date: '2025-09-06',
    tags: ['Movie', 'Loading', 'UX'],
    url: antiPatterns[0].url,
  },
  {
    id: 9,
    title: antiPatterns[1].title,
    description:
      'When first loading the page, it shows a full screen loading. What can be a better UX?',
    category: 'Anti Patterns',
    date: '2025-09-06',
    tags: ['Full Screen', 'Loading', 'UX'],
    url: antiPatterns[1].url,
  },
  {
    id: 10,
    title: antiPatterns[2].title,
    description:
      'When downloading a file, it shows a loading animation. What can be a better UX?',
    category: 'Anti Patterns',
    date: '2025-09-06',
    tags: ['Download', 'Loading', 'UX'],
    url: antiPatterns[2].url,
  },
];

/**
 * モックデータのデフォルトのフェッチ時間
 */
export const DEFAULT_INTERVAL_TIME_MS = 3000;

/**
 * スケルトンパターンの型定義
 */
export type SkeletonPattern = 'static' | 'shimmer' | 'pulse';

/**
 * スケルトンパターンのデフォルト値
 */
export const skeletonPattern = {
  static: 'static',
  shimmer: 'shimmer',
  pulse: 'pulse',
} as const satisfies Record<SkeletonPattern, SkeletonPattern>;

/**
 * スケルトンとコンポーネントのマッピング
 */
export const skeletonPatternToComponent = {
  static: StaticSkeleton,
  shimmer: ShimmerSkeleton,
  pulse: PulseSkeleton,
} as const satisfies Record<SkeletonPattern, React.ElementType>;

/**
 * デフォルトのスケルトンパターン
 */
export const DEFAULT_SKELETON_PATTERN = skeletonPattern.shimmer;
