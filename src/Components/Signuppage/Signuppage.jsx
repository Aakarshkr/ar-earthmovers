
import React from 'react';
import { Link } from 'react-router-dom';
import "./Signuppage.css"


function SignUpPage() {
  return (
    <div className="signup-container">
      
     
      <form className="signup-form">
      <h2 style={{display:'flex', justifyContent:'center' , margin:'20px'}}>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit" className="submit-btn">Sign Up</button>
        <div className="links">
        <Link to="/">Back to Login</Link>
      </div>
      </form>
      
    </div>
  );
}

export default SignUpPage;
