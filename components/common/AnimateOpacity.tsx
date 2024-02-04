'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimateOpacityProps {
  children: React.ReactNode;
}

const AnimateOpacity = ({ children }: AnimateOpacityProps) => {
  return (
    <motion.div
      initial={{ opacity: 0.1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}>
      {children}
    </motion.div>
  );
};

export default AnimateOpacity;
