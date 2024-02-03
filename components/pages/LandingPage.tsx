import BenefitSection from '../sections/BenefitSection';
import FeaturesSection from '../sections/FeaturesSection';
import HeroSection from '../sections/HeroSection';

const LandingPage = () => {
  return (
    <header>
      <HeroSection />
      <FeaturesSection />
      <BenefitSection />
    </header>
  );
};

export default LandingPage;
