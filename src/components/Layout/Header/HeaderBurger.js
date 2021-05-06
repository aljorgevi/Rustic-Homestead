import React from 'react';
import style from '../../../styles/Layout/Header/HeaderBurger.module.scss';

export default function HeaderBurger({ handleOnClick, isOpen }) {
  const onOpen = isOpen ? style.open : undefined;
  const onBurgerOpen = isOpen ? style.MenuBurgerPosition : undefined;

  return (
    <div
      onClick={handleOnClick}
      className={`${style.HeaderBurger} ${onBurgerOpen}`}
    >
      <span className={onOpen}></span>
    </div>
  );
}
