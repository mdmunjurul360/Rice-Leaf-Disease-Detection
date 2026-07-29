import React from 'react';

type MainLayoutProps = {
  children: React.ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return <div className="min-h-screen bg-white text-slate-900 flex flex-col">{children}</div>;
}
