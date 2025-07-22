import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from './app-sidebar';
import { ModeToggle } from '@/components/ui/ModeToggle';

export default function SidebarLayoutMain({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full relative p-6">
        {children}
        <SidebarTrigger className="m-3 absolute top-0 left-0 md:hidden" />
        <div className="m-3 absolute top-0 right-0">
          <ModeToggle />
        </div>
      </main>
    </SidebarProvider>
  );
}
