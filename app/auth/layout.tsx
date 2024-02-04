import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        className="object-cover w-full h-full opacity-10 filter brightness-50">
        <source src="/heroVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-1/2 w-[95%] md:w-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center justify-center md:px-24 md:pt:10 px-4 pt-6">
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
