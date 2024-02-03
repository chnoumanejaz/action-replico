import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  title: string;
  subheading?: string;
}

const SectionWrapper = ({
  children,
  title,
  subheading,
}: SectionWrapperProps) => {
  return (
    <section className="flex flex-col items-center md:p-10 p-4 my-6">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-medium">{title}</h2>
        <p className="text-muted-foreground">{subheading}</p>
      </div>
      {children}
    </section>
  );
};

export default SectionWrapper;
