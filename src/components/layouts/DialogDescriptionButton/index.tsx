import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Info } from 'lucide-react';
import { FloatDialogButton } from '../FloatDialogButton';

type DialogDescriptionButtonProps = {
  children: any;
};

export const DialogDescriptionButton = ({
  children,
}: DialogDescriptionButtonProps) => {
  return (
    <FloatDialogButton icon={Info} buttonLabel="Read Description">
      {children}
    </FloatDialogButton>
  );
};
