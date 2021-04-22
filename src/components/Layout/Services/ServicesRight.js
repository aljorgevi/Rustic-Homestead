import React from 'react';
import style from '../../../styles/Layout/Services/ServicesRight.module.scss';

export default function ServicesRight() {
  return (
    <div className="col-12 col-md-6 my-2">
      <div className={style.ServicesRightWrapper}>
        <div className={style.ServicesRight__content}>
          <h3>Tinajas</h3>
          <div className={style.ButtonWrapper}>
            <a className="btn-outline" href="!#">
              Ver Más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
