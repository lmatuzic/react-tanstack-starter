import {
  BarChart3,
  Building,
  House,
  Users,
  Map as MapIcon,
} from 'lucide-react';

export const sidebarItems = [
  {
    title: 'Home',
    url: '/',
    icon: House,
  },
  {
    title: 'Page 1',
    icon: BarChart3,
    items: [
      {
        title: 'Subpage 1',
        url: '/subpage-1',
        icon: MapIcon,
      },
      {
        title: 'Subpage 2',
        url: '/subpage-2',
        icon: Building,
        items: [
          {
            title: 'Sub-subpage 1',
            url: '/subpage-2/sub-subpage-1',
            icon: MapIcon,
          },
          {
            title: 'Sub-subpage 2',
            url: '/subpage-2/sub-subpage-2',
            icon: Building,
          },
        ],
      },
    ],
  },
  {
    title: 'Users',
    url: '/users',
    icon: Users,
  },
];
