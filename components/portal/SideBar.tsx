'use client';
import { SidebarMenu } from '@/data/sidebar-data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../common/Logo';
import LogoutIcon from '../common/LogoutIcon';
import { ThemeToggler } from '../common/ThemeToggler';
import UserAccount from '../common/UserAccount';
import UserAccountType from '../common/UserAccountType';

const SideBar = () => {
  const pathname = usePathname();
  return (
    <aside className="bg-secondary/25 border-r dark:text-white/85 pt-6 px-3 overflow-hidden flex flex-col justify-between portal-sidebar">
      <Logo />
      <div className="flex flex-col my-2 py-6 space-y-2 flex-1">
        {SidebarMenu.map(menu => {
          const { icon: Icon } = menu;
          return (
            <Link
              href={menu.path}
              key={menu.id}
              className={`flex shadow-sm border border-secondary/25 rounded-md py-2 px-3 items-center font-medium group dark:hover:bg-primary/50 hover:bg-secondary transition ${
                pathname === menu.path ? 'dark:bg-primary/50 bg-secondary' : ''
              }`}>
              <Icon className="w-5 h-5 mr-2 group-hover:rotate-90 transition duration-300" />
              {menu.name}
            </Link>
          );
        })}
      </div>

      <div className="border-t pt-3 pb-6 rounded-2xl px-4 overflow-hidden -m-3 shadow-md">
        <UserAccount />
        <div className="mt-3 flex gap-2 justify-between">
          <UserAccountType />
          <div className="space-x-2">
            <ThemeToggler />
            <LogoutIcon />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
