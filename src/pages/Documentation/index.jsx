import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import DocContent from './DocContent';

// Import icons
import { MenuIcon, XIcon } from 'lucide-react';

export default function Documentation() {
  const { section = 'introduction', subsection = '' } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      
      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 z-40 flex lg:hidden ${
          sidebarOpen ? "" : "hidden"
        }`}
        role="dialog"
        aria-modal="true"
      >
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75"
          aria-hidden="true"
          onClick={() => setSidebarOpen(false)}
        ></div>
        
        {/* Sidebar */}
        <div className="relative flex flex-col w-full max-w-xs pt-5 pb-4 bg-white">
          <div className="absolute top-0 right-0 pt-2 pr-2">
            <button
              type="button"
              className="flex items-center justify-center w-10 h-10 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sr-only">Close sidebar</span>
              <XIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          
          <div className="flex-1 h-0 mt-5 overflow-y-auto">
            <Sidebar
              currentSection={section}
              currentSubsection={subsection}
              mobile={true}
              onNavigate={() => setSidebarOpen(false)}
            />
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex flex-1">
        {/* Desktop sidebar */}
        <div className="hidden lg:block lg:w-64 lg:flex-none lg:fixed lg:inset-y-0 lg:z-10 lg:overflow-y-auto lg:border-r lg:border-gray-200 lg:pt-16">
          <Sidebar
            currentSection={section}
            currentSubsection={subsection}
            mobile={false}
          />
        </div>
        
        {/* Content area */}
        <div className="lg:pl-64 flex-1">
          <main className="py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <DocContent section={section} subsection={subsection} />
          </main>
        </div>
      </div>
    </div>
  );
}