import React from 'react';
import { Link } from 'react-router-dom';
import style from './Button.module.scss';

export default function Button(props) {
  return (
    <Link to="/contacto" className={`${style.button} ${props.className}`}>
      <span className={style.button__text}>{props.children}</span>
    </Link>
  );
}
