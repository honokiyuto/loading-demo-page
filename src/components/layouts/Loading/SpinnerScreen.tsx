import { Loader2 } from 'lucide-react';

export const SpinnerScreen = () => {
  return (
    <div className="w-full h-full bg-black/30 z-100 flex items-center justify-center">
      <Loader2 className="h-15 w-15 animate-spin text-white" />
    </div>
  );
};
