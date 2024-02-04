'use client';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useSession } from 'next-auth/react';
import { extractNameInitials } from '@/helpers';

const UserAccount = () => {
  const session = useSession();
  const { data } = session;

  if (!data) return <h2>Loading...</h2>;
  return (
    <div className="flex items-center gap-2">
      <Avatar>
        <AvatarImage
          src={data.user.image as string}
          alt={data.user.name as string}
        />
        <AvatarFallback>
          {extractNameInitials(data?.user.name as string)}
        </AvatarFallback>
      </Avatar>
      <p className="flex flex-col">
        {data?.user.name}
        <span className="text-sm text-muted-foreground text-wrap">
          {data?.user.email}
        </span>
      </p>
    </div>
  );
};

export default UserAccount;
