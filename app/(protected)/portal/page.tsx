'use client';
import { logout } from '@/actions/logout';
import { Button } from '@/components/ui/button';

const PortalPage = () => {
  return (
    <div>
      <div className="flex"></div>
      <Button onClick={() => logout()} type="submit">
        Log out
      </Button>
    </div>
  );
};

export default PortalPage;
