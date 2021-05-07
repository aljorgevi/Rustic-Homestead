import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import style from '../../../styles/Layout/Footer/SocialMedia.module.scss';

export default function SocialMedia() {
  return (
    <div className={style.SocialMedia}>
      <a
        className={style.Instagram}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/rustic_homestead_chile/"
      >
        <FaInstagram />
      </a>
      <a
        className={style.Facebook}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/rustic_homestead_chile-101549548604440"
      >
        <FaFacebook />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://bit.ly/2ODjVI4"
        className={style.Whatsapp}
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}
