'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image'; // Added Image import

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed w-full top-0 z-50 bg-ksu-black">
            <nav className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-2xl font-extrabold text-ksu-gold hover:text-ksu-white transition-colors duration-300 flex items-center"
                    >
                        <Image
                            src="/assets/logo.png"
                            alt="KSU AI Club Logo"
                            width={40}
                            height={40}
                            className="mr-4"
                        />
                        KSU AI Club
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-10">
                        <li>
                            <Link
                                href="/"
                                className="text-lg font-medium text-ksu-white hover:text-ksu-gold transition-colors duration-300 relative group"
                            >
                                Home
                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-ksu-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="text-lg font-medium text-ksu-white hover:text-ksu-gold transition-colors duration-300 relative group"
                            >
                                About
                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-ksu-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/sponsors"
                                className="text-lg font-medium text-ksu-white hover:text-ksu-gold transition-colors duration-300 relative group"
                            >
                                Sponsors
                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-ksu-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/blog"
                                className="text-lg font-medium text-ksu-white hover:text-ksu-gold transition-colors duration-300 relative group"
                            >
                                Blog
                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-ksu-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-ksu-white hover:text-ksu-gold"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden bg-ksu-black bg-opacity-90 rounded-b-lg mt-2"
                        >
                            <motion.ul
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col space-y-2 py-4"
                            >
                                <li>
                                    <Link
                                        href="/"
                                        className="block text-ksu-white hover:text-ksu-gold py-2 px-4 text-lg transition-colors duration-300"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/about"
                                        className="block text-ksu-white hover:text-ksu-gold py-2 px-4 text-lg transition-colors duration-300"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/sponsors"
                                        className="block text-ksu-white hover:text-ksu-gold py-2 px-4 text-lg transition-colors duration-300"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Sponsors
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/blog"
                                        className="block text-ksu-white hover:text-ksu-gold py-2 px-4 text-lg transition-colors duration-300"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Blog
                                    </Link>
                                </li>
                            </motion.ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
