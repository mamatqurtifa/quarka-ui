import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
export default function Sidebar({ currentSection, currentSubsection, mobile, onNavigate = () => {} }) {
  // Definisikan struktur navigasi
  const navigation = [
    {
      title: 'Introduction',
      items: [
        { name: 'What is Quarka UI', href: '/docs/introduction' },
        { name: 'Why Quarka UI', href: '/docs/introduction/why-quarka' },
        { name: 'Comparison', href: '/docs/introduction/comparison' },
      ],
    },
    {
      title: 'Getting Started',
      items: [
        { name: 'Installation', href: '/docs/getting-started/installation' },
        { name: 'Quick Start', href: '/docs/getting-started/quick-start' },
        { name: 'Usage with React', href: '/docs/getting-started/react' },
        { name: 'Usage with Next.js', href: '/docs/getting-started/nextjs' },
        { name: 'Usage with Vue', href: '/docs/getting-started/vue' },
      ],
    },
    {
      title: 'Core Concepts',
      items: [
        { name: 'Design Principles', href: '/docs/core-concepts/design-principles' },
        { name: 'Theming', href: '/docs/core-concepts/theming' },
        { name: 'Configuration', href: '/docs/core-concepts/configuration' },
        { name: 'Responsive Design', href: '/docs/core-concepts/responsive' },
      ],
    },
    {
      title: 'Components',
      items: [
        { name: 'Buttons', href: '/docs/components/buttons' },
        { name: 'Cards', href: '/docs/components/cards' },
        { name: 'Forms', href: '/docs/components/forms' },
        { name: 'Navigation', href: '/docs/components/navigation' },
        { name: 'Modals', href: '/docs/components/modals' },
        { name: 'Tables', href: '/docs/components/tables' },
        { name: 'Alerts', href: '/docs/components/alerts' },
        { name: 'Badges', href: '/docs/components/badges' },
      ],
    },
    {
      title: 'Layout',
      items: [
        { name: 'Grid System', href: '/docs/layout/grid' },
        { name: 'Containers', href: '/docs/layout/containers' },
        { name: 'Spacing', href: '/docs/layout/spacing' },
        { name: 'Responsive Utilities', href: '/docs/layout/responsive' },
      ],
    },
    {
      title: 'Customization',
      items: [
        { name: 'Theme Configuration', href: '/docs/customization/theme' },
        { name: 'Colors', href: '/docs/customization/colors' },
        { name: 'Typography', href: '/docs/customization/typography' },
        { name: 'Extending Components', href: '/docs/customization/extending' },
      ],
    },
    {
      title: 'Guides',
      items: [
        { name: 'Dark Mode', href: '/docs/guides/dark-mode' },
        { name: 'Accessibility', href: '/docs/guides/accessibility' },
        { name: 'Performance Optimization', href: '/docs/guides/performance' },
        { name: 'SEO Best Practices', href: '/docs/guides/seo' },
      ],
    },
    {
      title: 'Resources',
      items: [
        { name: 'Examples', href: '/docs/resources/examples' },
        { name: 'Templates', href: '/docs/resources/templates' },
        { name: 'Community', href: '/docs/resources/community' },
        { name: 'Contributing', href: '/docs/resources/contributing' },
      ],
    },
  ];

  return (
    <nav className="px-4 py-6" aria-label="Documentation">
      {navigation.map((category) => (
        <div key={category.title} className="mb-8">
          <h3 className="text-xs font-semibold tracking-wide text-gray-900 uppercase">
            {category.title}
          </h3>
          <ul className="mt-3 space-y-2">
            {category.items.map((item) => {
              const isActive = 
                item.href.includes(currentSection) && 
                (!currentSubsection || item.href.includes(currentSubsection));
              
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    onClick={onNavigate}
                    className={`block px-3 py-2 text-sm rounded-md ${
                      isActive
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      
      <div className="pt-6 mt-6 border-t border-gray-200">
        <a
          href="/docs/status"
          className="flex items-center text-sm text-gray-600 hover:text-gray-900"
        >
          <span className="w-2 h-2 mr-2 bg-green-400 rounded-full"></span>
          System Status: Operational
        </a>
        <div className="mt-4 text-sm text-gray-500">
          <p>Documentation v1.0.0</p>
        </div>
      </div>
    </nav>
  );
}