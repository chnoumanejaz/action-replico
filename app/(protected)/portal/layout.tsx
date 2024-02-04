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
    <div className="portal-layout min-h-screen">
      <SideBar />
      <div className="portal-main p-6 w-full">{children}</div>
    </div>
  );
}
