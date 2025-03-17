import React from 'react';

export default function Cards() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Cards</h1>
      <p className="mb-6">
        Cards are flexible containers that group related content and actions. Quarka UI cards provide a 
        consistent way to display content with various options for headers, footers, and content layouts.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Basic Usage</h2>
      <p className="mb-6">
        The Card component can be used to group related information:
      </p>

      <div className="bg-gray-100 p-6 rounded-xl mb-8">
        <h3 className="text-lg font-medium mb-3">Example</h3>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto mb-4">
          <pre>{`<Card>
  <CardHeader>
    <h3 className="text-lg font-medium">Card Title</h3>
  </CardHeader>
  <CardBody>
    <p>This is the main content of the card.</p>
  </CardBody>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`}</pre>
        </div>

        <h3 className="text-lg font-medium mb-3">Preview</h3>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium">Card Title</h3>
          </div>
          <div className="px-6 py-4">
            <p>This is the main content of the card.</p>
          </div>
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Action
            </button>
          </div>
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
              The documentation for this component is currently under development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}