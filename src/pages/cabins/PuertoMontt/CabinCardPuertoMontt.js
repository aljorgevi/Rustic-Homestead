import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../../styles/pages/Cabins/PuertoMontt/CabinCardPuertoMontt.module.scss';

export default function CabinCardPuertoMontt() {
  return (
    <div className="col-12 col-md-6 mb-3">
      <div className={style.CabinCardPuertoMontt}>
        <div className={style.CabinCardPuertoMontt__content}>
          <h3>Studio, Puerto Montt</h3>
          <div className={style.CabinCardPuertoMontt__button}>
            <Link className="btn-outline" to="cabins/studio">
              Ver Más
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
