import { IconType } from 'react-icons';

export type TFeatures = {
  id: string;
  name: string;
  description: string;
  icon: IconType;
};

export type SubscriptionPlanBenefit = {
  benefitId: string;
  benefitName: string;
};

export type SubscriptionPlan = {
  id: string;
  packageName: string;
  packageSportingSentence: string;
  type: 'freemium' | 'gold' | 'diamond';
  icon: IconType;
  price: number;
  discount?: number;
  discountSentence?: string;
  benefits: SubscriptionPlanBenefit[];
  linkPath: string;
};

export type TeamMember = {
  id: string;
  name: string;
  email: string;
  imgSrc: string;
  expertie: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type TSidebarMenu = {
  id: number;
  name: string;
  path: string;
  icon: IconType;
};

export type ClassificationData = {
  id: number;
  name: string;
  date: string;
  videoSrc: string;
};
