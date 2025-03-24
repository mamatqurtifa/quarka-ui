import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";

export default function Sidebar({
  currentSection,
  currentSubsection,
  mobile,
  onNavigate = () => {},
}) {
  const [expandedSections, setExpandedSections] = useState({
    Components: true, // Buka section Components secara default
  });
  const [sidebarOpen, setSidebarOpen] = useState(!mobile); // Responsive sidebar state

  // Toggle section expand/collapse
  const toggleSection = (title) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  // Toggle sidebar open/close
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Definisikan struktur navigasi
  const navigation = [
    {
      title: "Introduction",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
      items: [
        { name: "What is Quarka UI", href: "/docs/introduction" },
        { name: "Installation", href: "/docs/getting-started/installation" },
      ],
    },
    {
      title: "Core Concepts",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ),
      items: [
        {
          name: "Design Principles",
          href: "/docs/core-concepts/design-principles",
        },
        { name: "Theming", href: "/docs/core-concepts/theming" },
        { name: "Configuration", href: "/docs/core-concepts/configuration" },
        { name: "Responsive Design", href: "/docs/core-concepts/responsive" },
      ],
    },
    {
      title: "Components",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      ),
      items: [
        { name: "Buttons", href: "/docs/components/buttons" },
        { name: "Button Groups", href: "/docs/components/button-group", badge: "New" },
        { name: "Icon Buttons", href: "/docs/components/icon-button", badge: "New" },
        { name: "Dropdowns", href: "/docs/components/dropdown", badge: "New" },
        { name: "Cards", href: "/docs/components/cards" },
        { name: "Forms", href: "/docs/components/forms" },
        { name: "Navigation", href: "/docs/components/navigation" },
        { name: "Modals", href: "/docs/components/modals" },
        { name: "Tables", href: "/docs/components/tables" },
        { name: "Alerts", href: "/docs/components/alerts" },
        { name: "Badges", href: "/docs/components/badges" },
      ],
    },
    {
      title: "Layout",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ),
      items: [
        { name: "Grid System", href: "/docs/layout/grid" },
        { name: "Containers", href: "/docs/layout/containers" },
        { name: "Spacing", href: "/docs/layout/spacing" },
        { name: "Responsive Utilities", href: "/docs/layout/responsive" },
      ],
    },
    {
      title: "Customization",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      ),
      items: [
        { name: "Theme Configuration", href: "/docs/customization/theme" },
        {
          name: "Colors",
          href: "/docs/customization/colors",
          badge: "Updated",
        },
        { name: "Typography", href: "/docs/customization/typography" },
        { name: "Extending Components", href: "/docs/customization/extending" },
      ],
    },
    {
      title: "Guides",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      ),
      items: [
        { name: "Dark Mode", href: "/docs/guides/dark-mode" },
        { name: "Accessibility", href: "/docs/guides/accessibility" },
        { name: "Performance Optimization", href: "/docs/guides/performance" },
        { name: "SEO Best Practices", href: "/docs/guides/seo" },
      ],
    },
    {
      title: "Resources",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
          <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
          <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
      items: [
        { name: "Examples", href: "/docs/resources/examples" },
        { name: "Templates", href: "/docs/resources/templates" },
        { name: "Community", href: "/docs/resources/community" },
        { name: "Contributing", href: "/docs/resources/contributing" },
      ],
    },
  ];

  // Cek apakah section ini seharusnya terbuka
  const shouldSectionBeOpen = (title, items) => {
    // Jika sudah diset secara manual, ikuti pengaturan itu
    if (expandedSections[title] !== undefined) {
      return expandedSections[title];
    }

    // Cek jika ada item aktif di section ini
    return items.some(
      (item) =>
        item.href.includes(currentSection) &&
        (!currentSubsection || item.href.includes(currentSubsection))
    );
  };

  return (
    <div className="bg-white min-h-screen lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200">
      {/* Mobile menu button */}
      <div className="lg:hidden flex items-center justify-between px-4 py-2 border-b border-gray-200">
        <button
          type="button"
          className="text-gray-500 hover:text-gray-900 focus:outline-none"
          onClick={toggleSidebar}
        >
          {sidebarOpen ? (
            <CloseIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
        <span className="font-semibold text-gray-900">Documentation</span>
      </div>

      {/* Sidebar content */}
      <nav
        className={`transition-transform transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div
          className="px-2 py-6 bg-gradient-to-b from-gray-50 to-white"
          aria-label="Documentation"
        >
          {/* Logo & Name */}
          <div className="flex items-center justify-center mb-8 px-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-0.5">
              <div className="bg-white rounded-md p-2">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-xl">
                  Quarka UI
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-1">
            {navigation.map((category) => {
              const isOpen = shouldSectionBeOpen(
                category.title,
                category.items
              );

              return (
                <div key={category.title} className="mb-2">
                  <button
                    onClick={() => toggleSection(category.title)}
                    className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-800 rounded-md hover:bg-gray-100 transition-colors group"
                  >
                    <div className="flex items-center">
                      <span className="mr-3 text-gray-500 transition-colors group-hover:text-blue-600">
                        {category.icon}
                      </span>
                      <span className="font-medium">{category.title}</span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isOpen ? "transform rotate-180" : ""
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {/* Section items with animated height */}
                  <div
                    className={`mt-1 pl-10 pr-2 overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="py-1 space-y-1">
                      {category.items.map((item) => {
                        const isActive =
                          item.href.includes(currentSection) &&
                          (!currentSubsection ||
                            item.href.includes(currentSubsection));

                        return (
                          <li key={item.name}>
                            <Link
                              to={item.href}
                              onClick={onNavigate}
                              className={`flex items-center justify-between pl-3 pr-2 py-1.5 text-sm rounded-md transition-all ${
                                isActive
                                  ? "bg-blue-100 text-blue-700 font-medium"
                                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                              }`}
                              aria-current={isActive ? "page" : undefined}
                            >
                              <span>{item.name}</span>
                              {item.badge && (
                                <span
                                  className={`text-xs px-1.5 py-0.5 rounded-full ${
                                    item.badge === "New"
                                      ? "bg-green-100 text-green-800"
                                      : "bg-blue-100 text-blue-800"
                                  }`}
                                >
                                  {item.badge}
                                </span>
                              )}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer section */}
          <div className="pt-6 mt-6 border-t border-gray-200 px-4">
            <div className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg mb-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">
                  All Systems Operational
                </span>
              </div>
              <a
                href="/docs/status"
                className="mt-2 text-xs text-blue-600 hover:text-blue-800 flex items-center"
              >
                <span>Check system status</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-3 h-3 ml-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">v1.0.0</span>
              <a
                href="https://github.com/qurtifa/quarka-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
