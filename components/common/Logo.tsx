'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

const Logo = () => {
  const router = useRouter();
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <div
          onClick={() => router.push('/')}
          className="cursor-pointer hover:brightness-125 transition ">
          <TooltipTrigger asChild>
            <Image
              src="/logo.png"
              alt="Action Replico"
              height={600}
              width={600}
              className="w-40 h-auto"
            />
          </TooltipTrigger>
        </div>
        <TooltipContent>
          <p>Go to home page</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Logo;
