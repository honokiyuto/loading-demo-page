import { Loader2 } from 'lucide-react';

export const SpinnerScreen = () => {
  return (
    <main className="w-full bg-black/30 z-50 flex items-center justify-center">
      <Loader2 className="h-15 w-15 animate-spin text-white" />
    </main>
  );
};
