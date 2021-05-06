import React from 'react';
import hero from '../../assets/images/firewood/firewoodHero.jpg';
import style from '../../styles/pages/FireWood/FireWoodHero.module.scss';

export default function FireWoodHero() {
  return (
    <div className="container-fluid mt-3">
      <div
        className={style.FireWoodHero}
        style={{ backgroundImage: `url(${hero})` }}
      >
        <span>
          <h1>Leña seca a domicilio en Puerto Montt</h1>
        </span>
      </div>
    </div>
  );
}
