import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';
import { Maximize2, Minimize2 } from 'lucide-react';

export function ContainerToggle() {
  const { containerMode, setContainerMode } = useTheme();

  const handleToggle = () => {
    setContainerMode(containerMode === 'container' ? 'full' : 'container');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={
        containerMode === 'container'
          ? 'Switch to full width'
          : 'Switch to container width'
      }
      onClick={handleToggle}
      title={
        containerMode === 'container'
          ? 'Switch to full width'
          : 'Switch to container width'
      }
    >
      {containerMode === 'container' ? <Maximize2 /> : <Minimize2 />}
    </Button>
  );
}
