"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black shadow-lg fixed top-0 w-full z-10 h-20">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        <Link href="/" className="text-4xl font-bold text-pink-600 hover:text-pink-800 transition duration-300">
          Glamour Grove
        </Link>

        <div className="flex flex-col cursor-pointer relative md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <span className="text-gray-300 text-4xl leading-none">&times;</span>
          ) : (
            <>
              <span className="w-6 h-0.5 bg-gray-300 my-1 transition-all duration-400"></span>
              <span className="w-6 h-0.5 bg-gray-300 my-1 transition-all duration-400"></span>
              <span className="w-6 h-0.5 bg-gray-300 my-1 transition-all duration-400"></span>
            </>
          )}
        </div>

        <ul
          className={`fixed top-16 right-0 bg-pink-600 p-14 z-50 w-48 transform transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'
            } md:hidden flex flex-col items-center`}
        >
          <li className="py-2 text-gray-300">
            <Link href="/">Home</Link>
          </li>
          <li className="py-2 text-gray-300">
            <Link href="#about">About</Link>
          </li>
          <li className="py-2 text-gray-300">
            <Link href="#services">Services</Link>
          </li>
          <li className="py-2 text-gray-300">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>

        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-300 hover:text-pink-600 transition duration-300">
            Home
          </Link>
          <Link href="#about" className="text-gray-300 hover:text-pink-600 transition duration-300">
            About
          </Link>
          <Link href="#services" className="text-gray-300 hover:text-pink-600 transition duration-300">
            Services
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-pink-600 transition duration-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
