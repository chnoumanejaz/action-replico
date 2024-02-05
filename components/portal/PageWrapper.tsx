import React from 'react';
import MobileSideBar from './MobileSideBar';

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
    <div className="h-full">
      <div className="flex justify-between gap-2">
        <div>
          <h2 className="text-2xl  font-semibold">{title}</h2>
          <p className="mb-10 text-muted-foreground text-sm">{subheading}</p>
        </div>
        <div className="mt-2 md:hidden">
          <MobileSideBar />
        </div>
      </div>
      {children}
    </div>
  );
};

export default PageWrapper;
