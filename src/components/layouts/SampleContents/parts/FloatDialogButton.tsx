import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { SettingForm } from '@/components/layouts/SettingForm';
import { Timer } from 'lucide-react';

export const FloatDialogButton = () => {
  return (
    <Dialog>
      <DialogTrigger className="fixed bottom-4 right-4 border-1 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-full p-3 shadow-md transition-all duration-300 ease-in-out hover:px-6 group overflow-hidden">
        <div className="flex items-center gap-2">
          <Timer className="flex-shrink-0" size={20} />
          <span className="hidden group-hover:block whitespace-nowrap text-sm font-medium">
            Set Loading Duration
          </span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Loading Duration (ms)</DialogTitle>
          <DialogDescription>
            <SettingForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
