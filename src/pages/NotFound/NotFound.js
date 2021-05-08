import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/404.png';
import style from '../../styles/pages/NotFound/NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={`${style.NotFound} container`}>
      <Link className={style.NotFound__link} to="/">
        <img src={img} alt="not found error 404" />
      </Link>
    </div>
  );
};

export default NotFound;
