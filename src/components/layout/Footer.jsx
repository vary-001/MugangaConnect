import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-richBlack text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 mb-16">
          
          <div className="space-y-6">
            <h1 className="font-black text-xl tracking-tighter italic">DOCTORCONNECT</h1>
            <p className="text-gray-500 text-[10px] font-bold uppercase leading-relaxed tracking-widest">
              High-performance healthcare ecosystem for the digital age.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-orangeCTA font-black tracking-widest text-[10px] uppercase">Navigation</h4>
            <div className="flex flex-col gap-3 text-[10px] font-black uppercase tracking-widest text-gray-400">
              <a href="#" className="hover:text-white">Home</a>
              <a href="#" className="hover:text-white">Specialists</a>
              <a href="#" className="hover:text-white">FAQs</a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-orangeCTA font-black tracking-widest text-[10px] uppercase">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/5 hover:bg-orangeCTA transition-all"><FaFacebookF /></a>
              <a href="#" className="p-3 bg-white/5 hover:bg-orangeCTA transition-all"><FaTwitter /></a>
              <a href="#" className="p-3 bg-white/5 hover:bg-orangeCTA transition-all"><FaLinkedinIn /></a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-orangeCTA font-black tracking-widest text-[10px] uppercase">Updates</h4>
            <div className="flex">
              <input type="text" placeholder="EMAIL" className="bg-white/5 border-none p-3 text-[10px] w-full" />
              <button className="bg-orangeCTA px-4 text-[10px] font-black tracking-widest">GO</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[8px] font-black uppercase tracking-[0.5em] text-gray-600">
            © 2024 DOCTORCONNECT.
          </p>
          <div className="flex gap-6 text-[8px] font-black uppercase tracking-[0.5em] text-gray-600">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;