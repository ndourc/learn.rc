import { PageLayout } from '../PageLayout';
import { ContentSection } from '../ContentSection';

export function ControlStructuresPage() {
  return (
    <PageLayout
      title="Control Structures"
      subtitle="Conditionals, loops, and program flow control"
    >
      <div className="bg-white border border-slate-200 rounded-lg p-6 mb-12">
        <h3 className="text-slate-900 mb-4">Contents</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#overview" className="text-blue-600 hover:underline">Overview</a></li>
          <li><a href="#conditionals" className="text-blue-600 hover:underline">Conditional Statements</a></li>
          <li><a href="#loops" className="text-blue-600 hover:underline">Loops</a></li>
          <li><a href="#switch" className="text-blue-600 hover:underline">Switch Statements</a></li>
        </ul>
      </div>

      <ContentSection title="Overview" id="overview">
        <p className="text-slate-500 italic">
          [Content placeholder - Add your explanation of control structures here]
        </p>
      </ContentSection>

      <ContentSection title="Conditional Statements" id="conditionals">
        <p className="text-slate-500 italic">
          [Content placeholder - Add your explanation of if/else statements here]
        </p>
      </ContentSection>

      <ContentSection title="Loops" id="loops">
        <p className="text-slate-500 italic">
          [Content placeholder - Add your explanation of for, while, do-while loops here]
        </p>
      </ContentSection>

      <ContentSection title="Switch Statements" id="switch">
        <p className="text-slate-500 italic">
          [Content placeholder - Add your explanation of switch statements here]
        </p>
      </ContentSection>
    </PageLayout>
  );
}
