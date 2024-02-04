import SideBar from '@/components/portal/SideBar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Action Replico | Portal',
  description:
    'A one and only website to handle all your problems related to 3D animations.',
};

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-2 min-h-screen">
      <SideBar />

      <div className="col-span-2 md:col-span-1 md:ml-[250px] p-6">
        {children}
      </div>
    </div>
  );
}
