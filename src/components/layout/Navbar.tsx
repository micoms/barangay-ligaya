"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-green-800 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo and Barangay Name */}
          <Link href="/" className="flex items-center space-x-3">
            {/* We'll replace this with the barangay logo later */}
            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-green-800 font-bold">
              BL
            </div>
            <div>
              <h1 className="font-bold text-lg md:text-xl">Barangay Ligaya</h1>
              <p className="text-xs md:text-sm text-green-200">Gabaldon, Nueva Ecija</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-yellow-300 transition duration-200">
              Home
            </Link>
            <Link href="/about" className="hover:text-yellow-300 transition duration-200">
              About
            </Link>
            <Link href="/officials" className="hover:text-yellow-300 transition duration-200">
              Officials
            </Link>
            <Link href="/services" className="hover:text-yellow-300 transition duration-200">
              Services
            </Link>
            <Link href="/news" className="hover:text-yellow-300 transition duration-200">
              News
            </Link>
            <Link href="/contact" className="hover:text-yellow-300 transition duration-200">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link href="/" className="block hover:text-yellow-300 transition duration-200">
              Home
            </Link>
            <Link href="/about" className="block hover:text-yellow-300 transition duration-200">
              About
            </Link>
            <Link href="/officials" className="block hover:text-yellow-300 transition duration-200">
              Officials
            </Link>
            <Link href="/services" className="block hover:text-yellow-300 transition duration-200">
              Services
            </Link>
            <Link href="/news" className="block hover:text-yellow-300 transition duration-200">
              News
            </Link>
            <Link href="/contact" className="block hover:text-yellow-300 transition duration-200">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}