import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import HomePage from './pages/HomePage';
import { Outlet } from 'react-router-dom';
import AppHeader from './components/Header';
import AppFooter from './components/Footer';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/login" element={<LoginPage />} />
    //     <Route path="/register" element={<RegisterPage />} />
    //     <Route path="/" element={<HomePage />} />
    //     {/* <Route path="/dashboard" element={<Dashboard />} /> */}
    //   </Routes>
    // </Router>
    <>
      <div className="header"><AppHeader /></div>
      <div className="outlet">
        <Outlet />
      </div>
      <div className="footer"><AppFooter /></div>
    </>
  );
}

export default App;
