import { SunMoon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const handleToggleTheme = (theme: 'light' | 'dark') => {
    if (theme === 'light') {
      setTheme('dark');
      return;
    }

    setTheme('light');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => handleToggleTheme(theme)}
    >
      <SunMoon />
    </Button>
  );
}
