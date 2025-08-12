import { FlaskConical } from 'lucide-react';

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
import { home, loadingUIComparison, antiPatterns } from '@/lib/constants';

type AppSidebarProps = {
  /** ex) `loading-demo-page/hoge-hoge` */
  currentPathname: string;
};

export const AppSidebar = ({ currentPathname }: AppSidebarProps) => {
  const basePath = import.meta.env.BASE_URL;
  return (
    <Sidebar>
      <SidebarHeader>
        <a
          href={`${basePath}${home.url}`}
          className="flex flex-row items-center gap-2 m-3"
        >
          <FlaskConical />
          <h1 className="text-lg font-bold">Loading Demo</h1>
        </a>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Home</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={currentPathname === `${basePath}`}
                >
                  <a href={`${basePath}${home.url}`}>
                    <home.icon />
                    <span>{home.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Loading UI Comparison</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {loadingUIComparison.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={currentPathname === `${basePath}${item.url}/`}
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
              {antiPatterns.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={currentPathname === `${basePath}${item.url}/`}
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
};
