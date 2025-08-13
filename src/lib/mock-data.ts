import { contentItems, DEFAULT_INTERVAL_TIME_MS } from './constants';

/**
 * ローカルストレージにフェッチ時間を保存する
 * @param interval フェッチ時間
 */
export const setIntervalToLocalStorage = (interval: number) => {
  localStorage.setItem('interval', interval.toString());
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
 * モックデータを取得する
 * @returns モックデータ
 */
export const getContentItems = async () => {
  await new Promise((resolve) =>
    setTimeout(resolve, getIntervalFromLocalStorage())
  );
  return contentItems;
};
