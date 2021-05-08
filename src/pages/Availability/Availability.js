import React, { Fragment } from 'react';
import SectionWrapper from '../../components/UI/SectionWrapper';
import MetaHead from '../../components/utils/MetaHead';
import AvailabilityForm from './AvailabilityForm';
import AvailabilityHero from './AvailabilityHero';
import AvailabilityImg from './AvailabilityImg';

export default function Availability() {
  const meta = <MetaHead title="Contacto" />;
  return (
    <Fragment>
      {meta}
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
