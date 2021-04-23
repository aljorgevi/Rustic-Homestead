import React from 'react';
import style from './SectionWrapper.module.scss';

export default function SectionWrapper(props) {
  return (
    <div className={`container ${style['section-wrapper']} ${props.className}`}>
      {props.children}
    </div>
  );
}
