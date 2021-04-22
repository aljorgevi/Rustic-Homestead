import React from 'react';
import style from '../../../styles/Layout/Availability-card/AvailabilityCart.module.scss';
import Button from '../../UI/Button';

export default function AvailabilityCart() {
  return (
    <div className="gb-inside-container">
      <div className={style.Cart__Wrapper}>
        <div className={style['Cart__Wrapper--Width']}>
          <div className={style.Cart}>
            <div className={style.Cart__Content}>
              <h3>Classic New York luxury condos, in a modern package</h3>
              <hr className="hr mt-4" />
              <p>
                Philip House is a classic prewar condominium building that has
                been reimagined for modern life. While retaining the
                authenticity of an Upper East Side home, the interiors have been
                entirely rebuilt and designed by award-winning designer Victoria
                Hagan.
              </p>
              <div className={style['button-wrapper']}>
                <Button className={style['button-primary']}>
                  Availability
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
