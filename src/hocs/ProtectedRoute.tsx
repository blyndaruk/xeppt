import React, { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useCurrentUser } from '../utils/user';

interface Props {
  redirectTo: string;
  children: any;
}

const ProtectedRoute: FC<Props> = ({ redirectTo, children }) => {
  const { isLogged } = useCurrentUser();
  if (!isLogged) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
