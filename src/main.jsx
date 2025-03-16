import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";

import Alpine from "alpinejs";
import QuarkaLanding from "./landing/Landing";

// Setup Alpine.js
window.Alpine = Alpine;
Alpine.data('quarkaNavbar', () => ({
  mobileMenuOpen: false
}));
Alpine.start();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QuarkaLanding />
  </StrictMode>
);