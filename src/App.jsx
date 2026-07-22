import { lazy, Suspense } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";

const HomeScreen = lazy(() => import("./screens/HomeScreen.jsx"));
const ProjectsScreen = lazy(() => import("./screens/ProjectsScreen.jsx"));
const ArchiveScreen = lazy(() => import("./screens/ArchiveScreen.jsx"));
const ProjectDetailScreen = lazy(() => import("./screens/ProjectDetailScreen.jsx"));
const AboutScreen = lazy(() => import("./screens/AboutScreen.jsx"));
const TimelineScreen = lazy(() => import("./screens/TimelineScreen.jsx"));
const NotFoundScreen = lazy(() => import("./screens/NotFoundScreen.jsx"));

export default function App() {
  const location = useLocation();

  return (
    <div>
      <NavBar />

      <Suspense fallback={<LoadingSpinner />}>
        {/* Keying on pathname retriggers the page-fade-in animation on every route change. */}
        <div className="page-transition" key={location.pathname}>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/projects" element={<ProjectsScreen />} />
            <Route path="/archive" element={<ArchiveScreen />} />
            {/* Old direct links to the split-out status pages still land on Projects. */}
            <Route path="/in-progress" element={<Navigate to="/projects" replace />} />
            <Route path="/future-ideas" element={<Navigate to="/projects" replace />} />
            <Route path="/archive/:slug" element={<ProjectDetailScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/timeline" element={<TimelineScreen />} />
            {/* Resume and Contact are now sections on the About Me page. */}
            <Route path="/resume" element={<Navigate to="/about#resume" replace />} />
            <Route path="/contact" element={<Navigate to="/about#contact" replace />} />
            <Route path="*" element={<NotFoundScreen />} />
          </Routes>
        </div>
      </Suspense>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
