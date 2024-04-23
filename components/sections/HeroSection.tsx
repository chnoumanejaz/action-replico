'use client';
import { Badge } from '@/components/ui/badge';
import { EnvelopeOpenIcon } from '@radix-ui/react-icons';
import { TbFreeRights } from 'react-icons/tb';
import TopNavBar from '../TopNavBar';
import AnimateOpacity from '../common/AnimateOpacity';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import PingServer from '../common/PingServer';

const HeroSection = () => {
  const router = useRouter();
  return (
    <AnimateOpacity>
      <div className="relative w-full h-screen overflow-hidden">
        <TopNavBar />

        <video
          autoPlay
          loop
          muted
          className="object-cover w-full h-full opacity-20 filter brightness-50">
          <source src="/heroVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-1/2 w-[95%] md:w-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary text-center">
          <Badge variant="outline" className="mb-6">
            🎉 Beta testing version 1.0.0 is live now!
          </Badge>
          <h1 className="text-2xl md:text-6xl font-bold mb-4">
            Animating AI-Generated Digital Humans
          </h1>
          <p className="text-black/75 dark:text-secondary-foreground my-6 px-2">
            Presenting the latest advancements from Action Replico: Unveiling
            state-of-the-art solutions such as Animate 3D, employing AI motion
            capture from various videos, leveraging the capabilities of
            Generative AI to effortlessly convert video actions into animated
            sequences.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="py-1 px-3 md:px-5 md:py-3"
              onClick={() => router.push('/auth/register')}>
              <TbFreeRights className="mr-2 h-6 w-6" />
              Start Freemium
            </Button>

            <Button
              size="lg"
              className="py-1 px-3 md:px-5 md:py-3"
              onClick={() => router.push('/auth/register')}>
              <EnvelopeOpenIcon className="mr-2 h-4 w-4" />
              Request a Demo
            </Button>
          </div>
        </div>
      </div>
    </AnimateOpacity>
  );
};

export default HeroSection;
