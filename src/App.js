import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Loginpage from './Components/Loginpage/Loginpage';
import ForgotPasswordPage from './Components/Forgotpassword/Forgotpassword';
import SignUpPage from './Components/Signuppage/Signuppage';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import MainPage from './Components/Mainpage/Mainpage';
import QuarryDetails from './Components/Quarrydetails/QuarryDetails';
import VehicleDetails from './Components/VehicleDetails/VehicleDetails';
import EmployeeDetails from './Components/EmployeeDetails/EmployeeDetails';
import OtherExpenses from './Components/Others/OtherExpenses';
import CustomerDetails from './Components/CustomerDetails/CustomerDetails';

function App() {
  return (
    <Router>
     <div className='wrapper'>
        <Navbar />
        <div className="main-content" style={{ overflowX: 'hidden', overflowY: 'auto' }}>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/quarry" element={<QuarryDetails />} />
        <Route path="/vehicle" element={<VehicleDetails />} />
        <Route path="/employee" element={<EmployeeDetails />} />
        <Route path="/customerdetails" element={<CustomerDetails />} />
        <Route path="/expenses" element={<OtherExpenses />} />
      </Routes>
      </div>
      <Footer />
      
        </div>
    </Router>
  );
}

export default App;
