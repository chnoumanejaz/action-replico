import { TSidebarMenu } from '@/types';
import { GiExtractionOrb, GiPortal } from 'react-icons/gi';
import { LuSettings } from 'react-icons/lu';
import { MdAnimation } from 'react-icons/md';

export const SidebarMenu: TSidebarMenu[] = [
  {
    id: 365465465,
    name: 'Portal',
    path: '/portal',
    icon: GiPortal,
  },
  {
    id: 465465465,
    name: 'Animations',
    path: '/portal/animations',
    icon: MdAnimation,
  },
  {
    id: 555465465,
    name: 'Classification',
    path: '/portal/classification',
    icon: GiExtractionOrb,
  },
  {
    id: 995465465,
    name: 'Settings',
    path: '/portal/settings/account',
    icon: LuSettings,
  },
];
