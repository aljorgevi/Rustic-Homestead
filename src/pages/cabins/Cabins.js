import React, { Fragment } from 'react';

import CabinsDescription from './CabinsDescription';
import CabinsHero from './CabinsHero';
import CabinsList from './CabinsList';

export default function Cabins() {
  return (
    <Fragment>
      <CabinsHero />
      <CabinsDescription />
      {/* <hr className="hr w-100" /> */}
      <CabinsList />
      {/* <CabinReviews /> */}
    </Fragment>
  );
}
