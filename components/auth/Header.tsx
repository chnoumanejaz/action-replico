import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';
import React from 'react';
import Logo from '../common/Logo';

const font = Poppins({
  subsets: ['latin'],
  weight: ['600'],
});

interface HeaderProps {
  label: string;
}

const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <Logo />
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
};

export default Header;
