import React from 'react';
import SectionWrapper from '../../components/UI/SectionWrapper';
import style from '../../styles/pages/Cabins/CabinsDescription.module.scss';

export default function CabinsDescription() {
  return (
    <SectionWrapper className={style.CabinsDescription}>
      <h1>Revisa nuestra disponibilidad:</h1>
      <div className={style.Lenca}>
        <h3>
          Nuestra Cabaña en Lenca: <span>Próximamente disponible.</span>
        </h3>
      </div>
      <div className={style.PuertoMontt}>
        <h3>
          Nuestro Studio en Puerto Montt: {}
          <span>Disponible en temporada de verano.</span>
        </h3>
      </div>
    </SectionWrapper>
  );
}
