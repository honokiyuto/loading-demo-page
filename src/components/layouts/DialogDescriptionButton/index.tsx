import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Info } from 'lucide-react';

type DialogDescriptionButtonProps = {
  children: any;
};

export const DialogDescriptionButton = ({
  children,
}: DialogDescriptionButtonProps) => {
  return (
    <Dialog>
      <DialogTrigger className="fixed bottom-4 right-4 border-1 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-full p-3 shadow-md transition-all duration-300 ease-in-out hover:px-6 group overflow-hidden">
        <div className="flex items-center gap-2">
          <Info className="flex-shrink-0" size={20} />
          <span className="hidden group-hover:block whitespace-nowrap text-sm font-medium">
            Read Description
          </span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogDescription>{children}</DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
