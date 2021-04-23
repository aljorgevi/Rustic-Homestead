import React from 'react';
import style from '../../styles/pages/Cabins/CabinCardHueyusca.module.scss';

export default function CabinCardHueyusca() {
  return (
    <div className="col-12 col-md-6 mb-3">
      <div className={style.CabinCardHueyusca}>
        <div className={style.CabinCardHueyusca__content}>
          <h3>Hueyusca, Purranque.</h3>
          <div className={style.CabinCardHueyusca__button}>
            <a className="btn-outline" href="!#">
              Ver Más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
