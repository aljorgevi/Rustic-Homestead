import React from 'react';
import Button from '../../UI/Button';
import SectionWrapper from '../../UI/SectionWrapper';
import style from '../../../styles/Layout/Contact-us/ContactUs.module.scss';
import GbWrapper from '../../UI/gb-wrapper';

export default function ContactUs() {
  return (
    <SectionWrapper>
      <GbWrapper>
        <div className="col-9">
          <div className={style.ContactUs}>
            <h3>
              ¡Comunícate con nosotros y comienza a disfrutar de un paseo
              increíble!
            </h3>
            <hr className="hr w-100" />
            <p className="mt-4">
              Si tienes pensado viajar al sur de Chile, o simplemente quieres un
              fin de semana de descanso cerca del mar. Visita nuestro formulario
              de contacto o escríbenos en las redes sociales.
            </p>
            <Button>Contacto</Button>
          </div>
        </div>
      </GbWrapper>
    </SectionWrapper>
  );
}
