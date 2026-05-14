import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';

const RegisterPatient = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '', email: '', password: '', age: '', gender: 'Other'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would call your backend API
    console.log("Registering Patient:", formData);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12 font-sans">
      <button 
        onClick={() => navigate('/select-role')}
        className="absolute top-8 left-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-orangeCTA"
      >
        <HiArrowLeft /> Back
      </button>

      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <img src="/logo1.png" alt="Logo" className="h-12 mx-auto mb-4" />
          <h1 className="text-4xl font-black tracking-tighter uppercase leading-none">
            Patient <span className="text-orangeCTA">Onboarding</span>
          </h1>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mt-2">
            Create your health profile
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Full Name</label>
            <input 
              type="text" required
              className="w-full bg-gray-50 border-none p-4 text-sm font-bold outline-none focus:ring-2 focus:ring-orangeCTA transition-all"
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Age</label>
                <input 
                  type="number" required
                  className="w-full bg-gray-50 border-none p-4 text-sm font-bold outline-none"
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                />
            </div>
            <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Gender</label>
                <select 
                  className="w-full bg-gray-50 border-none p-4 text-sm font-bold outline-none"
                  onChange={(e) => setFormData({...formData, gender: e.target.value})}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Email Address</label>
            <input 
              type="email" required
              className="w-full bg-gray-50 border-none p-4 text-sm font-bold outline-none"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Password</label>
            <input 
              type="password" required
              className="w-full bg-gray-50 border-none p-4 text-sm font-bold outline-none"
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>
          
          <button className="w-full bg-orangeCTA text-white py-5 font-black uppercase text-xs tracking-[0.3em] mt-6 hover:bg-richBlack transition-all">
            Complete Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPatient;