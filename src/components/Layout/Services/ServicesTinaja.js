import React from 'react';
import style from '../../../styles/Layout/Services/ServicesTinaja.module.scss';

export default function ServicesTinaja() {
  return (
    <div className="col-12 col-md-6 my-2">
      <div className={style.ServicesTinajaWrapper}>
        <div className={style.ServicesTinaja__content}>
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
