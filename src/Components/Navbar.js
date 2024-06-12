import React, { useState, Suspense, lazy } from 'react';
import { Link } from "react-router-dom";

const HeadlineBar = lazy(() => import('./Headlinebar'));

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <HeadlineBar />
      </Suspense>
      <nav className="bg-white dark:bg-gray-900  w-full z-20 top-0 left-0 border-b border-black-200 dark:border-gray-600 sticky top-0">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-8">
            <img src="img/Tni 1.png" className="h-32" alt="Times Now India Logo" loading="lazy" />
              <span className="space-x-12 text-2xl font-semibold">Times Now India</span>
            </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-700 dark:text-black dark:hover:text-blue-500"
                >
                  होम
                </Link>
                <Link
                  to="/news"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-700 dark:text-black dark:hover:text-blue-500"
                >
                  न्यूज़
                </Link>
                <Link
                  to="/state"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-700 dark:text-black dark:hover:text-blue-500"
                >
                  राज्य
                </Link>
                <Link
                  to="/election"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-700 dark:text-black dark:hover:text-blue-500"
                >
                  चुनाव
                </Link>
                <Link
                  to="/entertainment"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-700 dark:text-black dark:hover:text-blue-500"
                >
                  मनोरंजन/खेल
                </Link>
                <Link
                  to="/tech"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-700 dark:text-black dark:hover:text-blue-500"
                >
                  टेक्नोलॉजी
                </Link>
        
                <Link
                  to="/education"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-700 dark:text-black dark:hover:text-blue-500"
                >
                  शिक्षा
                </Link>
                {/* <Link
                  to="/login"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-700 dark:text-black dark:hover:text-blue-500"
                >
                  लॉगिन
                </Link> */}
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
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-blue-700 dark:text-white"
              >
                 होम
              </Link>
              <Link
                to="/news"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
               न्यूज़
              </Link>
              <Link
                to="/khategaon"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                राज्य
              </Link>
              <Link
                to="/kannod"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                मनोरंजन
              </Link>
              <Link
                to="/nemawar"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                खेल
              </Link>
              <Link
                to="/dewas"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                टेक्नोलॉजी
              </Link>
              <Link
                to="/dewas"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                शिक्षा
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
