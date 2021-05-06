import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../../../styles/Layout/Header/HeaderMenu.module.scss';

export default function HeaderMenu({ isOpen, handleOnClick }) {
  const onOpen = isOpen && style.open;
  const onOpenLi = `${onOpen} ${style.HeaderMenu__item}`;
  const onOpenLink = `${onOpen} ${style.HeaderMenu__link}`;

  return (
    <div className={`${style.HeaderMenu} ${onOpen}`}>
      <ul className={`${style.HeaderMenu__items} ${onOpen}`}>
        <li className={onOpenLi}>
          <NavLink
            exact
            to="/"
            className={onOpenLink}
            onClick={handleOnClick}
            activeClassName={style.active}
          >
            Home
          </NavLink>
        </li>
        <li className={onOpenLi}>
          <NavLink
            exact
            to="/cabins"
            className={onOpenLink}
            onClick={handleOnClick}
            activeClassName={style.active}
          >
            Cabañas
          </NavLink>
        </li>
        <li className={onOpenLi}>
          <NavLink
            exact
            to="/firewood"
            className={onOpenLink}
            onClick={handleOnClick}
            activeClassName={style.active}
          >
            Leña
          </NavLink>
        </li>
        <li className={onOpenLi}>
          <NavLink
            exact
            to="/tinaja"
            className={onOpenLink}
            onClick={handleOnClick}
            activeClassName={style.active}
          >
            Tinaja
          </NavLink>
        </li>
        <li className={onOpenLi}>
          <NavLink
            to="/contacto"
            className={onOpenLink}
            onClick={handleOnClick}
            activeClassName={style.active}
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
