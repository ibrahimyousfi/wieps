import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Auth.css';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-header">
          <div className="logo-container">
            <img src="/logo.png" alt="Logo" className="auth-logo" />
          </div>
          <h1>Create Account</h1>
          <p className="auth-subtitle">Join our community today</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group name-group">
            <div className="input-row">
              <div className="input-container">
                <i className="fas fa-user input-icon"></i>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  placeholder="First Name"
                  className="modern-input"
                  required
                />
              </div>
              <div className="input-container">
                <i className="fas fa-user input-icon"></i>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  placeholder="Last Name"
                  className="modern-input"
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="input-container">
              <i className="fas fa-envelope input-icon"></i>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="Email Address"
                className="modern-input"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-container">
              <i className="fas fa-lock input-icon"></i>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                placeholder="Password"
                className="modern-input"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-container">
              <i className="fas fa-lock input-icon"></i>
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                placeholder="Confirm Password"
                className="modern-input"
                required
              />
            </div>
          </div>

          <div className="form-options">
            <label className="custom-checkbox">
              <input type="checkbox" />
              <span className="checkmark"></span>
              <span className="checkbox-label">I agree to the Terms & Conditions</span>
            </label>
          </div>

          <button type="submit" className="login-button">
            Create Account
          </button>

          <div className="divider">
            <span>or continue with</span>
          </div>

          <div className="social-login">
            <button type="button" className="social-button google">
              <img src="/google-icon.svg" alt="Google" />
              <span>Google</span>
            </button>
            <button type="button" className="social-button apple">
              <img src="/apple-icon.svg" alt="Apple" />
              <span>Apple</span>
            </button>
          </div>
        </form>

        <div className="auth-footer">
          <p>
            Already have an account? 
            <Link to="/login" className="signup-link">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      <div className="auth-illustration">
        <div className="illustration-content">
          <h2>Welcome to Our Platform</h2>
          <p>Start your journey with us today</p>
        </div>
      </div>
    </div>
  );
};

export default Register; 