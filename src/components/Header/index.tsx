import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from 'src/assets/images/logo.svg';

import styles from './header.module.scss';


const Header: FC = () => {
  return (
    <header className={styles.wrap}>
      <div className={styles.content}>
        <NavLink to="/" className={styles.logo}>
          <img src={Logo} alt="XEPPT" />
        </NavLink>

        <nav className={styles.nav}>
          <NavLink to="/" className={({ isActive }) => isActive ? styles['is-nav-active'] : ''}>Home</NavLink>
          <NavLink to="/card" className={({ isActive }) => isActive ? styles['is-nav-active'] : ''}>XEPPT Card</NavLink>
          <NavLink
            to="/statements"
            className={({ isActive }) => isActive ? styles['is-nav-active'] : ''}
          >Statements</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
