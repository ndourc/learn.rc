import { PageLayout } from '../PageLayout';
import { ContentSection } from '../ContentSection';

export function WorksheetsPage() {
  return (
    <PageLayout
      title="Worksheets"
      subtitle="Additional practice exercises"
    >
      <ContentSection title="Available Worksheets">
        <div className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h4 className="text-slate-900 mb-2">Worksheet 1: Classes and Objects</h4>
            <p className="text-slate-600 text-sm mb-4">
              Practice creating classes, constructors, and methods.
            </p>
            <p className="text-slate-500 italic text-sm">
              [Add worksheet content here]
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h4 className="text-slate-900 mb-2">Worksheet 2: Inheritance and Polymorphism</h4>
            <p className="text-slate-600 text-sm mb-4">
              Exercises on extending classes and method overriding.
            </p>
            <p className="text-slate-500 italic text-sm">
              [Add worksheet content here]
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h4 className="text-slate-900 mb-2">Worksheet 3: Campus Quest Algorithms</h4>
            <p className="text-slate-600 text-sm mb-4">
              Campus-themed programming challenges.
            </p>
            <p className="text-slate-500 italic text-sm">
              [Add worksheet content here]
            </p>
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
