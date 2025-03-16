import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import QuarkaLanding from "./landing/Landing";

import Alpine from "alpinejs";

// Setup Alpine.js
window.Alpine = Alpine;

// Store untuk mengelola state navbar
Alpine.store('navbarState', {
  isOpen: false,
  
  toggleMenu() {
    this.isOpen = !this.isOpen;
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      if (this.isOpen) {
        mobileMenu.classList.remove('hidden');
        // Delay diperlukan agar transisi CSS dapat bekerja
        setTimeout(() => {
          mobileMenu.classList.add('opacity-100');
        }, 10);
      } else {
        mobileMenu.classList.remove('opacity-100');
        setTimeout(() => {
          mobileMenu.classList.add('hidden');
        }, 300); // Sesuaikan dengan durasi transisi CSS
      }
    }
  },
  
  closeMenu() {
    this.isOpen = false;
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      mobileMenu.classList.remove('opacity-100');
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 300); // Sesuaikan dengan durasi transisi CSS
    }
  }
});

// Tambahkan event listener untuk resize window
document.addEventListener('DOMContentLoaded', () => {
  const handleResize = () => {
    if (window.innerWidth >= 1024) { // lg breakpoint
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenu) {
        mobileMenu.classList.remove('opacity-100');
        mobileMenu.classList.add('hidden');
      }
      
      // Juga reset state Alpine store
      if (Alpine.store('navbarState')) {
        Alpine.store('navbarState').isOpen = false;
      }
    }
  };
  
  window.addEventListener('resize', handleResize);
});

// Inisialisasi Alpine.js
Alpine.start();

// Render React app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QuarkaLanding />
  </StrictMode>
);