import React from 'react';
import { FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import logo from '../assets/logo(h1).svg'

function Footer() {
  return (
    <footer className="bg-[#191A23] text-white py-16 mt-16 " style={{borderTopLeftRadius:'70px', borderTopRightRadius:'70px'}}> 
      <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row justify-between">
        
        
        <div className="flex flex-col lg:w-1/3 mb-8 lg:mb-0">
          <img src={logo} className='w-44'/>
          <div className="flex space-x-6 text-gray-400">
            <a href="#about" className="hover:text-white">About us</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#use-cases" className="hover:text-white">Use Cases</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#blog" className="hover:text-white">Blog</a>
          </div>
        </div>

        
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <div className="bg-[#B9FF66] text-black px-4 py-1 inline-block font-semibold mb-4 rounded-md">Contact us:</div>
          <p>Email: info@positivus.com</p>
          <p>Phone: 555-567-8901</p>
          <p>Address: 1234 Main St, Moonstone City, Stardust State 12345</p>
        </div>

        
        <div className="lg:w-1/3 flex flex-col items-center lg:items-end">
          <div className="bg-[#282A36] p-4 rounded-lg w-full max-w-sm">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-[#191A23] border border-gray-500 rounded-md  p-2 mb-4 text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-[#B9FF66] text-black font-semibold rounded-md py-2 px-6 w-full">Subscribe to news</button>
          </div>
        </div>
      </div>

      
      <div className="flex justify-center mt-8 space-x-6 text-gray-400">
        <a href="#" aria-label="LinkedIn" className="hover:text-white"><FaLinkedin size={24} /></a>
        <a href="#" aria-label="Facebook" className="hover:text-white"><FaFacebook size={24} /></a>
        <a href="#" aria-label="Twitter" className="hover:text-white"><FaTwitter size={24} /></a>
      </div>

      <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
        <p>© 2023 Positivus. All Rights Reserved. <a href="#" className="hover:underline text-white">Privacy Policy</a></p>
      </div>
    </footer>
  );
}

export default Footer;
