import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      
      // Save Token and Role
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', res.data.role);

      // Redirect based on Role
      if (res.data.role === 'ADMIN') navigate('/admin/dashboard');
      else if (res.data.role === 'DOCTOR') navigate('/doctor/dashboard');
      else navigate('/patient/dashboard');
      
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 font-sans">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <img src="/logo1.png" alt="Logo" className="h-12 mx-auto mb-4" />
          <h1 className="text-4xl font-black tracking-tighter uppercase leading-none">
            Welcome <span className="text-orangeCTA">Back</span>
          </h1>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mt-2">
            Secure Healthcare Login
          </p>
        </div>

        {error && <p className="text-red-500 text-[10px] font-bold uppercase mb-4 text-center">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Email Address</label>
            <input 
              type="email" 
              className="w-full bg-gray-50 border-none p-4 text-sm font-bold outline-none focus:ring-1 focus:ring-orangeCTA transition-all"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Password</label>
            <input 
              type="password" 
              className="w-full bg-gray-50 border-none p-4 text-sm font-bold outline-none focus:ring-1 focus:ring-orangeCTA transition-all"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="w-full bg-orangeCTA text-white py-5 font-black uppercase text-xs tracking-[0.3em] mt-6 hover:bg-richBlack transition-all">
            Authorized Login
          </button>
        </form>

        <p className="mt-8 text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          Don't have an account? <span onClick={() => navigate('/select-role')} className="text-orangeCTA cursor-pointer">Register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;