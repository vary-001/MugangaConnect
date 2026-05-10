import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserCircle, FaStethoscope, FaUserShield, FaArrowRight } from 'react-icons/fa';
import Navbar from '../components/layout  /Navbar';

const AuthPage = () => {
    const location = useLocation();
  const [isLogin, setIsLogin] = useState(true);
  // Default to the passed role, or 'patient' if none exists
  const [role, setRole] = useState(location.state?.selectedRole || 'patient');
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? 'login' : 'register';
    
    try {
      const response = await fetch(`http://localhost:5000/api/auth/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, role })
      });
      const data = await response.json();
      
      if (response.ok) {
        alert(`${isLogin ? 'Welcome Back' : 'Account Created'} to Muzima!`);
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        // Redirect logic here later
      } else {
        alert(data.msg || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("Server connection failed");
    }
  };

  return (
    <div className="min-h-screen bg-muzimaGray pt-24 font-sans">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Dynamic Text */}
        <div className="space-y-8">
          <h2 className="text-muzimaOrange font-black tracking-widest text-sm uppercase">
            Muzima Portal
          </h2>
          <h1 className="text-muzimaBlack text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            {isLogin ? 'Access' : 'Join'} <br /> The System
          </h1>
          <p className="text-muzimaBlack/60 font-medium text-xl max-w-md">
            Enter your credentials to manage your health, consult patients, or oversee the ecosystem.
          </p>
        </div>

        {/* Right Side: Auth Card */}
        <div className="bg-muzimaBlack p-10 lg:p-16 text-white shadow-2xl relative overflow-hidden">
            {/* Role Selector */}
            <div className="flex gap-4 mb-10">
                {[
                  { id: 'patient', icon: <FaUserCircle />, label: 'Patient' },
                  { id: 'doctormongodb --version', icon: <FaStethoscope />, label: 'Doctor' },
                  { id: 'admin', icon: <FaUserShield />, label: 'Admin' }
                ].map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setRole(item.id)}
                        className={`flex-1 flex items-center justify-center gap-2 py-4 text-[10px] font-black uppercase tracking-widest transition-all ${
                            role === item.id ? 'bg-muzimaOrange text-white' : 'bg-white/5 text-white/40'
                        }`}
                    >
                        {item.icon} {item.label}
                    </button>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {!isLogin && (
                    <div className="space-y-2">
                        <label className="text-[10px] font-black tracking-[0.2em] text-muzimaOrange uppercase">Full Name</label>
                        <input 
                            type="text" 
                            required
                            className="w-full bg-white/5 border-none p-5 text-sm font-bold focus:bg-white/10 outline-none transition-all"
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                    </div>
                )}
                <div className="space-y-2">
                    <label className="text-[10px] font-black tracking-[0.2em] text-muzimaOrange uppercase">Email Address</label>
                    <input 
                        type="email" 
                        required
                        className="w-full bg-white/5 border-none p-5 text-sm font-bold focus:bg-white/10 outline-none transition-all"
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black tracking-[0.2em] text-muzimaOrange uppercase">Secure Password</label>
                    <input 
                        type="password" 
                        required
                        className="w-full bg-white/5 border-none p-5 text-sm font-bold focus:bg-white/10 outline-none transition-all"
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                    />
                </div>

                <button className="w-full bg-white text-muzimaBlack py-6 font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 hover:bg-muzimaOrange hover:text-white transition-all group">
                    {isLogin ? 'Authorize Access' : 'Create Account'}
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
            </form>

            <button 
                onClick={() => setIsLogin(!isLogin)}
                className="mt-8 text-[10px] font-black uppercase tracking-[0.2em] text-muzimaOrange/60 hover:text-white transition-colors"
            >
                {isLogin ? "Don't have an account? Register Here" : "Already have an account? Login Here"}
            </button>
        </div>

      </div>
    </div>
  );
};

export default AuthPage;