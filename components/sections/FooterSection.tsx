import React from 'react';
import Logo from '../common/Logo';
import { Button } from '../ui/button';
import { Input } from '@/components/ui/input';
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import { FaFacebook } from 'react-icons/fa';
import { TEAM_MEMBERS } from '@/data/landingPageData';
import Link from 'next/link';

const FooterSection = () => {
  return (
    <footer className="md:p-10 md:pb-0 p-4 mt-6 bg-primary/5">
      <div className="flex flex-wrap md:flex-nowrap justify-between md:gap-8 gap-3">
        <div className="md:w-1/2 w-full space-y-4 order-2">
          <Logo />
          <div className="flex flex-col space-y-3">
            <Input placeholder="Enter your email" />
            <Button>Join Newsletter</Button>
          </div>
        </div>
        <div className="flex gap-10 md:gap-32 w-full">
          <div>
            <h3 className="font-semibold mb-3">Animate Modal</h3>
            <ul className="space-y-2 dark:text-white/80 dark:hover:text-white transition-colors">
              <li className="hover:translate-x-1 transition-transform cursor-pointer">
                <Link href="/auth/register">Register</Link>
              </li>
              <li className="hover:translate-x-1 transition-transform cursor-pointer">
                Pricing
              </li>
              <li className="hover:translate-x-1 transition-transform cursor-pointer">
                Contact us
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Contact Team</h3>
            <ul className="space-y-2 dark:text-white/80 dark:hover:text-white transition-colors">
              {TEAM_MEMBERS.map(member => (
                <li
                  key={member.id}
                  className="hover:translate-x-1 transition-transform cursor-pointer">
                  {member.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <h3 className="font-semibold mb-3">Join Socials</h3>
          <div className="space-x-2">
            <Button variant="outline" size="icon">
              <GitHubLogoIcon className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <FaFacebook className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <TwitterLogoIcon className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <InstagramLogoIcon className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-muted-foreground text-sm py-3">
            Please feel free to contact our team in case you face any difficulty
            and have fun with your 3D animations journey! :)
          </p>
        </div>
      </div>
      <div className="text-center text-muted-foreground text-sm mt-8 mb-1">
        Copyright 2023-2024 © Action Replico. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
