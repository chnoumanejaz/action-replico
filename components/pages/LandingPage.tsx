import BenefitSection from '../sections/BenefitSection';
import FeaturesSection from '../sections/FeaturesSection';
import HeroSection from '../sections/HeroSection';
import PricingSection from '../sections/PricingSection';

const LandingPage = () => {
  return (
    <header>
      <HeroSection />
      <FeaturesSection />
      <BenefitSection />
      <PricingSection />
    </header>
  );
};

export default LandingPage;
