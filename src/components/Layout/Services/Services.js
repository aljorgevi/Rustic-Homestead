import React from 'react';
import ServicesFirewood from './ServicesFirewood';
import ServicesTinaja from './ServicesTinaja';
import style from '../../../styles/Layout/Services/Services.module.scss';
import ServicesCabin from './ServicesCabin';

export default function Services() {
  return (
    <div className="mt-6">
      <div className="container-fluid">
        <h2 className={style.ServicesText}>
          Puerto Montt, Región de los Lagos
        </h2>
        <hr className="hr w-100 my-4" />
        <div className="row my-5">
          <ServicesCabin />
          <ServicesFirewood />
          <ServicesTinaja />
        </div>
      </div>
    </div>
  );
}
