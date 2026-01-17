import React from "react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="px-10 sticky top-4 z-50">
      <div className="mx-auto container">
        <div className="bg-white shadow-lg rounded-lg mt-6 px-6 py-3 flex items-center justify-between">
          <div className="text-lg font-bold text-blue-gray-900">
            Course Landing Page
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <Link href="#courses" className="text-gray-700 hover:text-gray-900">
              Courses
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-gray-900">
              About
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
            <a
              href="https://www.material-tailwind.com/blocks"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Blocks
            </a>
          </div>
          <button className="lg:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
