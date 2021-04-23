import React from 'react';
import style from '../../../styles/Layout/Hero/Cart.module.scss';
import SectionWrapper from '../../UI/SectionWrapper';

export default function Cart() {
  return (
    <SectionWrapper>
      <div className={style.Cart__Wrapper}>
        <div className={style['Cart__Wrapper--Width']}>
          <div className={style.Cart}>
            <div className={style.Cart__Content}>
              <h1>Puerto Montt, Región de los Lagos</h1>
              <hr className="hr w-100" />
              <p>
                Somos una pequeña cabaña en el Sur de Chile, ofrecemos
                hospedaje, leña y próximamente tinaja.
              </p>
            </div>
          </div>
          ;
        </div>
      </div>
    </SectionWrapper>
  );
}
