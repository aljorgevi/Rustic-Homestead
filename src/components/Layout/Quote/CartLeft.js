import React from 'react';
import style from '../../../styles/Layout/Quote/CartLeft.module.scss';

export default function CartLeft() {
  return (
    <div className={style.CartLeft}>
      <h2 className={style.CartLeft__title}>
        UPPER EAST SIDE LUXURY, 141 EAST 88TH STREET
      </h2>
      <p>Built in 1927</p>
      <p>Converted to condos in 2013</p>
      <p>69 Residences across 12 stories</p>
      <p>Interiors by Victoria Hagan</p>
    </div>
  );
}
