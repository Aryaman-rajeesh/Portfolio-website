/**
 * ═══════════════════════════════════════════════════════════════
 *  App — Root component with React Router configuration
 * ═══════════════════════════════════════════════════════════════
 *
 *  Defines all routes using React Router v6. The Layout component
 *  wraps everything (providing the Navbar + Footer), and each
 *  route renders into the Layout's <Outlet />.
 *
 *  ROUTE STRUCTURE:
 *   /                  → HomePage (hero + projects + capabilities)
 *   /about             → AboutPage
 *   /work              → WorkPage (full project list)
 *   /resume            → ResumePage
 *   /contact           → ContactPage
 *   /project/:id       → ProjectDetail (dynamic, per-project)
 *   *                  → NotFoundPage (fallback)
 */

import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import WorkPage from '@/pages/WorkPage';
import ResumePage from '@/pages/ResumePage';
import ContactPage from '@/pages/ContactPage';
import ProjectDetail from '@/pages/ProjectDetail';
import NotFoundPage from '@/pages/NotFoundPage';
import ScrollToTop from '@/components/ScrollToTop'; // <-- 1. Imported the new component

export default function App() {
  return (
    <>
      {/* 2. Placed here to watch for URL changes and snap to top */}
      <ScrollToTop />
      
      <Routes>
        {/* Everything wraps in Layout (Navbar + Footer + page transitions) */}
        <Route element={<Layout />}>
          {/* Home — hero with 3D particles, project showcase, capabilities */}
          <Route path="/" element={<HomePage />} />

          {/* About page */}
          <Route path="/about" element={<AboutPage />} />

          {/* Work — full project list with hover-reveal */}
          <Route path="/work" element={<WorkPage />} />

          {/* Resume — experience, education, skills */}
          <Route path="/resume" element={<ResumePage />} />

          {/* Contact — email CTA + social links */}
          <Route path="/contact" element={<ContactPage />} />

          {/* Dynamic project detail — :id is looked up in the projects data */}
          <Route path="/project/:id" element={<ProjectDetail />} />

          {/* Fallback for any unmatched URL */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}