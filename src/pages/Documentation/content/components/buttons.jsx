import React from "react";
import { ChevronRight } from "lucide-react";

export default function Button() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Buttons</h1>
      <p className="mb-6">
        Buttons form the cornerstone of user interaction. Quarka UI offers a
        thoughtfully designed button system with consistent styles, engaging
        interactions, and modern aesthetics that enhance your application's user
        experience.
      </p>

      <div className="flex gap-4 mb-8">
        <button className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 focus:ring-2 focus:ring-blue-500/50 focus:outline-none transition-all duration-200 shadow-lg shadow-blue-500/30">
          Documentation
        </button>
        <button className="px-5 py-2.5 bg-white text-blue-500 border border-blue-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-200 shadow-sm">
          Examples
        </button>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-5">Button Variants</h2>
      <p className="mb-6">
        Choose from a wide range of button styles to match your application's
        visual language:
      </p>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-8">
        <h3 className="text-base font-medium text-gray-700 mb-3">
          Primary Actions
        </h3>
        <div className="flex flex-wrap gap-4 mb-6">
          <button className="px-5 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200 shadow-lg shadow-blue-500/25">
            Primary
          </button>
          <button className="px-5 py-2.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 active:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all duration-200 shadow-lg shadow-emerald-500/25">
            Success
          </button>
          <button className="px-5 py-2.5 bg-amber-500 text-white rounded-lg hover:bg-amber-400 active:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all duration-200 shadow-lg shadow-amber-500/25">
            Warning
          </button>
          <button className="px-5 py-2.5 bg-rose-600 text-white rounded-lg hover:bg-rose-500 active:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500/50 transition-all duration-200 shadow-lg shadow-rose-500/25">
            Danger
          </button>
          <button className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-500 active:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200 shadow-lg shadow-blue-500/25">
            Info
          </button>
        </div>

        <h3 className="text-base font-medium text-gray-700 mb-3">
          Secondary Actions
        </h3>
        <div className="flex flex-wrap gap-4">
          <button className="px-5 py-2.5 bg-white text-blue-500 border border-blue-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 active:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200">
            Secondary
          </button>
          <button className="px-5 py-2.5 bg-white text-emerald-600 border border-emerald-200 rounded-lg hover:bg-emerald-50 hover:border-emerald-300 active:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200">
            Success
          </button>
          <button className="px-5 py-2.5 bg-white text-amber-500 border border-amber-200 rounded-lg hover:bg-amber-50 hover:border-amber-300 active:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-200">
            Warning
          </button>
          <button className="px-5 py-2.5 bg-white text-rose-600 border border-rose-200 rounded-lg hover:bg-rose-50 hover:border-rose-300 active:bg-rose-100 focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition-all duration-200">
            Danger
          </button>
          <button className="px-5 py-2.5 bg-white text-blue-500 border border-blue-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 active:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200">
            Info
          </button>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-xl mb-8">
        <h3 className="text-base font-medium text-gray-700 mb-3">
          Button Styles Code
        </h3>
        <div className="bg-gray-900 rounded-md mb-6">
          <div className="flex items-center px-4 py-2 bg-gray-800 rounded-t-md">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-b-md overflow-x-auto">
            <pre>{`<!-- Primary Button -->
<button class="px-5 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 
active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 
transition-all duration-200 shadow-lg shadow-blue-500/25">
  Primary
</button>

<!-- Secondary Button -->
<button class="px-5 py-2.5 bg-white text-blue-500 border border-blue-200 
rounded-lg hover:bg-blue-50 hover:border-blue-300 active:bg-blue-100 
focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200">
  Secondary
</button>`}</pre>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-5">Common UI Actions</h2>
      <p className="mb-6">
        Standard buttons for common application operations with clean, intuitive
        designs:
      </p>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col gap-3">
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition-all duration-200 shadow-md shadow-emerald-500/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                <polyline points="17 21 17 13 7 13 7 21"></polyline>
                <polyline points="7 3 7 8 15 8"></polyline>
              </svg>
              Save
            </button>
            <span className="text-sm text-gray-500 text-center">
              Save Action
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all duration-200 shadow-md shadow-blue-500/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
              Edit
            </button>
            <span className="text-sm text-gray-500 text-center">
              Edit Action
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-rose-600 text-white rounded-lg hover:bg-rose-500 transition-all duration-200 shadow-md shadow-rose-500/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
              Delete
            </button>
            <span className="text-sm text-gray-500 text-center">
              Delete Action
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition-all duration-200 shadow-md shadow-blue-500/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              View
            </button>
            <span className="text-sm text-gray-500 text-center">
              View Action
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-all duration-200 shadow-md shadow-indigo-500/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              Submit
            </button>
            <span className="text-sm text-gray-500 text-center">
              Submit Action
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-amber-600 text-white rounded-lg hover:bg-amber-500 transition-all duration-200 shadow-md shadow-amber-500/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Export
            </button>
            <span className="text-sm text-gray-500 text-center">
              Export Action
            </span>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-xl mb-8">
        <h3 className="text-base font-medium text-gray-700 mb-3">
          Action Button Code
        </h3>
        <div className="bg-gray-900 rounded-md mb-6">
          <div className="flex items-center px-4 py-2 bg-gray-800 rounded-t-md">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-b-md overflow-x-auto">
            <pre>{`<button class="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white 
rounded-lg hover:bg-blue-500 transition-all duration-200 shadow-md shadow-blue-500/20">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" 
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
  Edit
</button>`}</pre>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-5">Button Sizes</h2>
      <p className="mb-6">
        Choose from different button sizes to fit your interface needs:
      </p>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-8">
        <div className="flex flex-wrap items-center gap-4">
          <button className="px-2.5 py-1 text-xs bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200 shadow-sm">
            Extra Small
          </button>
          <button className="px-3 py-1.5 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200 shadow-sm">
            Small
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200 shadow-md">
            Medium
          </button>
          <button className="px-5 py-2.5 text-base bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 shadow-md">
            Large
          </button>
          <button className="px-6 py-3 text-lg bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 shadow-lg">
            Extra Large
          </button>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-xl mb-8">
        <h3 className="text-base font-medium text-gray-700 mb-3">
          Button Sizes Code
        </h3>
        <div className="bg-gray-900 rounded-md mb-6">
          <div className="flex items-center px-4 py-2 bg-gray-800 rounded-t-md">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-b-md overflow-x-auto">
            <pre>{`<!-- Extra Small -->
<button class="px-2.5 py-1 text-xs bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200 shadow-sm">
  Extra Small
</button>

<!-- Small -->
<button class="px-3 py-1.5 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200 shadow-sm">
  Small
</button>

<!-- Medium -->
<button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200 shadow-md">
  Medium
</button>

<!-- Large -->
<button class="px-5 py-2.5 text-base bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 shadow-md">
  Large
</button>

<!-- Extra Large -->
<button class="px-6 py-3 text-lg bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 shadow-lg">
  Extra Large
</button>`}</pre>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-5">
        Modern Button Styles
      </h2>
      <p className="mb-6">
        Contemporary button designs with engaging hover effects and animations:
      </p>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-base font-medium text-gray-700 mb-3">
              Pill Buttons
            </h3>
            <div className="flex flex-wrap gap-3">
              <button className="px-5 py-2.5 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-200 shadow-lg hover:shadow-blue-500/30 hover:scale-105">
                Primary
              </button>
              <button className="px-5 py-2.5 bg-white text-blue-500 border border-blue-200 rounded-full hover:bg-blue-50 transition-all duration-200 shadow-sm hover:shadow-blue-500/10 hover:scale-105">
                Secondary
              </button>
              <button className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-indigo-500/30 hover:scale-105">
                Gradient
              </button>
              <button className="px-5 py-2.5 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-200 shadow-lg hover:shadow-green-500/30 hover:scale-105">
                Success
              </button>
              <button className="px-5 py-2.5 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-all duration-200 shadow-lg hover:shadow-amber-500/30 hover:scale-105">
                Warning
              </button>
              <button className="px-5 py-2.5 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-all duration-200 shadow-lg hover:shadow-rose-500/30 hover:scale-105">
                Danger
              </button>
            </div>

            <h3 className="text-base font-medium text-gray-700 mb-3">
              Icon Buttons
            </h3>
            <div className="flex flex-wrap gap-3">
              <button className="p-2.5 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-blue-500/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <button className="p-2.5 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-200 shadow-md hover:shadow-green-500/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14"></path>
                  <path d="M5 12h14"></path>
                </svg>
              </button>
              <button className="p-2.5 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-all duration-200 shadow-md hover:shadow-rose-500/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <button className="p-2.5 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-all duration-200 shadow-md hover:shadow-amber-500/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 19l9 2-9-18-9 18 9-2z"></path>
                </svg>
              </button>
              <button className="p-2.5 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-all duration-200 shadow-md hover:shadow-indigo-500/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </button>
              <button className="p-2.5 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-all duration-200 shadow-md hover:shadow-purple-500/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </button>
            </div>

            <div className="mt-6">
              <h4 className="text-base font-medium text-gray-700 mb-3">
                Outlined Icon Buttons
              </h4>
              <div className="flex flex-wrap gap-2.5">
                <button className="p-2.5 bg-white text-blue-500 border border-blue-200 rounded-full hover:bg-blue-50 hover:border-blue-300 transition-all duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                    <polyline points="16 6 12 2 8 6"></polyline>
                    <line x1="12" y1="2" x2="12" y2="15"></line>
                  </svg>
                </button>
                <button className="p-2.5 bg-white text-green-500 border border-green-200 rounded-full hover:bg-green-50 hover:border-green-300 transition-all duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </button>
                <button className="p-2.5 bg-white text-rose-500 border border-rose-200 rounded-full hover:bg-rose-50 hover:border-rose-300 transition-all duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                  </svg>
                </button>
                <button className="p-2.5 bg-white text-amber-500 border border-amber-200 rounded-full hover:bg-amber-50 hover:border-amber-300 transition-all duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </button>
                <button className="p-2.5 bg-white text-indigo-500 border border-indigo-200 rounded-full hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </button>
                <button className="p-2.5 bg-white text-purple-500 border border-purple-200 rounded-full hover:bg-purple-50 hover:border-purple-300 transition-all duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-base font-medium text-gray-700 mb-3">
                Soft Icon Buttons
              </h4>
              <div className="flex flex-wrap gap-3">
                <button className="p-2.5 bg-blue-50 text-blue-500 rounded-full hover:bg-blue-100 transition-all duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </button>
                <button className="p-2.5 bg-green-50 text-green-500 rounded-full hover:bg-green-100 transition-all duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </button>
                <button className="p-2.5 bg-rose-50 text-rose-500 rounded-full hover:bg-rose-100 transition-all duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </button>
                <button className="p-2.5 bg-amber-50 text-amber-500 rounded-full hover:bg-amber-100 transition-all duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </button>
                <button className="p-2.5 bg-indigo-50 text-indigo-500 rounded-full hover:bg-indigo-100 transition-all duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-base font-medium text-gray-700 mb-3">
                Icon Buttons with Text
              </h4>
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-blue-500/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-200 shadow-md hover:shadow-green-500/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                    <polyline points="17 21 17 13 7 13 7 21"></polyline>
                    <polyline points="7 3 7 8 15 8"></polyline>
                  </svg>
                  Save
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white text-blue-500 border border-blue-200 rounded-full hover:bg-blue-50 transition-all duration-200 shadow-sm hover:shadow-blue-500/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                  Edit
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-all duration-200 shadow-md hover:shadow-rose-500/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  </svg>
                  Delete
                </button>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-base font-medium text-gray-700 mb-3">
                Special Icon Buttons
              </h4>
              <div className="flex flex-wrap gap-3">
                <button className="p-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-indigo-500/30 transform hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </button>
                <button className="p-2.5 bg-white text-amber-500 rounded-full hover:bg-amber-50 transition-all duration-200 shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:shadow-[0_0_20px_rgba(245,158,11,0.5)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
                <button className="p-2.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full hover:from-rose-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-rose-500/30 transform hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 8l-5-5-5 5M12 3v16"></path>
                  </svg>
                </button>
              </div>
            </div>

            <h3 className="text-base font-medium text-gray-700 mb-3">
              Loading Buttons
            </h3>
            <div className="flex flex-wrap gap-3">
              <button
                className="flex items-center gap-2 px-5 py-2 bg-white text-blue-500 border border-blue-200 rounded-full hover:bg-blue-50 transition-all duration-200 shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
                disabled
              >
                <svg
                  className="animate-spin h-4 w-4 text-blue-500"
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
                Loading...
              </button>
              <button
                className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 shadow-md disabled:opacity-80 disabled:cursor-not-allowed"
                disabled
              >
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
                Submitting...
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-medium text-gray-700 mb-3">
              Button Groups
            </h3>
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex rounded-full shadow-sm" role="group">
                <button className="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-blue-200 rounded-l-full hover:bg-blue-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:text-blue-700">
                  Day
                </button>
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-blue-500 hover:bg-blue-600 focus:z-10 focus:ring-2 focus:ring-blue-500">
                  Week
                </button>
                <button className="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-blue-200 rounded-r-full hover:bg-blue-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:text-blue-700">
                  Month
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              <div
                className="inline-flex rounded-full shadow-sm bg-gray-100 p-1 gap-1"
                role="group"
              >
                <button className="px-4 py-1.5 text-sm font-medium text-white bg-blue-500 rounded-full shadow-sm hover:bg-blue-600 focus:z-10 focus:ring-2 focus:ring-blue-500 transition-all duration-200">
                  List
                </button>
                <button className="px-4 py-1.5 text-sm font-medium text-gray-700 bg-transparent rounded-full hover:bg-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-500 transition-all duration-200">
                  Grid
                </button>
                <button className="px-4 py-1.5 text-sm font-medium text-gray-700 bg-transparent rounded-full hover:bg-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-500 transition-all duration-200">
                  Table
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              <div
                className="inline-flex rounded-full shadow-sm border border-blue-200 overflow-hidden"
                role="group"
              >
                <button className="px-5 py-2 text-sm font-medium text-blue-700 bg-white border-r border-blue-200 hover:bg-blue-50 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:text-blue-700">
                  First
                </button>
                <button className="px-5 py-2 text-sm font-medium text-blue-700 bg-white border-r border-blue-200 hover:bg-blue-50 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:text-blue-700">
                  Middle
                </button>
                <button className="px-5 py-2 text-sm font-medium text-blue-700 bg-white hover:bg-blue-50 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:text-blue-700">
                  Last
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              <div
                className="inline-flex rounded-full shadow-sm bg-white border border-gray-200"
                role="group"
              >
                <button className="p-2 text-gray-500 bg-white rounded-l-full hover:text-blue-600 hover:bg-blue-50 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
                <button className="p-2 text-white bg-blue-500 hover:bg-blue-600 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                </button>
                <button className="p-2 text-gray-500 bg-white rounded-r-full hover:text-blue-600 hover:bg-blue-50 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              <div
                className="inline-flex rounded-full shadow p-1 bg-blue-50"
                role="group"
              >
                <button className="px-4 py-1.5 text-sm font-medium text-blue-700 bg-white rounded-full shadow-sm hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500">
                  Daily
                </button>
                <button className="px-4 py-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 rounded-full hover:bg-white/50 focus:z-10 focus:ring-2 focus:ring-blue-500">
                  Weekly
                </button>
                <button className="px-4 py-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 rounded-full hover:bg-white/50 focus:z-10 focus:ring-2 focus:ring-blue-500">
                  Monthly
                </button>
                <button className="px-4 py-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 rounded-full hover:bg-white/50 focus:z-10 focus:ring-2 focus:ring-blue-500">
                  Yearly
                </button>
              </div>
            </div>

            <h3 className="text-base font-medium text-gray-700 mb-3">
              Interactive Buttons
            </h3>
            <div className="flex flex-wrap gap-4">
              <button className="group px-5 py-2.5 bg-white text-blue-600 border border-blue-200 rounded-full hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all duration-300 shadow-sm">
                <span>Change on Hover</span>
              </button>

              <button className="group px-5 py-2.5 bg-blue-500 text-white rounded-full hover:pr-9 transition-all duration-300 shadow-md relative overflow-hidden">
                <span className="relative z-10 group-hover:mr-4">
                  View Details
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 absolute top-1/2 -translate-y-1/2 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </button>

              <button className="group relative px-8 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full overflow-hidden shadow-md">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Slide Effect
                </span>
                <span className="absolute bottom-0 left-0 h-1 w-full bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </button>

              <button className="group flex items-center gap-2 px-5 py-2.5 bg-white text-indigo-600 border border-indigo-200 rounded-full hover:bg-indigo-50 transition-all duration-300 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-0 w-0 group-hover:h-5 group-hover:w-5 transition-all duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span>Icon Reveal</span>
              </button>

              <button className="group relative px-6 py-2.5 bg-amber-500 text-white rounded-full overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
                <span className="relative block group-hover:translate-y-[-100%] opacity-100 group-hover:opacity-0 transition-all duration-300">
                  Click Me
                </span>
                <span className="absolute left-0 top-0 h-full w-full flex items-center justify-center translate-y-[100%] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Let's Go!
                </span>
              </button>

              <button className="group relative px-6 py-2.5 bg-violet-500 text-white rounded-full shadow-md overflow-hidden">
                <span className="relative z-10">Shine Effect</span>
                <span className="absolute top-0 left-0 w-12 h-full bg-white/20 -skew-x-30 transform -translate-x-32 group-hover:translate-x-64 transition-all duration-1000 ease-out"></span>
              </button>
            </div>

            <h3 className="text-base font-medium text-gray-700 mb-3">
              Social Media Buttons
            </h3>
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 px-4 py-2.5 bg-[#1877F2] text-white rounded-full hover:bg-[#0E65D9] transition-colors duration-200 shadow-md hover:shadow-[#1877F2]/30">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
                Facebook
              </button>

              <button className="flex items-center gap-2 px-4 py-2.5 bg-[#24292E] text-white rounded-full hover:bg-[#383E45] transition-colors duration-200 shadow-md hover:shadow-[#24292E]/30">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017 2 16.5 4.865 20.298 8.839 21.645c.64.118.88-.28.88-.585 0-.293-.01-1.066-.015-2.092-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.087-.745.082-.729.082-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C19.138 20.297 22 16.5 22 12.017 22 6.484 17.525 2 12 2z"
                  ></path>
                </svg>
                GitHub
              </button>

              <button className="flex items-center gap-2 px-4 py-2.5 bg-[#0A66C2] text-white rounded-full hover:bg-[#004182] transition-colors duration-200 shadow-md hover:shadow-[#0A66C2]/30">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
                LinkedIn
              </button>

              <button className="flex items-center gap-2 px-4 py-2.5 bg-[#FF0000] text-white rounded-full hover:bg-[#CC0000] transition-colors duration-200 shadow-md hover:shadow-[#FF0000]/30">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                </svg>
                YouTube
              </button>

              <button className="flex items-center gap-2 px-4 py-2.5 bg-[#25D366] text-white rounded-full hover:bg-[#128C7E] transition-colors duration-200 shadow-md hover:shadow-[#25D366]/30">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                </svg>
                WhatsApp
              </button>
            </div>

            <h3 className="text-base font-medium text-gray-700 mb-3">
              Button with Badge
            </h3>
            <div className="flex flex-wrap gap-3">
              <button className="relative px-5 py-2.5 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200 shadow-md">
                Notifications
                <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white ring-2 ring-white">
                  5
                </span>
              </button>

              <button className="relative px-5 py-2.5 bg-white text-blue-600 border border-blue-200 rounded-full hover:bg-blue-50 transition-colors duration-200 shadow-sm">
                Messages
                <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-xs font-medium text-blue-600">
                  3
                </span>
              </button>

              <button className="relative inline-flex px-5 py-2.5 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-colors duration-200 shadow-md">
                Cart
                <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-medium text-indigo-600">
                  2
                </span>
              </button>

              <button className="group relative px-5 py-2.5 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors duration-200 shadow-md">
                Updates
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-xs font-bold text-white ring-2 ring-white group-hover:animate-pulse">
                  9+
                </span>
              </button>

              <button className="relative inline-flex items-center px-5 py-2.5 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors duration-200 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                Orders
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white ring-2 ring-purple-500">
                  7
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mt-8">
        <h2 className="text-xl font-semibold mb-4">Usage Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-blue-600 mb-3">Do's</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">
                  Use primary buttons for main actions
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">
                  Maintain adequate spacing between buttons
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">
                  Use descriptive text for button labels
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">
                  Provide visual feedback on hover and focus
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-rose-600 mb-3">Don'ts</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">
                  Use multiple primary buttons in one section
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">
                  Use vague or generic button text (e.g., "Click here")
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">
                  Overcrowd interfaces with too many buttons
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">
                  Use colors that don't provide enough contrast
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
