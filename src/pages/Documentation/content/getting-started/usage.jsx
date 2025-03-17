import React from 'react';

export default function Usage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Quick Start</h1>
      <p className="mb-6">
        This guide will help you quickly integrate Quarka UI components into your project after installation.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Basic Setup</h2>
      <p className="mb-6">
        After installing Quarka UI, make sure you've configured your Tailwind CSS as shown in the installation guide.
        Then, you can start using components directly:
      </p>
      
      <div className="bg-gray-100 p-6 rounded-xl mb-8">
        <h3 className="text-lg font-medium mb-3">Example Component Usage</h3>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
          <pre>{`import React from 'react';
import { Button, Card, TextField } from 'quarka-ui';

function MyApp() {
  return (
    <div className="p-8 max-w-md mx-auto">
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
        <div className="space-y-4">
          <TextField 
            label="Name" 
            placeholder="Enter your name" 
          />
          <TextField 
            label="Email" 
            type="email" 
            placeholder="Enter your email" 
          />
          <Button>Submit</Button>
        </div>
      </Card>
    </div>
  );
}

export default MyApp;`}</pre>
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold mt-10 mb-4">Using with Different Frameworks</h2>
      <p className="mb-4">
        Quarka UI works with most modern JavaScript frameworks that support Tailwind CSS:
      </p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">React</h3>
      <p className="mb-4">
        Quarka UI is designed to work seamlessly with React projects.
      </p>
      <div className="bg-gray-100 p-6 rounded-xl mb-6">
        <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
          <pre>{`// App.jsx
import React from 'react';
import { Button } from 'quarka-ui';

function App() {
  return (
    <div>
      <h1 className="text-2xl font-bold">React App with Quarka UI</h1>
      <Button onClick={() => alert('Button clicked!')}>Click me</Button>
    </div>
  );
}`}</pre>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">Next.js</h3>
      <p className="mb-4">
        Quarka UI works seamlessly with Next.js projects.
      </p>
      <div className="bg-gray-100 p-6 rounded-xl mb-6">
        <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
          <pre>{`// pages/index.js
import Head from 'next/head';
import { Button, Card } from 'quarka-ui';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Next.js with Quarka UI</title>
      </Head>
      
      <main className="py-10">
        <h1 className="text-3xl font-bold mb-6">Welcome to Next.js with Quarka UI</h1>
        <Card className="p-6">
          <Button>Get Started</Button>
        </Card>
      </main>
    </div>
  );
}`}</pre>
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold mt-10 mb-4">Next Steps</h2>
      <p className="mb-4">
        Now that you're set up with Quarka UI, you can:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><a href="/docs/components/buttons" className="text-blue-600 hover:underline">Browse available components</a></li>
        <li><a href="/docs/customization/theme" className="text-blue-600 hover:underline">Learn about customizing Quarka UI</a></li>
        <li><a href="/docs/core-concepts/design-principles" className="text-blue-600 hover:underline">Understand core design principles</a></li>
      </ul>
    </div>
  );
}