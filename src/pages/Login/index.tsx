import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { useCurrentUser } from '../../utils/user';

const LoginPage: FC = () => {
  const { isLogged } = useCurrentUser();

  if (isLogged) {
    return <Navigate to="/" replace />;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        fontSize: 40,
        padding: 40,
        fontWeight: 'bold',
      }}
    >
      Login
    </div>
  );
};

export default LoginPage;
