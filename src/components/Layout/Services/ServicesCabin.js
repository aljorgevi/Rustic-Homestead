import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../../styles/Layout/Services/ServicesCabin.module.scss';

export default function ServicesCabin() {
  return (
    <div className="col-12 my-4">
      <div className={style.ServicesCabinWrapper}>
        <div className={style.ServicesCabin__content}>
          <h3>Cabañas</h3>
          <div className={style.ButtonWrapper}>
            <Link className="btn-outline" to="/cabins">
              Ver Más
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
