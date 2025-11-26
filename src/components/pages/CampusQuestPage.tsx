import { PageLayout } from '../PageLayout';
import { ContentSection } from '../ContentSection';
import { InfoBox } from '../InfoBox';
import { Code, FolderTree, Target } from 'lucide-react';

export function CampusQuestPage() {
  return (
    <PageLayout
      title="Campus Quest Simulator"
      subtitle="Learn OOP by building a campus-themed game"
    >
      <InfoBox type="info" title="Project Overview">
        <p className="mb-4">
          You are required to complete an interactive terminal-based program called <strong>Campus Quest Simulator</strong>.
          You will model a fictional university campus using the principles of Object-Oriented Programming (OOP), including:
        </p>

        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>- Encapsulation</li>
          <li>- Inheritance</li>
          <li>- Polymorphism</li>
          <li>- Abstraction</li>
          <li>- Interfaces</li>
        </ul>

        <p className="mb-4">
          The campus contains a <strong>Student</strong>, several <strong>Locations</strong>,
          <strong> Non-Player Characters (NPCs)</strong>, and small <strong>Events</strong> that
          occur during gameplay. Your task is to complete the partially implemented codebase by
          filling in missing logic and adding behaviour to the classes provided.
        </p>

        <p className="mb-3">
          This project tests your understanding of:
        </p>

        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>- Object design</li>
          <li>- Control structures</li>
          <li>- Method writing</li>
          <li>- Handling user input</li>
          <li>- Basic algorithms</li>
          <li>- Class interaction</li>
          <li>- Reading and extending existing code</li>
        </ul>

        <p className="text-sm font-semibold">
          ⚠️ You must work inside the existing folder structure only.
        </p>
      </InfoBox>

      <ContentSection title="Project Structure">
        <div className="bg-slate-800 text-slate-100 p-6 rounded-lg">
          <div className="flex items-start gap-3 mb-4">
            <FolderTree className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <div className="mb-2">CampusQuest/</div>
              <div className="ml-4 space-y-1 text-sm text-slate-300">
                <div>└── src/</div>
                <div className="ml-4">
                  <div>├── core/</div>
                  <div className="ml-4 text-slate-400">
                    <div>├── Character.java</div>
                    <div>├── NPC.java</div>
                    <div>└── Student.java</div>
                  </div>
                  <div>├── events/</div>
                  <div className="ml-4 text-slate-400">
                    <div>├── Event.java</div>
                    <div>├── QuizEvent.java</div>
                    <div>├── RandomEncounter.java</div>
                    <div>└── StudyEvent.java</div>
                  </div>
                  <div>├── interfaces/</div>
                  <div className="ml-4 text-slate-400">
                    <div>└── GameAction.java</div>
                  </div>
                  <div>├── locations/</div>
                  <div className="ml-4 text-slate-400">
                    <div>├── Cafeteria.java</div>
                    <div>├── LectureHall.java</div>
                    <div>├── Library.java</div>
                    <div>└── Location.java</div>
                  </div>
                  <div>├── main/</div>
                  <div className="ml-4 text-slate-400">
                    <div>└── Main.java</div>
                  </div>
                  <div>├── tests/</div>
                  <div className="ml-4 text-slate-400">
                    <div>├── *.bat (test scripts)</div>
                    <div>├── *Tests.java</div>
                    <div>└── junit/ (test libraries)</div>
                  </div>
                  <div>└── utils/</div>
                  <div className="ml-4 text-slate-400">
                    <div>├── GamePrinter.java</div>
                    <div>└── InputHelper.java</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="Core Components">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Code className="w-5 h-5 text-purple-600" />
              <h4 className="text-slate-900">Classes</h4>
            </div>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• Student (encapsulation)</li>
              <li>• Character (abstract class)</li>
              <li>• NPC (subclass)</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-green-600" />
              <h4 className="text-slate-900">Locations</h4>
            </div>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• Location (abstract class)</li>
              <li>• Library, Cafeteria, LectureHall</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Code className="w-5 h-5 text-blue-600" />
              <h4 className="text-slate-900">Interfaces</h4>
            </div>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• GameAction interface</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-orange-600" />
              <h4 className="text-slate-900">Events</h4>
            </div>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• QuizEvent</li>
              <li>• StudyEvent</li>
              <li>• RandomEncounter</li>
            </ul>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="Getting Started">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-slate-900 mb-3">📦 Folder Structure Provided to You</h4>
          <p className="text-slate-700 mb-4">
            You will be given a <strong>ZIP file</strong> containing the code skeleton with all necessary files and test cases.
          </p>
        </div>
      </ContentSection>

      {/* Task 1 */}
      <ContentSection title="TASK 1 — Implement the Student Class">
        <div className="space-y-4">
          <div className="bg-white border-l-4 border-purple-500 rounded-lg p-5 shadow-sm">
            <h5 className="font-semibold text-slate-900 mb-3">Files to Modify</h5>
            <div className="bg-slate-50 rounded px-3 py-2 font-mono text-sm text-slate-700">
              src/core/Student.java
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-5">
            <h5 className="font-semibold text-slate-900 mb-3">What to Implement</h5>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span><strong>Private fields:</strong> name, energy, knowledge</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>Energy should stay between <code className="bg-slate-100 px-2 py-0.5 rounded text-sm">0</code> and <code className="bg-slate-100 px-2 py-0.5 rounded text-sm">100</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <div>
                  <strong>Methods you must implement or finish:</strong>
                  <ul className="ml-4 mt-2 space-y-1 text-sm">
                    <li>- <code className="bg-slate-100 px-2 py-0.5 rounded">increaseEnergy(int amount)</code></li>
                    <li>- <code className="bg-slate-100 px-2 py-0.5 rounded">decreaseEnergy(int amount)</code></li>
                    <li>- <code className="bg-slate-100 px-2 py-0.5 rounded">increaseKnowledge(int amount)</code></li>
                    <li>- Getters for name, energy, knowledge</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-slate-800 text-slate-100 rounded-lg p-5">
            <h5 className="font-semibold mb-3 flex items-center gap-2">
              <span></span>
              <span>How to Test Your Solution</span>
            </h5>
            <p className="text-sm text-slate-300 mb-3">Navigate to the <code className="bg-slate-700 px-2 py-0.5 rounded">src/tests</code> folder and run:</p>
            <div className="bg-slate-900 rounded p-3 font-mono text-sm overflow-x-auto">
              <div className="text-green-400">test_task1.bat</div>
            </div>
            <p className="text-xs text-slate-400 mt-2 italic">Or double-click the test_task1.bat file in File Explorer</p>
            <div className="mt-4 bg-green-900/30 border border-green-700 rounded p-3">
              <p className="text-sm font-semibold text-green-300 mb-2">Expected if Correct:</p>
              <pre className="text-xs text-green-200 font-mono">[PASS] All Student tests passed!</pre>
              <p className="text-xs text-slate-300 mt-2 italic">If you see failures, the test will state exactly which method is wrong.</p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Task 2 */}
      <ContentSection title="TASK 2 — Implement Location Behaviour">
        <div className="space-y-4">
          <div className="bg-white border-l-4 border-green-500 rounded-lg p-5 shadow-sm">
            <h5 className="font-semibold text-slate-900 mb-3">Files to Modify</h5>
            <div className="space-y-2 font-mono text-sm">
              <div className="bg-slate-50 rounded px-3 py-2 text-slate-700">src/locations/Library.java</div>
              <div className="bg-slate-50 rounded px-3 py-2 text-slate-700">src/locations/Cafeteria.java</div>
              <div className="bg-slate-50 rounded px-3 py-2 text-slate-700">src/locations/LectureHall.java</div>
              <div className="bg-slate-50 rounded px-3 py-2 text-slate-500">Possibly Location.java (base class)</div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-5">
            <h5 className="font-semibold text-slate-900 mb-3">What to Implement</h5>
            <p className="text-slate-700 mb-4">Each Location must implement its <code className="bg-slate-100 px-2 py-0.5 rounded text-sm">interact(Student s)</code> method:</p>

            <div className="space-y-3">
              <div className="bg-blue-50 border border-blue-200 rounded p-3">
                <h6 className="font-semibold text-blue-900 mb-2">Library</h6>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>- Increase knowledge</li>
                  <li>- Slightly reduce energy</li>
                </ul>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded p-3">
                <h6 className="font-semibold text-orange-900 mb-2">Cafeteria</h6>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>- Increase energy</li>
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded p-3">
                <h6 className="font-semibold text-purple-900 mb-2">LectureHall</h6>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>- Trigger an event (StudyEvent or QuizEvent)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 text-slate-100 rounded-lg p-5">
            <h5 className="font-semibold mb-3 flex items-center gap-2">
              <span></span>
              <span>How to Test</span>
            </h5>
            <p className="text-sm text-slate-300 mb-3">Navigate to the <code className="bg-slate-700 px-2 py-0.5 rounded">src/tests</code> folder and run:</p>
            <div className="bg-slate-900 rounded p-3 font-mono text-sm overflow-x-auto">
              <div className="text-green-400">test_task2.bat</div>
            </div>
            <p className="text-xs text-slate-400 mt-2 italic">Or double-click the test_task2.bat file in File Explorer</p>
            <div className="mt-4 bg-green-900/30 border border-green-700 rounded p-3">
              <p className="text-sm font-semibold text-green-300 mb-2">Expected Output:</p>
              <pre className="text-xs text-green-200 font-mono">[PASS] All Location tests passed!</pre>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Task 3 */}
      <ContentSection title="TASK 3 — Implement Event Classes">
        <div className="space-y-4">
          <div className="bg-white border-l-4 border-yellow-500 rounded-lg p-5 shadow-sm">
            <h5 className="font-semibold text-slate-900 mb-3">Files to Modify</h5>
            <div className="space-y-2 font-mono text-sm">
              <div className="bg-slate-50 rounded px-3 py-2 text-slate-700">src/events/StudyEvent.java</div>
              <div className="bg-slate-50 rounded px-3 py-2 text-slate-700">src/events/QuizEvent.java</div>
              <div className="bg-slate-50 rounded px-3 py-2 text-slate-700">src/events/RandomEncounter.java</div>
              <div className="bg-slate-50 rounded px-3 py-2 text-slate-500">src/events/Event.java (base abstract class)</div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-5">
            <h5 className="font-semibold text-slate-900 mb-3">What to Implement</h5>
            <p className="text-slate-700 mb-4">Each event must implement the <code className="bg-slate-100 px-2 py-0.5 rounded text-sm">perform(Student s)</code> method:</p>

            <div className="space-y-3">
              <div className="bg-blue-50 border border-blue-200 rounded p-3">
                <h6 className="font-semibold text-blue-900 mb-2">StudyEvent</h6>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>- +knowledge</li>
                  <li>- -energy</li>
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded p-3">
                <h6 className="font-semibold text-purple-900 mb-2">QuizEvent</h6>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>- +knowledge if passed</li>
                  <li>- -energy</li>
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded p-3">
                <h6 className="font-semibold text-amber-900 mb-2">RandomEncounter</h6>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>- Unpredictable effect</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 text-slate-100 rounded-lg p-5">
            <h5 className="font-semibold mb-3 flex items-center gap-2">
              <span></span>
              <span>How to Test</span>
            </h5>
            <p className="text-sm text-slate-300 mb-3">Navigate to the <code className="bg-slate-700 px-2 py-0.5 rounded">src/tests</code> folder and run:</p>
            <div className="bg-slate-900 rounded p-3 font-mono text-sm overflow-x-auto">
              <div className="text-green-400">test_task3.bat</div>
            </div>
            <p className="text-xs text-slate-400 mt-2 italic">Or double-click the test_task3.bat file in File Explorer</p>
            <div className="mt-4 bg-green-900/30 border border-green-700 rounded p-3">
              <p className="text-sm font-semibold text-green-300 mb-2">Expected:</p>
              <pre className="text-xs text-green-200 font-mono">[PASS] All Event tests passed!</pre>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Task 4 */}
      <ContentSection title="TASK 4 — Implement Character and NPC">
        <div className="space-y-4">
          <div className="bg-white border-l-4 border-red-500 rounded-lg p-5 shadow-sm">
            <h5 className="font-semibold text-slate-900 mb-3">Files to Modify</h5>
            <div className="space-y-2 font-mono text-sm">
              <div className="bg-slate-50 rounded px-3 py-2 text-slate-700">src/core/Character.java (abstract)</div>
              <div className="bg-slate-50 rounded px-3 py-2 text-slate-700">src/core/NPC.java</div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-5">
            <h5 className="font-semibold text-slate-900 mb-3">What to Implement</h5>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span><strong>Character</strong> should define shared fields: name, mood, etc.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span><strong>NPC</strong> should override <code className="bg-slate-100 px-2 py-0.5 rounded text-sm">speak()</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span>No crashes when calling <code className="bg-slate-100 px-2 py-0.5 rounded text-sm">speak()</code></span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-800 text-slate-100 rounded-lg p-5">
            <h5 className="font-semibold mb-3 flex items-center gap-2">
              <span>How to Test</span>
            </h5>
            <p className="text-sm text-slate-300 mb-3">Navigate to the <code className="bg-slate-700 px-2 py-0.5 rounded">src/tests</code> folder and run:</p>
            <div className="bg-slate-900 rounded p-3 font-mono text-sm overflow-x-auto">
              <div className="text-green-400">test_task4.bat</div>
            </div>
            <p className="text-xs text-slate-400 mt-2 italic">Or double-click the test_task4.bat file in File Explorer</p>
            <div className="mt-4 bg-green-900/30 border border-green-700 rounded p-3">
              <p className="text-sm font-semibold text-green-300 mb-2">Expected:</p>
              <pre className="text-xs text-green-200 font-mono">[PASS] All Character/NPC tests passed!</pre>
              <p className="text-xs text-slate-300 mt-2 italic">This test only checks that your code runs without errors.</p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Task 5 */}
      <ContentSection title="TASK 5 — Implement Main Menu">
        <div className="space-y-4">
          <div className="bg-white border-l-4 border-indigo-500 rounded-lg p-5 shadow-sm">
            <h5 className="font-semibold text-slate-900 mb-3">Files to Modify</h5>
            <div className="bg-slate-50 rounded px-3 py-2 font-mono text-sm text-slate-700">
              src/main/Main.java
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-5">
            <h5 className="font-semibold text-slate-900 mb-3">What to Include</h5>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-1">•</span>
                <span>A menu that <strong>loops until user exits</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-1">•</span>
                <div>
                  <strong>Choices like:</strong>
                  <ul className="ml-4 mt-2 space-y-1 text-sm">
                    <li>- Go to Library</li>
                    <li>- Go to Cafeteria</li>
                    <li>- Talk to NPC</li>
                    <li>- Take Quiz</li>
                    <li>- Exit</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-slate-800 text-slate-100 rounded-lg p-5">
            <h5 className="font-semibold mb-3 flex items-center gap-2">
              <span></span>
              <span>How to Test</span>
            </h5>
            <p className="text-sm text-slate-300 mb-3">Navigate to the <code className="bg-slate-700 px-2 py-0.5 rounded">src/tests</code> folder and run:</p>
            <div className="bg-slate-900 rounded p-3 font-mono text-sm overflow-x-auto">
              <div className="text-green-400">test_task5.bat</div>
            </div>
            <p className="text-xs text-slate-400 mt-2 italic">Or double-click the test_task5.bat file in File Explorer</p>
            <div className="mt-4 bg-green-900/30 border border-green-700 rounded p-3">
              <p className="text-sm font-semibold text-green-300 mb-2">Expected:</p>
              <pre className="text-xs text-green-200 font-mono">[PASS] All Main menu tests passed!</pre>
              <p className="text-xs text-slate-300 mt-2 italic">This confirms the menu exists and is structured correctly.</p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Task 6 */}
      <ContentSection title="TASK 6 — Implement GamePrinter">
        <div className="space-y-4">
          <div className="bg-white border-l-4 border-teal-500 rounded-lg p-5 shadow-sm">
            <h5 className="font-semibold text-slate-900 mb-3">Files to Modify</h5>
            <div className="bg-slate-50 rounded px-3 py-2 font-mono text-sm text-slate-700">
              src/utils/GamePrinter.java
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-5">
            <h5 className="font-semibold text-slate-900 mb-3">What to Include</h5>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-teal-600 mt-1">•</span>
                <code className="bg-slate-100 px-2 py-0.5 rounded text-sm">line()</code>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 mt-1">•</span>
                <code className="bg-slate-100 px-2 py-0.5 rounded text-sm">title(String text)</code>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 mt-1">•</span>
                <code className="bg-slate-100 px-2 py-0.5 rounded text-sm">pause()</code> <span className="text-slate-500 text-sm">(optional)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 mt-1">•</span>
                <span>Any style method you want (separators, borders)</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-800 text-slate-100 rounded-lg p-5">
            <h5 className="font-semibold mb-3 flex items-center gap-2">
              <span></span>
              <span>How to Test</span>
            </h5>
            <p className="text-sm text-slate-300 mb-3">Navigate to the <code className="bg-slate-700 px-2 py-0.5 rounded">src/tests</code> folder and run:</p>
            <div className="bg-slate-900 rounded p-3 font-mono text-sm overflow-x-auto">
              <div className="text-green-400">test_task6.bat</div>
            </div>
            <p className="text-xs text-slate-400 mt-2 italic">Or double-click the test_task6.bat file in File Explorer</p>
            <div className="mt-4 bg-green-900/30 border border-green-700 rounded p-3">
              <p className="text-sm font-semibold text-green-300 mb-2">Expected:</p>
              <pre className="text-xs text-green-200 font-mono">[PASS] All GamePrinter tests passed!</pre>
            </div>
          </div>
        </div>
      </ContentSection>

      <div className="mt-8 bg-slate-50 border border-slate-200 rounded-lg p-6">
        <h3 className="text-slate-900 mb-4">
          <a
            href="https://drive.google.com/file/d/18wYwxM2x5B8EhZrpEInpWEuH58CjXaz5/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline transition-colors"
          >
            📦 Project Files
          </a>
        </h3>
        <p className="text-slate-600 text-sm mb-4">
          Click the link above to download the complete ZIP file containing all boilerplate code, starter files, and test scripts.
        </p>
        <p className="text-slate-500 italic text-sm mb-4">
          The ZIP includes the full project structure with all Java classes, test files, and batch scripts ready to use.
        </p>

        {/* Warning Alert */}
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
          <div className="flex items-start gap-3">
            <span className="text-red-500 text-xl flex-shrink-0">⚠️</span>
            <div>
              <p className="text-red-800 font-semibold text-sm mb-1">Important: Do Not Edit Test Files!</p>
              <p className="text-red-700 text-xs">
                Do not modify any files in the <code className="bg-red-100 px-1.5 py-0.5 rounded font-mono">tests/</code> folder.
                Editing test files will break the automated testing and may result in incorrect grading.
                Only modify files in the <code className="bg-red-100 px-1.5 py-0.5 rounded font-mono">core/</code>,
                <code className="bg-red-100 px-1.5 py-0.5 rounded font-mono"> events/</code>,
                <code className="bg-red-100 px-1.5 py-0.5 rounded font-mono"> locations/</code>,
                <code className="bg-red-100 px-1.5 py-0.5 rounded font-mono"> main/</code>, and
                <code className="bg-red-100 px-1.5 py-0.5 rounded font-mono"> utils/</code> folders.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fun Stats Section */}
      <div className="mt-8 grid md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-5 text-center">
          <div className="text-3xl font-bold text-purple-600">6</div>
          <div className="text-sm text-purple-600 mt-1">Tasks to Complete</div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-5 text-center">
          <div className="text-3xl font-bold text-blue-700">100%</div>
          <div className="text-sm text-blue-600 mt-1">OOP Concepts Covered</div>
        </div>
      </div>

      {/* Creator & Info Section - Footer */}
      <div className="mt-8 bg-gradient-to-br bg-slate-700 from-blue-100 to-blue-500 text-white rounded-lg p-8 shadow-xl">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Creator Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span>👨‍💻</span>
              <span>Created By</span>
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-lg font-medium text-white">Henry Ndou</p>
                <p className="text-sm text-blue-100">Computer Science Educator</p>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-blue-200">Email: </span>
                  <a href="mailto:henry.ndou@nust.ac.zw" className="text-white hover:text-blue-100 transition-colors underline">
                    henry.ndou@nust.ac.zw
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="https://www.linkedin.com/in/ndou-rc?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-100 transition-colors underline"
                  >
                    LinkedIn: @ndou-rc
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  {/* <span className="text-blue-200">𝕏</span> */}
                  <a
                    href="https://x.com/ndou_rc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-100 transition-colors underline"
                  >
                    X (Twitter): @ndou_rc
                  </a>
                </div>
              </div>

              {/* Batman Easter Egg */}
              <div className="mt-4 pt-4 border-t border-blue-600">
                <p className="text-xs text-blue-200 italic">
                  "Esse Est Percipi"
                </p>
              </div>
            </div>
          </div>

          {/* Project Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span>📚</span>
              <span>Project Information</span>
            </h3>
            <div className="space-y-3 text-sm">
              <div className="bg-blue-800/50 rounded p-3 border border-blue-600/30">
                <p className="text-blue-200 text-xs mb-1">Last Updated</p>
                <p className="text-white font-medium">26 November 2025</p>
              </div>

              <div className="bg-blue-800/50 rounded p-3 border border-blue-600/30">
                <p className="text-blue-200 text-xs mb-1">Course Level</p>
                <p className="text-white font-medium">Intermediate Java / OOP</p>
              </div>

              <div className="bg-blue-800/50 rounded p-3 border border-blue-600/30">
                <p className="text-blue-200 text-xs mb-1">Estimated Time</p>
                <p className="text-white font-medium">3-6 hours</p>
              </div>

              <div className="bg-blue-800/50 rounded p-3 border border-blue-600/30">
                <p className="text-blue-200 text-xs mb-1">Fun Fact</p>
                <p className="text-white font-medium">This project teaches OOP through gaming!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-6 pt-6 border-t border-blue-600 text-center">
          <p className="text-blue-100 text-sm">
            Built with ❤️ for students learning Object-Oriented Programming
          </p>
          <p className="text-blue-200 text-xs mt-2">
            © 2025 Henry Ndou • NUST • All rights reserved
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
