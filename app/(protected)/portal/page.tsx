'use client';
import ReportProblem from '@/components/common/ReportProblem';
import PageWrapper from '@/components/portal/PageWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { ACTIVITIES, OVERVIEW_DATA } from '@/data/portalPageData';
import formatISODate, { formatISOTime } from '@/helpers';
import { useRouter } from 'next/navigation';
import { GiExtractionOrb } from 'react-icons/gi';
import { IoDiamondOutline } from 'react-icons/io5';
import {
  MdManageAccounts,
  MdModelTraining,
  MdOutlineBugReport,
} from 'react-icons/md';

const PortalPage = () => {
  const router = useRouter();
  return (
    <PageWrapper
      title="Replico's Portal"
      subheading="Check all the neccessary and main things at one place!">
      <div className="w-full flex md:flex-row flex-col gap-6">
        {OVERVIEW_DATA.map((overview, idx) => (
          <Card
            key={idx}
            className="w-full md:w-1/2 cursor-pointer hover:bg-secondary transition"
            onClick={() => router.push(overview.path)}>
            <CardContent className="p-3 flex justify-between gap-6">
              <div>
                <h3 className="text-xl font-medium mb-1">{overview.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {overview.description}
                </p>
              </div>
              <div className="text-5xl">{overview.value}</div>
            </CardContent>
          </Card>
        ))}
        <Card className="text-white w-full md:w-1/2 cursor-pointer bg-primary hover:bg-primary/60 transition">
          <CardContent className="p-3 flex justify-between gap-6">
            <div>
              <h3 className="text-xl font-medium mb-1">Diamond</h3>
              <p className="text-sm">The detail about your account type!</p>
            </div>
            <div className="text-5xl">
              <IoDiamondOutline />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom side */}
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        {/* Actions side */}
        <div className="flex-1 p-6 bg-secondary border dark:bg-secondary/25 rounded-lg">
          <h3 className="text-2xl font-medium">Need something new?</h3>
          <p className="text-muted-foreground text-sm">
            Select from the available options and enjoy!
          </p>
          {/* First 2 actions */}
          <div className="flex gap-4 mt-6  flex-col md:flex-row">
            <Card className="text-white w-full md:w-1/2 cursor-pointer bg-primary hover:bg-primary/60 transition">
              <CardContent className="p-3 flex gap-4 justify-between">
                <div>
                  <h3 className="text-xl font-medium">Animate Modal</h3>
                  <p className="text-sm">
                    Upload a new video and modal to perform this
                  </p>
                </div>
                <MdModelTraining className="max-w-12 max-h-12 min-w-12 min-h-12 self-end" />
              </CardContent>
            </Card>
            <Card
              className="w-full md:w-1/2 cursor-pointer hover:bg-secondary"
              onClick={() => router.push('/portal/classification')}>
              <CardContent className="p-3 flex gap-4 justify-between">
                <div>
                  <h3 className="text-xl font-medium">Classify Video</h3>
                  <p className="text-muted-foreground text-sm">
                    Upload a new video and check what is the action in it!
                  </p>
                </div>
                <GiExtractionOrb className="max-w-12 max-h-12 min-w-12 min-h-12 self-end" />
              </CardContent>
            </Card>
          </div>

          {/* 2nd 2 actions */}
          <div className="flex gap-4 mt-6 flex-col md:flex-row">
            <Card
              className="w-full md:w-1/2 cursor-pointer hover:bg-secondary"
              onClick={() => router.push('/portal/settings/account')}>
              <CardContent className="p-3 flex gap-4 justify-between">
                <div>
                  <h3 className="text-xl font-medium">Update Account</h3>
                  <p className="text-muted-foreground text-sm">
                    Change the settings of your account!
                  </p>
                </div>
                <MdManageAccounts className="max-w-12 max-h-12 min-w-12 min-h-12 self-end" />
              </CardContent>
            </Card>

            <Card className="text-white w-full md:w-1/2 cursor-pointer bg-primary hover:bg-primary/60 transition">
              <ReportProblem>
                <CardContent className="p-3 flex gap-4 justify-between">
                  <div className="text-left">
                    <h3 className="text-xl font-medium">Report Problem</h3>
                    <p className="text-sm">
                      Facing an issue? Feel free to contact us!
                    </p>
                  </div>
                  <MdOutlineBugReport className="max-w-12 max-h-12 min-w-12 min-h-12 self-end" />
                </CardContent>
              </ReportProblem>
            </Card>
          </div>
        </div>

        {/* Activities side */}
        <div className="w-full border rounded-lg p-5 md:w-1/3">
          <h3 className="text-2xl font-medium mb-4">Recent Activities</h3>
          <div className="border-primary flex flex-col gap-2 mt-2 border-l-4 ps-[0.85rem] rounded-sm">
            {ACTIVITIES.map((activity, idx) => (
              <div
                key={idx}
                className="flex flex-col relative before:absolute before:w-4 before:h-4 before:rounded-full before:bg-primary before:top-1 before:-left-6">
                <p>{activity.activity}</p>
                <p className="text-muted-foreground text-sm">
                  {formatISOTime(activity.timeStamp)} &#8212;{' '}
                  {formatISODate(activity.timeStamp)}
                </p>{' '}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default PortalPage;
