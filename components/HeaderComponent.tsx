import React from "react";

export default function HeaderComponent() {
  return (
    <header className="sticky top-0 z-99">
      <nav className="bg-blue-800 border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://istad.co/resources/img/CSTAD_120.png"
              className="h-12"
              alt="cstad Logo"
            />
            <span className="self-center text-white text-2xl font-semibold whitespace-nowrap">
              C S T A D
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-multi-level"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
            aria-controls="navbar-multi-level"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-multi-level"
          >
            <ul className="bg-blue-800 flex flex-col font-medium p-4 md:p-0 mt-4 text-white border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  HOME
                </a>
              </li>

              <li>
                <a
                  href="/enrollPage"
                  className="block py-2 px-3 rounded hover:bg-blue-500 md:hover:bg-transparent md:border-0 md:p-0"
                >
                  ENROLLMENT
                </a>
              </li>
              <li>
                <a
                  href="/coursePage"
                  className="block py-2 px-3 rounded hover:bg-blue-500 md:hover:bg-transparent md:border-0 md:p-0"
                >
                  COURSE
                </a>
              </li>
              <li>
                <a
                  href="/itNewPage"
                  className="block py-2 px-3 rounded hover:bg-blue-500 md:hover:bg-transparent md:border-0 md:p-0"
                >
                  ITNEW
                </a>
              </li>

              <li>
                <a
                  href="/aboutUsPage"
                  className="block py-2 px-3 rounded hover:bg-blue-500 md:hover:bg-transparent md:border-0 md:p-0"
                >
                  ABOUT US
                </a>
              </li>
              <li>
                <a
                  href="/jobOpportunity"
                  className="block py-2 px-3 rounded hover:bg-blue-500 md:hover:bg-transparent md:border-0 md:p-0"
                >
                  JOB OPPORTUNITY
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
