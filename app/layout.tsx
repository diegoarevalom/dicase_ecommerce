'use client';

import React from 'react'
import './global.css'
import { ThemeProvider } from 'next-themes';
import { usePathname } from 'next/navigation';
import Header from '@/src/components/layout/header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();

  const hideHeader = pathname.startsWith('/auth') || pathname.startsWith('/legal');

  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme='system' enableSystem>
          {/* Renderizado del header */}
          <Header />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}