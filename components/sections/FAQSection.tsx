import { FAQS } from '@/data/landingPageData';
import SectionWrapper from '../providers/SectionWrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

const FAQSection = () => {
  return (
    <SectionWrapper
      title="FAQ's"
      subheading="Go through the most asked questions">
      <div className="md:w-[60%] w-[95%] mx-auto mb-10">
        <Accordion type="single" collapsible className="space-y-2">
          {FAQS.map((faq, idx) => (
            <AccordionItem value={faq.question} key={idx}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
};

export default FAQSection;
