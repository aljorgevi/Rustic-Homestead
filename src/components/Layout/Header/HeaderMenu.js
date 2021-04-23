import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import style from '../../../styles/Layout/Header/HeaderMenu.module.scss';

export default function HeaderMenu() {
  return (
    <div className={style.HeaderMenu}>
      <li>
        <NavLink exact to="/" activeClassName={style.active}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/cabins" activeClassName={style.active}>
          Cabañas
        </NavLink>
      </li>
      <li>
        <Link>Leña</Link>
      </li>
      <li>
        <Link>Blog</Link>
      </li>
      <li>
        <NavLink to="/contacto" activeClassName={style.active}>
          Contacto
        </NavLink>
      </li>
    </div>
  );
}
