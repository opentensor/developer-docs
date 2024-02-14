import React from 'react';
import Logo from '@theme/Logo';
import styles from './styles.module.css';
export default function NavbarLogo() {
  return (
    <Logo
      className={'navbar__brand '+ styles.navbar__logo}
      imageClassName="navbar__logo"
      titleClassName="navbar__title text--truncate"
    />
  );
}
