import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const AuthErrorPage = () => {
  return (
    <div>
      <h2 className="text-3xl md:text-6xl">Encountered An Error</h2>
      <h2 className="text-muted-foreground mt-2">
        We&apos;re facing a problem while logging you in with Google. Please try
        again after some time!
        <br />
        If the problem is not resolved then please contact us
      </h2>
      <div className="flex gap-4">
        <Button asChild size="lg" className="mt-4">
          <Link href="/auth/login">Try Again</Link>
        </Button>
        <Button asChild size="lg" variant="secondary" className="mt-4">
          <Link href="/contact">Report a problem</Link>
        </Button>
      </div>
    </div>
  );
};

export default AuthErrorPage;
