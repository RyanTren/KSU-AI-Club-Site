'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-ksu-white shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-ksu-black hover:text-ksu-gold">
            KSU AI Club
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link href="/" className="text-ksu-black hover:text-ksu-gold">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-ksu-black hover:text-ksu-gold">
                About
              </Link>
            </li>
            <li>
              <Link href="/sponsors" className="text-ksu-black hover:text-ksu-gold">
                Sponsors
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-ksu-black hover:text-ksu-gold">
                Blog
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-ksu-black hover:text-ksu-gold"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
              className="md:hidden"
            >
              <motion.ul
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                className="flex flex-col space-y-4 pt-4"
              >
                <li>
                  <Link 
                    href="/" 
                    className="block text-ksu-black hover:text-ksu-gold py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className="block text-ksu-black hover:text-ksu-gold py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/sponsors" 
                    className="block text-ksu-black hover:text-ksu-gold py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sponsors
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog" 
                    className="block text-ksu-black hover:text-ksu-gold py-2"
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
  )
}