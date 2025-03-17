import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import QuarkaLanding from "./landing/Landing";
import Documentation from "./pages/Documentation";
import { useEffect } from "react";

// Custom hook untuk menangani scrolling ke section
const ScrollToSection = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Update document title based on route
    const path = pathname.replace("/", "") || "home";
    const titles = {
      home: "Quarka UI - Modern Tailwind Components for Light Themes",
      components: "Components - Quarka UI",
      features: "Features - Quarka UI",
      docs: "Documentation - Quarka UI",
      "get-started": "Get Started - Quarka UI",
    };

    document.title = titles[path] || titles["home"];

    // Handle scroll behavior for landing page sections
    if (
      pathname === "/" ||
      pathname === "/components" ||
      pathname === "/features" ||
      pathname === "/get-started"
    ) {
      // For landing page or direct sections on landing page
      if (pathname === "/") return;

      const sectionId = pathname.replace("/", "");
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <>
      <ScrollToSection />
      <Routes>
        {/* Main landing page with sections */}
        <Route path="/" element={<QuarkaLanding />} />
        <Route path="/components" element={<QuarkaLanding />} />
        <Route path="/features" element={<QuarkaLanding />} />
        <Route path="/get-started" element={<QuarkaLanding />} />

        {/* Documentation routes */}
        <Route path="/docs" element={<Documentation />} />
        <Route path="/docs/:section" element={<Documentation />} />
        <Route path="/docs/:section/:subsection" element={<Documentation />} />

        {/* Fallback to landing page */}
        <Route path="*" element={<QuarkaLanding />} />
      </Routes>
    </>
  );
}
