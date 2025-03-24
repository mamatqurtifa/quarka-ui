import React from "react";

export default function Buttons() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Buttons</h1>
      <p className="mb-6">
        Buttons are essential interactive elements in modern interfaces. Quarka
        UI provides an elegant, lightweight approach to buttons using Tailwind
        CSS, focusing on smooth interactions, beautiful transitions, and
        accessibility.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Basic Usage</h2>
      <p className="mb-6">
        Quarka UI buttons combine simplicity with style, offering a range of
        variants that maintain a cohesive design language:
      </p>

      <div className="bg-gray-100 p-6 rounded-xl mb-8">
        <h3 className="text-lg font-medium mb-3">Basic Button Styles</h3>
        <div className="bg-gray-900 rounded-md mb-6">
          <div className="flex items-center px-4 py-2 bg-gray-800 rounded-t-md">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-b-md overflow-x-auto">
            <pre>{`<button class="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg">
  Primary Button
</button>

<button class="px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transform hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md">
  Secondary Button
</button>

<button class="px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 hover:text-blue-600 transform hover:scale-105 transition-all duration-200">
  Outline Button
</button>

<button class="px-4 py-2 text-blue-500 rounded-full hover:bg-blue-50 transform hover:translate-x-1 transition-all duration-200">
  Ghost Button
</button>`}</pre>
          </div>
        </div>

        <h3 className="text-lg font-medium mb-3">Preview</h3>
        <div className="bg-white p-6 rounded-lg border border-gray-300 flex flex-wrap gap-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg">
            Primary Button
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transform hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md">
            Secondary Button
          </button>
          <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 hover:text-blue-600 transform hover:scale-105 transition-all duration-200">
            Outline Button
          </button>
          <button className="px-4 py-2 text-blue-500 rounded-full hover:bg-blue-50 transform hover:translate-x-1 transition-all duration-200">
            Ghost Button
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Modern Soft UI Buttons
      </h2>
      <p className="mb-6">
        Quarka UI embraces the modern "soft UI" aesthetic with subtle shadows
        and gentle interactions:
      </p>

      <div className="bg-gray-100 p-6 rounded-xl mb-8">
        <h3 className="text-lg font-medium mb-3">Soft UI Button Style</h3>
        <div className="bg-gray-900 rounded-md mb-6">
          <div className="flex items-center px-4 py-2 bg-gray-800 rounded-t-md">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-b-md overflow-x-auto">
            <pre>{`<button class="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
  Gradient Button
</button>

<button class="px-5 py-2.5 bg-white text-gray-700 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200">
  Soft Neutral
</button>

<button class="px-5 py-2.5 bg-gray-900 text-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
  Dark Mode
</button>`}</pre>
          </div>
        </div>

        <h3 className="text-lg font-medium mb-3">Preview</h3>
        <div className="bg-white p-6 rounded-lg border border-gray-300 flex flex-wrap gap-4">
          <button className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
            Gradient Button
          </button>
          <button className="px-5 py-2.5 bg-white text-gray-700 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200">
            Soft Neutral
          </button>
          <button className="px-5 py-2.5 bg-gray-900 text-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
            Dark Mode
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Animated Icon Buttons
      </h2>
      <p className="mb-6">
        Add life to your buttons with smooth icon animations that enhance user
        interaction:
      </p>

      <div className="bg-gray-100 p-6 rounded-xl mb-8">
        <h3 className="text-lg font-medium mb-3">Icon Animation Examples</h3>
        <div className="bg-gray-900 rounded-md mb-6">
          <div className="flex items-center px-4 py-2 bg-gray-800 rounded-t-md">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-b-md overflow-x-auto">
            <pre>{`<!-- Hover Icon Slide Right -->
<button class="group px-5 py-2.5 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all duration-200 flex items-center gap-2 overflow-hidden">
  Download 
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" 
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
    class="transform group-hover:translate-y-1 transition-transform duration-200">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
</button>

<!-- Animated Pulse Icon -->
<button class="group px-5 py-2.5 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all duration-200 flex items-center gap-2">
  Send Message
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" 
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
    class="group-hover:animate-ping absolute opacity-60">
    <path d="M22 2L11 13"></path>
    <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" 
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 2L11 13"></path>
    <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
  </svg>
</button>`}</pre>
          </div>
        </div>

        <h3 className="text-lg font-medium mb-3">Preview</h3>
        <div className="bg-white p-6 rounded-lg border border-gray-300 flex flex-wrap gap-4">
          <button className="group px-5 py-2.5 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all duration-200 flex items-center gap-2 overflow-hidden">
            Download
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transform group-hover:translate-y-1 transition-transform duration-200"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </button>

          <button className="group relative px-5 py-2.5 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all duration-200 flex items-center gap-2">
            Send Message
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:animate-ping absolute opacity-60"
            >
              <path d="M22 2L11 13"></path>
              <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 2L11 13"></path>
              <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
            </svg>
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Interactive State Buttons
      </h2>
      <p className="mb-6">
        Quarka UI buttons provide clear visual feedback for different states:
      </p>

      <div className="bg-gray-100 p-6 rounded-xl mb-8">
        <h3 className="text-lg font-medium mb-3">State Transitions</h3>
        <div className="bg-gray-900 rounded-md mb-6">
          <div className="flex items-center px-4 py-2 bg-gray-800 rounded-t-md">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-b-md overflow-x-auto">
            <pre>{`<!-- Loading Button with Spinner -->
<button class="relative px-6 py-2.5 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition-all duration-200 flex items-center gap-2">
  <svg class="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  Processing...
</button>

<!-- Success Animation Button -->
<button class="px-6 py-2.5 bg-green-500 text-white rounded-lg shadow-md transition-all duration-200 flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" 
    stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" 
    class="animate-bounce">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
  Success!
</button>

<!-- Disabled Button -->
<button class="px-6 py-2.5 bg-gray-400 text-white rounded-lg shadow-sm cursor-not-allowed opacity-70" disabled>
  Not Available
</button>`}</pre>
          </div>
        </div>

        <h3 className="text-lg font-medium mb-3">Preview</h3>
        <div className="bg-white p-6 rounded-lg border border-gray-300 flex flex-wrap gap-4">
          <button className="relative px-6 py-2.5 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition-all duration-200 flex items-center gap-2">
            <svg
              className="animate-spin h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing...
          </button>

          <button className="px-6 py-2.5 bg-green-500 text-white rounded-lg shadow-md transition-all duration-200 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-bounce"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Success!
          </button>

          <button
            className="px-6 py-2.5 bg-gray-400 text-white rounded-lg shadow-sm cursor-not-allowed opacity-70"
            disabled
          >
            Not Available
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Glass Morphism Buttons
      </h2>
      <p className="mb-6">
        Embrace modern design trends with these glass-effect buttons:
      </p>

      <div className="bg-gray-100 p-6 rounded-xl mb-8">
        <h3 className="text-lg font-medium mb-3">Glass Effect</h3>
        <div className="bg-gray-900 rounded-md mb-6">
          <div className="flex items-center px-4 py-2 bg-gray-800 rounded-t-md">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-b-md overflow-x-auto">
            <pre>{`<div class="p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
  <!-- Glass Button -->
  <button class="px-6 py-3 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm text-white border border-white border-opacity-20 rounded-lg shadow-lg hover:bg-opacity-30 transition-all duration-200">
    Glass Button
  </button>
</div>`}</pre>
          </div>
        </div>

        <h3 className="text-lg font-medium mb-3">Preview</h3>
        <div className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex justify-center">
          <button className="px-6 py-3 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm text-white border border-white border-opacity-20 rounded-lg shadow-lg hover:bg-opacity-30 transition-all duration-200">
            Glass Button
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Best Practices</h2>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Maintain consistent button styles throughout your interface</li>
        <li>Use animations thoughtfully to enhance, not distract</li>
        <li>Ensure text has sufficient contrast against button backgrounds</li>
        <li>
          Consider touch targets of at least 44×44px for mobile interfaces
        </li>
        <li>Provide visual feedback for all interactive states</li>
        <li>
          Use appropriate colors to convey meaning (e.g., green for success)
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Accessibility</h2>
      <p className="mb-4">Quarka UI prioritizes accessible button design:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>All buttons maintain WCAG 2.1 AA contrast requirements</li>
        <li>
          Animations respect user preferences with{" "}
          <code>prefers-reduced-motion</code> support
        </li>
        <li>Focus states are clearly visible for keyboard navigation</li>
        <li>Icon buttons include proper ARIA labels</li>
        <li>Loading states announce status changes to screen readers</li>
      </ul>
    </div>
  );
}
