import React from 'react';

export default function Installation() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Installation</h1>
      <p className="mb-6">
        Getting started with Quarka UI is simple. Follow these steps to integrate Quarka UI into your project.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Prerequisites</h2>
      <p className="mb-4">
        Quarka UI requires Tailwind CSS and Alpine.js. Make sure you have them installed in your project.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Installing Tailwind CSS</h2>
      <p className="mb-6">
        Follow the official Tailwind CSS installation guide:
      </p>
      
      <div className="bg-gray-100 p-6 rounded-xl mb-8">
        <h3 className="text-lg font-medium mb-3">Install Tailwind CSS</h3>
        <p className="mb-4">
          You can install Tailwind CSS via npm:
        </p>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
          <code>npm install tailwindcss</code>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          For more detailed installation instructions, visit the <a href="https://tailwindcss.com/docs/installation" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Tailwind CSS Installation Guide</a>.
        </p>
      </div>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Installing Alpine.js</h2>
      <p className="mb-6">
        Follow the official Alpine.js installation guide:
      </p>
      
      <div className="bg-gray-100 p-6 rounded-xl mb-8">
        <h3 className="text-lg font-medium mb-3">Install Alpine.js</h3>
        <p className="mb-4">
          You can include Alpine.js via CDN:
        </p>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
          <code>{`<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.9.1/dist/cdn.min.js"></script>`}</code>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          For more detailed installation instructions, visit the <a href="https://alpinejs.dev/essentials/installation" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Alpine.js Installation Guide</a>.
        </p>
      </div>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Configuration</h2>
      <p className="mb-6">
        After installing Tailwind CSS and Alpine.js, you need to configure your project to use them. Create or edit your <code className="bg-gray-100 px-1 py-0.5 rounded">tailwind.config.js</code> file:
      </p>
      
      <div className="bg-gray-100 p-6 rounded-xl mb-8">
        <h3 className="text-lg font-medium mb-3">tailwind.config.js</h3>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
          <pre>{`module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/quarka-ui/dist/**/*.js"
  ],
  theme: {
    extend: {
      // Quarka UI theme extensions will be added here automatically
    },
  },
  plugins: [
    require('quarka-ui/plugin')
  ],
}`}</pre>
        </div>
      </div>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              Make sure to include Quarka UI components in your content paths to ensure styles are generated for all components.
            </p>
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Usage</h2>
      <p className="mb-6">
        After installing and configuring Tailwind CSS and Alpine.js, you can start using them in your project:
      </p>
      
      <div className="bg-gray-100 p-6 rounded-xl">
        <h3 className="text-lg font-medium mb-3">Example usage</h3>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
          <pre>{`import { Button } from 'quarka-ui';

function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Button variant="primary">Click Me</Button>
    </div>
  );
}`}</pre>
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Next Steps</h2>
      <p className="mb-4">
        Now that you have Tailwind CSS and Alpine.js installed, check out our:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><a href="/docs/getting-started/quick-start" className="text-blue-600 hover:underline">Quick Start Guide</a> - Learn the basics of using Quarka UI</li>
        <li><a href="/docs/components/buttons" className="text-blue-600 hover:underline">Components</a> - Explore available components</li>
        <li><a href="/docs/customization/theme" className="text-blue-600 hover:underline">Customization</a> - Learn how to customize Quarka UI</li>
      </ul>
    </div>
  );
}