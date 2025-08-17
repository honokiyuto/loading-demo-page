import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from './app-sidebar';
import { ModeToggle } from '@/components/ui/ModeToggle';

type SidebarLayoutMainProps = {
  children: React.ReactNode;
  /** ex) loading-demo-page/hoge-hoge */
  currentPathname: string;
};

export const SidebarLayoutMain = ({
  children,
  currentPathname,
}: SidebarLayoutMainProps) => {
  return (
    <SidebarProvider>
      <AppSidebar currentPathname={currentPathname} />
      <main className="w-full relative p-6">
        {children}
        <div className="m-3 absolute top-0 left-0 z-10">
          <SidebarTrigger />
        </div>
        <div className="m-3 absolute top-0 right-0 z-10">
          <ModeToggle />
        </div>
      </main>
    </SidebarProvider>
  );
};
