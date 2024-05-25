import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Button } from '../ui/button';

const INSTRUCTIONS_T0_FOLLOW = [
  {
    title: 'Video Selection',
    description:
      'Select the video from which you want to extract the actions and make animation but the size of a video should be less than 10MB',
  },
  {
    title: 'Be Careful with the video',
    description:
      'Video should be clear. The video only has to contain the 1 person. If you upload a video with the multiple persons in it then you will not get the results as expected. The person in the video must be clear and performing some kind of action in a video.',
  },
  {
    title: 'Nudity and violence',
    description:
      'The video should not contain any nudity or violence. If you upload a video with nudity or violence then the legal actions will be taken against you. So, be careful with the video you upload.',
  },
  {
    title: 'Get the results 🎉',
    description:
      'Get the results of the video in a few seconds. Dont forget to rate the results and share the results with your friends.',
  },
];

type props = {
  setIsAgreed: React.Dispatch<React.SetStateAction<boolean>>;
};

const AnimationTermsConds = ({ setIsAgreed }: props) => {
  return (
    <div className="p-6 rounded-md border bg-secondary/20">
      <div className="space-y-1">
        <strong>Please follow the instructions</strong>
        <p className="text-sm text-muted-foreground">
          Follow the following instructions to get the best results:
        </p>
      </div>

      <div>
        {INSTRUCTIONS_T0_FOLLOW.map((instruction, index) => (
          <div key={index} className="flex items-center gap-4 space-y-5">
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10">
              {index + 1}
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                {instruction.title}
              </h3>
              <p className="text-sm">{instruction.description}</p>
            </div>
          </div>
        ))}
        <Separator className="mt-4" />
        <div className="mt-4">
          <p className="text-sm">
            <strong className="text-primary">Note:</strong> If you don&apos;t
            follow the instructions, you might not get the best results.
          </p>
        </div>

        <div className="mt-2">
          <p className="text-sm">
            <strong className="text-primary">Disclaimer:</strong> We are not
            responsible for any misuse of the results. The results are generated
            by the AI model and should be used for educational purposes only.
          </p>
        </div>

        <div className="mt-2">
          <p className="text-sm">
            <strong className="text-primary">Privacy:</strong> We don&apos;t
            store your video or any information. Everything is done on the
            client side.
          </p>
        </div>
      </div>

      <Button className="mt-5 w-full" onClick={() => setIsAgreed(true)}>
        Agree & Continue
      </Button>
    </div>
  );
};

export default AnimationTermsConds;
