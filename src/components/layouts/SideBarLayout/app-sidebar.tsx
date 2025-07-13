import {
  Calendar,
  Grid2x2,
  Home,
  Inbox,
  LoaderCircle,
  Search,
  Settings,
  SquareDashed,
  SquaresUnite,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

// Menu items.
const loadingCompare = [
  {
    title: 'settings',
    url: '/',
    icon: Settings,
  },
  {
    title: 'skeleton',
    url: '/skeleton',
    icon: Grid2x2,
  },
  {
    title: 'spinner',
    url: '/spinner',
    icon: LoaderCircle,
  },
  {
    title: 'blank',
    url: '/blank',
    icon: SquareDashed,
  },
  {
    title: 'blank+spinner',
    url: '/blank-spinner',
    icon: SquaresUnite,
  },
];

const antDesign = [
  {
    title: 'movie',
    url: '/movie',
    icon: Inbox,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>ローディングUI比較</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {loadingCompare.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
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
          <SidebarGroupLabel>アンチパターン</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {antDesign.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
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
    </Sidebar>
  );
}
