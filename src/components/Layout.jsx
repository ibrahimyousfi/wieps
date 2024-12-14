import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      <div style={{ paddingTop: '70px' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout; 