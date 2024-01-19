import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from '../../components/Header';


const BaseLayout: FC = () => {
  return (
    <main className="main" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div className="out">
        <ToastContainer position="top-right" theme="dark" />
        <Outlet />
      </div>
    </main>
  );
};

export default BaseLayout;
