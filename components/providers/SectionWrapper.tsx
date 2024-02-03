import React from 'react';

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
    <section className="flex flex-col items-center md:p-10 p-4 my-6" id={id}>
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-medium">{title}</h2>
        <p className="text-muted-foreground">{subheading}</p>
      </div>
      <div className="w-full">{children}</div>
    </section>
  );
};

export default SectionWrapper;
