'use client';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Alert } from '../ui/alert';

const PingServer = () => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  async function handleClick() {
    try {
      setIsLoading(true);
      const response = await fetch(`http://127.0.0.1:5000/api/v1/ping`);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch {
      // @ts-ignore
      setData({ code: 500, message: 'Failed to connect with flask server' });
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Button
        onClick={handleClick}
        disabled={isLoading}
        size="sm"
        className="w-full mb-3 mt-10 bg-cyan-800 text-cyan-100">
        {isLoading ? 'Loading...' : 'Check Server Status'}
      </Button>

      {data && (
        // @ts-ignore
        <Alert variant={data?.code === 500 ? 'destructive' : 'success'}>
          {/* @ts-ignore */}
          {data?.code} - {data?.message}
        </Alert>
      )}
    </div>
  );
};

export default PingServer;
