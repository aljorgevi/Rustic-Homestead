import React from 'react';
import CartRight from './CartRight';
import CartLeft from './CartLeft';
import style from '../../../styles/Layout/Quote/Quote.module.scss';
import SectionWrapper from '../../UI/SectionWrapper';

export default function Quote() {
  const ColLeft = `${style.ColLeft} col-12 col-md-4`;
  const ColRight = `${style.ColRight} col-12 col-md-8`;

  return (
    <SectionWrapper>
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
    </SectionWrapper>
  );
}
