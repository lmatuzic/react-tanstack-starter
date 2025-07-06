import { Link } from '@tanstack/react-router';

import { type LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';

export interface SidebarNavItemProp {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  className?: string;
}

export function SidebarNavItem(props: SidebarNavItemProp) {
  const { isActive, url, title, icon: Icon, className } = props;

  return (
    <SidebarMenuItem className={cn('', className)}>
      <Link to={url}>
        <SidebarMenuButton
          tooltip={title}
          isActive={isActive}
          className="cursor-pointer [&.active]:font-bold"
        >
          {Icon && <Icon className={cn(isActive ? 'text-blue' : '')} />}
          <span>{title}</span>
        </SidebarMenuButton>
      </Link>
    </SidebarMenuItem>
  );
}
