import React from "react";

export default function Buttons() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Buttons</h1>
      <p className="mb-6">
        Buttons are interactive elements that users can click or tap to trigger
        actions in your interface. Quarka UI provides a variety of button styles
        and variants to help you create engaging user experiences.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Basic Usage</h2>
      <p className="mb-6">
        The Button component is versatile and can be used in different contexts.
        Here's how to use it:
      </p>

      <div className="bg-gray-100 p-6 rounded-xl mb-8">
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-3">Import</h3>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
            <code>import Button from 'quarka-ui';</code>
          </div>
        </div>

        <h3 className="text-lg font-medium mb-3">Example</h3>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto mb-4">
          <pre>{`<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="ghost">Ghost Button</Button>`}</pre>
        </div>

        <h3 className="text-lg font-medium mb-3">Preview</h3>
        <div className="bg-white p-6 rounded-lg border border-gray-300 flex flex-wrap gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Primary Button
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors">
            Secondary Button
          </button>
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
            Outline Button
          </button>
          <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
            Ghost Button
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Button Sizes</h2>
      <p className="mb-6">
        Quarka UI provides different button sizes to accommodate various design
        needs:
      </p>

      <div className="bg-gray-100 p-6 rounded-xl mb-8">
        <h3 className="text-lg font-medium mb-3">Example</h3>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto mb-4">
          <pre>{`<Button size="sm">Small Button</Button>
<Button size="md">Medium Button</Button>
<Button size="lg">Large Button</Button>`}</pre>
        </div>

        <h3 className="text-lg font-medium mb-3">Preview</h3>
        <div className="bg-white p-6 rounded-lg border border-gray-300 flex flex-wrap items-center gap-3">
          <button className="px-2 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Small Button
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Medium Button
          </button>
          <button className="px-6 py-3 text-lg bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Large Button
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Button with Icons</h2>
      <p className="mb-6">
        Add icons to your buttons to enhance visual clarity and provide
        additional context:
      </p>

      <div className="bg-gray-100 p-6 rounded-xl mb-8">
        <h3 className="text-lg font-medium mb-3">Example</h3>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto mb-4">
          <pre>{`<Button variant="primary" leftIcon={<SearchIcon />}>Search</Button>
<Button variant="secondary" rightIcon={<ArrowRightIcon />}>Next</Button>
<Button variant="outline" leftIcon={<EditIcon />} rightIcon={<SaveIcon />}>Edit and Save</Button>`}</pre>
        </div>

        <h3 className="text-lg font-medium mb-3">Preview</h3>
        <div className="bg-white p-6 rounded-lg border border-gray-300 flex flex-wrap gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2">
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
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            Search
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors flex items-center gap-2">
            Next
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
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors flex items-center gap-2">
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
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
            Edit and Save
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
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
              <polyline points="17 21 17 13 7 13 7 21" />
              <polyline points="7 3 7 8 15 8" />
            </svg>
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Button States</h2>
      <p className="mb-6">
        Quarka UI buttons support various states to provide feedback to users:
      </p>

      <div className="bg-gray-100 p-6 rounded-xl mb-8">
        <h3 className="text-lg font-medium mb-3">Example</h3>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto mb-4">
          <pre>{`<Button>Default</Button>
<Button disabled>Disabled</Button>
<Button isLoading>Loading</Button>
<Button isActive>Active</Button>`}</pre>
        </div>

        <h3 className="text-lg font-medium mb-3">Preview</h3>
        <div className="bg-white p-6 rounded-lg border border-gray-300 flex flex-wrap gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Default
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md opacity-50 cursor-not-allowed">
            Disabled
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2">
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
            Loading
          </button>
          <button className="px-4 py-2 bg-blue-700 text-white rounded-md">
            Active
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">API Reference</h2>

      <h3 className="text-lg font-semibold mt-6 mb-3">Props</h3>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full divide-y divide-gray-300 border border-gray-300 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
              >
                Prop
              </th>
              <th
                scope="col"
                className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
              >
                Type
              </th>
              <th
                scope="col"
                className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
              >
                Default
              </th>
              <th
                scope="col"
                className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
              >
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            <tr>
              <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                variant
              </td>
              <td className="py-4 px-3 text-sm text-gray-500">
                'primary' | 'secondary' | 'outline' | 'ghost'
              </td>
              <td className="py-4 px-3 text-sm text-gray-500">'primary'</td>
              <td className="py-4 px-3 text-sm text-gray-500">
                The visual style of the button
              </td>
            </tr>
            <tr>
              <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                size
              </td>
              <td className="py-4 px-3 text-sm text-gray-500">
                'sm' | 'md' | 'lg'
              </td>
              <td className="py-4 px-3 text-sm text-gray-500">'md'</td>
              <td className="py-4 px-3 text-sm text-gray-500">
                The size of the button
              </td>
            </tr>
            <tr>
              <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                leftIcon
              </td>
              <td className="py-4 px-3 text-sm text-gray-500">
                React.ReactElement
              </td>
              <td className="py-4 px-3 text-sm text-gray-500">-</td>
              <td className="py-4 px-3 text-sm text-gray-500">
                Icon component to display at the left side of the button
              </td>
            </tr>
            <tr>
              <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                rightIcon
              </td>
              <td className="py-4 px-3 text-sm text-gray-500">
                React.ReactElement
              </td>
              <td className="py-4 px-3 text-sm text-gray-500">-</td>
              <td className="py-4 px-3 text-sm text-gray-500">
                Icon component to display at the right side of the button
              </td>
            </tr>
            <tr>
              <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                isLoading
              </td>
              <td className="py-4 px-3 text-sm text-gray-500">boolean</td>
              <td className="py-4 px-3 text-sm text-gray-500">false</td>
              <td className="py-4 px-3 text-sm text-gray-500">
                If true, the button will show a spinner
              </td>
            </tr>
            <tr>
              <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                isActive
              </td>
              <td className="py-4 px-3 text-sm text-gray-500">boolean</td>
              <td className="py-4 px-3 text-sm text-gray-500">false</td>
              <td className="py-4 px-3 text-sm text-gray-500">
                If true, the button will be styled in an active state
              </td>
            </tr>
            <tr>
              <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                disabled
              </td>
              <td className="py-4 px-3 text-sm text-gray-500">boolean</td>
              <td className="py-4 px-3 text-sm text-gray-500">false</td>
              <td className="py-4 px-3 text-sm text-gray-500">
                If true, the button will be disabled
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-semibold mt-6 mb-3">CSS Variables</h3>
      <p className="mb-4">
        Quarka UI buttons can be customized via CSS variables in your theme:
      </p>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full divide-y divide-gray-300 border border-gray-300 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
              >
                Variable
              </th>
              <th
                scope="col"
                className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
              >
                Default
              </th>
              <th
                scope="col"
                className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
              >
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            <tr>
              <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                --quarka-button-primary-bg
              </td>
              <td className="py-4 px-3 text-sm text-gray-500">
                theme('colors.blue.600')
              </td>
              <td className="py-4 px-3 text-sm text-gray-500">
                Background color of primary button
              </td>
            </tr>
            <tr>
              <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                --quarka-button-primary-text
              </td>
              <td className="py-4 px-3 text-sm text-gray-500">
                theme('colors.white')
              </td>
              <td className="py-4 px-3 text-sm text-gray-500">
                Text color of primary button
              </td>
            </tr>
            <tr>
              <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                --quarka-button-border-radius
              </td>
              <td className="py-4 px-3 text-sm text-gray-500">
                theme('borderRadius.md')
              </td>
              <td className="py-4 px-3 text-sm text-gray-500">
                Border radius of all buttons
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Customization</h2>
      <p className="mb-6">
        You can customize the button component in your Tailwind config:
      </p>

      <div className="bg-gray-100 p-6 rounded-xl mb-8">
        <h3 className="text-lg font-medium mb-3">tailwind.config.js</h3>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
          <pre>{`module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#eff6ff',
          '100': '#dbeafe',
          // ... other shades
          '600': '#2563eb', // This will be used for button primary color
        }
      }
    }
  }
}`}</pre>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Best Practices</h2>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Use primary buttons for the main action in a form or section</li>
        <li>
          Limit the number of primary buttons on a page to avoid confusion
        </li>
        <li>Use secondary or outline buttons for less important actions</li>
        <li>
          Include clear, concise text that describes the action the button
          performs
        </li>
        <li>
          Add loading states to buttons that trigger asynchronous operations
        </li>
        <li>
          Ensure buttons are large enough to be easily clickable on touch
          devices
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Accessibility</h2>
      <p className="mb-4">
        Quarka UI buttons follow best practices for accessibility:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>All buttons have appropriate contrast ratios</li>
        <li>Focus states are clearly visible</li>
        <li>Loading states announce status to screen readers</li>
        <li>
          Disabled buttons are properly conveyed to assistive technologies
        </li>
        <li>
          When using icon-only buttons, always include an{" "}
          <code className="bg-gray-100 px-1 py-0.5 rounded">aria-label</code>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Related Components</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <a
            href="/docs/components/icon-button"
            className="text-blue-600 hover:underline"
          >
            IconButton
          </a>{" "}
          - For buttons with only icons
        </li>
        <li>
          <a
            href="/docs/components/button-group"
            className="text-blue-600 hover:underline"
          >
            ButtonGroup
          </a>{" "}
          - For grouping related buttons
        </li>
        <li>
          <a
            href="/docs/components/dropdown"
            className="text-blue-600 hover:underline"
          >
            Dropdown
          </a>{" "}
          - For button-activated dropdown menus
        </li>
      </ul>
    </div>
  );
}
