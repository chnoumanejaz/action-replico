import React from 'react';
import SectionWrapper from '../providers/SectionWrapper';
import { IconType } from 'react-icons';
import { TbFreeRights } from 'react-icons/tb';
import { GiGoldBar } from 'react-icons/gi';
import { IoDiamondOutline } from 'react-icons/io5';
import PricingCard from '../PricingCard';

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

const SUBSCRIPTION_PACKAGES: SubscriptionPlan[] = [
  {
    id: 'skjalslkhjh',
    packageName: 'Freemium',
    packageSportingSentence: 'If you just want to give it a try!',
    linkPath: '/',
    price: 0,
    type: 'freemium',
    icon: TbFreeRights,
    benefits: [
      { benefitId: '4567897789', benefitName: '02 animations per month' },
      {
        benefitId: '9876543456',
        benefitName: 'Limited Chat support',
      },
      {
        benefitId: '98721243456',
        benefitName: 'Limited built-in animations',
      },
      {
        benefitId: '128721243456',
        benefitName: 'No access to previous data',
      },
      {
        benefitId: '123224243456',
        benefitName: 'No access to video classification',
      },
    ],
  },
  {
    id: 'nbvhgkhngfs',
    packageName: 'Gold',
    packageSportingSentence: 'If you need more advantages!',
    linkPath: '/',
    price: 1499,
    type: 'gold',
    icon: GiGoldBar,
    benefits: [
      { benefitId: '1567897789', benefitName: '10 animations per month' },
      {
        benefitId: '1876543456',
        benefitName: '24/7 Chat support',
      },
      {
        benefitId: '18721243456',
        benefitName: 'Some built-in animations',
      },
      {
        benefitId: '228721243456',
        benefitName: 'Access to last 5 days data',
      },
      {
        benefitId: '223224243456',
        benefitName: 'Access to video classification',
      },
    ],
  },
  {
    id: 'nsakjhsfs',
    packageName: 'Diamond',
    packageSportingSentence: 'If you really need something special!',
    linkPath: '/',
    price: 4499,
    type: 'diamond',
    icon: IoDiamondOutline,
    benefits: [
      { benefitId: '5567897789', benefitName: 'Create unlimited animations' },
      {
        benefitId: '5876543456',
        benefitName: '24/7 Chat support (faster response)',
      },
      {
        benefitId: '58721243456',
        benefitName: 'All built-in animations',
      },
      {
        benefitId: '5528721243456',
        benefitName: 'Access to your complete previous data',
      },
      {
        benefitId: '2255643224243456',
        benefitName: 'Experts training available',
      },
    ],
  },
];

const PricingSection = () => {
  return (
    <SectionWrapper
      title="Pricing"
      subheading="Choose the plan which is best for you! Feel free to contact us">
      <div className="flex justify-between gap-6 md:flex-nowrap flex-wrap">
        {SUBSCRIPTION_PACKAGES.map(pack => (
          <PricingCard plan={pack} key={pack.id} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default PricingSection;
