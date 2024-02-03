import React from 'react';
import FeatureCard from '../FeatureCard';
import SectionWrapper from '../providers/SectionWrapper';
import { FaRegFolderOpen } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { TiExportOutline } from 'react-icons/ti';
import { GiExtractionOrb } from 'react-icons/gi';

export type TFeatures = {
  id: string;
  name: string;
  description: string;
  icon: IconType;
};

const FEATURES: TFeatures[] = [
  {
    id: '546546546546',
    name: 'Dynamic Action Library',
    icon: FaRegFolderOpen,
    description:
      'Boasts an extensive library of recognized human actions, constantly updated through machine learning advancements. Users can choose from a diverse range of actions for their animations, enhancing creativity.',
  },
  {
    id: '54nsaskl546546',
    name: 'Export and Integration Capabilities',
    icon: TiExportOutline,
    description:
      'Provides users with the option to export their created animations in various formats, supporting seamless integration into different platforms such as games, video editing software, or other 3D modeling applications.',
  },
  {
    id: 'asas55s6a4s6546',
    name: 'Action Extraction',
    icon: GiExtractionOrb,
    description:
      'Utilizes advanced machine learning algorithms, powered by TensorFlow/PyTorch, to accurately extract diverse human actions from video datasets.',
  },
];

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
