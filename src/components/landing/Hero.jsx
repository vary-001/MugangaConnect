import React from 'react';
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center pt-20 overflow-hidden">
      {/* Dynamic Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-[center_left_20%] sm:bg-center"
        style={{ backgroundImage: `url('https://images.pexels.com/photos/5998449/pexels-photo-5998449.jpeg?auto=compress&cs=tinysrgb&w=1600')` }}
      >
        <div className="absolute inset-0 bg-white/40 md:bg-white/10 backdrop-blur-[2px] md:backdrop-blur-none bg-gradient-to-r from-white via-white/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <h2 className="text-orangeCTA font-black tracking-[0.3em] mb-4 text-[10px] sm:text-xs">
            DIGITAL HEALTH INFRASTRUCTURE
          </h2>
          
          {/* Minimized/Optimized Font Sizes */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-black leading-[0.85] text-richBlack mb-8">
            BETTER <br className="hidden sm:block" /> CARE <span className="text-orangeCTA">NOW.</span>
          </h1>
          
          <p className="text-richBlack/70 text-base sm:text-lg font-semibold max-w-sm mb-10 uppercase tracking-tight leading-tight">
            Connecting you with world-class specialists via secure digital channels.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-orangeCTA text-white px-8 sm:px-10 py-4 sm:py-5 font-black uppercase text-[10px] tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-richBlack">
              Get Started <BsArrowRight size={18} />
            </button>
            <button className="bg-richBlack text-white px-8 sm:px-10 py-4 sm:py-5 font-black uppercase text-[10px] tracking-[0.2em] hover:bg-orangeCTA">
              View Doctors
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Indicators - Hidden on mobile for cleanliness */}
      <div className="absolute right-8 bottom-12 hidden md:flex flex-col gap-8 items-end border-r-4 border-orangeCTA pr-6">
        <div className="text-right">
          <h4 className="text-3xl font-black">500+</h4>
          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Specialists</p>
        </div>
        <div className="text-right">
          <h4 className="text-3xl font-black">24/7</h4>
          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Online Care</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;