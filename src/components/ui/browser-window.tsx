import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

type BrowserWindowProps = {
  children: ReactNode;
};

export const BrowserWindow = ({ children }: BrowserWindowProps) => {
  return (
    <div className="flex flex-col">
      {/* ブラウザのタブバー */}
      <div className="w-full h-8 bg-gray-100 border-x-1 border-t-1 border-gray-300 dark:bg-gray-900 dark:border-gray-800 flex items-center px-3">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500"></div>
        </div>
      </div>
      {/* アドレスバー */}
      <div className="w-full h-10 bg-white border-x-1 border-gray-300 dark:bg-gray-900 dark:border-gray-800 flex items-center px-3 gap-2">
        <ArrowLeft className="text-gray-400 h-5 w-5" />
        <ArrowRight className="text-gray-400 h-5 w-5" />
        <div className="w-full max-w-xl bg-gray-100 h-6 rounded flex items-center px-3 gap-2 dark:bg-gray-800">
          <span className="text-xs text-gray-400">https://</span>
        </div>
      </div>
      {/* コンテンツエリア */}
      <div className="flex-1 bg-white border-x-1 border-b-1 border-gray-300 dark:bg-gray-900 dark:border-gray-800 aspect-3/2 pt-6 px-6 overflow-hidden">
        {children}
      </div>
    </div>
  );
};
