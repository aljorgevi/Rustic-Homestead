import React from 'react';
import style from '../../../styles/Layout/Availability-card/AvailabilityCart.module.scss';
import Button from '../../UI/Button';
import SectionWrapper from '../../UI/SectionWrapper';

export default function AvailabilityCart() {
  return (
    <SectionWrapper>
      <div className={style.Cart__Wrapper}>
        <div className={style['Cart__Wrapper--Width']}>
          <div className={style.Cart}>
            <div className={style.Cart__Content}>
              <h3>Cabaña moderna en Lenca, Carretera Austral.</h3>
              <hr className="hr mt-4" />
              <p>
                Rustic Homestead nació con la idea de crear cabañas rústicas
                modernas, sustentables y enfocadas a brindarte la mejor
                experiencia posible al viajero.
              </p>
              <p>
                Porque fue construida de ¡Viajeros, para viajeros! ¡No dudes en
                consultar disponibilidad!
              </p>
              <div className={style['button-wrapper']}>
                <Button className={style['button-primary']}>Contacto</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
