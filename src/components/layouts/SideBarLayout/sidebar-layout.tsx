import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from './app-sidebar';
import { ModeToggle } from '@/components/ui/ModeToggle';

type SidebarLayoutMainProps = {
  children: React.ReactNode;
  /** ex) loading-demo-page/hoge-hoge */
  pathname: string;
};

export const SidebarLayoutMain = ({
  children,
  pathname,
}: SidebarLayoutMainProps) => {
  return (
    <SidebarProvider>
      <AppSidebar pathname={pathname} />
      <main className="w-full relative p-6">
        {children}
        <div className="m-3 absolute top-0 left-0">
          <SidebarTrigger />
        </div>
        <div className="m-3 absolute top-0 right-0">
          <ModeToggle />
        </div>
      </main>
    </SidebarProvider>
  );
};
