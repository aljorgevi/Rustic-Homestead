import React from 'react';
import hero from '../../assets/images/availability-hero02.jpg';
import style from '../../styles/pages/AvailabilityHero.module.scss';

export default function AvailabilityHero() {
  return (
    <div className="container-fluid mt-3">
      <div
        className={style.AvailabilityHero}
        style={{ backgroundImage: `url(${hero})` }}
      >
        <span>
          <h1>Escríbenos</h1>
        </span>
      </div>
    </div>
  );
}
