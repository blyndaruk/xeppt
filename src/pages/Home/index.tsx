import React, { FC } from 'react';

import styles from './home.module.scss';

import { useCurrentUser } from '../../utils/user';


const Home: FC = () => {
  const { isLogged, user } = useCurrentUser();

  return (
    <div className={styles.wrap}>
      Home page
      <br />
      {isLogged ? user?.name : 'Please log in'}
    </div>
  );
};

export default Home;
