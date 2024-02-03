'use client';
import { logout } from '@/actions/logout';
import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/hooks/auth/useCurrentUser';
import React from 'react';

const PortalPage = () => {
  const user = useCurrentUser();

  return (
    <div>
      PortalPage User: {JSON.stringify(user)}
      <Button onClick={() => logout()} type="submit">
        Log out
      </Button>
    </div>
  );
};

export default PortalPage;
