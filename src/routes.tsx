import React from 'react';
import { RouteObject } from 'react-router-dom';

import ProtectedRoute from './hocs/ProtectedRoute';
import BaseLayout from './layouts/BaseLayout';
import CardPage from './pages/CardPage';
import Home from './pages/Home';
import LoginPage from './pages/Login';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import StatementsPage from './pages/Statements';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/search', element: <Search /> },
      { path: '/card', element: <ProtectedRoute redirectTo="/login"><CardPage /></ProtectedRoute> },
      { path: '*', element: <NotFound /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/statements', element: <StatementsPage /> },
    ],
  },
  /* To show example of protected routes with different layout */
  // {
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       path: 'account',
  //       element: (
  //         <ProtectedRoute redirectTo="/">
  //           <Account />
  //         </ProtectedRoute>
  //       ),
  //     },
  //   ],
  // },
  // {
  //   path: '/sign-up',
  //   element: <SignUp />,
  // },
  {
    path: '/login',
    element: <LoginPage />,
  },
];

export default routes;
