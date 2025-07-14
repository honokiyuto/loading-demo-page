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
    title: '秒数設定',
    url: '/settings',
    icon: Settings,
  },
  {
    title: 'スケルトンのみ',
    url: '/skeleton',
    icon: Grid2x2,
  },
  {
    title: 'スピナーのみ',
    url: '/spinner',
    icon: LoaderCircle,
  },
  {
    title: 'ブランクのみ',
    url: '/blank',
    icon: SquareDashed,
  },
  {
    title: 'ブランク→スピナー',
    url: '/blank-spinner',
    icon: SquaresUnite,
  },
];

const antDesign = [
  {
    title: '動画ローディング',
    url: '/movie',
    icon: FileVideo,
  },
  {
    title: '画面全体ローディング',
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
          <h1 className="text-lg font-bold">スケルトンDemo</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>ローディングUI比較</SidebarGroupLabel>
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
          <SidebarGroupLabel>アンチパターン</SidebarGroupLabel>
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
