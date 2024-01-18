import React from 'react';
import { RouteObject } from 'react-router-dom';

import ProtectedRoute from './hocs/ProtectedRoute';
import BaseLayout from './layouts/BaseLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Protected from './pages/Protected';
import Search from './pages/Search';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/search', element: <Search /> },
      { path: '/protected', element: <ProtectedRoute redirectTo="/"><Protected /></ProtectedRoute> },
      { path: '*', element: <NotFound /> },
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
  // {
  //   path: '/login',
  //   element: <Login />,
  // },
];

export default routes;
