import React, { useState } from 'react';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { WarningMessage } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import '../../styles/pages/AvailabilityForm.scss';
import Spinner from '../../components/UI/Spinner';
import Input from './Input';
import TextArea from './TextArea';

export default function AvailabilityForm() {
  const [user, setUser] = useState({ field: '', isValid: null });
  const [email, setEmail] = useState({ field: '', isValid: null });
  const [message, setMessage] = useState({ field: '', isValid: null });
  const [formIsValid, setFormIsValid] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // const onSubmit = (data, event) => {
  //   setIsLoading(true);

  //   const fetchData = async () => {
  //     try {
  //       await emailjs
  //         .sendForm(
  //           'service_d1wtsen',
  //           'template_si5u79x',
  //           event.target,
  //           'user_L0k7Rxy2vxCO7YiqDRJ5O'
  //         )
  //         .then(() => {
  //           setIsLoading(false);
  //           Swal.fire('Good job!', 'You message has been sent!', 'success');
  //         });
  //     } catch (error) {
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Oops...',
  //         text: 'Something went wrong!',
  //       });
  //     }

  //     setIsLoading(false);
  //   };

  //   fetchData();
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      user.isValid === 'true' &&
      email.isValid === 'true' &&
      message.isValid === 'true'
    ) {
      setFormIsValid(true);
      setUser({ field: '', isValid: null });
      setEmail({ field: '', isValid: null });
      setMessage({ field: '', isValid: null });
    } else {
      setFormIsValid(false);
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      try {
        await emailjs
          .sendForm(
            'service_d1wtsen',
            'template_si5u79x',
            event.target,
            'user_L0k7Rxy2vxCO7YiqDRJ5O'
          )
          .then(() => {
            setIsLoading(false);
            Swal.fire('¡Muchas Gracias!', 'Tu mensaje fue enviado!', 'success');
          });
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      }

      setIsLoading(false);
    };

    fetchData();
  };

  const expressions = {
    user: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    message: /^[a-zA-Z0-9_,-\s]{4,1000}$/, // Letras, numeros, guion y guion_bajo
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="col-12 col-md-6">
      <h2 className="Form__title">
        Contactanos y te responderemos a la brevedad
      </h2>
      <hr className="hr w-100 my-4" />
      <form className="Form mt-5" onSubmit={handleSubmit}>
        <Input
          state={user}
          setState={setUser}
          inputType="text"
          labelName="Nombre"
          placeholder="Pablo Perez"
          inputName="user"
          errorMessage="El nombre solo puede contener letras y espacios."
          regularExpression={expressions.user}
        />
        <Input
          state={email}
          setState={setEmail}
          inputType="email"
          labelName="E-Mail"
          placeholder="example@example.com"
          inputName="email"
          errorMessage="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
          regularExpression={expressions.email}
        />

        <TextArea
          state={message}
          setState={setMessage}
          inputType="text"
          labelName="Mensaje"
          placeholder="Tu mensaje aqui"
          inputName="message"
          errorMessage="El mensaje tiene que tener al menos 4 caracteres y no puede contener caracteres especiales"
          regularExpression={expressions.message}
        />

        {formIsValid === false && (
          <WarningMessage
            isValid={
              user.isValid === 'true' &&
              email.isValid === 'true' &&
              message.isValid === 'true'
            }
          >
            <p>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <b>Error:</b> Por favor rellena el formulario correctamente.
            </p>
          </WarningMessage>
        )}

        <div className="form-actions">
          <button className="btn-form">Enviar</button>
          {/* {formIsValid === true && <p>Formulario enviado exitosamente!</p>} */}
        </div>
      </form>
    </div>
  );
}
