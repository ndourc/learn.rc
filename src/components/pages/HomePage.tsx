import { Link } from 'react-router-dom';
import { BookOpen, Code, Map, FileText, Folder } from 'lucide-react';

export function HomePage() {
  const sections = [
    {
      title: 'Notes',
      description: 'Comprehensive notes covering OOP, control structures, recursion, and more.',
      icon: FileText,
      link: '/notes',
      color: 'bg-blue-500',
    },
    {
      title: 'Campus Quest Simulator',
      description: 'Learn OOP through building a campus-themed game. Project files, guidance, and examples.',
      icon: Map,
      link: '/campus-quest',
      color: 'bg-purple-500',
    },
    {
      title: 'Revision Materials',
      description: 'Practice questions, exam-style problems, and revision guides.',
      icon: Code,
      link: '/extras/revision',
      color: 'bg-green-500',
    },
    {
      title: 'Worksheets',
      description: 'Additional practice worksheets and exercises.',
      icon: Folder,
      link: '/extras/worksheets',
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-lg mb-4">
          <BookOpen className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-slate-900 mb-4">Principles of Programming Languages</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Welcome to the PPL course materials. Learn object-oriented programming concepts through 
          structured notes and the Campus Quest Simulator project.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <Link
              key={section.link}
              to={section.link}
              className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 ${section.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-slate-900 mb-2">{section.title}</h3>
                  <p className="text-slate-600 text-sm">{section.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-16 bg-blue-50 border border-blue-100 rounded-lg p-8">
        <h2 className="text-slate-900 mb-4">Course Overview</h2>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="text-slate-900 mb-3">Core Topics</h3>
            <ul className="space-y-2 text-slate-700">
              <li>• Object-Oriented Programming (OOP)</li>
              <li>• Encapsulation, Inheritance, Polymorphism</li>
              <li>• Interfaces and Abstract Classes</li>
              <li>• Control Structures</li>
              <li>• Strings and Arrays</li>
              <li>• Recursion</li>
            </ul>
          </div>
          <div>
            <h3 className="text-slate-900 mb-3">Learning Approach</h3>
            <ul className="space-y-2 text-slate-700">
              <li>• Theory with clear examples</li>
              <li>• Hands-on Campus Quest project</li>
              <li>• Practice problems and worksheets</li>
              <li>• Exam-style revision questions</li>
              <li>• Common mistakes and debugging</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
