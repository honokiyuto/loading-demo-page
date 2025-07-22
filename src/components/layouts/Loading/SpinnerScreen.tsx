import { Loader2 } from 'lucide-react';

export const SpinnerScreen = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Loader2 className="h-15 w-15 animate-spin text-black dark:text-white" />
    </div>
  );
};
