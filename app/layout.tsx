'use client';

import React from 'react'
import './global.css'
import Header from '@/src/components/layout/header';
import { ThemeProvider } from 'next-themes';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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