import React from 'react';
import style from '../../styles/pages/Cabins/CabinCardPuertoMontt.module.scss';

export default function CabinCardPuertoMontt() {
  return (
    <div className="col-12 col-md-6 mb-3">
      <div className={style.CabinCardPuertoMontt}>
        <div className={style.CabinCardPuertoMontt__content}>
          <h3>Studio, Puerto Montt</h3>
          <div className={style.CabinCardPuertoMontt__button}>
            <a className="btn-outline" href="!#">
              Ver Más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
