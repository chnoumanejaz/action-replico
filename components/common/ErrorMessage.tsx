import React from 'react';
import { MdOutlineReportGmailerrorred } from 'react-icons/md';

interface ErrorMessageProps {
  heading: string;
  subheading: string;
}

const ErrorMessage = ({ heading, subheading }: ErrorMessageProps) => {
  return (
    <div className="mx-auto space-y-4 text-center mt-6 w-full ">
      <MdOutlineReportGmailerrorred className="mx-auto md:h-20 md:w-20 h-12 w-12" />
      <div>
        <h3 className="text-xl md:text-2xl font-medium">{heading}</h3>
        <p className="text-muted-foreground md:text-sm text-xs mt-1">
          {subheading}
        </p>
      </div>
    </div>
  );
};

export default ErrorMessage;
