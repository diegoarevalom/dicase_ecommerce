"use client";

import React, { use } from 'react'
import './global.css'
import Header from '@/src/components/layout/header';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();

  const hideHeader = pathname.startsWith('/auth') || pathname.startsWith('/legal');

  return (
    <html lang="es">
      <body>
        {/* Renderizado del header */}
        {!hideHeader && <Header />}

        {children}
      </body>
    </html>
  );
}