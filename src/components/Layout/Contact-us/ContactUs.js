import React from 'react';
import Button from '../../UI/Button';
import SectionWrapper from '../../UI/SectionWrapper';
import style from '../../../styles/Layout/Contact-us/ContactUs.module.scss';
import GbWrapper from '../../UI/gb-wrapper';

export default function ContactUs({ title, content }) {
  return (
    <SectionWrapper>
      <GbWrapper>
        <div className="col-9">
          <div className={style.ContactUs}>
            <h3>{title}</h3>
            <hr className="hr w-100" />
            <p>{content}</p>
            <Button>Contacto</Button>
          </div>
        </div>
      </GbWrapper>
    </SectionWrapper>
  );
}
