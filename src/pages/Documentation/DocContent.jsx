import React from "react";
import { Link } from "react-router-dom";

// Default content for introduction page
const IntroductionContent = () => (
  <div>
    <h1 className="text-3xl font-bold mb-6">
      Welcome to Quarka UI Documentation
    </h1>
    <p className="text-lg text-gray-700 mb-6">
      Quarka UI is a modern Tailwind CSS component library designed specifically
      for light-themed interfaces. It provides beautiful, seamless, and
      customizable components to help you build stunning web experiences.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl shadow-md transform transition-transform hover:scale-105">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">
          Getting Started
        </h2>
        <p className="text-gray-700 mb-4">
          Learn how to install and integrate Quarka UI into your project.
        </p>
        <a
          href="/docs/getting-started/installation"
          className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
        >
          Learn more →
        </a>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl shadow-md transform transition-transform hover:scale-105">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">Components</h2>
        <p className="text-gray-700 mb-4">
          Explore the wide range of ready-to-use components.
        </p>
        <a
          href="/docs/components/buttons"
          className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
        >
          Browse components →
        </a>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-12 mb-4">Features</h2>
    <ul className="list-disc pl-6 space-y-2 mb-8">
      <li>Modern design with rounded corners and subtle shadows</li>
      <li>Fully customizable through Tailwind configuration</li>
      <li>Responsive components that work on all devices</li>
      <li>Light-theme focused with beautiful color palette</li>
      <li>Zero dependencies other than Tailwind CSS</li>
      <li>Well-documented API and examples</li>
    </ul>
  </div>
);

// Content Coming Soon component
const ContentComingSoon = ({ section, subsection }) => (
  <div className="text-center py-12">
    <h1 className="text-2xl font-semibold text-gray-900 mb-2">
      Content Coming Soon
    </h1>
    <p className="text-gray-600 max-w-md mx-auto mb-6">
      We're currently developing documentation for{" "}
      <strong>{subsection || section}</strong>. Please check back later.
    </p>
    <a
      href="/docs/introduction"
      className="inline-flex mt-6 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
    >
      Return to Documentation Home
    </a>
  </div>
);

// Pre-defined content components (only import those that already exist)
const GettingStartedInstallation = React.lazy(() =>
  import("./content/getting-started/installation")
);
const ComponentsButtons = React.lazy(() =>
  import("./content/components/buttons")
);

export default function DocContent({ section, subsection }) {
  // Define content map for only existing components
  const contentComponents = {
    introduction: {
      default: IntroductionContent,
    },
    "getting-started": {
      installation: GettingStartedInstallation,
    },
    components: {
      buttons: ComponentsButtons,
    },
  };

  // Render content based on section and subsection
  const renderContent = () => {
    try {
      // For introduction without subsection
      if (section === "introduction" && !subsection) {
        return <IntroductionContent />;
      }

      // For defined sections and subsections
      if (section in contentComponents) {
        if (!subsection && contentComponents[section].default) {
          const DefaultContent = contentComponents[section].default;
          return (
            <React.Suspense fallback={<div>Loading...</div>}>
              <DefaultContent />
            </React.Suspense>
          );
        }

        if (subsection && contentComponents[section][subsection]) {
          const ContentComponent = contentComponents[section][subsection];
          return (
            <React.Suspense fallback={<div>Loading...</div>}>
              <ContentComponent />
            </React.Suspense>
          );
        }
      }

      // For content not yet available
      return <ContentComingSoon section={section} subsection={subsection} />;
    } catch (error) {
      console.error("Error rendering documentation content:", error);
      return <ContentComingSoon section={section} subsection={subsection} />;
    }
  };

  return (
    <div className="prose prose-blue max-w-none">
      {renderContent()}

      {/* Pagination at bottom */}
      <div className="mt-16 border-t border-gray-200 pt-6">
        <div className="flex justify-between">
          <div>
            {/* Previous link would go here */}
            <Link
              to="/"
              className="text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              ← Previous
            </Link>
          </div>
          <div>
            {/* Next link would go here */}
            <Link
              to="/docs/getting-started/installation"
              className="text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              Next →
            </Link>
          </div>
        </div>
      </div>

      {/* Footer with edit link and last updated */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <a
            href={`https://github.com/qurtifa/quarka-ui/edit/main/docs/${section}/${
              subsection || "index"
            }.md`}
            className="flex items-center hover:text-gray-900 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 mr-1"
            >
              <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
              <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
            </svg>
            Edit this page on GitHub
          </a>
          <span>Last updated: 2025-03-17</span>
        </div>
      </div>
    </div>
  );
}
