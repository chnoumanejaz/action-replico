import Link from 'next/link';
import { Button } from '../ui/button';

export function CreateNewAnimationButton() {
  return (
    <Button asChild>
      <Link href="/portal/animations/new">Create New Animation</Link>
    </Button>
  );
}
