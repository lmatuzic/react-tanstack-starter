import type { ComponentProps } from 'react';

import { useLocation } from '@tanstack/react-router';

import { ChevronRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import { SidebarNavItem } from './SidebarNavItem';
import { sidebarItems } from './constants';
import {
  useSidebar,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarFooter,
  SidebarRail,
} from '@/components/ui/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { NavUser } from '@/components/NavUser';

interface AppSidebarProps extends ComponentProps<typeof Sidebar> {
  containerMode?: 'container' | 'full';
}

export function AppSidebar({ containerMode, ...props }: AppSidebarProps) {
  const location = useLocation();
  const { state } = useSidebar();

  const isSidebarCollapsed = state === 'collapsed';

  const data = {
    user: {
      name: 'shadcn',
      email: 'm@example.com',
      avatar: '/avatars/shadcn.jpg',
    },
  };

  return (
    <Sidebar collapsible="icon" {...props} containerMode={containerMode}>
      {isSidebarCollapsed ? null : (
        <SidebarHeader className="flex flex-row items-center justify-between">
          <a href="/" className="ml-2">
            Logo
          </a>
        </SidebarHeader>
      )}

      <SidebarContent>
        <ul>
          {sidebarItems.map((item) => {
            if (!item.items) {
              return (
                <SidebarNavItem
                  key={item.url}
                  {...item}
                  isActive={location.pathname === item.url}
                  className="my-1"
                />
              );
            }

            return (
              <Collapsible
                key={item.title}
                title={item.title}
                className="group/collapsible"
              >
                <SidebarGroup className="p-0">
                  <SidebarGroupLabel
                    asChild
                    className={cn(
                      'group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                      isSidebarCollapsed &&
                        '!mt-0 !overflow-visible !opacity-100',
                    )}
                  >
                    <CollapsibleTrigger className="flex items-center">
                      {
                        <item.icon
                          className={cn(isSidebarCollapsed ? 'mr-0' : 'mr-2')}
                        />
                      }

                      <span
                        className={cn(isSidebarCollapsed ? 'hidden' : 'inline')}
                      >
                        {item.title}
                      </span>

                      <ChevronRight
                        className={cn(
                          'transition-transform',
                          isSidebarCollapsed ? 'hidden' : 'ml-auto',
                          'group-data-[state=open]/collapsible:rotate-90',
                        )}
                      />
                    </CollapsibleTrigger>
                  </SidebarGroupLabel>

                  <CollapsibleContent
                    className={cn(
                      isSidebarCollapsed ? 'mt-1 ml-0' : 'mt-1 ml-4',
                    )}
                  >
                    <SidebarGroupContent
                      className={cn(isSidebarCollapsed ? '' : 'border-l pl-2')}
                    >
                      <SidebarMenu>
                        {item.items.map((item) => (
                          <SidebarNavItem
                            key={item.url}
                            title={item.title}
                            url={item.url}
                            icon={item.icon}
                            isActive={location.pathname === item.url}
                          />
                        ))}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </CollapsibleContent>
                </SidebarGroup>
              </Collapsible>
            );
          })}
        </ul>
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
