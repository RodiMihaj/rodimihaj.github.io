import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-blue-400 font-bold text-xl neon-blue">
              Cyber Safety Hub
            </Link>
          </div>
          <div className="flex space-x-4 items-center">
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
      </div>
    </nav>
  );
};

export default Navbar;