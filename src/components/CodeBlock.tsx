import { ReactNode } from 'react';

interface CodeBlockProps {
  children: ReactNode;
  language?: string;
  title?: string;
}

export function CodeBlock({ children, language = 'java', title }: CodeBlockProps) {
  return (
    <div className="my-4">
      {title && (
        <div className="bg-slate-700 text-slate-200 px-4 py-2 text-sm rounded-t-lg border-b border-slate-600">
          {title}
        </div>
      )}
      <pre className={`bg-slate-800 text-slate-100 p-4 overflow-x-auto ${title ? 'rounded-b-lg' : 'rounded-lg'}`}>
        <code className="text-sm">
          {children}
        </code>
      </pre>
    </div>
  );
}
