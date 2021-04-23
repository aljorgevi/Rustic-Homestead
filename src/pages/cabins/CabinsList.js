import React from 'react';
import SectionWrapper from '../../components/UI/SectionWrapper';
import CabinCardBariloche from './CabinCardBariloche';
import CabinCardHueyusca from './CabinCardHueyusca';
import CabinCardLenca from './CabinCardLenca';
import CabinCardPuertoMontt from './CabinCardPuertoMontt';

export default function CabinsList() {
  return (
    <SectionWrapper>
      <div className="row">
        <CabinCardLenca />
        <CabinCardPuertoMontt />
        <CabinCardHueyusca />
        <CabinCardBariloche />
      </div>
    </SectionWrapper>
  );
}
