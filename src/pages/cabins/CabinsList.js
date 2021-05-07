import React from 'react';
import CabinCardLenca from './Lenca/CabinCardLenca';
import CabinCardPuertoMontt from './PuertoMontt/CabinCardPuertoMontt';

export default function CabinsList() {
  return (
    <div className="container-fluid px-4">
      <div className="row">
        <CabinCardLenca />
        <CabinCardPuertoMontt />
      </div>
    </div>
  );
}
