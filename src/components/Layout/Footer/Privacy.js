import React from 'react';
import SectionWrapper from '../../UI/SectionWrapper';
import style from '../../../styles/Layout/Footer/Privacy.module.scss';

export default function Privacy() {
  const date = new Date().getFullYear();
  return (
    <SectionWrapper>
      <div className="row align-center">
        <div className="col-12 col-md-6 ">
          <div className={style.PrivacyLeft}>
            <p>WWW.RUSTIC_HOMESTEAD_CHILE.COM</p>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className={style.PrivacyRight}>
            <span>Developed by&nbsp;</span>
            <a href="#!">Aljorgevi</a> &copy;{date}
            <span>. All rights reserved.</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
