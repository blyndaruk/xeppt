import React, { FC } from 'react';

import styles from './card-page.module.scss';


const CardPage: FC = () => {

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Card Single Page
        </h1>
      </div>
    </div>
  );
};

export default CardPage;
