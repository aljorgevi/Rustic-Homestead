import React from 'react';
import img0 from '../../assets/images/tinaja/tinaja0.jpg';
import img01 from '../../assets/images/tinaja/tinaja1.jpg';
import img02 from '../../assets/images/tinaja/tinaja2.jpg';
import style from '../../styles/pages/Tinaja/TinajaBody.module.scss';

export default function TinajaBody() {
  return (
    <div className="container-fluid mt-5">
      <div className={`${style.TinajaBody} row`}>
        <h1>¡Esta página está en construcción, próximamente más novedades! </h1>

        <div className="col-12 col-md-6 order-0">
          <img className="img-fluid" src={img0} alt="firewood" />
        </div>
        <div className="col-12 col-md-6 order-1 ">
          <p>
            La tinaja estara incluida en nuestra cabaña, en Lenca, Carretera
            Austral, Puerto Montt.
          </p>
        </div>
        <div className="col-12 col-md-6 order-3 order-md-2">
          <p>
            La idea es que puedas reservar tu tinaja con anticipación y
            ¡Disfrutar de unas merecidas vacaciones!
          </p>
        </div>
        <div className="col-12 col-md-6 order-2 order-md-3">
          <img className="img-fluid" src={img01} alt="firewood" />
        </div>
        <div className="col-12 col-md-6 order-4 ">
          <img src={img02} alt="firewood" />
        </div>
        <div className="col-12 col-md-6 order-5">
          <p>
            La tinaja y el hospedaje tendrán vista al mar. ¡Además de estar
            rodeados de naturaleza nativa abundante de la zona!
          </p>
        </div>
      </div>
    </div>
  );
}
