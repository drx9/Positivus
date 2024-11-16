import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo(h).svg'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-evenly items-center py-6 bg-white fixed w-full top-0 z-50 px-8 md:px-16">
      
      <img src={logo}/>

      
      <nav className="hidden md:flex space-x-10 text-2xl items-center">
        <a href="#services" className="hover:text-gray-700">Services</a>
        <a href="#use-cases" className="hover:text-gray-700">Use Cases</a>
        <a href="#pricing" className="hover:text-gray-700">Pricing</a>
        <a href="#blog" className="hover:text-gray-700">Blog</a>
        <button className="bg-white text-black border-4 px-4 py-2 rounded">Request a Quote</button>
      </nav>

      
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-40">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <a href="#services" className="text-lg font-semibold text-gray-700 hover:text-black">Services</a>
            <a href="#use-cases" className="text-lg font-semibold text-gray-700 hover:text-black">Use Cases</a>
            <a href="#pricing" className="text-lg font-semibold text-gray-700 hover:text-black">Pricing</a>
            <a href="#blog" className="text-lg font-semibold text-gray-700 hover:text-black">Blog</a>
            <button className="bg-white text-black border-4 px-4 py-2 rounded">Request a Quote</button>
          </nav>
        </div>
      )}
    </header>
  );
}
