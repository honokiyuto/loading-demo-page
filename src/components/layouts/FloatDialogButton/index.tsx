import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import type { ElementType } from 'react';

type FloatDialogButtonProps = {
  icon: ElementType;
  title?: string;
  buttonLabel?: string;
  children: any;
};

export const FloatDialogButton = ({
  icon: Icon,
  buttonLabel,
  title,
  children,
}: FloatDialogButtonProps) => {
  return (
    <Dialog>
      <DialogTrigger className="fixed bottom-4 right-4 border-1 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-full p-3 shadow-md transition-all duration-300 ease-in-out hover:px-6 group overflow-hidden">
        <div className="flex items-center gap-2">
          <Icon className="flex-shrink-0" size={20} />
          {buttonLabel && (
            <span className="hidden group-hover:block whitespace-nowrap text-sm font-medium">
              {buttonLabel}
            </span>
          )}
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          {title && <DialogTitle>{title}</DialogTitle>}
          <DialogDescription>{children}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
