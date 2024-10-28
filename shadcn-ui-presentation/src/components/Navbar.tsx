"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="bg-gradient-to-r from-purple-900 to-green-900 shadow-lg text-white py-4 fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className='font-semibold text-2xl'>
                    ShadCN & Radix UI
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
                    className={`fixed top-16 right-0 bg-gradient-to-r from-purple-900 to-green-800 p-6 sm:p-10 md:p-14 z-50 w-40 sm:w-48 transform transition-transform duration-500 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
    } md:hidden flex flex-col justify-center items-center`}
>
                    <li className="py-2 text-white">
                        <Link href="#intro">Intro</Link>
                    </li>
                    <li className="py-2 text-white">
                        <Link href="#features">Features</Link>
                    </li>
                    <li className="py-2 text-white">
                        <Link href="#key-features">Key Features</Link>
                    </li>
                    <li className="py-2 text-white">
                        <Link href="#how-to-install-shadcn">How to Install Shadcn</Link>
                    </li>
                </ul>

                <div className="hidden md:flex space-x-6">
                    <Link href="#intro" className="text-gray-300 hover:text-yellow-600 transition duration-300">
                        Intro
                    </Link>
                    <Link href="#features" className="text-gray-300 hover:text-yellow-600 transition duration-300">
                        Features
                    </Link>
                    <Link href="#key-features" className="text-gray-300 hover:text-yellow-600 transition duration-300">
                        Key Features
                    </Link>
                    <Link href="#how-to-install-shadcn" className="text-gray-300 hover:text-yellow-600 transition duration-300">
                        How to Install Shadcn
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
