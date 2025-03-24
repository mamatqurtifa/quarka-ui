import React from "react";

export default function Buttons() {
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
        <button className="px-6 py-2.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500/50 focus:outline-none transition-all duration-200 shadow-lg shadow-indigo-500/30">
          Documentation
        </button>
        <button className="px-6 py-2.5 bg-white text-gray-700 border border-gray-200 rounded-md hover:bg-gray-50 hover:border-gray-300 focus:ring-2 focus:ring-gray-200 focus:outline-none transition-all duration-200 shadow-sm">
          Examples
        </button>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-5">Button Variants</h2>
      <p className="mb-6">
        Choose from a wide range of button styles to match your application's
        visual language:
      </p>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-8">
        <h3 className="text-lg font-medium mb-4">Primary Actions</h3>
        <div className="flex flex-wrap gap-4 mb-6">
          <button className="px-5 py-2.5 bg-violet-600 text-white rounded-lg hover:bg-violet-500 active:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all duration-200 shadow-lg shadow-violet-500/25">
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
          <button className="px-5 py-2.5 bg-sky-500 text-white rounded-lg hover:bg-sky-400 active:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all duration-200 shadow-lg shadow-sky-500/25">
            Info
          </button>
        </div>

        <h3 className="text-lg font-medium mb-4">Secondary Actions</h3>
        <div className="flex flex-wrap gap-4">
          <button className="px-5 py-2.5 bg-white text-violet-600 border border-violet-200 rounded-lg hover:bg-violet-50 hover:border-violet-300 active:bg-violet-100 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all duration-200">
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
          <button className="px-5 py-2.5 bg-white text-sky-500 border border-sky-200 rounded-lg hover:bg-sky-50 hover:border-sky-300 active:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all duration-200">
            Info
          </button>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-xl mb-8">
        <h3 className="text-lg font-medium mb-3">Button Styles Code</h3>
        <div className="bg-gray-900 rounded-md mb-6">
          <div className="flex items-center px-4 py-2 bg-gray-800 rounded-t-md">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-b-md overflow-x-auto">
            <pre>{`<!-- Primary Button -->
<button class="px-5 py-2.5 bg-violet-600 text-white rounded-lg hover:bg-violet-500 
active:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500/50 
transition-all duration-200 shadow-lg shadow-violet-500/25">
  Primary
</button>

<!-- Secondary Button -->
<button class="px-5 py-2.5 bg-white text-violet-600 border border-violet-200 
rounded-lg hover:bg-violet-50 hover:border-violet-300 active:bg-violet-100 
focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all duration-200">
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
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-500 transition-all duration-200 shadow-md shadow-teal-500/20">
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
        <h3 className="text-lg font-medium mb-3">Action Button Code</h3>
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
          <button className="px-2.5 py-1 text-xs bg-violet-600 text-white rounded-md hover:bg-violet-500 transition-all duration-200 shadow-sm">
            Extra Small
          </button>
          <button className="px-3 py-1.5 text-sm bg-violet-600 text-white rounded-md hover:bg-violet-500 transition-all duration-200 shadow-sm">
            Small
          </button>
          <button className="px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-500 transition-all duration-200 shadow-md">
            Medium
          </button>
          <button className="px-5 py-2.5 text-base bg-violet-600 text-white rounded-lg hover:bg-violet-500 transition-all duration-200 shadow-md">
            Large
          </button>
          <button className="px-6 py-3 text-lg bg-violet-600 text-white rounded-lg hover:bg-violet-500 transition-all duration-200 shadow-lg">
            Extra Large
          </button>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-xl mb-8">
        <h3 className="text-lg font-medium mb-3">Button Sizes Code</h3>
        <div className="bg-gray-900 rounded-md mb-6">
          <div className="flex items-center px-4 py-2 bg-gray-800 rounded-t-md">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-b-md overflow-x-auto">
            <pre>{`<!-- Extra Small -->
<button class="px-2.5 py-1 text-xs bg-violet-600 text-white rounded-md hover:bg-violet-500 transition-all duration-200 shadow-sm">
  Extra Small
</button>

<!-- Small -->
<button class="px-3 py-1.5 text-sm bg-violet-600 text-white rounded-md hover:bg-violet-500 transition-all duration-200 shadow-sm">
  Small
</button>

<!-- Medium -->
<button class="px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-500 transition-all duration-200 shadow-md">
  Medium
</button>

<!-- Large -->
<button class="px-5 py-2.5 text-base bg-violet-600 text-white rounded-lg hover:bg-violet-500 transition-all duration-200 shadow-md">
  Large
</button>

<!-- Extra Large -->
<button class="px-6 py-3 text-lg bg-violet-600 text-white rounded-lg hover:bg-violet-500 transition-all duration-200 shadow-lg">
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
            <h3 className="text-lg font-medium">Gradient Buttons</h3>
            <div className="flex flex-wrap gap-3">
              <button className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg hover:from-indigo-500 hover:to-violet-500 transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 hover:scale-105">
                Primary
              </button>
              <button className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg hover:from-cyan-400 hover:to-teal-400 transition-all duration-300 shadow-lg hover:shadow-teal-500/30 hover:scale-105">
                Info
              </button>
              <button className="px-5 py-2.5 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-lg hover:from-rose-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-rose-500/30 hover:scale-105">
                Danger
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Pill Buttons</h3>
            <div className="flex flex-wrap gap-3">
              <button className="px-5 py-2.5 bg-violet-600 text-white rounded-full hover:bg-violet-500 transition-all duration-200 shadow-lg hover:shadow-violet-500/30 hover:translate-y-[-2px]">
                Primary
              </button>
              <button className="px-5 py-2.5 bg-white text-violet-600 border border-violet-200 rounded-full hover:bg-violet-50 hover:border-violet-300 transition-all duration-200 shadow-sm hover:shadow-md hover:translate-y-[-2px]">
                Secondary
              </button>
              <button className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full hover:from-amber-400 hover:to-orange-400 shadow-lg hover:shadow-orange-500/30 transition-all duration-200 hover:translate-y-[-2px]">
                Warning
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Elevated Buttons</h3>
            <div className="flex flex-wrap gap-3">
              <button className="px-5 py-3 bg-white text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_20px_rgb(0,0,0,0.1)] transition-all duration-200">
                Elevated
              </button>
              <button className="px-5 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-500 shadow-[0_8px_15px_rgba(79,70,229,0.2)] hover:shadow-[0_8px_20px_rgba(79,70,229,0.3)] transition-all duration-200">
                Primary
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Glowing Buttons</h3>
            <div className="flex flex-wrap gap-3">
              <button className="px-5 py-2.5 bg-violet-600 text-white rounded-lg hover:bg-violet-500 transition-colors duration-200 shadow-[0_0_15px_rgba(124,58,237,0.5)] hover:shadow-[0_0_25px_rgba(124,58,237,0.7)]">
                Violet Glow
              </button>
              <button className="px-5 py-2.5 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400 transition-colors duration-200 shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.7)]">
                Cyan Glow
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-xl mb-8">
        <h3 className="text-lg font-medium mb-3">Modern Button Styles Code</h3>
        <div className="bg-gray-900 rounded-md mb-6">
          <div className="flex items-center px-4 py-2 bg-gray-800 rounded-t-md">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-b-md overflow-x-auto">
            <pre>{`<!-- Gradient Button -->
<button class="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white 
rounded-lg hover:from-indigo-500 hover:to-violet-500 transition-all duration-300 
shadow-lg hover:shadow-indigo-500/30 hover:scale-105">
  Primary
</button>

<!-- Pill Button -->
<button class="px-5 py-2.5 bg-violet-600 text-white rounded-full hover:bg-violet-500 
transition-all duration-200 shadow-lg hover:shadow-violet-500/30 hover:translate-y-[-2px]">
  Primary
</button>

<!-- Elevated Button -->
<button class="px-5 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-500 
shadow-[0_8px_15px_rgba(79,70,229,0.2)] hover:shadow-[0_8px_20px_rgba(79,70,229,0.3)] 
transition-all duration-200">
  Primary
</button>

<!-- Glowing Button -->
<button class="px-5 py-2.5 bg-violet-600 text-white rounded-lg hover:bg-violet-500 
transition-colors duration-200 shadow-[0_0_15px_rgba(124,58,237,0.5)] 
hover:shadow-[0_0_25px_rgba(124,58,237,0.7)]">
  Violet Glow
</button>`}</pre>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-5">
        Toggle & Switch Buttons
      </h2>
      <p className="mb-6">
        Interactive toggle buttons for binary choices and state changes:
      </p>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Theme Toggle</h3>
            <div className="flex items-center">
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
                <span className="sr-only">Toggle theme</span>
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1"></span>
              </button>
              <span className="ml-3 text-sm text-gray-600">Light</span>
            </div>

            <div className="flex items-center">
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-violet-600">
                <span className="sr-only">Toggle theme</span>
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
              </button>
              <span className="ml-3 text-sm text-gray-600">Dark</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Toggle Button Group</h3>
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button className="px-4 py-2 text-sm bg-violet-600 text-white border border-violet-700 rounded-l-lg hover:bg-violet-500 transition-colors duration-200">
                Day
              </button>
              <button className="px-4 py-2 text-sm bg-white text-gray-700 border-y border-gray-300 hover:bg-gray-50 transition-colors duration-200">
                Week
              </button>
              <button className="px-4 py-2 text-sm bg-white text-gray-700 border border-gray-300 rounded-r-lg hover:bg-gray-50 transition-colors duration-200">
                Month
              </button>
            </div>

            <div className="flex gap-1 p-1 bg-gray-100 rounded-lg shadow-inner">
              <button className="px-4 py-1.5 text-sm bg-white text-gray-800 rounded-md shadow-sm transition-colors duration-200">
                All
              </button>
              <button className="px-4 py-1.5 text-sm text-gray-600 hover:text-gray-800 rounded-md transition-colors duration-200">
                Active
              </button>
              <button className="px-4 py-1.5 text-sm text-gray-600 hover:text-gray-800 rounded-md transition-colors duration-200">
                Archived
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-xl mb-8">
        <h3 className="text-lg font-medium mb-3">Toggle Buttons Code</h3>
        <div className="bg-gray-900 rounded-md mb-6">
          <div className="flex items-center px-4 py-2 bg-gray-800 rounded-t-md">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-b-md overflow-x-auto">
            <pre>{`<!-- Theme Toggle (Off) -->
<button class="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
  <span class="sr-only">Toggle theme</span>
  <span class="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1"></span>
</button>

<!-- Theme Toggle (On) -->
<button class="relative inline-flex h-6 w-11 items-center rounded-full bg-violet-600">
  <span class="sr-only">Toggle theme</span>
  <span class="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
</button>

<!-- Toggle Button Group -->
<div class="inline-flex rounded-md shadow-sm" role="group">
  <button class="px-4 py-2 text-sm bg-violet-600 text-white border border-violet-700 rounded-l-lg 
  hover:bg-violet-500 transition-colors duration-200">
    Day
  </button>
  <button class="px-4 py-2 text-sm bg-white text-gray-700 border-y border-gray-300 
  hover:bg-gray-50 transition-colors duration-200">
    Week
  </button>
  <button class="px-4 py-2 text-sm bg-white text-gray-700 border border-gray-300 rounded-r-lg 
  hover:bg-gray-50 transition-colors duration-200">
    Month
  </button>
</div>`}</pre>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-5">Loading States</h2>
      <p className="mb-6">
        Provide visual feedback during asynchronous actions:
      </p>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-3 items-center">
            <button className="w-full px-5 py-2.5 bg-violet-600 text-white rounded-lg flex items-center justify-center gap-2 disabled:bg-violet-400 disabled:cursor-not-allowed transition-colors duration-200">
              <svg
                className="animate-spin h-5 w-5 text-white"
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
            <span className="text-sm text-gray-500">Simple Spinner</span>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <button className="w-full px-5 py-2.5 bg-emerald-600 text-white rounded-lg flex items-center justify-center gap-2 disabled:bg-emerald-400 disabled:cursor-not-allowed transition-colors duration-200">
              <svg
                className="animate-spin h-5 w-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="opacity-50"
                ></path>
              </svg>
              Processing
            </button>
            <span className="text-sm text-gray-500">Elegant Spinner</span>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <button className="w-full px-5 py-2.5 bg-blue-600 text-white rounded-lg relative transition-colors duration-200 overflow-hidden">
              <span className="relative z-10">Upload</span>
              <span
                className="absolute top-0 left-0 h-full bg-blue-500 transition-all duration-500"
                style={{ width: "40%" }}
              ></span>
            </button>
            <span className="text-sm text-gray-500">Progress Indicator</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-xl mb-8">
        <h3 className="text-lg font-medium mb-3">Loading Button Code</h3>
        <div className="bg-gray-900 rounded-md mb-6">
          <div className="flex items-center px-4 py-2 bg-gray-800 rounded-t-md">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-b-md overflow-x-auto">
            <pre>{`<!-- Loading Button with Spinner -->
<button class="px-5 py-2.5 bg-violet-600 text-white rounded-lg flex items-center justify-center 
gap-2 disabled:bg-violet-400 disabled:cursor-not-allowed transition-colors duration-200">
  <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  Loading...
</button>

<!-- Progress Button -->
<button class="px-5 py-2.5 bg-blue-600 text-white rounded-lg relative transition-colors duration-200 overflow-hidden">
  <span class="relative z-10">Upload</span>
  <span class="absolute top-0 left-0 h-full bg-blue-500 transition-all duration-500" style="width: 40%"></span>
</button>`}</pre>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Accessibility Best Practices
      </h2>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>
          Ensure all buttons have sufficient color contrast (WCAG AA minimum
          4.5:1 for text)
        </li>
        <li>
          Add{" "}
          <code className="bg-gray-200 text-violet-700 px-1 py-0.5 rounded text-sm">
            aria-label
          </code>{" "}
          attributes to icon-only buttons for screen reader users
        </li>
        <li>
          Use{" "}
          <code className="bg-gray-200 text-violet-700 px-1 py-0.5 rounded text-sm">
            aria-disabled="true"
          </code>{" "}
          when buttons are visually disabled but still focusable
        </li>
        <li>
          Ensure hover and focus states don't solely rely on color changes
        </li>
        <li>
          Test keyboard navigation to make sure buttons work properly with Tab
          and Enter keys
        </li>
      </ul>

      <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
        <h2 className="text-xl font-semibold mb-4 text-blue-800">
          Customization Tips
        </h2>
        <p className="mb-4">
          Quarka UI buttons can be easily customized to match your brand:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Adapt the color scheme using Tailwind's configuration</li>
          <li>Modify border-radius for more squared or rounded appearances</li>
          <li>Adjust shadow intensity to match your design system's depth</li>
          <li>
            Create your own animation variations by extending the base classes
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Related Components</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <a
          href="/docs/components/button-group"
          className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <h3 className="font-medium text-lg text-blue-600 mb-2">
            Button Groups
          </h3>
          <p className="text-gray-600">
            Combine related buttons into cohesive groups
          </p>
        </a>

        <a
          href="/docs/components/dropdown"
          className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <h3 className="font-medium text-lg text-blue-600 mb-2">Dropdowns</h3>
          <p className="text-gray-600">
            Toggleable menus for additional options
          </p>
        </a>

        <a
          href="/docs/components/icon-button"
          className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <h3 className="font-medium text-lg text-blue-600 mb-2">
            Icon Buttons
          </h3>
          <p className="text-gray-600">Compact buttons with only icons</p>
        </a>
      </div>

      <div className="mt-12 border-t border-gray-200 pt-8">
        <p className="text-sm text-gray-500">
          Last updated: 2025-03-24 by mamaqurtifa
        </p>
      </div>
    </div>
  );
}
