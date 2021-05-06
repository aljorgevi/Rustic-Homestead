import React from 'react';
import hero from '../../assets/images/tinaja/tinajaHero.jpg';
import style from '../../styles/pages/Tinaja/TinajaHero.module.scss';

export default function TinajaHero() {
  return (
    <div className="container-fluid mt-3">
      <div
        className={style.TinajaHero}
        style={{ backgroundImage: `url(${hero})` }}
      >
        <span>
          <h1>Tinaja en Carretera Austral</h1>
        </span>
      </div>
    </div>
  );
}
