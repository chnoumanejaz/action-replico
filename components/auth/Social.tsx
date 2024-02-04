import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { signIn } from 'next-auth/react';
import React from 'react';
import { Button } from '../ui/button';
import { FcGoogle } from 'react-icons/fc';

const Social = () => {
  const handleClick = (provider: 'google') => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="w-full text-center space-y-2 -mt-2">
      <span className="text-muted-foreground">OR</span>

      <Button
        variant="outline"
        onClick={() => handleClick('google')}
        className="w-full">
        <FcGoogle className="mr-2 h-5 w-5" />
        Continue with Google
      </Button>
    </div>
  );
};

export default Social;
