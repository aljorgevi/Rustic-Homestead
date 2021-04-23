import React, { Fragment } from 'react';
import style from '../../../styles/Layout/Footer/Footer.module.scss';
import MailTo from './MailTo';
import SocialMedia from './SocialMedia';
import Privacy from './Privacy';

export default function Footer() {
  return (
    <Fragment>
      <div className={style.Footer}>
        <div className={style.FooterWrapper}>
          <div className="row align-center">
            <MailTo />
            <div className="col-12 col-md-4 footer-text">
              <p>Puerto Montt, Región de los Lagos</p>
            </div>
            <div className="col-12 col-md-4">
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>

      <Privacy />
    </Fragment>
  );
}
