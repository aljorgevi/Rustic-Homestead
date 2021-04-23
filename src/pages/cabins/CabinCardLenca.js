import React from 'react';
import style from '../../styles/pages/Cabins/CabinCardLenca.module.scss';

export default function CabinCardLenca() {
  return (
    <div className="col-12 col-md-6 mb-3">
      <div className={style.CabinCardLenca}>
        <div className={style.CabinCardLenca__content}>
          <h3>Lenca, Carretera Austral.</h3>
          <div className={style.CabinCardLenca__button}>
            <a className="btn-outline" href="!#">
              Ver Más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
