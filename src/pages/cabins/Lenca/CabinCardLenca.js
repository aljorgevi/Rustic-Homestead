import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../../styles/pages/Cabins/Lenca/CabinCardLenca.module.scss';

export default function CabinCardLenca() {
  return (
    <div className="col-12 col-md-6 mb-3">
      <div className={style.CabinCardLenca}>
        <div className={style.CabinCardLenca__content}>
          <h3>Lenca, Carretera Austral.</h3>
          <div className={style.CabinCardLenca__button}>
            <Link className="btn-outline" to="/cabins/lenca">
              Ver Más
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
