import { PageLayout } from '../PageLayout';
import { ContentSection } from '../ContentSection';
import { InfoBox } from '../InfoBox';

// PDF file metadata
interface PDFResource {
  id: string;
  title: string;
  description: string;
  filename: string;
  size: string;
}

const pdfResources: PDFResource[] = [
  {
    id: '1',
    title: 'SCS1111 Specimen Exam Paper',
    description: 'Comprehensive guide covering classes, objects, inheritance, and polymorphism',
    filename: 'scs1111-2025-specimen-exam-paper.pdf',
    size: '399 KB'
  }
];

export function RevisionPage() {
  const handleViewPDF = (filename: string) => {
    window.open(`/pdfs/${filename}`, '_blank');
  };

  const handleDownloadPDF = (filename: string, title: string) => {
    const link = document.createElement('a');
    link.href = `/pdfs/${filename}`;
    link.download = filename;
    link.click();
  };

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
            <div className="text-slate-600 text-sm space-y-2">
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Constructors:</strong> Explain the difference between a default constructor and a parameterized constructor in Java. Write a code snippet showing how to use the <code>this</code> keyword to differentiate between class fields and parameters.</li>
                <li><strong>Abstract vs. Interface:</strong> You are building a "Shape" system. Create an Interface named <code>IDrawable</code> with a method <code>draw()</code>, and an Abstract Class named <code>Shape</code> with a concrete method <code>calculateArea()</code>. Explain why you chose this structure.</li>
                <li><strong>Polymorphism:</strong> Define Method Overriding. Write a C# program where a subclass <code>Dog</code> overrides a method <code>speak()</code> from its superclass <code>Animal</code>.</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h4 className="text-slate-900 mb-3">Control Structures</h4>
            <div className="text-slate-600 text-sm space-y-2">
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Number Logic (Strong Number):</strong> Write a C# program to check if a number is a "Strong Number". A number is Strong if the sum of the factorial of its digits is equal to the number itself (e.g., 145 = 1! + 4! + 5!).</li>
                <li><strong>Switch Statements:</strong> Write a snippet to simulate a simple ATM menu using a <code>switch</code> statement (1. Check Balance, 2. Withdraw, 3. Exit). Ensure you handle invalid inputs (default case).</li>
                <li><strong>Loop Tracing:</strong> Given the loop <code>for(int i=1; i&lt;10; i+=2)</code>, what is the exact output? How would the output change if the increment was <code>i++</code>?</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h4 className="text-slate-900 mb-3">Recursion</h4>
            <div className="text-slate-600 text-sm space-y-2">
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Sum of Natural Numbers:</strong> Write a recursive Java method <code>sum(int n)</code> that returns the sum of all numbers from 1 to n. (e.g., sum(5) = 1+2+3+4+5).</li>
                <li><strong>Power Calculation:</strong> Write a recursive function to calculate <code>base^exponent</code> (e.g., 2^3 = 8) without using <code>Math.pow</code> or loops.</li>
                <li><strong>Analysis:</strong> Explain why a "Base Case" is strictly necessary in recursion to avoid a StackOverflowError.</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h4 className="text-slate-900 mb-3">Strings and Arrays</h4>
            <div className="text-slate-600 text-sm space-y-2">
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>String Manipulation:</strong> Write a C# method <code>countConsonants(String str)</code> that returns the count of all non-vowel letters. Ignore spaces and special characters.</li>
                <li><strong>Array Reversal:</strong> Write a Java method that accepts an integer array and reverses the elements in-place (without creating a second array).</li>
                <li><strong>Unique Characters:</strong> Write a logic snippet to check if a String contains only unique characters (e.g., "World" = true, "Hello" = false).</li>
              </ul>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="Quick Revision Guide">
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
          <div className="text-slate-600 text-sm space-y-4">
            <div>
              <h5 className="font-semibold text-slate-800">1. Types of Errors</h5>
              <ul className="list-disc pl-5">
                <li><strong>Syntax Error:</strong> Code violates language rules (e.g., missing semicolon). Caught by compiler.</li>
                <li><strong>Runtime Error:</strong> Happens during execution (e.g., Divide by Zero, Array Index Out of Bounds).</li>
                <li><strong>Logical Error:</strong> Program runs but gives wrong output (e.g., using + instead of *).</li>
              </ul>
            </div>
            <hr className="border-slate-200" />
            <div>
              <h5 className="font-semibold text-slate-800">2. Key Definitions</h5>
              <ul className="list-disc pl-5">
                <li><strong>Syntax:</strong> The structure/grammar of the code.</li>
                <li><strong>Semantics:</strong> The meaning/logic behind the code.</li>
                <li><strong>IDE:</strong> Integrated Development Environment (tools to code, debug, and run).</li>
              </ul>
            </div>
            <hr className="border-slate-200" />
            <div>
              <h5 className="font-semibold text-slate-800">3. OOP Concepts Cheat Sheet</h5>
              <ul className="list-disc pl-5">
                <li><strong>Encapsulation:</strong> Hiding data (private variables) and exposing via methods (getters/setters).</li>
                <li><strong>Inheritance:</strong> Reusing code from a parent class (<code>extends</code> in Java, <code>:</code> in C#).</li>
                <li><strong>Polymorphism:</strong> One interface, many forms (Overloading vs. Overriding).</li>
              </ul>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="PDF Resources">
        <div className="space-y-4">
          {pdfResources.map((pdf) => (
            <div
              key={pdf.id}
              className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  {/* PDF Icon */}
                  <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>

                  {/* PDF Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-slate-900 font-semibold mb-1">
                      {pdf.title}
                    </h4>
                    <p className="text-slate-600 text-sm mb-2">
                      {pdf.description}
                    </p>
                    <p className="text-slate-400 text-xs">
                      {pdf.size}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={() => handleViewPDF(pdf.filename)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium flex items-center gap-2"
                    title="View PDF"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    View
                  </button>
                  <button
                    onClick={() => handleDownloadPDF(pdf.filename, pdf.title)}
                    className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors duration-200 text-sm font-medium flex items-center gap-2"
                    title="Download PDF"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info box about adding PDFs */}
        {/* <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex gap-3">
            <svg
              className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <p className="text-blue-900 text-sm font-medium mb-1">
                How to add PDF files
              </p>
              <p className="text-blue-700 text-sm">
                Place your PDF files in the <code className="bg-blue-100 px-1.5 py-0.5 rounded text-xs">public/pdfs/</code> folder
                and update the <code className="bg-blue-100 px-1.5 py-0.5 rounded text-xs">pdfResources</code> array in this component
                with the file details.
              </p>
            </div>
          </div>
        </div> */}
      </ContentSection>
    </PageLayout>
  );
}
