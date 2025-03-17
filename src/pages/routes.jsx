import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Documentation from './Documentation';
import QuarkaLanding from '../QuarkaLanding';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Main routes */}
      <Route path="/" element={<QuarkaLanding />} />
      <Route path="/components" element={<QuarkaLanding />} />
      <Route path="/features" element={<QuarkaLanding />} />
      
      {/* Documentation routes */}
      <Route path="/docs" element={<Documentation />} />
      <Route path="/docs/:section" element={<Documentation />} />
      <Route path="/docs/:section/:subsection" element={<Documentation />} />
      
      {/* Catch all route - redirect to landing page */}
      <Route path="*" element={<QuarkaLanding />} />
    </Routes>
  );
}