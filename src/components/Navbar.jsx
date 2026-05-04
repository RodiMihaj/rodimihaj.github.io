import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="text-blue-400 font-bold text-xl neon-blue">
              Cyber Safety Hub
            </Link>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="sm:hidden inline-flex items-center justify-center rounded-md border border-gray-600 bg-slate-900 px-3 py-2 text-gray-300 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Toggle navigation</span>
            {isOpen ? 'Close' : 'Menu'}
          </button>
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/dns" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              DNS
            </Link>
            <Link to="/https" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              HTTPS
            </Link>
            <Link to="/phishing-quiz" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Phishing Quiz
            </Link>
            <Link to="/tools" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Tools
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
          </div>
        </div>
        {isOpen && (
          <div id="mobile-menu" className="sm:hidden mt-2 space-y-2 pb-4">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block rounded-md bg-slate-900 px-3 py-2 text-base font-medium text-gray-300 hover:bg-slate-800 hover:text-white"
            >
              Home
            </Link>
            <Link
              to="/dns"
              onClick={() => setIsOpen(false)}
              className="block rounded-md bg-slate-900 px-3 py-2 text-base font-medium text-gray-300 hover:bg-slate-800 hover:text-white"
            >
              DNS
            </Link>
            <Link
              to="/https"
              onClick={() => setIsOpen(false)}
              className="block rounded-md bg-slate-900 px-3 py-2 text-base font-medium text-gray-300 hover:bg-slate-800 hover:text-white"
            >
              HTTPS
            </Link>
            <Link
              to="/phishing-quiz"
              onClick={() => setIsOpen(false)}
              className="block rounded-md bg-slate-900 px-3 py-2 text-base font-medium text-gray-300 hover:bg-slate-800 hover:text-white"
            >
              Phishing Quiz
            </Link>
            <Link
              to="/tools"
              onClick={() => setIsOpen(false)}
              className="block rounded-md bg-slate-900 px-3 py-2 text-base font-medium text-gray-300 hover:bg-slate-800 hover:text-white"
            >
              Tools
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block rounded-md bg-slate-900 px-3 py-2 text-base font-medium text-gray-300 hover:bg-slate-800 hover:text-white"
            >
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;