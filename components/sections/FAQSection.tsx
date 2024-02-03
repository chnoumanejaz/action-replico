import React from 'react';
import SectionWrapper from '../providers/SectionWrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

export type Faq = {
  question: string;
  answer: string;
};

const FAQS: Faq[] = [
  {
    question:
      'How can I get started with Action Replico if I have limited experience in 3D modeling and animation?',
    answer:
      'Action Replico is designed with user-friendliness in mind. Simply sign up, explore the intuitive interface, and follow our step-by-step guides to start creating animations effortlessly. ',
  },
  {
    question:
      "What types of actions are available in the platform's library, and how frequently are new actions added?",
    answer:
      'In begining the library includes all the basic animations range of actions, constantly expanding with machine learning updates. You can find actions suitable for gaming, movies, education, and more.',
  },
  {
    question:
      'Can I collaborate with others on animation projects using Action Replico?',
    answer:
      "Not now! Action Replico do not support collaborative animation creation, but you'll see this soon in the comming update.",
  },
  {
    question:
      'How does the AI-based action extraction work, and what level of accuracy can I expect?',
    answer:
      'Our system employs advanced machine learning algorithms to accurately extract human actions from videos. The accuracy is continually improved through ongoing updates and enhancements.',
  },
  {
    question:
      ' Is there a limit to the size or complexity of 3D models that can be uploaded to the platform?',
    answer:
      'Action Replico is designed to handle a variety of 3D models. While there are size limits. Feel free to contact us if you have any query.',
  },
  {
    question:
      'Can I export animations created on Action Replico to use in other software or platforms?',
    answer:
      'Yes, you can! Action Replico offers export options in various formats, providing flexibility to integrate your creations into games, movies, or other 3D modeling applications.',
  },
  {
    question:
      'What technical requirements do I need to meet to run Action Replico smoothly on my device?',
    answer:
      'Action Replico is optimized for performance. Ensure your device meets standard web browsing requirements, and a stable internet connection is recommended for the best experience.',
  },
  {
    question:
      'Can I use animations created on Action Replico for commercial purposes?',
    answer:
      'Absolutely! (Premium) "Action Replico" is versatile and allows users to utilize created animations across various industries, including gaming, movie production, and educational content creation, for commercial purposes.',
  },
];

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
