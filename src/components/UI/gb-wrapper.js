import React from 'react';
import style from './gb-wrapper.module.scss';

export default function GbWrapper(props) {
  return (
    <div className={`${style['gb-wrapper']} ${props.className}`}>
      {props.children}
    </div>
  );
}
