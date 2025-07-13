import { SidebarProvider, useSidebar } from '@/components/ui/sidebar';
import { AppSidebar } from './app-sidebar';

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      {children}
    </SidebarProvider>
  );
}
