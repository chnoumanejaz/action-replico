import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

import React from 'react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
interface FormErrorProps {
  message?: string;
}

const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <Alert variant="destructive">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <AlertTitle>Oh No!</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

export default FormError;
