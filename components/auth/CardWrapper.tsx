import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import Header from './Header';
import Social from './Social';

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

const CardWrapper: React.FC<CardWrapperProps> = ({
  backButtonHref,
  backButtonLabel,
  children,
  headerLabel,
  showSocial,
}) => {
  return (
    <Card className="md:w-[400px] w-full shadow-md bg-transparent backdrop-blur-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}

      <CardFooter>
        <Button asChild variant="link">
          <Link href={backButtonHref} className="w-full text-center">
            {backButtonLabel}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
