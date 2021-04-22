import React from 'react';
import style from '../../../styles/Layout/Header/HeaderBurger.module.scss';

export default function HeaderBurger({ handleOnClick, isOpen }) {
  return (
    <div onClick={handleOnClick} className={style['menu-btn']}>
      <span
        className={`${style['menu-btn__burger']} ${!isOpen && style.open}`}
      ></span>
    </div>
  );
}
