import { ThemeToggle } from './ThemeToggle';
import { ContainerToggle } from './ContainerToggle';
import { SidebarTrigger } from './ui/sidebar';
import { NavBreadcrumbs } from './NavBreadcrumbs';
import { Separator } from './ui/separator';

export default function TopNavigation() {
  return (
    <nav className="mb-4 flex items-center justify-between gap-2 text-foreground">
      <div className="flex w-full flex-row items-center gap-2 font-semibold">
        <SidebarTrigger />

        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />

        <NavBreadcrumbs />
      </div>

      <div className="flex flex-row items-center gap-1">
        <ContainerToggle />
        <ThemeToggle />
      </div>
    </nav>
  );
}
