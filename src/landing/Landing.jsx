import React, { useEffect } from "react";

// Import icons dari Lucide (isi dengan import yang sesuai)
import {
  ChevronRight,
  Github,
  Code,
  Package,
  Palette,
  Zap,
  BookOpen,
} from "lucide-react";

export default function QuarkaLanding() {
  useEffect(() => {
    // Memastikan Alpine data tersedia untuk navbar
    if (window.Alpine) {
      window.Alpine.data("quarkaNavbar", () => ({
        mobileMenuOpen: false,
      }));
    }
  }, []);

  return (
    <div className="bg-white" x-data="quarkaNavbar">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Quarka UI</span>
              <img
                className="h-10 w-auto"
                src="/public/quarka.svg"
                alt="Quarka UI Logo"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-blue-600"
              x-on:click="mobileMenuOpen = true"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="#components"
              className="text-sm/6 font-semibold text-blue-500 hover:text-indigo-600 transition-colors"
            >
              Components
            </a>
            <a
              href="#features"
              className="text-sm/6 font-semibold text-blue-500 hover:text-indigo-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#docs"
              className="text-sm/6 font-semibold text-blue-500 hover:text-indigo-600 transition-colors"
            >
              Documentation
            </a>
            <a
              href="#github"
              className="text-sm/6 font-semibold text-blue-500 hover:text-indigo-600 transition-colors"
            >
              GitHub
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#get-started"
              className="flex items-center gap-1 rounded-full px-4 py-1.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-colors shadow-sm"
            >
              Get Started <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className="lg:hidden"
          role="dialog"
          aria-modal="true"
          x-show="mobileMenuOpen"
          x-cloak
          x-transition:enter="transition ease-out duration-200"
          x-transition:enter-start="opacity-0 scale-95"
          x-transition:enter-end="opacity-100 scale-100"
          x-transition:leave="transition ease-in duration-150"
          x-transition:leave-start="opacity-100 scale-100"
          x-transition:leave-end="opacity-0 scale-95"
        >
          {/* Background backdrop */}
          <div
            className="fixed inset-0 z-50 bg-gray-500/20 backdrop-blur-sm"
            x-on:click="mobileMenuOpen = false"
          ></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-blue-900/10 shadow-lg">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Quarka UI</span>
                <img
                  className="h-8 w-auto"
                  src="/public/quarka.svg"
                  alt="Quarka UI Logo"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-blue-500"
                x-on:click="mobileMenuOpen = false"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#components"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-blue-500 hover:bg-blue-50 transition-colors"
                  >
                    Components
                  </a>
                  <a
                    href="#features"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-blue-500 hover:bg-blue-50 transition-colors"
                  >
                    Features
                  </a>
                  <a
                    href="#docs"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-blue-500 hover:bg-blue-50 transition-colors"
                  >
                    Documentation
                  </a>
                  <a
                    href="#github"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-blue-500 hover:bg-blue-50 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#get-started"
                    className="flex items-center w-full justify-center gap-1 rounded-full px-4 py-2 text-base/7 font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-colors shadow-sm"
                  >
                    Get Started <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Background gradient decoration - top */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-400 to-indigo-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-blue-600 ring-1 ring-blue-900/10 hover:ring-blue-900/20">
              <span className="font-medium">Quarka UI v1.0 Released</span>{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true"></span>See
                what's new <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-balance text-gray-900 sm:text-7xl font-plus-jakarta-sans">
              Modern Tailwind Components for{" "}
              <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Light Themes
              </span>
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
              Quarka UI provides beautiful, seamless, and modern components
              designed specifically for light theme interfaces. Build stunning
              web experiences with our rounded, blur-enabled, bento-style
              components.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-blue-600 hover:to-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm/6 font-semibold text-blue-600 hover:text-indigo-600 transition-colors"
              >
                View on GitHub <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Component Preview Section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-32">
          <div className="relative overflow-hidden rounded-2xl bg-gray-50/50 ring-1 ring-gray-200 backdrop-blur-sm">
            <div className="relative flex h-11 items-center px-4 border-b border-gray-200">
              <div className="flex space-x-1.5">
                <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                <div className="h-3 w-3 rounded-full bg-gray-300"></div>
              </div>
            </div>
            <div className="p-8 sm:p-12 lg:p-16 flex flex-wrap gap-6 justify-center">
              {/* Sample Components Preview */}
              <button className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 transition-colors">
                Button
              </button>
              <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-200">
                Card Component
              </div>
              <div className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                Badge
              </div>
              <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500"></div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    User Card
                  </p>
                  <p className="text-xs text-gray-500">Modern component</p>
                </div>
              </div>
              {/* More component previews can be added here */}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div
          id="features"
          className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32"
        >
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">
              Features
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to build modern UIs
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Quarka UI combines Tailwind CSS's utility-first approach with
              Alpine JS interactivity and the beauty of Lucide icons to create
              modern, light-themed components.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
              <div className="relative p-6 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200/50 transition-all hover:shadow-md hover:-translate-y-1">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                    <Palette className="h-6 w-6 text-blue-600" />
                  </div>
                  Light Theme Optimized
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  Specifically designed for light mode interfaces with a focus
                  on readability, aesthetics, and visual harmony.
                </dd>
              </div>
              <div className="relative p-6 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200/50 transition-all hover:shadow-md hover:-translate-y-1">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                    <Code className="h-6 w-6 text-blue-600" />
                  </div>
                  Alpine JS Integration
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  Seamlessly integrated with Alpine JS for lightweight, smooth
                  interactions without requiring complex JavaScript frameworks.
                </dd>
              </div>
              <div className="relative p-6 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200/50 transition-all hover:shadow-md hover:-translate-y-1">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  Modern Design Patterns
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  Embracing contemporary design trends like bento grids, subtle
                  blur effects, and rounded aesthetics for stunning interfaces.
                </dd>
              </div>
              <div className="relative p-6 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200/50 transition-all hover:shadow-md hover:-translate-y-1">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                    <Package className="h-6 w-6 text-blue-600" />
                  </div>
                  Comprehensive Components
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  From simple buttons to complex layout sections, Quarka UI
                  provides all the building blocks for your next web project.
                </dd>
              </div>
              <div className="relative p-6 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200/50 transition-all hover:shadow-md hover:-translate-y-1">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                    <Github className="h-6 w-6 text-blue-600" />
                  </div>
                  Open Source
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  Freely available on GitHub with an active community and
                  regular updates. Contributions are welcome!
                </dd>
              </div>
              <div className="relative p-6 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200/50 transition-all hover:shadow-md hover:-translate-y-1">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  Extensive Documentation
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  Detailed guides, API references, and examples to help you get
                  the most out of Quarka UI.
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Component Categories Section */}
        <div
          id="components"
          className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 bg-gradient-to-b from-white to-blue-50/50"
        >
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-blue-600">
              Components
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Build modern interfaces faster
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Quarka UI provides a complete set of components optimized for
              light themes, featuring modern design with a focus on blue to
              indigo color palette.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Component Category Cards */}
            <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-md hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Basic Elements
              </h3>
              <p className="text-gray-600 mb-4">
                Buttons, Typography, Cards, Inputs, Badges, Alerts
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium flex items-center gap-1 hover:text-indigo-600 transition-colors"
              >
                Explore <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-md hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Navigation
              </h3>
              <p className="text-gray-600 mb-4">
                Navbar, Sidebar, Tabs, Breadcrumbs, Pagination
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium flex items-center gap-1 hover:text-indigo-600 transition-colors"
              >
                Explore <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-md hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Layout
              </h3>
              <p className="text-gray-600 mb-4">
                Hero Sections, Bento Grids, Containers, Dividers
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium flex items-center gap-1 hover:text-indigo-600 transition-colors"
              >
                Explore <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-md hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Feedback
              </h3>
              <p className="text-gray-600 mb-4">
                Modals, Toasts, Tooltips, Progress Indicators
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium flex items-center gap-1 hover:text-indigo-600 transition-colors"
              >
                Explore <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-md hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Content Display
              </h3>
              <p className="text-gray-600 mb-4">
                Testimonials, Pricing Tables, Feature Sections
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium flex items-center gap-1 hover:text-indigo-600 transition-colors"
              >
                Explore <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-md hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Forms
              </h3>
              <p className="text-gray-600 mb-4">
                Input Groups, Select, Checkbox, Radio, Forms
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium flex items-center gap-1 hover:text-indigo-600 transition-colors"
              >
                Explore <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          id="get-started"
          className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32"
        >
          <div className="relative isolate overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-16 sm:px-16 sm:py-24 rounded-3xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to get started with Quarka UI?
              </h2>
              <p className="mt-6 text-lg leading-8 text-blue-100">
                Join thousands of developers building beautiful light-theme
                interfaces with our modern Tailwind CSS component library.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-white transition-colors"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className="flex items-center gap-1 text-sm font-semibold text-white hover:text-blue-100 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  Star on GitHub <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Background gradient decoration - bottom */}
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-400 to-indigo-600 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a
              href="#"
              className="text-gray-500 hover:text-blue-500 transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-500 transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; 2025 Quarka UI. Created with ❤️ by Qurtifa. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
