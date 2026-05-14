import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiArrowLeft, HiShieldCheck } from 'react-icons/hi';

const RegisterDoctor = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '', email: '', password: '', specialization: '', 
    hospital: '', licenseNumber: '', experience: ''
  });

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12 font-sans">
      <button 
        onClick={() => navigate('/select-role')}
        className="absolute top-8 left-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-orangeCTA"
      >
        <HiArrowLeft /> Back
      </button>

      <div className="w-full max-w-2xl">
        <div className="text-center mb-10">
          <img src="/logo1.png" alt="Logo" className="h-12 mx-auto mb-4" />
          <h1 className="text-4xl font-black tracking-tighter uppercase leading-none">
            Medical <span className="text-orangeCTA">Verification</span>
          </h1>
          <div className="flex items-center justify-center gap-2 mt-2">
            <HiShieldCheck className="text-orangeCTA" />
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">
              Doctor registration requires admin approval
            </p>
          </div>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Full Name</label>
              <input type="text" className="w-full bg-gray-50 border-none p-4 text-sm font-bold outline-none focus:ring-1 focus:ring-orangeCTA" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Specialization</label>
              <input type="text" placeholder="e.g. Cardiologist" className="w-full bg-gray-50 border-none p-4 text-sm font-bold outline-none" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Hospital Affiliation</label>
              <input type="text" className="w-full bg-gray-50 border-none p-4 text-sm font-bold outline-none" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Medical License #</label>
              <input type="text" className="w-full bg-gray-50 border-none p-4 text-sm font-bold outline-none focus:ring-1 focus:ring-orangeCTA" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Years of Experience</label>
              <input type="number" className="w-full bg-gray-50 border-none p-4 text-sm font-bold outline-none" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Contact Email</label>
              <input type="email" className="w-full bg-gray-50 border-none p-4 text-sm font-bold outline-none" />
            </div>
          </div>

          <div className="md:col-span-2 mt-4">
             <div className="space-y-1 mb-6">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Create Password</label>
              <input type="password" title="password" className="w-full bg-gray-50 border-none p-4 text-sm font-bold outline-none" />
            </div>
            <button className="w-full bg-richBlack text-white py-6 font-black uppercase text-xs tracking-[0.3em] hover:bg-orangeCTA transition-all shadow-xl">
              Submit for Verification
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterDoctor;