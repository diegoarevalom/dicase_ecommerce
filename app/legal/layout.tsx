import React from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#DDD0C8] min-h-screen items-center justify-center">
      {children}
    </div>
  );
}
