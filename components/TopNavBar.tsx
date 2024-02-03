import React from 'react';
import Logo from './common/Logo';
import Link from 'next/link';
import { Button } from './ui/button';
import { FiLogIn } from 'react-icons/fi';
import { TbLogin } from 'react-icons/tb';
import { ThemeToggler } from './common/ThemeToggler';

const TOP_NAV_MENU = ['Features', 'Benefits', 'Team'];

const TopNavBar = () => {
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
        <Button variant="outline" className="bg-transparent">
          <FiLogIn className="mr-2 h-4 w-4" />
          Login
        </Button>
        <Button className="hidden md:flex">
          Register
          <TbLogin className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </nav>
  );
};

export default TopNavBar;
