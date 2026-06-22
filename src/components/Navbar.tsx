'use client';

import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import siteConfig from '@/site-config.json';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Helper to strip purity, percentage, and marketing prefixes for a clean menu display
  const getCleanName = (fullName: string) => {
    return fullName
      .replace(/\s*\(.*?\)/g, '') // Remove parentheses like (99.99%), (A7, A8, A9), (Sb 99.9% min)
      .replace(/^(Top-Quality|High-Purity|High-Quality|Ultra-High Purity|High Purity|Pure|Sn\s*99\.\d+%\s*|99\.\d+%\s*Pure\s*|99\.\d+%\s*)\s*/gi, '') // Strip starting prefixes
      .replace(/(High Purity|Pure)\s*/gi, '') // Remove remaining marketing descriptors
      .replace(/\s*99\.\d+%\s*/gi, ' ') // Remove other inline purity numbers
      .trim();
  };

  // Group products by category
  const categories = {
    'Copper': siteConfig.products.filter(p => p.category === 'Copper'),
    'Aluminum': siteConfig.products.filter(p => p.category === 'Aluminum'),
    'Heavy Metals': siteConfig.products.filter(p => p.category === 'Heavy Metals'),
    'Specialty Metals': siteConfig.products.filter(p => p.category === 'Specialty Metals'),
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <img 
              src="/images/full-logo.png" 
              alt="Hubei Ruichuang Metal Products Co., Ltd." 
              className="h-10 md:h-12 w-auto object-contain mix-blend-multiply" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-brand-gold font-medium transition">Home</Link>
            
            {/* Mega Menu Dropdown */}
            <div 
              className="relative group h-20 flex items-center"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
              ref={dropdownRef}
            >
              <button 
                className="flex items-center text-gray-700 hover:text-brand-gold font-medium transition cursor-pointer"
              >
                Products <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Menu Content */}
              <div 
                className={`absolute top-20 left-1/2 -translate-x-1/2 w-[800px] bg-slate-900 shadow-2xl rounded-b-xl border-t-2 border-brand-gold p-8 grid grid-cols-4 gap-8 transition-all duration-300 ease-in-out ${isProductsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
              >
                {Object.entries(categories).map(([name, products]) => (
                  <div key={name}>
                    <h3 className="text-brand-gold font-bold text-sm uppercase tracking-widest mb-4 border-b border-white/10 pb-2">
                      {name}
                    </h3>
                     <ul className="space-y-2">
                      {products.map(product => (
                        <li key={product.id}>
                          <Link 
                            href={`/products/${product.id}`}
                            className="text-gray-300 hover:text-white text-sm block py-1 hover:translate-x-1 transition-transform"
                            onClick={() => setIsProductsOpen(false)}
                          >
                            {getCleanName(product.name)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/#about" className="text-gray-700 hover:text-brand-gold font-medium transition">About</Link>
            <Link href="/#contact" className="bg-brand-gold text-white px-6 py-2.5 rounded-lg font-bold hover:brightness-110 transition shadow-md shadow-brand-gold/20">
              Inquiry Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white border-t border-gray-100 transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-6 space-y-4">
          <Link href="/" className="block text-gray-800 font-bold text-lg" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          
          <div className="space-y-4">
            <p className="text-brand-gold font-bold uppercase tracking-widest text-xs">Our Products</p>
            {Object.entries(categories).map(([name, products]) => (
              <div key={name} className="pl-2 border-l-2 border-gray-100">
                <p className="text-sm font-bold text-gray-500 mb-2">{name}</p>
                <div className="grid grid-cols-2 gap-2">
                  {products.map(product => (
                    <Link 
                      key={product.id}
                      href={`/products/${product.id}`}
                      className="text-gray-600 text-sm py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      • {getCleanName(product.name)}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Link href="/#about" className="block text-gray-800 font-bold text-lg" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link href="/#contact" className="block w-full bg-brand-gold text-white text-center font-bold py-4 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
            Inquiry Now
          </Link>
        </div>
      </div>
    </nav>
  );
}


