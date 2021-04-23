import React from 'react';
import CabinsHeroImg from '../../assets/images/Cabins/cabin-hero.jpg';
import style from '../../styles/pages/Cabins/CabinsHero.module.scss';

export default function CabinsHero() {
  return (
    <div className="container-fluid mt-3">
      <div
        className={style.CabinsHero}
        style={{ backgroundImage: `url(${CabinsHeroImg})` }}
      >
        <span>
          <h1>Cabañas</h1>
        </span>
      </div>
    </div>
  );
}
