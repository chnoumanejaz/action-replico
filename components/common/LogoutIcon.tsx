'use client';
import { logout } from '@/actions/logout';
import React, { useTransition } from 'react';
import { Button } from '../ui/button';
import { FiLogOut } from 'react-icons/fi';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';
import { FaSpinner } from 'react-icons/fa';

const LogoutIcon = () => {
  const [isPending, startTransition] = useTransition();

  function handleLogout() {
    startTransition(async () => {
      await logout();
    });
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" onClick={handleLogout} disabled={isPending}>
            {isPending ? (
              <FaSpinner className="w-5 h-5 animate-spin" />
            ) : (
              <FiLogOut className="w-5 h-5" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Logout</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default LogoutIcon;
