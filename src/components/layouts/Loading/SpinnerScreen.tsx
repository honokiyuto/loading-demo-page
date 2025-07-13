import { Loader2 } from 'lucide-react';

export const SpinnerScreen = () => {
  return (
    <main className="w-full bg-black/30 z-50 flex items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
    </main>
  );
};
