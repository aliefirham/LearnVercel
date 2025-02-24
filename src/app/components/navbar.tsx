'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const productLinks = [
  {
    title: 'All Products',
    href: '/product'
  },
  {
    title: 'Batari Solar-P',
    href: '/product/solar-p'
  }
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsProductDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsProductDropdownOpen(false);
    }, 300); // Menambahkan delay 300ms
    setTimeoutId(id);
  };

  return (
    <nav className="fixed w-screen top-0 z-[100] bg-black/30 backdrop-blur-sm">
      <div className="w-full px-2 py-2 md:py-4">
        <div className="flex items-center justify-between max-w-[100vw]">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <div className="relative w-16 h-6 md:w-32 md:h-10">
                <Image 
                  src="/images/navbar/logo.png" 
                  alt="bataraienergy" 
                  fill
                  sizes="(max-width: 768px) 64px, 128px"
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white">
                <span>Demos</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            {/* Product Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-white">
                <span>Product</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Product Dropdown Menu */}
              {isProductDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                  {productLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link href="/calculator" className="text-white hover:text-gray-300">Calculator</Link>
            <Link href="/article" className="text-white hover:text-gray-300">Article</Link>
            <Link href="/all-pages" className="text-white hover:text-gray-300">All Pages</Link>
          </div>

          {/* Contact Button - Hidden on Mobile */}
          <div className="hidden md:block">
            <Link 
              href="/contact" 
              className="bg-[#F7E733] text-black px-4 py-1.5 md:px-5 md:py-2 rounded-full text-sm md:text-base font-medium hover:bg-[#e6d62f] transition-colors"
            >
              Let&apos;s Safe The World
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`
            absolute left-0 w-full top-[40px] 
            bg-white/95 backdrop-blur-sm shadow-lg 
            transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
          `}
        >
          <div className="w-full max-w-[100vw] px-2">
            <div className="flex flex-col py-2">
              <div className="px-2 py-2 text-sm text-black hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center justify-between">
                  <span>Demos</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              {/* Product Dropdown in Mobile */}
              <div className="px-2 py-2 text-sm text-black">
                <div 
                  className="flex items-center justify-between cursor-pointer hover:bg-gray-100"
                  onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                >
                  <span>Product</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                {/* Mobile Product Dropdown Items */}
                {isProductDropdownOpen && (
                  <div className="ml-4 mt-2 border-l-2 border-gray-200">
                    {productLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block py-2 pl-4 text-sm text-gray-800 hover:bg-gray-100"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/calculator"
                className="px-2 py-2 text-sm text-black hover:bg-gray-100"
              >
                Calculator
              </Link>
              <Link
                href="/article"
                className="px-2 py-2 text-sm text-black hover:bg-gray-100"
              >
                Article
              </Link>
              <Link
                href="/all-pages"
                className="px-2 py-2 text-sm text-black hover:bg-gray-100"
              >
                All Pages
              </Link>
              <div className="px-2 py-2">
                <Link
                  href="/contact"
                  className="block py-2 text-[11px] text-center bg-[#F7E733] text-black hover:bg-[#e6d62f] transition-colors"
                >
                  Let&apos;s Safe The World
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;