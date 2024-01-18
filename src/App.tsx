import React, { FC, useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useRoutes } from 'react-router-dom';

import WithLoader from './hocs/withLoader';
import { useUserFetching } from './hooks/useUserFetching';
import routes from './routes';


const App: FC = () => {
  console.debug('App version 0.0.1');
  const [isUserFetching] = useUserFetching();

  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);


  const elements = useRoutes(routes);
  return (
    <>
      <Helmet>
        <title>XEPPT APP</title>
      </Helmet>
      <WithLoader isLoading={isUserFetching}>{elements}</WithLoader>
    </>
  );
};

export default App;
