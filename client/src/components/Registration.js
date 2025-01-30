import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css';

function Registration({ toggleLogin }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    verificationCode: '',
  });

  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSendVerification = () => {
    if (!formData.email) {
      alert('Please enter your email before verifying.');
      return;
    }
    setVerificationSent(true);
    alert('Verification code sent to your email. Please check your inbox.');
  };

  const handleVerifyCode = () => {
    // Accept any verification code and mark email as verified
    setIsEmailVerified(true);
    alert('Email successfully verified!');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEmailVerified) {
      alert('Please verify your email before registering.');
      return;
    }
    alert('Registration successful! Redirecting...');
    toggleLogin();
    navigate('/setup-organization');
  };

  return (
    <div className="registration-card">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        {!verificationSent ? (
          <button type="button" className="verify-btn" onClick={handleSendVerification}>Send Verification Code</button>
        ) : (
          <div className="input-group">
            <label htmlFor="verificationCode">Enter Verification Code:</label>
            <input type="text" id="verificationCode" name="verificationCode" value={formData.verificationCode} onChange={handleChange} required />
            <button type="button" className="verify-btn" onClick={handleVerifyCode} disabled={isEmailVerified}>
              {isEmailVerified ? 'Verified' : 'Verify'}
            </button>
          </div>
        )}

        {isEmailVerified && (
          <>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>

            <button type="submit">Register</button>
          </>
        )}

        <p className="or-divider">OR</p>

        <button type="button" className="google-btn">Continue with Google</button>
      </form>
    </div>
  );
}

export default Registration;
