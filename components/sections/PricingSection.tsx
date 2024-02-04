import React from 'react';
import SectionWrapper from '../providers/SectionWrapper';

import PricingCard from '../PricingCard';
import { SUBSCRIPTION_PACKAGES } from '@/data/landingPageData';

const PricingSection = () => {
  return (
    <SectionWrapper
      title="Pricing"
      subheading="Choose the plan which is best for you! Feel free to contact us">
      <div className="flex justify-between gap-6 md:flex-nowrap flex-wrap">
        {SUBSCRIPTION_PACKAGES.map(pack => (
          <PricingCard plan={pack} key={pack.id} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default PricingSection;
