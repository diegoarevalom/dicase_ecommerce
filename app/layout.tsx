import React from 'react'
import './global.css'
import Header from '@/src/components/layout/header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {/* Renderizado del header */}
        <Header />

        {children}
      </body>
    </html>
  );
}