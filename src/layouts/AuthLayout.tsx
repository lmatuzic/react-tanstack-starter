import { useEffect } from 'react';

import { Outlet, useNavigate } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

import { useAuthStore } from '@/features/auth/hooks/useAuthStore';
import { LoadingOverlay } from '@/components/common/LoadingOverlay';
import { cn } from '@/lib/utils';

export function AuthLayout() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuthStore();
  const { t } = useTranslation();

  useEffect(() => {
    if (isAuthenticated) {
      navigate({ to: '/' });
    }
  }, [isAuthenticated, navigate]);

  const { containerMode } = require('@/hooks/useTheme').useTheme();

  return (
    <main
      className={cn(
        `h-screen bg-muted ${
          containerMode === 'container' ? 'container' : 'w-full'
        }`,
      )}
    >
      <LoadingOverlay isLoading={isLoading} text={t('auth.loggingIn')} />
      <Outlet />
    </main>
  );
}
