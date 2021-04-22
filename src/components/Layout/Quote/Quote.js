import React from 'react';
import style from '../../../styles/Layout/Quote/Quote.module.scss';
import CartRight from './CartRight';
import CartLeft from './CartLeft';

export default function Quote() {
  const ColLeft = `${style.ColLeft} col-12 col-md-4`;
  const ColRight = `${style.ColRight} col-12 col-md-8`;

  return (
    <div className="gb-container">
      <div className="gb-inside-container">
        <div className={style.QuoteWraper}>
          <div className="row">
            <div className={ColLeft}>
              <CartLeft />
            </div>
            <div className={ColRight}>
              <CartRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
