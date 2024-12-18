import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Header() {
  return (
    <header className="pt-4 flex justify-between items-center text-gray-800">
      <div className="flex space-x-6">
        <a
          href="https://www.linkedin.com/in/shobhit-m"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-blue-400 transition duration-200"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>
        <a
          href="https://github.com/shobhitmehro"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-green-400 transition duration-200"
        >
          <FaGithub className="w-5 h-5" />
        </a>
      </div>
      <nav>
        <a
          href="#/"
          className="text-sm text-gray-500 hover:text-gray-700 mx-2"
        >
          Home
        </a>
        <a
          href="#/blog"
          className="text-sm text-gray-500 hover:text-gray-700 mx-2"
        >
          Blog
        </a>
        <a
          href="#/projects"
          className="text-sm text-gray-500 hover:text-gray-700 mx-2"
        >
          Projects
        </a>
      </nav>
    </header>
  );
}

export default Header;
