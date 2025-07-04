import { useTranslation } from 'react-i18next';

import { LoaderCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingOverlayProps {
  isLoading: boolean;
  text?: string;
  className?: string;
}

export function LoadingOverlay({
  isLoading,
  text,
  className,
}: LoadingOverlayProps) {
  const { t } = useTranslation();

  if (!isLoading) {
    return null;
  }

  const loadingText = text || t('common.loading');

  return (
    <div
      className={cn(
        'bg-background/50 fixed inset-0 z-999 flex flex-col items-center justify-center backdrop-blur-sm',
        className,
      )}
    >
      <div className="flex flex-col items-center space-y-4 text-center">
        <LoaderCircle className="text-primary h-10 w-10 animate-spin" />
        <div className="text-foreground text-lg font-medium">{loadingText}</div>
      </div>
    </div>
  );
}
