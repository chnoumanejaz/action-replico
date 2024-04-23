'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { SidebarMenu } from '@/data/sidebar-data';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../common/Logo';
import LogoutIcon from '../common/LogoutIcon';
import { ThemeToggler } from '../common/ThemeToggler';
import UserAccount from '../common/UserAccount';
import UserAccountType from '../common/UserAccountType';
import { Button } from '../ui/button';
import PingServer from '../common/PingServer';

const MobileSideBar = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger>
        <Button asChild size="icon" variant="outline" className="p-1">
          <HamburgerMenuIcon className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col justify-between h-[90%]">
          <div className="flex flex-col my-2 py-6 space-y-2 ">
            {SidebarMenu.map(menu => {
              const { icon: Icon } = menu;
              return (
                <Link
                  href={menu.path}
                  key={menu.id}
                  className={`flex shadow-sm border border-secondary/25 rounded-md py-2 px-3 items-center font-medium group dark:hover:bg-primary/50 hover:bg-secondary transition ${
                    pathname === menu.path
                      ? 'dark:bg-primary/50 bg-secondary'
                      : ''
                  }`}>
                  <Icon className="w-5 h-5 mr-2 group-hover:rotate-90 transition duration-300" />
                  {menu.name}
                </Link>
              );
            })}
            <PingServer />
          </div>

          <div className="border pt-3 pb-6 rounded-2xl px-4 overflow-hidden -m-3 shadow-md ">
            <UserAccount />
            <div className="mt-3 flex gap-2 justify-between">
              <UserAccountType />
              <div className="space-x-2">
                <ThemeToggler />
                <LogoutIcon />
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
