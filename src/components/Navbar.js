import { useState, useEffect } from 'react'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import logo from '../assets/images/logo/logoErlas.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-50/50 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center"><img src={logo} alt="MyBrand Logo" className="w-32 h-auto mt-[-10px] ml-[-10px] transition-all duration-300"/></a>

        {/* Menu button for mobile */}
        <div className="flex items-center sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded={isOpen}>
            <span className="sr-only">Open main menu</span>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden sm:flex sm:space-x-8 sm:items-center">
          <a href="/" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${scrolled ? 'text-blue-600 hover:text-white hover:underline text-xl font-extrabold' : 'text-white hover:text-yellow-300 hover:underline text-xl font-extrabold'}`}>
            Beranda
          </a>
          <a href="/about" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${scrolled ? 'text-blue-600 hover:text-white hover:underline text-xl font-extrabold' : 'text-white hover:text-yellow-300 hover:underline text-xl font-extrabold'}`}>
            Tentang Kami
          </a>
          <a href="/services" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${scrolled ? 'text-blue-600 hover:text-white hover:underline text-xl font-extrabold' : 'text-white hover:text-yellow-300 hover:underline text-xl font-extrabold'}`}>
              Services
          </a>
          <a href="/contact" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${scrolled ? 'text-blue-600 hover:text-white hover:underline text-xl font-extrabold' : 'text-white hover:text-yellow-300 hover:underline text-xl font-extrabold'}`}>
            Contact
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-md">
            <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-indigo-50">
              Beranda
            </a>
            <a href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-indigo-50">
              Tentang Kami
            </a>
            <a href="/services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-indigo-50">
              Services
            </a>
            <a href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-indigo-50">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
