"use client";

import type { ThemeProviderProps } from "next-themes";
import { AuthProvider } from '@/features/auth/ui/AuthProvider';
import { ToastProvider } from '@heroui/react';
import { HeroUIProvider } from '@heroui/system';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useRouter } from 'next/navigation';
import { PrimeReactProvider } from 'primereact/api';
import * as React from 'react';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        <PrimeReactProvider>
          <AuthProvider>
            <ToastProvider placement="top-right" />
            {children}
          </AuthProvider>
        </PrimeReactProvider>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
