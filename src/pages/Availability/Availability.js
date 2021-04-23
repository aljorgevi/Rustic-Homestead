import React, { Fragment } from 'react';
import SectionWrapper from '../../components/UI/SectionWrapper';
import AvailabilityForm from './AvailabilityForm';
import AvailabilityHero from './AvailabilityHero';
import AvailabilityImg from './AvailabilityImg';

export default function Availability() {
  return (
    <Fragment>
      <AvailabilityHero />
      <SectionWrapper>
        <div className="row">
          <AvailabilityForm />
          <AvailabilityImg />
        </div>
      </SectionWrapper>
    </Fragment>
  );
}
