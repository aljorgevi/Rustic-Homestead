import React, { useState } from 'react';
import testData from '../../../data/Lenca.json';
import SliderComponent from '../../../components/Sliders/SliderComponent';
import style from '../../../styles/pages/Cabins/Lenca/Lenca.module.scss';

export default function Lenca() {
  // eslint-disable-next-line
  const [data, setData] = useState(testData);
  return (
    <div className={`${style.Lenca} container text-center my-5`}>
      <h1>¡Esta página está en construcción, próximamente más novedades! .</h1>

      <SliderComponent data={data} />

      <div className={`${style.Lenca__content} container text-center mt-5`}>
        <p>
          Nuestra cabaña en Lenca, Carretera Austral, contará con hospedaje con
          todas las comodidades, una hermosa vista al mar y en el futuro contara
          con Tinaja incluida.
        </p>
        <p>
          Si quieres saber más, puedes contactarnos directamente por nuestro
          formulario de contacto o por vía Whatsapp en el icono de al terminar
          esta sección.
        </p>
        <p>Próximamente estaremos publicando más información</p>
      </div>
    </div>
  );
}
