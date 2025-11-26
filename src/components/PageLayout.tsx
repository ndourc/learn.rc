import { ReactNode } from 'react';

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function PageLayout({ title, subtitle, children }: PageLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12">
        <h1 className="text-slate-900 mb-2">{title}</h1>
        {subtitle && <p className="text-slate-600">{subtitle}</p>}
      </header>
      <main>{children}</main>
    </div>
  );
}
