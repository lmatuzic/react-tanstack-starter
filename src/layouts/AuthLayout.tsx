import { useEffect } from 'react';

import { Outlet, useNavigate } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

import { useAuthStore } from '@/features/auth/hooks/useAuthStore';
import { LoadingOverlay } from '@/components/common/LoadingOverlay';

export function AuthLayout() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuthStore();
  const { t } = useTranslation();

  useEffect(() => {
    if (isAuthenticated) {
      navigate({ to: '/' });
    }
  }, [isAuthenticated, navigate]);

  return (
    <main className="bg-muted h-screen">
      <LoadingOverlay isLoading={isLoading} text={t('auth.loggingIn')} />
      <Outlet />
    </main>
  );
}
