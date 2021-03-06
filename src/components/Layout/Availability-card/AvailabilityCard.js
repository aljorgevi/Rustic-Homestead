import React from 'react';
import style from '../../../styles/Layout/Availability-card/AvailabilityCard.module.scss';
import img from '../../../assets/images/puelo.jpg';
import AvailabilityCart from './AvailabilityCart';

export default function AvailabilityCard() {
  return (
    <div className="container-fluid">
      <div
        className={style.AvailabilityCard}
        style={{ backgroundImage: `url(${img})` }}
      >
        <AvailabilityCart />
      </div>
    </div>
  );
}
