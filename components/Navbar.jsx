"use client"
import { useState, useEffect } from 'react';

// components/Navbar.js
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    return (
      <nav className={`sticky top-0 z-50 bg-gradient-to-r from-[#efb307] to-[#707070] m-4 rounded-xl transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="text-xl font-bold text-white hover:text-gray-200 transition duration-150 ease-in-out">
              ManLikeMaingi
            </a>
            
            {/* Desktop menu */}
            <div className="hidden md:flex space-x-4">
              {['Resume',].map((item) => (
                
                  <a
                    key={item}
                    href={`${item.toLowerCase()}`}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium transition duration-150 ease-in-out"
                  >
                    {item}
                  </a>
                
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {['Resume'].map((item) => (
                  <a
                    key={item}
                    href={`${item.toLowerCase()}`}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-50 animate-gradient -z-10 rounded-xl"></div>
      </nav>
    );
  }
