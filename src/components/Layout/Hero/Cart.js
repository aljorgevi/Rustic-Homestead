import React from 'react';
import style from '../../../styles/Layout/Hero/Cart.module.scss';

export default function Cart() {
  return (
    <div className="gb-inside-container">
      <div className={style.Cart__Wrapper}>
        <div className={style['Cart__Wrapper--Width']}>
          <div className={style.Cart}>
            <div className={style.Cart__Content}>
              <h1>Puerto Montt, Region de los Lagos</h1>
              <hr className="hr hr-xl" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                possimus?
              </p>
            </div>
          </div>
          ;
        </div>
      </div>
    </div>
  );
}
