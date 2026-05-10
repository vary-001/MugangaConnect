import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle, FaStethoscope, FaUserShield } from 'react-icons/fa';
import Navbar from '../components/layout/Navbar';

const RoleSelection = () => {
  const navigate = useNavigate();

  const roles = [
    {
      id: 'patient',
      title: 'Patient',
      desc: 'Access medical care, book appointments and track wellness.',
      icon: <FaUserCircle size={40} />,
      color: 'bg-white',
      textColor: 'text-muzimaBlack'
    },
    {
      id: 'doctor',
      title: 'Doctor',
      desc: 'Consult patients, manage schedules and provide care.',
      icon: <FaStethoscope size={40} />,
      color: 'bg-muzimaOrange',
      textColor: 'text-white'
    },
    {
      id: 'admin',
      title: 'Administrator',
      desc: 'Oversee system operations, approve doctors and manage data.',
      icon: <FaUserShield size={40} />,
      color: 'bg-muzimaPurple',
      textColor: 'text-white'
    }
  ];

  const handleSelect = (roleId) => {
    // We navigate to auth and pass the role state
    navigate('/auth', { state: { selectedRole: roleId } });
  };

  return (
    <div className="min-h-screen bg-muzimaBlack pt-32 pb-20 font-sans">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-muzimaOrange font-black tracking-[0.4em] uppercase text-xs mb-4">Identity Selection</h2>
          <h1 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter">Choose Your Role</h1>
          <p className="text-white/40 mt-6 text-xl max-w-2xl mx-auto">Select how you intend to interact with the Muzima Healthcare Ecosystem.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role) => (
            <div 
              key={role.id}
              onClick={() => handleSelect(role.id)}
              className={`${role.color} ${role.textColor} p-12 cursor-pointer transition-all duration-500 hover:scale-105 group relative overflow-hidden`}
            >
              <div className="relative z-10">
                <div className="mb-8 group-hover:scale-110 transition-transform duration-500">{role.icon}</div>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">{role.title}</h3>
                <p className="font-medium opacity-70 leading-relaxed mb-8">{role.desc}</p>
                <span className="text-[10px] font-black uppercase tracking-widest border-b-2 border-current pb-1">Enter Portal</span>
              </div>
              {/* Background Decoration */}
              <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                {React.cloneElement(role.icon, { size: 200 })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
            <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em]">Muzima Secure Authentication Gateway</p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;