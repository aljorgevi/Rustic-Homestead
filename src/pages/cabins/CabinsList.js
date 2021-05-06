import React from 'react';
import CabinCardBariloche from './Bariloche/CabinCardBariloche';
import CabinCardHueyusca from './CabinCardHueyusca';
import CabinCardLenca from './Lenca/CabinCardLenca';
import CabinCardPuertoMontt from './PuertoMontt/CabinCardPuertoMontt';

export default function CabinsList() {
  return (
    <div className="container-fluid px-4">
      <div className="row">
        <CabinCardLenca />
        <CabinCardPuertoMontt />
        {/* <CabinCardHueyusca /> */}
        {/* <CabinCardBariloche /> */}
      </div>
    </div>
  );
}
