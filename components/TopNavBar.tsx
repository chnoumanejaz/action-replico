'use client';
import React from 'react';
import Logo from './common/Logo';
import Link from 'next/link';
import { Button } from './ui/button';
import { FiLogIn } from 'react-icons/fi';
import { TbLogin } from 'react-icons/tb';
import { ThemeToggler } from './common/ThemeToggler';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { LuPanelLeftOpen } from 'react-icons/lu';

const TOP_NAV_MENU = ['Features', 'Benefits', 'Team'];

const TopNavBar = () => {
  const router = useRouter();
  const session = useSession();
  const { data } = session;

  return (
    <nav className="flex gap-4 py-2 justify-between items-center px-2 md:px-8 bg-transparent absolute top-0 w-full z-10 shadow-sm">
      <Logo />

      <ul className="hidden md:flex gap-6">
        {TOP_NAV_MENU.map((menu, index) => (
          <li key={index}>
            <Link
              href={`#${menu.toLowerCase()}`}
              className="hover:opacity-100 opacity-75 font-medium p-3 rounded transition-opacity">
              {menu}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex gap-2">
        <ThemeToggler />
        {data?.user && (
          <Button onClick={() => router.push('/portal')}>
            <LuPanelLeftOpen className="mr-2 h-5 w-5" />
            Go to Portal
          </Button>
        )}
        {!data?.user && (
          <>
            <Button
              variant="outline"
              className="bg-transparent"
              onClick={() => router.push('/auth/login')}>
              <FiLogIn className="mr-2 h-4 w-4" />
              Login
            </Button>
            <Button
              className="hidden md:flex"
              onClick={() => router.push('/auth/register')}>
              Register
              <TbLogin className="ml-2 w-5 h-5" />
            </Button>
          </>
        )}
      </div>
    </nav>
  );
};

export default TopNavBar;
