import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <a href="/" className="flex items-center space-x-2">
              <img
                src="img/Tni 1.png"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="text-2xl font-semibold">Times Now India</span>
            </a>
          </div>
          <div className="w-full md:w-auto flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="/news" className="hover:underline">
              News
            </a>
            <a href="/khategaon" className="hover:underline">
              Khategaon
            </a>
            <a href="/kannod" className="hover:underline">
              Kannod
            </a>
            <a href="/nemawar" className="hover:underline">
              Nemawar
            </a>
            <a href="/dewas" className="hover:underline">
              Dewas
            </a>
            <a href="/admin" className="hover:underline">
              Admin Panel
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; 2024 Flowbite. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
