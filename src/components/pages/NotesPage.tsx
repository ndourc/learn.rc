import { Link } from 'react-router-dom';
import { PageLayout } from '../PageLayout';
import { BookOpen } from 'lucide-react';

export function NotesPage() {
  const topics = [
    {
      title: 'Object-Oriented Programming',
      description: 'Encapsulation, inheritance, polymorphism, abstraction, interfaces, and constructors.',
      link: '/notes/oop',
    },
    {
      title: 'Control Structures',
      description: 'Conditionals, loops, and program flow control.',
      link: '/notes/control-structures',
    },
    {
      title: 'Strings and Arrays',
      description: 'Working with text and collections of data.',
      link: '#strings-arrays',
      disabled: true,
    },
    {
      title: 'Recursion',
      description: 'Understanding recursive algorithms and problem-solving.',
      link: '#recursion',
      disabled: true,
    },
    {
      title: 'Variable Declaration and Types',
      description: 'Understanding data types, scope, and variable lifecycle.',
      link: '#variables',
      disabled: true,
    },
    {
      title: 'Programming Paradigms',
      description: 'Overview of different programming approaches.',
      link: '#paradigms',
      disabled: true,
    },
    {
      title: 'Types of Errors',
      description: 'Syntax errors, runtime errors, and logical errors.',
      link: '#errors',
      disabled: true,
    },
  ];

  return (
    <PageLayout
      title="Course Notes"
      subtitle="Comprehensive notes covering all PPL topics"
    >
      <div className="grid gap-4">
        {topics.map((topic) => (
          topic.disabled ? (
            <div
              key={topic.title}
              className="bg-white border border-slate-200 rounded-lg p-6 opacity-50"
            >
              <div className="flex items-start gap-4">
                <BookOpen className="w-6 h-6 text-slate-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-slate-900 mb-2">{topic.title}</h3>
                  <p className="text-slate-600 text-sm">{topic.description}</p>
                  <p className="text-slate-400 text-sm mt-2">Content coming soon</p>
                </div>
              </div>
            </div>
          ) : (
            <Link
              key={topic.title}
              to={topic.link}
              className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <BookOpen className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-slate-900 mb-2">{topic.title}</h3>
                  <p className="text-slate-600 text-sm">{topic.description}</p>
                </div>
              </div>
            </Link>
          )
        ))}
      </div>
    </PageLayout>
  );
}
