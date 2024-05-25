'use client';
import AnimationTermsConds from '@/components/portal/AnimationTermsConds';
import AnimationWidget from '@/components/portal/AnimationWidget';
import PageWrapper from '@/components/portal/PageWrapper';
import { useState } from 'react';

const ClassificationPage = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  return (
    <PageWrapper
      title="Make Animation "
      subheading="Select & Upload the video and get the animation done!">
      <div>
        {isAgreed ? (
          <AnimationWidget />
        ) : (
          <AnimationTermsConds setIsAgreed={setIsAgreed} />
        )}
      </div>
    </PageWrapper>
  );
};

export default ClassificationPage;
