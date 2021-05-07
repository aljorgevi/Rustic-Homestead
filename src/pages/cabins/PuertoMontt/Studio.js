import React, { Fragment, useState } from 'react';
import testData from '../../../data/Studio.json';
import SliderComponent from '../../../components/Sliders/SliderComponent';
import style from '../../../styles/pages/Cabins/PuertoMontt/Studio.module.scss';
import Reviews from '../Reviews';

export default function Studio() {
  // eslint-disable-next-line
  const [data, setData] = useState(testData);
  return (
    <Fragment>
      <div className={`${style.Studio} container text-center my-5`}>
        <h1>Departamento Studio, Puerto Montt</h1>
      </div>

      <SliderComponent data={data} />

      <div className={`${style.Studio__content} container text-center mt-5`}>
        <p>Este departamento se habilita desde Diciembre hasta Marzo</p>
        <p>
          Cuenta con cama de 1.5 plaza ideal para viajero solitario y para
          parejas. A 5 minutos del centro de la ciudad de Puerto Montt.
        </p>
        <p>Acceso independiente, con estacionamiento privado.</p>
        <p>
          La habitación está totalmente amueblada con baño privado y cocina.
          Supermercado, farmacia y locomocion a tan solo pasos caminando.
        </p>
      </div>

      <Reviews />
    </Fragment>
  );
}
