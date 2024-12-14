import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
          <h1>Welcome Back!</h1>
          <p className="auth-subtitle">Login to access your account</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
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

          <div className="form-options">
            <label className="custom-checkbox">
              <input type="checkbox" />
              <span className="checkmark"></span>
              <span className="checkbox-label">Remember me</span>
            </label>
            <Link to="/forgot-password" className="forgot-link">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="login-button">
            Login
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
            Don't have an account? 
            <Link to="/register" className="signup-link">
              Sign up for free
            </Link>
          </p>
        </div>
      </div>

      {/* Side Image/Animation Section */}
      <div className="auth-illustration">
        <div className="illustration-content">
          <h2>Start Your Journey</h2>
          <p>Connect with experts and grow your business</p>
          {/* Add illustration or animation here */}
        </div>
      </div>
    </div>
  );
};

export default Login; 