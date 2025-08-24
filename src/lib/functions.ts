import {
  contentItems,
  DEFAULT_INTERVAL_TIME_MS,
  DEFAULT_SKELETON_PATTERN,
  skeletonPattern,
  type SkeletonPattern,
} from './constants';

/**
 * ローカルストレージにフェッチ時間を保存する
 * @param interval フェッチ時間
 */
export const setIntervalToLocalStorage = (interval: number) => {
  localStorage.setItem('interval', interval.toString());
};

/**
 * ローカルストレージにスケルトンパターンを保存する
 * @param pattern スケルトンパターン
 */
export const setSkeletonPatternToLocalStorage = (pattern: SkeletonPattern) => {
  localStorage.setItem('skeletonPattern', pattern);
};

/**
 * ローカルストレージからフェッチ時間を取得する
 * @returns フェッチ時間
 */
export const getIntervalFromLocalStorage = () => {
  const interval = localStorage.getItem('interval');
  if (!interval) {
    return DEFAULT_INTERVAL_TIME_MS;
  }
  const intInterval = parseInt(interval);
  if (!intInterval) {
    return DEFAULT_INTERVAL_TIME_MS;
  }
  return intInterval;
};

/**
 * ローカルストレージからスケルトンパターンを取得する
 * @returns スケルトンパターン
 */
export const getSkeletonPatternFromLocalStorage = () => {
  const pattern = localStorage.getItem('skeletonPattern');
  if (!pattern) {
    return DEFAULT_SKELETON_PATTERN;
  }
  if (!Object.values(skeletonPattern).includes(pattern as SkeletonPattern)) {
    return DEFAULT_SKELETON_PATTERN;
  }
  return pattern as SkeletonPattern;
};

/**
 * モックデータを取得する
 * @returns モックデータ
 */
export const getContentItems = async () => {
  await new Promise((resolve) =>
    setTimeout(resolve, getIntervalFromLocalStorage())
  );
  return contentItems;
};