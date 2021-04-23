import React from 'react';
import '../../styles/pages/AvailabilityForm.scss';

export default function AvailabilityForm() {
  return (
    <div className="col-12 col-md-6">
      <h2 className="Form__title">
        Contactanos y te responderemos a la brevedad
      </h2>
      <hr className="hr w-100 my-4" />
      <form className="Form mt-5">
        <div className="control-group">
          <div className="form-control">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" />
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="name">E-Mail</label>
          <input type="text" id="name" />
        </div>
        <div className="form-control">
          <label htmlFor="message">Mensaje</label>
          <textarea className="textarea" name="message"></textarea>
        </div>
        <div className="form-actions">
          <button className="btn-form ">Enviar</button>
        </div>
      </form>
    </div>
  );
}
