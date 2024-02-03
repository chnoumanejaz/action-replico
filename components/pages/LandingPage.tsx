import BenefitSection from '../sections/BenefitSection';
import FeaturesSection from '../sections/FeaturesSection';
import HeroSection from '../sections/HeroSection';
import OurTeamSection from '../sections/OurTeamSection';
import PricingSection from '../sections/PricingSection';

const LandingPage = () => {
  return (
    <header>
      <HeroSection />
      <FeaturesSection />
      <BenefitSection />
      <PricingSection />
      <OurTeamSection />
    </header>
  );
};

export default LandingPage;
