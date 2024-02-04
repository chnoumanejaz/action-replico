import Image from 'next/image';
import { MdDone } from 'react-icons/md';
import SectionWrapper from '../providers/SectionWrapper';
import { BENEFITS } from '@/data/landingPageData';

const BenefitSection = () => {
  return (
    <SectionWrapper
      title="Benefits"
      id="benefits"
      subheading="What benefits you'll get from us">
      <div className="flex justify-evenly gap-8 items-center">
        <ul className="space-y-3">
          {BENEFITS.map((benefit, idx) => (
            <li key={idx} className="flex gap-3 items-center">
              <MdDone className="p-1 rounded-full border border-primary bg-primary text-white min-h-5 min-w-5 md:min-h-6 md:min-w-6" />
              <p>{benefit}</p>
            </li>
          ))}
        </ul>
        <Image
          src="/benefit-section-image.png"
          alt="Image not found"
          height={300}
          width={300}
          className="hidden md:block"
        />
      </div>
    </SectionWrapper>
  );
};

export default BenefitSection;
