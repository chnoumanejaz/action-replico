import React from 'react';
import FeatureCard from '../FeatureCard';
import SectionWrapper from '../providers/SectionWrapper';
import { FEATURES } from '@/data/landingPageData';

const FeaturesSection = () => {
  return (
    <SectionWrapper
      title="Features"
      id="features"
      subheading="These are the main features from our side!">
      <div className="flex flex-wrap md:flex-nowrap justify-evenly gap-6">
        {FEATURES.map(feature => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default FeaturesSection;
