import { useRef, useState } from 'react';
import { BrowserRouter, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import MenuMorphButton from './components/MenuMorphButton';
import MobileMenu from './components/MobileMenu';
import SiteHeader from './components/SiteHeader';
import AboutPage from './pages/AboutPage';
import CaseStudyPage from './pages/CaseStudyPage';
import HomePage from './pages/HomePage';

function AppShell() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  return (
    <>
      <MenuMorphButton
        ref={menuButtonRef}
        menuOpen={menuOpen}
        onToggle={() => setMenuOpen((open) => !open)}
      />
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        returnFocusRef={menuButtonRef}
      />
      <div className="mx-auto max-w-[1400px]">
        {useLocation().pathname !== '/about' && <SiteHeader />}
        <Outlet />
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="body-container min-h-screen">
        <Routes>
          <Route element={<AppShell />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work/:slug" element={<CaseStudyPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
