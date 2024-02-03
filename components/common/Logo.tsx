'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push('/')}
      className="cursor-pointer hover:brightness-125 transition ">
      <Image
        src="/logo.png"
        alt="Action Replico"
        height={100}
        width={100}
        className="w-40 h-auto"
      />
    </div>
  );
};

export default Logo;
