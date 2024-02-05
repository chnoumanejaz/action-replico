import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="flex justify-center flex-col items-center h-screen w-screen">
      <h1 className="text-8xl animate-pulse font-bold">404</h1>
      <h2 className="text-3xl font font-bold">Page not found</h2>
      <p className="mt-1 text-muted-foreground">
        The page you are looking for is not available
      </p>
      <Button asChild size="lg" className="mt-4 w-1/3">
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  );
};

export default Custom404;
