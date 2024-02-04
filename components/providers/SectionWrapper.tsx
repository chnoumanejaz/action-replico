import React from 'react';
import AnimateOpacity from '../common/AnimateOpacity';

interface SectionWrapperProps {
  children: React.ReactNode;
  title: string;
  subheading?: string;
  id?: string;
}

const SectionWrapper = ({
  children,
  title,
  subheading,
  id,
}: SectionWrapperProps) => {
  return (
    <AnimateOpacity>
      <section className="flex flex-col items-center md:p-10 p-4 my-6" id={id}>
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-medium">{title}</h2>
          <p className="text-muted-foreground">{subheading}</p>
        </div>
        <div className="w-full">{children}</div>
      </section>
    </AnimateOpacity>
  );
};

export default SectionWrapper;
