import React from 'react';
import style from '../../../styles/Layout/Services/Services.module.scss';
import ServicesLeft from './ServicesLeft';
import ServicesRight from './ServicesRight';

export default function Services() {
  return (
    <div className="gb-container mt-6">
      <div className="container-fluid">
        <h2 className={style.ServicesText}>
          Puerto Montt, Región de los Lagos
        </h2>
        <hr className="hr my-4" />
        <div className="row my-5">
          <ServicesLeft />

          <ServicesRight />
        </div>
      </div>
    </div>
  );
}
