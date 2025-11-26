import { ReactNode } from 'react';

interface ContentSectionProps {
  title: string;
  children: ReactNode;
  id?: string;
}

export function ContentSection({ title, children, id }: ContentSectionProps) {
  return (
    <section id={id} className="mb-12">
      <h2 className="text-slate-900 mb-4 pb-2 border-b border-slate-200">{title}</h2>
      <div className="space-y-4 text-slate-700">
        {children}
      </div>
    </section>
  );
}
