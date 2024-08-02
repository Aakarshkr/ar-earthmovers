import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mainpage.css'; // Import the updated CSS

const MainPage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="main-page">
      <div className="button-container">
        <div className="button" onClick={() => handleNavigation('/quarry')}>
          Quarry Details
        </div>
        <div className="button" onClick={() => handleNavigation('/vehicle')}>
          Vehicle Details
        </div>
        <div className="button" onClick={() => handleNavigation('/employee')}>
          Employee Details
        </div>
        <div className="button" onClick={() => handleNavigation('/customerdetails')}>
          Customer Details
        </div>
        <div className="button" onClick={() => handleNavigation('/expenses')}>
          Other Expenses
        </div>
      </div>
    </div>
  );
};

export default MainPage;
