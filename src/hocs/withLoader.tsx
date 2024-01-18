import React, { FC } from 'react';

import LoaderSpinner from '../components/LoaderSpinner';

interface Props {
  children: any;
  isLoading: boolean;
}

const WithLoader: FC<Props> = ({ children, isLoading = false }) => {
  return isLoading ? <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
    }}
  ><LoaderSpinner color="#000000" /></div> : children;
};

export default WithLoader;
