import React from 'react';
import { Button } from '../ui/button';
import { Badge } from '@/components/ui/badge';
import TopNavBar from '../TopNavBar';
import { TbFreeRights } from 'react-icons/tb';
import { EnvelopeOpenIcon } from '@radix-ui/react-icons';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <TopNavBar />

      <video
        autoPlay
        loop
        muted
        className="object-cover w-full h-full opacity-30 filter brightness-50">
        <source src="/heroVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-36 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <Badge variant="outline">
          ⌛️ Comming Soon &quot;wait for the best&quot;
        </Badge>
      </div>

      <div className="absolute bottom-3 w-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary text-center">
        <h1 className="text-6xl font-bold mb-4">
          Animating AI-Generated Digital Humans
        </h1>
        <p className="text-black/75 my-6">
          Presenting the latest advancements from Action Replico: Unveiling
          state-of-the-art solutions such as Animate 3D, employing AI motion
          capture from various videos, leveraging the capabilities of Generative
          AI to effortlessly convert video actions into animated sequences.
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <Button size="lg" variant="secondary">
            <TbFreeRights className="mr-2 h-6 w-6" />
            Start Freemiun
          </Button>

          <Button size="lg">
            <EnvelopeOpenIcon className="mr-2 h-4 w-4" />
            Request a Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
