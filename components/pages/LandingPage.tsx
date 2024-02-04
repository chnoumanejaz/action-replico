import BenefitSection from '../sections/BenefitSection';
import FAQSection from '../sections/FAQSection';
import FeaturesSection from '../sections/FeaturesSection';
import FooterSection from '../sections/FooterSection';
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
      <FAQSection />
      <FooterSection />
    </header>
  );
};

export default LandingPage;
