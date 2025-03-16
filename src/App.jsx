import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import QuarkaLanding from './landing/Landing';
import { useEffect } from 'react';

// Custom hook untuk menangani scrolling ke section
const ScrollToSection = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Update document title based on route
    const path = pathname.replace('/', '') || 'home';
    const titles = {
      'home': 'Quarka UI - Modern Tailwind Components for Light Themes',
      'components': 'Components - Quarka UI',
      'features': 'Features - Quarka UI',
      'docs': 'Documentation - Quarka UI',
      'get-started': 'Get Started - Quarka UI'
    };
    
    document.title = titles[path] || titles['home'];
    
    // Scroll to section
    if (pathname === '/') return;
    
    const sectionId = pathname.replace('/', '');
    const section = document.getElementById(sectionId);
    
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname]);
  
  return null;
};

export default function App() {
  return (
    <>
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<QuarkaLanding />} />
        <Route path="/components" element={<QuarkaLanding />} />
        <Route path="/features" element={<QuarkaLanding />} />
        <Route path="/docs" element={<QuarkaLanding />} />
        <Route path="*" element={<QuarkaLanding />} />
      </Routes>
    </>
  );
}