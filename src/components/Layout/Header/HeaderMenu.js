import React from 'react';
import style from '../../../styles/Layout/Header/HeaderMenu.module.scss';

export default function HeaderMenu() {
  return (
    <div className={style.HeaderMenu}>
      <p>Cabaña</p>
      <p>Leña</p>
      <p>Blog</p>
      <p>Disponibilidad</p>
    </div>
  );
}
