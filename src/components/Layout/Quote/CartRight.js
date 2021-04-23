import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import style from '../../../styles/Layout/Quote/CartRight.module.scss';

export default function CartRight() {
  return (
    <div className={style.CartRight}>
      <span>
        <FaQuoteLeft />
      </span>
      <h2>
        Agradece las cosas simples de la vida. No los des por sentado. Después
        de todo … ¿Qué daría un ciego para ver los agradables ríos, praderas,
        flores y fuentes? y esta y muchas otras bendiciones que disfrutamos
        diariamente
      </h2>
      <p>Izaak Walton.</p>
    </div>
  );
}
