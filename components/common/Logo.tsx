import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <Image
      src="/logo.png"
      alt="Action Replico"
      height={50}
      width={50}
      className="w-40 h-auto"
      loading="lazy"
    />
  );
};

export default Logo;
