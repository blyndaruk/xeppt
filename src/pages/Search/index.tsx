import React, { FC } from 'react';

import styles from './search.module.scss';


const Search: FC = () => {

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Search
        </h1>
      </div>
    </div>
  );
};

export default Search;
