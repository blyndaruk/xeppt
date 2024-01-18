import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
// import Header from '../../components/Header';
import { ToastContainer } from 'react-toastify';


const BaseLayout: FC = () => {
  return (
    <main className="main" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/*<Header />*/}
      <div className="out">
        <ToastContainer position="top-right" theme="dark" />
        <Outlet />
      </div>
    </main>
  );
};

export default BaseLayout;
