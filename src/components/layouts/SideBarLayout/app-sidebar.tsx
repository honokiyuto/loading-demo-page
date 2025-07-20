import {
  FileVideo,
  FlaskConical,
  Grid2x2,
  LoaderCircle,
  Monitor,
  Settings,
  SquareDashed,
  SquaresUnite,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

// Menu items.
const loadingCompare = [
  {
    title: 'Settings',
    url: '/settings',
    icon: Settings,
  },
  {
    title: 'Skeleton Only',
    url: '/skeleton',
    icon: Grid2x2,
  },
  {
    title: 'Spinner Only',
    url: '/spinner',
    icon: LoaderCircle,
  },
  {
    title: 'Blank Only',
    url: '/blank',
    icon: SquareDashed,
  },
  {
    title: 'Blank -> Spinner',
    url: '/blank-spinner',
    icon: SquaresUnite,
  },
];

const antDesign = [
  {
    title: 'Movie Loading',
    url: '/movie',
    icon: FileVideo,
  },
  {
    title: 'Full Screen Loading',
    url: '/full-screen',
    icon: Monitor,
  },
];

export function AppSidebar() {
  const basePath = import.meta.env.BASE_URL;
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex flex-row items-center gap-2 m-3">
          <FlaskConical />
          <h1 className="text-lg font-bold">Loading Demo</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Loading UI Comparison</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {loadingCompare.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={window.location.pathname === item.url}
                  >
                    <a href={`${basePath}${item.url}`}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Anti Patterns</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {antDesign.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={window.location.pathname === item.url}
                  >
                    <a href={`${basePath}${item.url}`}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <p className="text-sm text-gray-500 m-3">© 2025 honokiyuto</p>
      </SidebarFooter>
    </Sidebar>
  );
}
