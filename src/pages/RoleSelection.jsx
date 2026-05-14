import React from 'react';
import { motion } from "framer-motion";
import { HiUser, HiClipboardCheck, HiArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const RoleCard = ({ type, icon: Icon, title, description, requirement, cta, onClick }) => (

  <motion.div 
    whileHover={{ y: -10 }}
    className="relative group bg-white border border-gray-100 p-8 sm:p-12 flex flex-col justify-between h-full shadow-2xl shadow-gray-200/50"
  >
    <div>
      <div className="w-16 h-16 bg-richBlack text-white flex items-center justify-center mb-8 group-hover:bg-orangeCTA transition-all">
        <Icon size={32} />
      </div>
      <h3 className="text-4xl font-black tracking-tighter uppercase mb-4 leading-none">
        {title}
      </h3>
      <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-6 leading-relaxed">
        {description}
      </p>
      
      <div className="pt-6 border-t border-gray-50">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orangeCTA block mb-2">
          {type === 'doctor' ? '⚠️ Verification Required' : '✅ Instant Access'}
        </span>
        <p className="text-[11px] text-gray-500 font-medium uppercase leading-tight">
          {requirement}
        </p>
      </div>
    </div>

    <button 
      onClick={onClick}
      className="mt-12 w-full bg-richBlack text-white py-5 font-black uppercase text-xs tracking-[0.3em] flex items-center justify-center gap-4 group-hover:bg-orangeCTA transition-all"
    >
      {cta} <HiArrowRight size={18} />
    </button>
  </motion.div>
);

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-white overflow-hidden font-sans">
      
      {/* Background Image with White Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.pexels.com/photos/5998449/pexels-photo-5998449.jpeg?auto=compress&cs=tinysrgb&w=1600')` }}
      >
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 max-w-6xl w-full px-6 py-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-1 mb-4">
            <span className="text-xl font-black text-richBlack">DOCTOR</span>
            <span className="text-xl font-black text-orangeCTA">CONNECT</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none text-richBlack">
            Identify Your <span className="text-orangeCTA">Role</span>
          </h1>
          <p className="mt-4 text-gray-400 font-bold uppercase text-[10px] tracking-[0.4em]">
            Select your account type to proceed
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Patient Card */}
          <RoleCard 
            type="patient"
            icon={HiUser}
            title="Continue as Patient"
            description="Access healthcare instantly. Book appointments, chat with specialists, and manage your wellness journey."
            requirement="Requires: Basic personal details and email verification."
            cta="Register as Patient"
            onClick={() => navigate('/register/patient')}
          />

          {/* Doctor Card */}
          <RoleCard 
            type="doctor"
            icon={HiClipboardCheck}
            title="Continue as Doctor"
            description="Join our network of elite medical professionals. Access global patients and digital prescription tools."
            requirement="Requires: Medical License, Hospital Affiliation, and Specialization verification."
            cta="Register as Doctor"
            onClick={() => navigate('/register/doctor')}
          />

        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <button 
            onClick={() => navigate('/')}
            className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-orangeCTA transition-all"
          >
            ← Return to Homepage
          </button>
        </div>

      </div>
    </div>
  );
};

export default RoleSelection;