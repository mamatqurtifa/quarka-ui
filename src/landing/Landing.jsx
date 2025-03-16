import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

// Import icons dari Lucide
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
  // Tambahkan useEffect untuk memastikan animasi navbar berjalan lancar
  useEffect(() => {
    // Pastikan event listener untuk resize ditangani dengan baik
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // lg breakpoint
        const mobileMenu = document.getElementById("mobile-menu");
        if (mobileMenu) mobileMenu.classList.add("hidden");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Quarka UI</span>
              <img
                className="h-8 w-auto" // Diperkecil sedikit dari h-10 menjadi h-8
                src="/quarka.svg"
                alt="Quarka UI Logo"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-blue-600"
              onClick={() => {
                const mobileMenu = document.getElementById("mobile-menu");
                if (mobileMenu) {
                  // Implementasi animasi yang lebih mulus
                  if (mobileMenu.classList.contains("hidden")) {
                    mobileMenu.classList.remove("hidden");
                    setTimeout(() => {
                      mobileMenu.classList.add("opacity-100");
                    }, 10);
                  } else {
                    mobileMenu.classList.remove("opacity-100");
                    setTimeout(() => {
                      mobileMenu.classList.add("hidden");
                    }, 300);
                  }
                }
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5" // Ukuran ikon diseragamkan
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
            <Link
              to="/components"
              className="text-sm/6 font-semibold text-blue-500 hover:text-indigo-600 transition-colors"
            >
              Components
            </Link>
            <Link
              to="/features"
              className="text-sm/6 font-semibold text-blue-500 hover:text-indigo-600 transition-colors"
            >
              Features
            </Link>
            <Link
              to="/docs"
              className="text-sm/6 font-semibold text-blue-500 hover:text-indigo-600 transition-colors"
            >
              Documentation
            </Link>
            <Link
              to="/github"
              className="text-sm/6 font-semibold text-blue-500 hover:text-indigo-600 transition-colors"
            >
              GitHub
            </Link>
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

        {/* Mobile menu dengan animasi yang ditingkatkan */}
        <div
          className="lg:hidden hidden opacity-0 transition-opacity duration-300"
          role="dialog"
          aria-modal="true"
          id="mobile-menu"
        >
          {/* Background backdrop dengan animasi */}
          <div
            className="fixed inset-0 z-50 bg-gray-500/20 backdrop-blur-sm"
            onClick={() => {
              const mobileMenu = document.getElementById("mobile-menu");
              if (mobileMenu) {
                mobileMenu.classList.remove("opacity-100");
                setTimeout(() => {
                  mobileMenu.classList.add("hidden");
                }, 300);
              }
            }}
          ></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-blue-900/10 shadow-lg transform transition-transform duration-300 ease-out">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Quarka UI</span>
                <img
                  className="h-8 w-auto" // Disesuaikan dengan logo header
                  src="/quarka.svg"
                  alt="Quarka UI Logo"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-blue-500"
                onClick={() => {
                  const mobileMenu = document.getElementById("mobile-menu");
                  if (mobileMenu) {
                    mobileMenu.classList.remove("opacity-100");
                    setTimeout(() => {
                      mobileMenu.classList.add("hidden");
                    }, 300);
                  }
                }}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="w-5 h-5" // Ukuran ikon diseragamkan
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

        {/* Hero section dengan ukuran teks yang disesuaikan */}
        <div className="mx-auto max-w-2xl py-24 sm:py-40 lg:py-48">
          {" "}
          {/* Mengurangi padding vertical */}
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
            <h1 className="text-4xl font-bold tracking-tight text-balance text-gray-900 sm:text-6xl font-plus-jakarta-sans">
              {" "}
              {/* Ukuran font diperkecil */}
              Modern Tailwind Components for{" "}
              <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Light Themes
              </span>
            </h1>
            <p className="mt-6 text-base font-medium text-pretty text-gray-600 sm:text-lg/8">
              {" "}
              {/* Ukuran font diperkecil */}
              Quarka UI provides beautiful, seamless, and modern components
              designed specifically for light theme interfaces. Build stunning
              web experiences with our rounded, blur-enabled, bento-style
              components.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              {" "}
              {/* Mengurangi margin top */}
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
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-amber-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
              </div>
              <div className="ml-4 text-xs text-gray-500 font-medium">
                Quarka UI Components
              </div>
            </div>

            <div className="p-8 sm:p-12 lg:p-16">
              {/* Bento Grid Layout for Components */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Button Group */}
                <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 flex flex-col gap-4">
                  <h3 className="text-sm font-semibold text-gray-900">
                    Buttons
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <button className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 transition-colors">
                      Primary
                    </button>
                    <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-blue-600 ring-1 ring-blue-200 hover:bg-blue-50 transition-colors">
                      Secondary
                    </button>
                    <button className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 text-sm font-medium text-white hover:from-blue-600 hover:to-indigo-700 transition-all shadow-sm">
                      Gradient
                    </button>
                  </div>
                </div>

                {/* Badge Group */}
                <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 flex flex-col gap-4">
                  <h3 className="text-sm font-semibold text-gray-900">
                    Badges
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                      New
                    </span>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                      Success
                    </span>
                    <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                      Warning
                    </span>
                    <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800">
                      Info
                    </span>
                    <span className="inline-flex items-center rounded-full bg-rose-100 px-3 py-1 text-xs font-medium text-rose-800">
                      Error
                    </span>
                  </div>
                </div>

                {/* Alert Component */}
                <div className="bg-blue-50 rounded-xl border border-blue-200 p-4 flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-blue-800">
                      Information
                    </h3>
                    <p className="text-xs text-blue-700 mt-1">
                      This is an example of an informational alert component.
                    </p>
                  </div>
                </div>

                {/* User Card Component */}
                <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-4 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white font-medium text-lg">
                    QU
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Qurtifa User
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Product Designer
                    </p>
                    <div className="mt-1.5 flex gap-1">
                      <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-medium text-blue-700">
                        Design
                      </span>
                      <span className="inline-flex items-center rounded-full bg-indigo-100 px-2 py-0.5 text-[10px] font-medium text-indigo-700">
                        UX
                      </span>
                    </div>
                  </div>
                </div>

                {/* Input Group */}
                <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 flex flex-col gap-4">
                  <h3 className="text-sm font-semibold text-gray-900">
                    Form Controls
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium text-gray-700 mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full rounded-lg border-0 py-1.5 px-3 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <label
                        htmlFor="remember-me"
                        className="text-xs text-gray-700"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                </div>

                {/* Toggle Component */}
                <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 flex flex-col gap-4">
                  <h3 className="text-sm font-semibold text-gray-900">
                    Toggle Switch
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      <span className="translate-x-5 pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out">
                        <span className="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity opacity-0 duration-100 ease-out">
                          <svg
                            className="h-3 w-3 text-blue-600"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                          >
                            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                          </svg>
                        </span>
                      </span>
                    </div>
                    <span className="text-sm text-gray-700">
                      Notifications enabled
                    </span>
                  </div>
                </div>
              </div>
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

        {/* CTA Section for Custom Component Requests */}
        <div
          id="get-started"
          className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32"
        >
          <div className="relative isolate overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-16 sm:px-16 sm:py-24 rounded-3xl">
            {/* Decorative element - subtle dots pattern */}
            <div className="absolute inset-0 -z-10 opacity-20">
              <svg
                className="h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
              >
                <defs>
                  <pattern
                    id="dotPattern"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="1" fill="white" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dotPattern)" />
              </svg>
            </div>

            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Need a Custom Component?
              </h2>
              <p className="mt-6 text-lg leading-8 text-white">
                Don't see what you're looking for? Let us know what component
                you need, and our team will consider adding it to the library.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <a
                  href="mailto:contact@qurtifa.me?subject=Custom%20Component%20Request%20for%20Quarka%20UI&body=Hello%20Qurtifa%20Team%2C%0A%0AI'm%20interested%20in%20requesting%20a%20custom%20component%20for%20Quarka%20UI.%0A%0AComponent%20description%3A%0A%0AUse%20case%3A%0A%0AThank%20you%21"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-700 shadow-sm hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors w-full sm:w-auto"
                >
                  Email Us Your Request
                </a>
                <a
                  href="https://github.com/qurtifa/quarka-ui/issues/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-indigo-500/20 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-white border border-white/20 hover:bg-indigo-500/30 transition-colors w-full sm:w-auto"
                >
                  <Github className="h-4 w-4" />
                  Create GitHub Issue
                </a>
              </div>

              <p className="mt-8 text-sm text-blue-100">
                Have questions? Feel free to reach out to us at{" "}
                <a
                  href="mailto:contact@qurtifa.me"
                  className="font-medium underline hover:text-white transition-colors"
                >
                  contact@qurtifa.me
                </a>
              </p>
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
