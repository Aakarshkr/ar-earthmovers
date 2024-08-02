import React from 'react';
import { Link } from 'react-router-dom';
import './Forgotpassword.css'


function ForgotPasswordPage() {
  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <p>To reset your password, please enter your email address.</p>
      <form className="forgot-password-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <button type="submit" className="submit-btn">Reset Password</button>
      </form>
      <div className="links">
        <Link to="/">Back to Login</Link>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
