import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/index.css";
import App from "./App";
import Alpine from "alpinejs";

// Setup Alpine.js
window.Alpine = Alpine;

// Store untuk mengelola state navbar
Alpine.store("navbarState", {
  isOpen: false,

  toggleMenu() {
    this.isOpen = !this.isOpen;
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu) {
      if (this.isOpen) {
        mobileMenu.classList.remove("hidden");
        setTimeout(() => {
          mobileMenu.classList.add("opacity-100");
        }, 10);
      } else {
        mobileMenu.classList.remove("opacity-100");
        setTimeout(() => {
          mobileMenu.classList.add("hidden");
        }, 300);
      }
    }
  },

  closeMenu() {
    this.isOpen = false;
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu) {
      mobileMenu.classList.remove("opacity-100");
      setTimeout(() => {
        mobileMenu.classList.add("hidden");
      }, 300);
    }
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      const mobileMenu = document.getElementById("mobile-menu");
      if (mobileMenu) {
        mobileMenu.classList.remove("opacity-100");
        mobileMenu.classList.add("hidden");
      }

      if (Alpine.store("navbarState")) {
        Alpine.store("navbarState").isOpen = false;
      }
    }
  };

  window.addEventListener("resize", handleResize);
});

Alpine.start();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
