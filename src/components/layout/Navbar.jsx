import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between">
        
        {/* Logo with Image */}
<div className="flex items-center gap-2">
  <img
    src="/logo1.png"
    alt="Doctor Connect Logo"
    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
  />

  <div className="flex items-center gap-1">
    <span className="text-xl sm:text-2xl font-black text-richBlack">
      DOCTOR
    </span>

    <span className="text-xl sm:text-2xl font-black text-orangeCTA">
      CONNECT
    </span>
  </div>
</div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 font-extrabold uppercase text-[11px] tracking-widest">
          <a href="#" className="hover:text-orangeCTA">Home</a>
          <a href="#" className="hover:text-orangeCTA">Consultation</a>
          <a href="#" className="hover:text-orangeCTA">Specialists</a>
          <a href="#" className="hover:text-orangeCTA">About</a>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-[10px] font-black uppercase tracking-widest px-4 hover:text-orangeCTA">
            Login
          </button>
          <button className="bg-orangeCTA text-white px-5 sm:px-8 py-2.5 sm:py-3 font-black uppercase text-[10px] tracking-widest hover:bg-richBlack">
            Book Now
          </button>
          
          {/* Mobile Toggle */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={28} /> : <HiMenuAlt4 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-8 flex flex-col gap-6 font-black uppercase tracking-tighter text-2xl shadow-xl">
          <a href="#" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#" onClick={() => setIsOpen(false)}>Consultation</a>
          <a href="#" onClick={() => setIsOpen(false)}>Specialists</a>
          <a href="#" onClick={() => setIsOpen(false)}>About</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;