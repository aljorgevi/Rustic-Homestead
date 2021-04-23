import React from 'react';
import style from '../../../styles/Layout/Hero/Hero.module.scss';
import hero from '../../../assets/images/rustic.jpg';
import Cart from './Cart';

export default function Hero() {
  return (
    <div className="container-fluid">
      <div
        className={style.Hero__img}
        style={{ backgroundImage: `url(${hero})` }}
      >
        <Cart />
      </div>
    </div>
  );
}
