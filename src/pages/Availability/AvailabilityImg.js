import React from 'react';
import FormImg from '../../assets/images/availability-hero.jpg';
import '../../styles/pages/AvailabilityImg.scss';

export default function AvailabilityImg() {
  return (
    <div className="col-12 col-md-6">
      <img className="img-fluid img-form" src={FormImg} alt="" />
    </div>
  );
}
