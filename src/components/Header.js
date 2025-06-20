import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Header() {
  return (
    <header className="pt-4 flex flex-end text-gray-800">
      <nav>
        <Link to="/" className="text-sm text-gray-500 hover:text-gray-700 ">
          Home
        </Link>
        <Link
          to="/about"
          className="text-sm text-gray-500 hover:text-gray-700 mx-2"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="text-sm text-gray-500 hover:text-gray-700 "
        >
          Projects
        </Link>
      </nav>
    </header>
  );
}

export default Header;
