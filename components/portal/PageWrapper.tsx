import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
  title: string;
  subheading?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  title,
  subheading,
}) => {
  return (
    <div className=" h-full">
      <h2 className="text-2xl  font-semibold">{title}</h2>
      <p className="mb-10 text-muted-foreground">{subheading}</p>
      {children}
    </div>
  );
};

export default PageWrapper;
