import React from 'react';
import {
  GiWoodCabin,
  GiSeaCreature,
  GiForest,
  GiModernCity,
} from 'react-icons/gi';
import style from '../../../styles/Layout/Quote/CartLeft.module.scss';

export default function CartLeft() {
  return (
    <div className={style.CartLeft}>
      <h2 className={style.CartLeft__title}>Lenca, Carretera Austral.</h2>
      <p>
        <span>
          <GiWoodCabin />
        </span>
        Cabaña amoblada, alojamiento.
      </p>
      <p>
        <span>
          <GiSeaCreature />
        </span>
        Vista y acceso al mar.
      </p>
      <p>
        <span>
          <GiForest />
        </span>
        Gran jardin
      </p>
      <p>
        <span>
          <GiModernCity />
        </span>
        A 10 minutos de Puerto Montt
      </p>
    </div>
  );
}
