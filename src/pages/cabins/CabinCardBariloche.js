import React from 'react';
import style from '../../styles/pages/Cabins/CabinCardBariloche.module.scss';

export default function CabinCardBariloche() {
  return (
    <div className="col-12 col-md-6 mb-3">
      <div className={style.CabinCardBariloche}>
        <div className={style.CabinCardBariloche__content}>
          <h3>Bariloche, Argentina</h3>
          <div className={style.CabinCardBariloche__button}>
            <a className="btn-outline" href="!#">
              Ver Más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
