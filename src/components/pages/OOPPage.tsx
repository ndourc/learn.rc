import { PageLayout } from '../PageLayout';
import { ContentSection } from '../ContentSection';
import { CodeBlock } from '../CodeBlock';
import { InfoBox } from '../InfoBox';

export function OOPPage() {
  return (
    <PageLayout
      title="Object-Oriented Programming"
      subtitle="Understanding encapsulation, inheritance, polymorphism, and abstraction"
    >
      {/* Table of Contents */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 mb-12">
        <h3 className="text-slate-900 mb-4">Contents</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#overview" className="text-blue-600 hover:underline">Overview</a></li>
          <li><a href="#encapsulation" className="text-blue-600 hover:underline">Encapsulation</a></li>
          <li><a href="#inheritance" className="text-blue-600 hover:underline">Inheritance</a></li>
          <li><a href="#polymorphism" className="text-blue-600 hover:underline">Polymorphism</a></li>
          <li><a href="#abstraction" className="text-blue-600 hover:underline">Abstraction</a></li>
          <li><a href="#interfaces" className="text-blue-600 hover:underline">Interfaces</a></li>
          <li><a href="#constructors" className="text-blue-600 hover:underline">Constructors</a></li>
        </ul>
      </div>

      <ContentSection title="Overview" id="overview">
        <p>
          Object-Oriented Programming (OOP) is a programming paradigm that organizes code around 
          objects rather than functions and logic. This section will cover the fundamental principles 
          of OOP using Java examples.
        </p>
        <InfoBox type="info" title="Learning Approach">
          Each concept is explained with simple definitions, practical code examples, 
          and connections to the Campus Quest Simulator project.
        </InfoBox>
      </ContentSection>

      <ContentSection title="Encapsulation" id="encapsulation">
        <p className="text-slate-500 italic">
          [Content placeholder - Add your explanation of encapsulation here]
        </p>
        
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mt-4">
          <h4 className="text-slate-900 mb-3">Example Code Block</h4>
          <p className="text-sm text-slate-600 mb-4">You can add code examples like this:</p>
          
          <CodeBlock title="Student.java">
{`public class Student {
    // Private fields - encapsulated data
    private String name;
    private int studentId;
    private double gpa;
    
    // Public getter
    public String getName() {
        return name;
    }
    
    // Public setter with validation
    public void setGpa(double gpa) {
        if (gpa >= 0.0 && gpa <= 4.0) {
            this.gpa = gpa;
        }
    }
}`}
          </CodeBlock>
        </div>
      </ContentSection>

      <ContentSection title="Inheritance" id="inheritance">
        <p className="text-slate-500 italic">
          [Content placeholder - Add your explanation of inheritance here]
        </p>
      </ContentSection>

      <ContentSection title="Polymorphism" id="polymorphism">
        <p className="text-slate-500 italic">
          [Content placeholder - Add your explanation of polymorphism here]
        </p>
      </ContentSection>

      <ContentSection title="Abstraction" id="abstraction">
        <p className="text-slate-500 italic">
          [Content placeholder - Add your explanation of abstraction here]
        </p>
      </ContentSection>

      <ContentSection title="Interfaces" id="interfaces">
        <p className="text-slate-500 italic">
          [Content placeholder - Add your explanation of interfaces here]
        </p>
      </ContentSection>

      <ContentSection title="Constructors" id="constructors">
        <p className="text-slate-500 italic">
          [Content placeholder - Add your explanation of constructors here]
        </p>
      </ContentSection>

      {/* Common Mistakes Section */}
      <div className="mt-12 bg-amber-50 border border-amber-200 rounded-lg p-6">
        <h3 className="text-slate-900 mb-4">Common Mistakes</h3>
        <p className="text-slate-500 italic text-sm">
          [Add common mistakes students make when learning OOP]
        </p>
      </div>

      {/* Practice Problems Section */}
      <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-slate-900 mb-4">Mini Practice Problems</h3>
        <p className="text-slate-500 italic text-sm">
          [Add practice problems here]
        </p>
      </div>
    </PageLayout>
  );
}
