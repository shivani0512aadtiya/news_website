import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-black-200 dark:border-gray-600">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="https://flowbite.com/" className="flex items-center ">
              <img
                src="img/Tni 1.png"
                className="h-21 w-32"
                alt="Flowbite Logo"
              />
              <span className="ml-2 text-2xl font-semibold dark:text-black">
                 
              </span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="/"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-700 dark:text-black dark:hover:text-blue-500"
              >
                Home
              </a>
              <a
                href="/news"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-700 dark:text-black dark:hover:text-blue-500"
              >
                News
              </a>
              <a
                href="/khategaon"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-700 dark:text-black dark:hover:text-blue-500"
              >
                Khategaon
              </a>
              <a
                href="/kannod"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-700 dark:text-black dark:hover:text-blue-500"
              >
                Kannod
              </a>
              <a
                href="/nemawar"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-700 dark:text-black dark:hover:text-blue-500"
              >
                Nemawar
              </a>
              <a
                href="/dewas"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-700 dark:text-black dark:hover:text-blue-500"
              >
                Dewas
              </a>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-700 dark:text-white"
            >
              Home
            </a>
            <a
              href="/news"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
            >
              News
            </a>
            <a
              href="/khategaon"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
            >
              Khategaon
            </a>
            <a
              href="/kannod"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
            >
              Kannod
            </a>
            <a
              href="/nemawar"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
            >
              Nemawar
            </a>
            <a
              href="/dewas"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
            >
              Dewas
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
