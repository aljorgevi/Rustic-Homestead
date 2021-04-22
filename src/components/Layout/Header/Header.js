import React, { useState } from 'react';
import HeaderBurger from './HeaderBurger';
import HeaderMenu from './HeaderMenu';
import logo from '../../../assets/images/logo.png';
import style from '../../../styles/Layout/Header/Header.module.scss';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={`${style.Header} container`}>
      <div className={style.Header__logo}>
        <img src={logo} alt="logo" />
      </div>

      <HeaderBurger handleOnClick={handleOnClick} isOpen={isOpen} />

      <HeaderMenu />
    </nav>
  );
}
