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
    <div className="flex flex-col md:flex-row min-h-screen">
      <SideBar />
      <div className="flex-1 p-6 w-full">{children}</div>
    </div>
  );
}
