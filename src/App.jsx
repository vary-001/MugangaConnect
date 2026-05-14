import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RoleSelection from "./pages/RoleSelection";
import RegisterPatient from "./pages/RegisterPatient"; // Add this
import RegisterDoctor from "./pages/RegisterDoctor";   // Add this

function App() {
  const ProtectedRoute = ({ children, allowedRole }) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  if (!token || role !== allowedRole) {
    return <Navigate to="/login" />;
  }
  return children;
};
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/select-role" element={<RoleSelection />} />
        {/* These routes MUST match the navigate() paths in RoleSelection.jsx */}
        <Route path="/register/patient" element={<RegisterPatient />} />
        <Route path="/register/doctor" element={<RegisterDoctor />} />

      </Routes>
      
    </Router>
  );
}

export default App;