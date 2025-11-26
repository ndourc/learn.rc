import { PageLayout } from '../PageLayout';
import { ContentSection } from '../ContentSection';
import { InfoBox } from '../InfoBox';

export function RevisionPage() {
  return (
    <PageLayout
      title="Revision Materials"
      subtitle="Practice questions and exam-style problems"
    >
      <InfoBox type="warning" title="Important Note">
        All questions here are original exam-style problems. They are designed to help you 
        practice, but do not reflect actual exam questions.
      </InfoBox>

      <ContentSection title="Practice Questions by Topic">
        <div className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h4 className="text-slate-900 mb-3">Object-Oriented Programming</h4>
            <p className="text-slate-500 italic text-sm">
              [Add OOP practice questions here]
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h4 className="text-slate-900 mb-3">Control Structures</h4>
            <p className="text-slate-500 italic text-sm">
              [Add control structures practice questions here]
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h4 className="text-slate-900 mb-3">Recursion</h4>
            <p className="text-slate-500 italic text-sm">
              [Add recursion practice questions here]
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h4 className="text-slate-900 mb-3">Strings and Arrays</h4>
            <p className="text-slate-500 italic text-sm">
              [Add strings and arrays practice questions here]
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="Quick Revision Guide">
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
          <p className="text-slate-500 italic text-sm">
            [Add quick revision guide content here - key concepts, formulas, common patterns]
          </p>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
