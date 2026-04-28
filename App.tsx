import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ReferenceLibrary } from './features/reference/ReferenceLibrary';
import { Search } from 'lucide-react';

const ReferenceViewer = lazy(() => import('./features/reference/ReferenceViewer').then(module => ({ default: module.ReferenceViewer })));
const AboutPage = lazy(() => import('./features/reference/AboutPage').then(module => ({ default: module.AboutPage })));
const ComparisonPage = lazy(() => import('./features/reference/ComparisonPage').then(module => ({ default: module.ComparisonPage })));
const EbookGenerator = lazy(() => import('./features/reference/EbookGenerator').then(module => ({ default: module.EbookGenerator })));
const AdminDashboard = lazy(() => import('./features/admin/AdminDashboard').then(module => ({ default: module.AdminDashboard })));
const TestRunner = lazy(() => import('./features/diagnostics/TestRunner').then(module => ({ default: module.TestRunner })));

const RouteLoading = () => (
  <div className="max-w-6xl mx-auto px-6 py-16 text-sm font-semibold text-slate-400">
    Loading reference surface...
  </div>
);

const NotFound = () => (
  <div className="flex flex-col items-center justify-center text-center py-20">
    <Search size={48} className="text-slate-300 mb-4" />
    <h1 className="text-2xl font-bold text-slate-800">404 - Page Not Found</h1>
    <p className="text-slate-500 mt-2">The reference or page you're looking for doesn't exist.</p>
    <Link to="/" className="mt-6 px-4 py-2 bg-primary-600 text-white rounded-lg font-bold text-sm">
      Back to Reference Library
    </Link>
  </div>
);

export default function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<RouteLoading />}>
          <Routes>
            <Route path="/" element={<ReferenceLibrary />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/compare/:id1/:id2" element={<ComparisonPage />} />
            <Route path="/compare/:id1/:id2/:id3" element={<ComparisonPage />} />
            <Route path="/compare/:id1/:id2/:id3/:id4" element={<ComparisonPage />} />
            <Route path="/reference/:id" element={<ReferenceViewer />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/ebook" element={<EbookGenerator />} />
            <Route path="/test" element={<TestRunner />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}
