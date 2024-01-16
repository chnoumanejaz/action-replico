'use client';

import Image from 'next/image';
import { ChangeEvent, useState } from 'react';

const users = ['Shahid', 'Salah-UD-Din', 'BinteSohail'];

export default function Home() {
  const [selectedUser, setSelectedUser] = useState<string>('');

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    setSelectedUser(e.target.value);
  }

  return (
    <main
      className="flex 
                min-h-screen 
                flex-col 
                items-center 
                justify-between 
                p-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-200 to-blue-900">
      {selectedUser === '' && (
        <div className="text-lg font-mono">
          <h1 className="font-bold text-2xl mb-8 whitespace-nowrap">
            Action Replico
          </h1>

          <h2>Select a user:</h2>
          <select
            name="Nothing"
            className="p-2"
            id="user"
            onChange={handleChange}
            value={selectedUser}>
            <option value="" disabled>
              Select
            </option>
            {users.map(user => (
              <option value={user} key={user}>
                {user}
              </option>
            ))}
          </select>
        </div>
      )}

      {selectedUser && (
        <>
          <h2 className="text-3xl font-bold animate-bounce">
            {selectedUser === 'BinteSohail' ? 'Behn' : 'Bhai'} Kam karo gy tou
            bany ga project!
          </h2>

          <img
            src="https://i.kym-cdn.com/photos/images/original/002/165/879/4ad.png"
            alt="image not found"
            height={500}
            width={500}
            className=""
          />
        </>
      )}
    </main>
  );
}
