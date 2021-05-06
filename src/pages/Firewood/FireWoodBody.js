import React from 'react';
import ContactUs from '../../components/Layout/Contact-us/ContactUs';
import style from '../../styles/pages/FireWood/FireWoodBody.module.scss';
import FireWoodAd from './FireWoodAd';

const title = <span>¡Contáctanos y te responderemos lo antes posible!</span>;

const content = (
  <span>
    ¡Tenemos Leña seca y oréada, tú decides que quieres, pregúntanos sin miedo!
  </span>
);

export default function FireWoodBody() {
  return (
    <div className="container-fluid mt-5">
      <h1 className={style.FireWoodBody__title}>¡Estamos tomando pedidos!</h1>

      <FireWoodAd />

      <ContactUs title={title} content={content} />
    </div>
  );
}
