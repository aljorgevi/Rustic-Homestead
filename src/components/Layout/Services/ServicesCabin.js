import React from 'react';
import style from '../../../styles/Layout/Services/ServicesCabin.module.scss';

export default function ServicesCabin() {
  return (
    <div className="col-12 my-4">
      <div className={style.ServicesCabinWrapper}>
        <div className={style.ServicesCabin__content}>
          <h3>Cabañas</h3>
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
