import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
      <Link to="/" className={style.Header__logo}>
        <img src={logo} alt="logo" />
      </Link>

      <HeaderBurger handleOnClick={handleOnClick} isOpen={isOpen} />

      <HeaderMenu handleOnClick={handleOnClick} isOpen={isOpen} />
    </nav>
  );
}
