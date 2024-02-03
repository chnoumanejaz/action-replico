import { Faq, SubscriptionPlan, TFeatures, TeamMember } from '@/types';
import { FaRegFolderOpen } from 'react-icons/fa';
import { TiExportOutline } from 'react-icons/ti';
import { GiExtractionOrb } from 'react-icons/gi';

import { TbFreeRights } from 'react-icons/tb';
import { GiGoldBar } from 'react-icons/gi';
import { IoDiamondOutline } from 'react-icons/io5';

export const FEATURES: TFeatures[] = [
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

// Benefits section data

export const BENEFITS = [
  'You are able to try this free of cost!',
  'You can download the created animations!',
  'You have the option to check the action in from any video! (premium)',
  'You will get the complete refund!',
  'You have the access to our trained workers! (premium)',
  'You have your data saved!',
  'You are able to access your data from anywhere and anytime!',
];

// Pricing section data

export const SUBSCRIPTION_PACKAGES: SubscriptionPlan[] = [
  {
    id: 'skjalslkhjh',
    packageName: 'Freemium',
    packageSportingSentence: 'If you just want to give it a try!',
    linkPath: '/auth/register',
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

// Team members

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '12467',
    name: 'M Nouman Ejaz',
    email: 'noumanejaz92@gmail.com',
    imgSrc: '/team/nouman.png',
    expertie: 'Expert in the Web technologies and Machine learning!',
  },
  {
    id: '098764',
    name: 'Shahid Chaudhary',
    email: 'shahidchaudhary0729@gmail.com',
    imgSrc: '/team/shahid.png',
    expertie: 'Expert in the Web technologies!',
  },
  {
    id: '809757',
    name: 'Salah Ud Din',
    email: 'sallujutt33@gmail.com',
    imgSrc: '/team/salah.png',
    expertie: 'Expert in the Data Science!',
  },
  {
    id: '5626651',
    name: 'Khaula Sohail',
    email: 'Khaulasohail313@gmail.com',
    imgSrc: '/team/khaula.png',
    expertie: 'Expert in the Mobile development and Data Science!',
  },
];

// Faq

export const FAQS: Faq[] = [
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
