import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../../styles/Layout/Services/ServicesFirewood.module.scss';

export default function ServicesFirewood() {
  return (
    <div className="col-12 col-md-6 my-2">
      <div className={style.ServicesFirewoodWrapper}>
        <div className={style.ServicesFirewood__content}>
          <h3>Leña Seca</h3>
          <div className={style.ButtonWrapper}>
            <Link className="btn-outline" to="/firewood">
              Ver Más
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
