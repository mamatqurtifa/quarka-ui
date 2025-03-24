import React from "react";

export default function ButtonGroup() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Button Group</h1>
      <p className="mb-6">
        Button groups allow multiple related actions to be grouped together
        visually, creating a cohesive control set that helps users understand
        connected choices or operations.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Basic Usage</h2>
      <p className="mb-6">
        Create button groups by combining multiple buttons with consistent
        styling and removing the gap between them:
      </p>

      <div className="bg-gray-100 p-6 rounded-xl mb-8">
        <h3 className="text-lg font-medium mb-3">Basic Button Group</h3>
        <div className="bg-gray-900 rounded-md mb-6">
          <div className="flex items-center px-4 py-2 bg-gray-800 rounded-t-md">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-b-md overflow-x-auto">
            <pre>{`<div class="inline-flex rounded-md shadow-sm" role="group">
  <button class="px-4 py-2 text-sm font-medium text-indigo-600 bg-white border border-indigo-300 rounded-l-lg hover:bg-indigo-50 focus:z-10 focus:ring-2 focus:ring-indigo-500 focus:text-indigo-700">
    Previous
  </button>
  <button class="px-4 py-2 text-sm font-medium text-indigo-600 bg-white border-t border-b border-indigo-300 hover:bg-indigo-50 focus:z-10 focus:ring-2 focus:ring-indigo-500 focus:text-indigo-700">
    Now
  </button>
  <button class="px-4 py-2 text-sm font-medium text-indigo-600 bg-white border border-indigo-300 rounded-r-lg hover:bg-indigo-50 focus:z-10 focus:ring-2 focus:ring-indigo-500 focus:text-indigo-700">
    Next
  </button>
</div>`}</pre>
          </div>
        </div>

        <h3 className="text-lg font-medium mb-3">Preview</h3>
        <div className="bg-white p-6 rounded-lg border border-gray-300 flex justify-center">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button className="px-4 py-2 text-sm font-medium text-indigo-600 bg-white border border-indigo-300 rounded-l-lg hover:bg-indigo-50 focus:z-10 focus:ring-2 focus:ring-indigo-500 focus:text-indigo-700">
              Previous
            </button>
            <button className="px-4 py-2 text-sm font-medium text-indigo-600 bg-white border-t border-b border-indigo-300 hover:bg-indigo-50 focus:z-10 focus:ring-2 focus:ring-indigo-500 focus:text-indigo-700">
              Now
            </button>
            <button className="px-4 py-2 text-sm font-medium text-indigo-600 bg-white border border-indigo-300 rounded-r-lg hover:bg-indigo-50 focus:z-10 focus:ring-2 focus:ring-indigo-500 focus:text-indigo-700">
              Next
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Solid Button Groups</h2>
      <p className="mb-6">
        Create visually striking button groups with solid backgrounds:
      </p>

      <div className="bg-gray-100 p-6 rounded-xl mb-8">
        <h3 className="text-lg font-medium mb-3">Solid Style Button Group</h3>
        <div className="bg-gray-900 rounded-md mb-6">
          <div className="flex items-center px-4 py-2 bg-gray-800 rounded-t-md">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-b-md overflow-x-auto">
            <pre>{`<div class="inline-flex rounded-md shadow-sm" role="group">
  <button class="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-violet-600 to-violet-700 border border-violet-600 rounded-l-lg hover:bg-gradient-to-r hover:from-violet-700 hover:to-violet-800 focus:z-10 focus:ring-2 focus:ring-violet-700">
    Day
  </button>
  <button class="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-violet-500 to-violet-600 border-t border-b border-violet-600 hover:bg-gradient-to-r hover:from-violet-600 hover:to-violet-700 focus:z-10 focus:ring-2 focus:ring-violet-700">
    Week
  </button>
  <button class="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-violet-600 to-violet-700 border border-violet-600 rounded-r-lg hover:bg-gradient-to-r hover:from-violet-700 hover:to-violet-800 focus:z-10 focus:ring-2 focus:ring-violet-700">
    Month
  </button>
</div>`}</pre>
          </div>
        </div>

        <h3 className="text-lg font-medium mb-3">Preview</h3>
        <div className="bg-white p-6 rounded-lg border border-gray-300 flex justify-center">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-violet-600 to-violet-700 border border-violet-600 rounded-l-lg hover:bg-gradient-to-r hover:from-violet-700 hover:to-violet-800 focus:z-10 focus:ring-2 focus:ring-violet-700">
              Day
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-violet-500 to-violet-600 border-t border-b border-violet-600 hover:bg-gradient-to-r hover:from-violet-600 hover:to-violet-700 focus:z-10 focus:ring-2 focus:ring-violet-700">
              Week
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-violet-600 to-violet-700 border border-violet-600 rounded-r-lg hover:bg-gradient-to-r hover:from-violet-700 hover:to-violet-800 focus:z-10 focus:ring-2 focus:ring-violet-700">
              Month
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Icon Button Groups</h2>
      <p className="mb-6">
        Combine icons for a compact and visually intuitive control group:
      </p>

      <div className="bg-gray-100 p-6 rounded-xl mb-8">
        <h3 className="text-lg font-medium mb-3">Icon Button Group</h3>
        <div className="bg-gray-900 rounded-md mb-6">
          <div className="flex items-center px-4 py-2 bg-gray-800 rounded-t-md">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-b-md overflow-x-auto">
            <pre>{`<div class="inline-flex rounded-md shadow-sm" role="group" aria-label="Text formatting options">
  <button class="p-2 text-slate-700 bg-white border border-slate-300 rounded-l-lg hover:bg-slate-50 focus:z-10 focus:ring-2 focus:ring-slate-500" aria-label="Bold text">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z"/>
    </svg>
  </button>
  <button class="p-2 text-slate-700 bg-white border-t border-b border-slate-300 hover:bg-slate-50 focus:z-10 focus:ring-2 focus:ring-slate-500" aria-label="Italic text">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z"/>
    </svg>
  </button>
  <button class="p-2 text-slate-700 bg-white border border-slate-300 rounded-r-lg hover:bg-slate-50 focus:z-10 focus:ring-2 focus:ring-slate-500" aria-label="Underline text">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136zM12.5 15h-9v-1h9v1z"/>
    </svg>
  </button>
</div>`}</pre>
          </div>
        </div>

        <h3 className="text-lg font-medium mb-3">Preview</h3>
        <div className="bg-white p-6 rounded-lg border border-gray-300 flex justify-center">
          <div
            className="inline-flex rounded-md shadow-sm"
            role="group"
            aria-label="Text formatting options"
          >
            <button
              className="p-2 text-slate-700 bg-white border border-slate-300 rounded-l-lg hover:bg-slate-50 focus:z-10 focus:ring-2 focus:ring-slate-500"
              aria-label="Bold text"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z" />
              </svg>
            </button>
            <button
              className="p-2 text-slate-700 bg-white border-t border-b border-slate-300 hover:bg-slate-50 focus:z-10 focus:ring-2 focus:ring-slate-500"
              aria-label="Italic text"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z" />
              </svg>
            </button>
            <button
              className="p-2 text-slate-700 bg-white border border-slate-300 rounded-r-lg hover:bg-slate-50 focus:z-10 focus:ring-2 focus:ring-slate-500"
              aria-label="Underline text"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136zM12.5 15h-9v-1h9v1z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Segmented Control</h2>
      <p className="mb-6">
        Create elegant segmented controls for toggle selections:
      </p>

      <div className="bg-gray-100 p-6 rounded-xl mb-8">
        <h3 className="text-lg font-medium mb-3">Segmented Control</h3>
        <div className="bg-gray-900 rounded-md mb-6">
          <div className="flex items-center px-4 py-2 bg-gray-800 rounded-t-md">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-b-md overflow-x-auto">
            <pre>{`<div class="inline-flex p-1 rounded-lg bg-gray-100 shadow-inner" role="group">
  <button class="px-4 py-2 text-sm font-medium rounded-md text-gray-800 bg-white shadow transition-all">
    Personal
  </button>
  <button class="px-4 py-2 text-sm font-medium rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-all">
    Team
  </button>
  <button class="px-4 py-2 text-sm font-medium rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-all">
    Enterprise
  </button>
</div>`}</pre>
          </div>
        </div>

        <h3 className="text-lg font-medium mb-3">Preview</h3>
        <div className="bg-white p-6 rounded-lg border border-gray-300 flex justify-center">
          <div
            className="inline-flex p-1 rounded-lg bg-gray-100 shadow-inner"
            role="group"
          >
            <button className="px-4 py-2 text-sm font-medium rounded-md text-gray-800 bg-white shadow transition-all">
              Personal
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-all">
              Team
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-all">
              Enterprise
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Pill Button Group</h2>
      <p className="mb-6">
        Create a modern pill-style button group for a softer look:
      </p>

      <div className="bg-gray-100 p-6 rounded-xl mb-8">
        <h3 className="text-lg font-medium mb-3">Pill Button Group</h3>
        <div className="bg-gray-900 rounded-md mb-6">
          <div className="flex items-center px-4 py-2 bg-gray-800 rounded-t-md">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-b-md overflow-x-auto">
            <pre>{`<div class="inline-flex rounded-full shadow-sm" role="group">
  <button class="px-5 py-2 text-sm font-medium text-teal-700 bg-white border border-teal-500 rounded-l-full hover:bg-teal-50 focus:z-10 focus:ring-2 focus:ring-teal-600">
    Draft
  </button>
  <button class="px-5 py-2 text-sm font-medium text-white bg-teal-600 border border-teal-600 hover:bg-teal-700 focus:z-10 focus:ring-2 focus:ring-teal-600">
    Published
  </button>
  <button class="px-5 py-2 text-sm font-medium text-teal-700 bg-white border border-teal-500 rounded-r-full hover:bg-teal-50 focus:z-10 focus:ring-2 focus:ring-teal-600">
    Archived
  </button>
</div>`}</pre>
          </div>
        </div>

        <h3 className="text-lg font-medium mb-3">Preview</h3>
        <div className="bg-white p-6 rounded-lg border border-gray-300 flex justify-center">
          <div className="inline-flex rounded-full shadow-sm" role="group">
            <button className="px-5 py-2 text-sm font-medium text-teal-700 bg-white border border-teal-500 rounded-l-full hover:bg-teal-50 focus:z-10 focus:ring-2 focus:ring-teal-600">
              Draft
            </button>
            <button className="px-5 py-2 text-sm font-medium text-white bg-teal-600 border border-teal-600 hover:bg-teal-700 focus:z-10 focus:ring-2 focus:ring-teal-600">
              Published
            </button>
            <button className="px-5 py-2 text-sm font-medium text-teal-700 bg-white border border-teal-500 rounded-r-full hover:bg-teal-50 focus:z-10 focus:ring-2 focus:ring-teal-600">
              Archived
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Toggle Button Group</h2>
      <p className="mb-6">
        Create toggleable buttons that visually represent selection states:
      </p>

      <div className="bg-gray-100 p-6 rounded-xl mb-8">
        <h3 className="text-lg font-medium mb-3">Toggle Button Group</h3>
        <div className="bg-gray-900 rounded-md mb-6">
          <div className="flex items-center px-4 py-2 bg-gray-800 rounded-t-md">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-b-md overflow-x-auto">
            <pre>{`<div class="inline-flex rounded-md shadow-sm" role="group">
  <button class="px-4 py-2 text-sm font-medium text-pink-700 bg-pink-100 border border-pink-200 rounded-l-lg hover:bg-pink-200 focus:z-10 focus:ring-2 focus:ring-pink-500">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
    </svg>
    Left
  </button>
  <button class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border-t border-b border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-pink-500">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
    Center
  </button>
  <button class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-pink-500">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
    Right
  </button>
</div>`}</pre>
          </div>
        </div>

        <h3 className="text-lg font-medium mb-3">Preview</h3>
        <div className="bg-white p-6 rounded-lg border border-gray-300 flex justify-center">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button className="px-4 py-2 text-sm font-medium text-pink-700 bg-pink-100 border border-pink-200 rounded-l-lg hover:bg-pink-200 focus:z-10 focus:ring-2 focus:ring-pink-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1 inline"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
              Left
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border-t border-b border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-pink-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1 inline"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              Center
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-pink-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1 inline"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              Right
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Dark Mode Button Group
      </h2>
      <p className="mb-6">
        Create a sleek dark mode button group for modern interfaces:
      </p>

      <div className="bg-gray-100 p-6 rounded-xl mb-8">
        <h3 className="text-lg font-medium mb-3">Dark Mode Button Group</h3>
        <div className="bg-gray-900 rounded-md mb-6">
          <div className="flex items-center px-4 py-2 bg-gray-800 rounded-t-md">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-b-md overflow-x-auto">
            <pre>{`<div class="p-6 bg-gray-900 rounded-lg">
  <div class="inline-flex rounded-md shadow-sm" role="group">
    <button class="px-4 py-2 text-sm font-medium text-white bg-gray-800 border border-gray-700 rounded-l-lg hover:bg-gray-700 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-500">
      List
    </button>
    <button class="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-800 border-t border-b border-gray-700 hover:bg-gray-700 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-500">
      Board
    </button>
    <button class="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-800 border border-gray-700 rounded-r-lg hover:bg-gray-700 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-500">
      Calendar
    </button>
  </div>
</div>`}</pre>
          </div>
        </div>

        <h3 className="text-lg font-medium mb-3">Preview</h3>
        <div className="bg-white p-6 rounded-lg border border-gray-300 flex justify-center">
          <div className="p-6 bg-gray-900 rounded-lg">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button className="px-4 py-2 text-sm font-medium text-white bg-gray-800 border border-gray-700 rounded-l-lg hover:bg-gray-700 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-500">
                List
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-800 border-t border-b border-gray-700 hover:bg-gray-700 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-500">
                Board
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-800 border border-gray-700 rounded-r-lg hover:bg-gray-700 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-500">
                Calendar
              </button>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Action Button Groups
      </h2>
      <p className="mb-6">
        Create button groups for common actions like CRUD operations:
      </p>

      <div className="bg-gray-100 p-6 rounded-xl mb-8">
        <h3 className="text-lg font-medium mb-3">CRUD Action Buttons</h3>
        <div className="bg-gray-900 rounded-md mb-6">
          <div className="flex items-center px-4 py-2 bg-gray-800 rounded-t-md">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-b-md overflow-x-auto">
            <pre>{`<div class="inline-flex rounded-md shadow-sm" role="group">
  <button class="px-3 py-2 text-xs font-medium text-white bg-blue-600 border border-blue-600 rounded-l-lg hover:bg-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700" title="View">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  </button>
  <button class="px-3 py-2 text-xs font-medium text-white bg-green-600 border border-green-600 hover:bg-green-700 focus:z-10 focus:ring-2 focus:ring-green-700" title="Edit">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  </button>
  <button class="px-3 py-2 text-xs font-medium text-white bg-red-600 border border-red-600 rounded-r-lg hover:bg-red-700 focus:z-10 focus:ring-2 focus:ring-red-700" title="Delete">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  </button>
</div>`}</pre>
          </div>
        </div>

        <h3 className="text-lg font-medium mb-3">Preview</h3>
        <div className="bg-white p-6 rounded-lg border border-gray-300 flex justify-center">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              className="px-3 py-2 text-xs font-medium text-white bg-blue-600 border border-blue-600 rounded-l-lg hover:bg-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700"
              title="View"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </button>
            <button
              className="px-3 py-2 text-xs font-medium text-white bg-green-600 border border-green-600 hover:bg-green-700 focus:z-10 focus:ring-2 focus:ring-green-700"
              title="Edit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>
            <button
              className="px-3 py-2 text-xs font-medium text-white bg-red-600 border border-red-600 rounded-r-lg hover:bg-red-700 focus:z-10 focus:ring-2 focus:ring-red-700"
              title="Delete"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Best Practices</h2>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Keep button groups visually distinct from standalone buttons</li>
        <li>Use consistent sizing and styling within each group</li>
        <li>Group only logically related actions together</li>
        <li>Ensure proper contrast between selected and unselected states</li>
        <li>Add descriptive labels or tooltips for icon-only buttons</li>
        <li>Consider keyboard navigation for accessibility</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Examples</h2>

      <h3 className="text-xl font-medium mt-6 mb-3">Basic Button Group</h3>
      <div className="mb-6 p-4 border rounded-md bg-gray-50">
        <div className="flex">
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-l-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
            Left
          </button>
          <button className="px-4 py-2 bg-white border-t border-b border-gray-300 text-gray-700 text-sm hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
            Middle
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-r-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
            Right
          </button>
        </div>

        <pre className="mt-4 p-3 bg-gray-800 text-white rounded-md overflow-x-auto">
          <code>{`<div className="flex">
  <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-l-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
    Left
  </button>
  <button className="px-4 py-2 bg-white border-t border-b border-gray-300 text-gray-700 text-sm hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
    Middle
  </button>
  <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-r-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
    Right
  </button>
</div>`}</code>
        </pre>
      </div>

      <h3 className="text-xl font-medium mt-6 mb-3">Icon Button Group</h3>
      <div className="mb-6 p-4 border rounded-md bg-gray-50">
        <div className="flex">
          <button className="p-2 bg-white border border-gray-300 text-gray-700 rounded-l-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="p-2 bg-white border-t border-b border-gray-300 text-gray-700 hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12h18M3 6h18M3 18h18"
              />
            </svg>
          </button>
          <button className="p-2 bg-white border border-gray-300 text-gray-700 rounded-r-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <pre className="mt-4 p-3 bg-gray-800 text-white rounded-md overflow-x-auto">
          <code>{`<div className="flex">
  <button className="p-2 bg-white border border-gray-300 text-gray-700 rounded-l-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
    </svg>
  </button>
  <button className="p-2 bg-white border-t border-b border-gray-300 text-gray-700 hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  </button>
  <button className="p-2 bg-white border border-gray-300 text-gray-700 rounded-r-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
    </svg>
  </button>
</div>`}</code>
        </pre>
      </div>

      <h3 className="text-xl font-medium mt-6 mb-3">Toggle Button Group</h3>
      <div className="mb-6 p-4 border rounded-md bg-gray-50">
        <div className="flex">
          <button className="px-4 py-2 bg-blue-600 border border-blue-600 text-white text-sm rounded-l-md hover:bg-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
            Day
          </button>
          <button className="px-4 py-2 bg-white border-t border-b border-gray-300 text-gray-700 text-sm hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
            Week
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-r-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
            Month
          </button>
        </div>

        <pre className="mt-4 p-3 bg-gray-800 text-white rounded-md overflow-x-auto">
          <code>{`<div className="flex">
  <button className="px-4 py-2 bg-blue-600 border border-blue-600 text-white text-sm rounded-l-md hover:bg-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
    Day
  </button>
  <button className="px-4 py-2 bg-white border-t border-b border-gray-300 text-gray-700 text-sm hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
    Week
  </button>
  <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-r-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
    Month
  </button>
</div>`}</code>
        </pre>
      </div>

      <h3 className="text-xl font-medium mt-6 mb-3">Vertical Button Group</h3>
      <div className="mb-6 p-4 border rounded-md bg-gray-50">
        <div className="inline-flex flex-col">
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-t-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
            Top
          </button>
          <button className="px-4 py-2 bg-white border-l border-r border-gray-300 text-gray-700 text-sm hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
            Middle
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-b-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
            Bottom
          </button>
        </div>

        <pre className="mt-4 p-3 bg-gray-800 text-white rounded-md overflow-x-auto">
          <code>{`<div className="inline-flex flex-col">
  <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-t-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
    Top
  </button>
  <button className="px-4 py-2 bg-white border-l border-r border-gray-300 text-gray-700 text-sm hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
    Middle
  </button>
  <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-b-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
    Bottom
  </button>
</div>`}</code>
        </pre>
      </div>

      <h3 className="text-xl font-medium mt-6 mb-3">Sizing Options</h3>
      <div className="mb-6 p-4 border rounded-md bg-gray-50 space-y-4">
        <div>
          <p className="mb-2 text-sm text-gray-600">Small</p>
          <div className="flex">
            <button className="px-2.5 py-1.5 bg-white border border-gray-300 text-gray-700 text-xs rounded-l-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              Left
            </button>
            <button className="px-2.5 py-1.5 bg-white border-t border-b border-gray-300 text-gray-700 text-xs hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              Middle
            </button>
            <button className="px-2.5 py-1.5 bg-white border border-gray-300 text-gray-700 text-xs rounded-r-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              Right
            </button>
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm text-gray-600">Medium (Default)</p>
          <div className="flex">
            <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-l-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              Left
            </button>
            <button className="px-4 py-2 bg-white border-t border-b border-gray-300 text-gray-700 text-sm hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              Middle
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-r-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              Right
            </button>
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm text-gray-600">Large</p>
          <div className="flex">
            <button className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 text-base rounded-l-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              Left
            </button>
            <button className="px-5 py-2.5 bg-white border-t border-b border-gray-300 text-gray-700 text-base hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              Middle
            </button>
            <button className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 text-base rounded-r-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              Right
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Accessibility Considerations
      </h2>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>
          Use{" "}
          <code className="bg-gray-100 px-1 py-0.5 rounded">role="group"</code>{" "}
          and{" "}
          <code className="bg-gray-100 px-1 py-0.5 rounded">aria-label</code> to
          identify button groups
        </li>
        <li>Ensure keyboard navigation works between buttons in the group</li>
        <li>Provide visual feedback for focus states</li>
        <li>
          When buttons toggle states, use{" "}
          <code className="bg-gray-100 px-1 py-0.5 rounded">
            aria-pressed="true/false"
          </code>
        </li>
        <li>
          For icon-only buttons, include{" "}
          <code className="bg-gray-100 px-1 py-0.5 rounded">aria-label</code> to
          describe their function
        </li>
      </ul>

      <div className="rounded-md bg-blue-50 p-4 mb-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-blue-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3 flex-1 md:flex md:justify-between">
            <p className="text-sm text-blue-700">
              For complete accessibility, button groups should incorporate ARIA
              attributes and proper keyboard navigation.
            </p>
            <p className="mt-3 text-sm md:mt-0 md:ml-6">
              <a
                href="https://www.w3.org/WAI/ARIA/apg/patterns/button/"
                className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600"
              >
                Learn more
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Implementation with React
      </h2>
      <p className="mb-4">
        Here's an example of how to implement a toggle button group with React
        state:
      </p>

      <pre className="p-4 bg-gray-800 text-white rounded-md overflow-x-auto mb-6">
        <code>{`import React, { useState } from 'react';

function ToggleButtonGroup({ options }) {
  const [selected, setSelected] = useState(options[0]?.value || null);

  return (
    <div className="flex" role="group" aria-label="Toggle options">
      {options.map((option, index) => {
        const isFirst = index === 0;
        const isLast = index === options.length - 1;
        const isSelected = selected === option.value;
        
        return (
          <button
            key={option.value}
            onClick={() => setSelected(option.value)}
            aria-pressed={isSelected}
            className={\`
              px-4 py-2 text-sm
              \${isSelected 
                ? 'bg-blue-600 border-blue-600 text-white hover:bg-blue-700' 
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
              }
              \${isFirst ? 'rounded-l-md' : ''}
              \${isLast ? 'rounded-r-md' : ''}
              \${!isFirst && !isLast ? 'border-t border-b' : 'border'}
              focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none
            \`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

// Example usage
function App() {
  const viewOptions = [
    { label: 'Day', value: 'day' },
    { label: 'Week', value: 'week' },
    { label: 'Month', value: 'month' },
  ];

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">Calendar View</h1>
      <ToggleButtonGroup options={viewOptions} />
    </div>
  );
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Customization</h2>
      <p className="mb-4">
        Quarka UI button groups can be customized extensively through Tailwind's
        utility classes:
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Custom Colors</h3>
      <div className="mb-6 p-4 border rounded-md bg-gray-50">
        <div className="flex">
          <button className="px-4 py-2 bg-amber-500 border border-amber-500 text-white text-sm rounded-l-md hover:bg-amber-600 focus:z-10 focus:ring-2 focus:ring-amber-400 focus:outline-none">
            Delete
          </button>
          <button className="px-4 py-2 bg-emerald-500 border border-emerald-500 text-white text-sm rounded-r-md hover:bg-emerald-600 focus:z-10 focus:ring-2 focus:ring-emerald-400 focus:outline-none">
            Save
          </button>
        </div>

        <pre className="mt-4 p-3 bg-gray-800 text-white rounded-md overflow-x-auto">
          <code>{`<div className="flex">
  <button className="px-4 py-2 bg-amber-500 border border-amber-500 text-white text-sm rounded-l-md hover:bg-amber-600 focus:z-10 focus:ring-2 focus:ring-amber-400 focus:outline-none">
    Delete
  </button>
  <button className="px-4 py-2 bg-emerald-500 border border-emerald-500 text-white text-sm rounded-r-md hover:bg-emerald-600 focus:z-10 focus:ring-2 focus:ring-emerald-400 focus:outline-none">
    Save
  </button>
</div>`}</code>
        </pre>
      </div>

      <h3 className="text-xl font-medium mt-6 mb-3">Rounded Corners</h3>
      <div className="mb-6 p-4 border rounded-md bg-gray-50">
        <div className="flex">
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-full mr-[-1px] hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
            Previous
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-full hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
            Next
          </button>
        </div>

        <pre className="mt-4 p-3 bg-gray-800 text-white rounded-md overflow-x-auto">
          <code>{`<div className="flex">
  <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-full mr-[-1px] hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
    Previous
  </button>
  <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-full hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
    Next
  </button>
</div>`}</code>
        </pre>
      </div>

      <h3 className="text-xl font-medium mt-6 mb-3">Shadow Effects</h3>
      <div className="mb-6 p-4 border rounded-md bg-gray-50">
        <div className="flex shadow-md">
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-l-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
            Copy
          </button>
          <button className="px-4 py-2 bg-white border-t border-b border-gray-300 text-gray-700 text-sm hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
            Paste
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-r-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
            Cut
          </button>
        </div>

        <pre className="mt-4 p-3 bg-gray-800 text-white rounded-md overflow-x-auto">
          <code>{`<div className="flex shadow-md">
  <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-l-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
    Copy
  </button>
  <button className="px-4 py-2 bg-white border-t border-b border-gray-300 text-gray-700 text-sm hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
    Paste
  </button>
  <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-r-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
    Cut
  </button>
</div>`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Responsive Behavior</h2>
      <p className="mb-4">
        Quarka UI button groups can be adapted for different screen sizes using
        Tailwind's responsive utilities:
      </p>

      <div className="mb-6 p-4 border rounded-md bg-gray-50">
        <div className="flex flex-col sm:flex-row">
          <button className="mb-2 sm:mb-0 px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-t-md sm:rounded-t-none sm:rounded-l-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
            Option 1
          </button>
          <button className="mb-2 sm:mb-0 px-4 py-2 bg-white border-l border-r sm:border-t sm:border-b border-gray-300 text-gray-700 text-sm hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
            Option 2
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-b-md sm:rounded-b-none sm:rounded-r-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
            Option 3
          </button>
        </div>

        <pre className="mt-4 p-3 bg-gray-800 text-white rounded-md overflow-x-auto">
          <code>{`<div className="flex flex-col sm:flex-row">
  <button className="mb-2 sm:mb-0 px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-t-md sm:rounded-t-none sm:rounded-l-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
    Option 1
  </button>
  <button className="mb-2 sm:mb-0 px-4 py-2 bg-white border-l border-r sm:border-t sm:border-b border-gray-300 text-gray-700 text-sm hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
    Option 2
  </button>
  <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-b-md sm:rounded-b-none sm:rounded-r-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
    Option 3
  </button>
</div>`}</code>
        </pre>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-blue-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              When creating responsive button groups, ensure proper handling of
              border radiuses and borders for both mobile and desktop layouts.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Browser Compatibility
      </h2>
      <p className="mb-4">
        Quarka UI button groups are compatible with all modern browsers:
      </p>

      <table className="min-w-full bg-white border border-gray-300 mb-8">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b border-gray-300 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Browser
            </th>
            <th className="px-6 py-3 border-b border-gray-300 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Support
            </th>
            <th className="px-6 py-3 border-b border-gray-300 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Notes
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Chrome
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Full
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Version 49+
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Firefox
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Full
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Version 52+
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Safari
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Full
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Version 10+
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Edge
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Full
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Version 16+
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Opera
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Full
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Version 36+
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              IE
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Limited
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Not recommended
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Related Components</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <li>
          <a
            href="#"
            className="flex items-center p-4 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <span className="h-8 w-8 flex items-center justify-center rounded-md bg-blue-100 text-blue-600 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <div>
              <h3 className="font-medium">Buttons</h3>
              <p className="text-sm text-gray-600">
                Standard button components
              </p>
            </div>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-4 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <span className="h-8 w-8 flex items-center justify-center rounded-md bg-blue-100 text-blue-600 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </span>
            <div>
              <h3 className="font-medium">Dropdown</h3>
              <p className="text-sm text-gray-600">
                Toggle contextual overlays
              </p>
            </div>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-4 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <span className="h-8 w-8 flex items-center justify-center rounded-md bg-blue-100 text-blue-600 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            </span>
            <div>
              <h3 className="font-medium">Tabs</h3>
              <p className="text-sm text-gray-600">
                Create tabbed navigation interfaces
              </p>
            </div>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-4 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <span className="h-8 w-8 flex items-center justify-center rounded-md bg-blue-100 text-blue-600 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <div>
              <h3 className="font-medium">Toggle</h3>
              <p className="text-sm text-gray-600">Switch between two states</p>
            </div>
          </a>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Button Group API Reference
      </h2>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b border-gray-300 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Class Name
              </th>
              <th className="px-6 py-3 border-b border-gray-300 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 border-b border-gray-300 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Default
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                quarka-btn-group
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                Container class for the button group
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">flex</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                quarka-btn-group-vertical
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                Container class for vertical button alignment
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                inline-flex flex-col
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                quarka-btn-group-item
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                Base class for each button in the group
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                px-4 py-2 bg-white border border-gray-300 text-gray-700
                hover:bg-gray-50
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                quarka-btn-group-item-first
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                Applied to the first button in the group
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                rounded-l-md (horizontal) / rounded-t-md (vertical)
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                quarka-btn-group-item-middle
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                Applied to the middle buttons in the group
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                border-t border-b (horizontal) / border-l border-r (vertical)
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                quarka-btn-group-item-last
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                Applied to the last button in the group
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                rounded-r-md (horizontal) / rounded-b-md (vertical)
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                quarka-btn-group-active
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                Applied to active/selected buttons
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                bg-blue-600 border-blue-600 text-white hover:bg-blue-700
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                quarka-btn-group-sm
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                Small size variation
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                px-2.5 py-1.5 text-xs
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                quarka-btn-group-lg
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                Large size variation
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                px-5 py-2.5 text-base
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        React Component Implementation
      </h2>
      <div className="mb-8 p-4 border rounded-md bg-gray-50">
        <pre className="p-3 bg-gray-800 text-white rounded-md overflow-x-auto">
          <code>{`import React from 'react';

interface ButtonGroupProps {
  children: React.ReactNode;
  vertical?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  'aria-label'?: string;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  vertical = false,
  className = '',
  size = 'md',
  'aria-label': ariaLabel,
  ...props
}) => {
  // Apply the correct classes based on orientation and size
  const groupClasses = \`\${
    vertical ? 'inline-flex flex-col' : 'flex'
  } \${className}\`;
  
  // Apply size-specific classes to children
  const childrenWithProps = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      const isFirst = index === 0;
      const isLast = index === React.Children.count(children) - 1;
      const isMiddle = !isFirst && !isLast;
      
      // Determine border radius based on position and orientation
      let positionClasses = '';
      if (vertical) {
        if (isFirst) positionClasses = 'rounded-t-md';
        else if (isLast) positionClasses = 'rounded-b-md';
        else positionClasses = 'border-l border-r';
      } else {
        if (isFirst) positionClasses = 'rounded-l-md';
        else if (isLast) positionClasses = 'rounded-r-md';
        else positionClasses = 'border-t border-b';
      }
      
      // Determine size classes
      let sizeClasses = '';
      switch (size) {
        case 'sm':
          sizeClasses = 'px-2.5 py-1.5 text-xs';
          break;
        case 'lg':
          sizeClasses = 'px-5 py-2.5 text-base';
          break;
        default: // 'md' is default
          sizeClasses = 'px-4 py-2 text-sm';
      }
      
      // Spread existing classes from child and add our new ones
      return React.cloneElement(child, {
        className: \`\${child.props.className || ''} \${positionClasses} \${sizeClasses}\`.trim(),
      });
    }
    return child;
  });

  return (
    <div className={groupClasses} role="group" aria-label={ariaLabel} {...props}>
      {childrenWithProps}
    </div>
  );
};

// Example usage
const ButtonGroupExample: React.FC = () => {
  return (
    <ButtonGroup aria-label="View options">
      <button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
        Day
      </button>
      <button className="bg-blue-600 border border-blue-600 text-white hover:bg-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
        Week
      </button>
      <button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none">
        Month
      </button>
    </ButtonGroup>
  );
};`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Custom Styling</h2>
      <p className="mb-4">
        All button group components in Quarka UI are designed with customization
        in mind. Here are some ways you can modify the appearance:
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Custom Colors</h3>
      <div className="mb-6 p-4 border rounded-md bg-gray-50">
        <div className="flex">
          <button className="px-4 py-2 bg-amber-500 border border-amber-500 text-white text-sm rounded-l-md hover:bg-amber-600 focus:z-10 focus:ring-2 focus:ring-amber-400 focus:outline-none">
            Left
          </button>
          <button className="px-4 py-2 bg-white border-t border-b border-gray-300 text-gray-700 text-sm hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-amber-400 focus:outline-none">
            Middle
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-r-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-amber-400 focus:outline-none">
            Right
          </button>
        </div>

        <pre className="mt-4 p-3 bg-gray-800 text-white rounded-md overflow-x-auto">
          <code>{`<div className="flex">
  <button className="px-4 py-2 bg-amber-500 border border-amber-500 text-white text-sm rounded-l-md hover:bg-amber-600 focus:z-10 focus:ring-2 focus:ring-amber-400 focus:outline-none">
    Left
  </button>
  <button className="px-4 py-2 bg-white border-t border-b border-gray-300 text-gray-700 text-sm hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-amber-400 focus:outline-none">
    Middle
  </button>
  <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-r-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-amber-400 focus:outline-none">
    Right
  </button>
</div>`}</code>
        </pre>
      </div>

      <h3 className="text-xl font-medium mt-6 mb-3">Soft UI Effect</h3>
      <div className="mb-6 p-4 border rounded-md bg-gray-50">
        <div className="flex shadow-md">
          <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm rounded-l-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-inner">
            Left
          </button>
          <button className="px-4 py-2 bg-white border-t border-b border-gray-200 text-gray-700 text-sm hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-inner">
            Middle
          </button>
          <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm rounded-r-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-inner">
            Right
          </button>
        </div>

        <pre className="mt-4 p-3 bg-gray-800 text-white rounded-md overflow-x-auto">
          <code>{`<div className="flex shadow-md">
  <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm rounded-l-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-inner">
    Left
  </button>
  <button className="px-4 py-2 bg-white border-t border-b border-gray-200 text-gray-700 text-sm hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-inner">
    Middle
  </button>
  <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm rounded-r-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-inner">
    Right
  </button>
</div>`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Common Use Cases</h2>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Navigation controls (previous/next, pagination)</li>
        <li>Toolbars (formatting options, drawing tools)</li>
        <li>View switching (grid/list views, time period selectors)</li>
        <li>Filtering options (category selection, time ranges)</li>
        <li>Simple forms (yes/no choices, rating scales)</li>
        <li>Media controls (play/pause/stop)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Related Components</h2>
      <ul className="list-disc pl-6 space-y-1 mb-8">
        <li>
          <a href="#" className="text-blue-600 hover:underline">
            Buttons
          </a>{" "}
          - Individual action elements
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">
            Pagination
          </a>{" "}
          - Navigation for multi-page content
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">
            Tabs
          </a>{" "}
          - Content organization and navigation
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">
            Segmented Control
          </a>{" "}
          - Similar toggle functionality with different styling
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">
            Dropdown
          </a>{" "}
          - For more complex option selection
        </li>
      </ul>

      <div className="mt-12 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          Quarka UI - Button Group Component - v1.0.0
        </p>
        <p className="text-sm text-gray-600 mt-1">
          Made with ❤️ by Qurtifa and contributors - Bringing light to your UI
        </p>
      </div>
    </div>
  );
}
