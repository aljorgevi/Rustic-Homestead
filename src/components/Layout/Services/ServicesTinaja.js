import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../../styles/Layout/Services/ServicesTinaja.module.scss';

export default function ServicesTinaja() {
  return (
    <div className="col-12 col-md-6 my-2">
      <div className={style.ServicesTinajaWrapper}>
        <div className={style.ServicesTinaja__content}>
          <h3>Tinaja</h3>
          <div className={style.ButtonWrapper}>
            <Link className="btn-outline" to="/tinaja">
              Ver Más
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
