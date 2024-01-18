import React, { FC } from 'react';

import styles from './protected.module.scss';


const Protected: FC = () => {

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Protected
        </h1>
      </div>
    </div>
  );
};

export default Protected;
