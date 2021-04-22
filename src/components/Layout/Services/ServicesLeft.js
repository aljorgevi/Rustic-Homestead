import React from 'react';
import Button from '../../UI/Button';
import style from '../../../styles/Layout/Services/ServicesLeft.module.scss';

export default function ServicesLeft() {
  return (
    <div className="col-12 col-md-6 my-2">
      <div className={style.ServicesLeftWrapper}>
        <div className={style.ServicesLeft__content}>
          <h3>Leña Seca</h3>
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
