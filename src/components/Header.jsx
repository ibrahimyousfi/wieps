import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineHome, AiOutlineWechat } from 'react-icons/ai';
import { BiLogIn } from 'react-icons/bi';
import { MdPersonAddAlt, MdOutlineAccountCircle } from 'react-icons/md';
import '../styles/Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          Logo
        </Link>
        
        <nav className="nav-links">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            title="الرئيسية"
          >
            <AiOutlineHome size={24} />
          </Link>
          <Link 
            to="/chat" 
            className={`nav-link ${location.pathname === '/chat' ? 'active' : ''}`}
            title="الدردشة"
          >
            <AiOutlineWechat size={24} />
          </Link>
          <Link 
            to="/account" 
            className={`nav-link ${location.pathname === '/account' ? 'active' : ''}`}
            title="حسابي"
          >
            <MdOutlineAccountCircle size={24} />
          </Link>
          <Link 
            to="/login" 
            className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`}
            title="تسجيل الدخول"
          >
            <BiLogIn size={24} />
          </Link>
          <Link 
            to="/register" 
            className={`nav-link register-link ${location.pathname === '/register' ? 'active' : ''}`}
            title="إنشاء حساب"
          >
            <MdPersonAddAlt size={24} />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 