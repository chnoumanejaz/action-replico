import React from 'react';
import Confetti from 'react-confetti';

const ConfettiAnim = () => {
  return (
    <Confetti
      width={window.innerWidth || 300}
      height={window.innerHeight || 200}
      recycle={false}
    />
  );
};

export default ConfettiAnim;
