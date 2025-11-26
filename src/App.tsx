import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/pages/HomePage';
import { NotesPage } from './components/pages/NotesPage';
import { OOPPage } from './components/pages/OOPPage';
import { ControlStructuresPage } from './components/pages/ControlStructuresPage';
import { CampusQuestPage } from './components/pages/CampusQuestPage';
import { RevisionPage } from './components/pages/RevisionPage';
import { WorksheetsPage } from './components/pages/WorksheetsPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/notes/oop" element={<OOPPage />} />
          <Route path="/notes/control-structures" element={<ControlStructuresPage />} />
          <Route path="/campus-quest" element={<CampusQuestPage />} />
          <Route path="/extras/revision" element={<RevisionPage />} />
          <Route path="/extras/worksheets" element={<WorksheetsPage />} />
        </Routes>
      </div>
    </Router>
  );
}
