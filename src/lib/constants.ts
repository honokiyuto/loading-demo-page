import { BlankSpinnerScreen } from '@/components/layouts/Loading/BlankSpinnerScreen';
import { ProgressBarScreen } from '@/components/layouts/Loading/ProgressBarScreen';
import { SkeletonScreen } from '@/components/layouts/Loading/SkeletonScreen';
import { SpinnerScreen } from '@/components/layouts/Loading/SpinnerScreen';
import { UnusualSpinner } from '@/components/layouts/Loading/UnusualSpinner';
import {
  ChartBarBig,
  Download,
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
  '/blank-only': null,
  '/blank-spinner': BlankSpinnerScreen,
  '/progress-bar': ProgressBarScreen,
  '/unusual-spinner': UnusualSpinner,
  '/movie-loading': null,
  '/full-screen-loading': null,
  '/settings': null,
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
    title: loadingUIComparison[1].title,
    description:
      'Skeleton Screen is a loading UI that shows a skeleton of the content while the content is loading. The skeleton is a placeholder for the content.',
    category: 'Loading UI',
    date: '2025-09-06',
    tags: ['Skeleton', 'Loading', 'UX'],
    url: loadingUIComparison[1].url,
  },
  {
    id: 2,
    title: loadingUIComparison[2].title,
    description:
      'Spinner is a loading UI that shows a spinner while the content is loading. The spinner is a circle that rotates.',
    category: 'Loading UI',
    date: '2025-09-06',
    tags: ['Spinner', 'Loading', 'UX'],
    url: loadingUIComparison[2].url,
  },
  {
    id: 3,
    title: loadingUIComparison[3].title,
    description:
      'Blank Screen is a loading UI that shows a blank screen while the content is loading. The blank screen is not any content, just a blank screen.',
    category: 'Loading UI',
    date: '2025-09-06',
    tags: ['Blank', 'Loading', 'UX'],
    url: loadingUIComparison[3].url,
  },
  {
    id: 4,
    title: loadingUIComparison[4].title,
    description:
      'Progress Bar is a loading UI that shows a progress bar while the content is loading. The progress bar is 100% when the content is loaded.',
    category: 'Loading UI',
    date: '2025-09-06',
    tags: ['Progress Bar', 'Loading', 'UX'],
    url: loadingUIComparison[4].url,
  },
  {
    id: 5,
    title: loadingUIComparison[5].title,
    description:
      'Blank and Spinner is a loading UI that shows a blank screen and a spinner while the content is loading. The ratio of blank and spinner is 1:1.',
    category: 'Loading UI',
    date: '2025-09-06',
    tags: ['Blank', 'Spinner', 'Loading', 'UX'],
    url: loadingUIComparison[5].url,
  },
  {
    id: 6,
    title: loadingUIComparison[6].title,
    description:
      'Unusual Spinner is a loading UI that shows a spinner that is not a general spinner. The spinner looks like a worm that is moving.',
    category: 'Loading UI',
    date: '2025-09-06',
    tags: ['Unusual Spinner', 'Loading', 'UX'],
    url: loadingUIComparison[6].url,
  },
];

/**
 * モックデータのデフォルトのフェッチ時間
 */
export const DEFAULT_INTERVAL_TIME_MS = 3000;
