import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Label } from '@/components/ui/label';

import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

interface ReportProblemProps {
  children: React.ReactNode;
}

const ReportProblem = ({ children }: ReportProblemProps) => {
  return (
    <Drawer>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="w-full md:w-1/2 md:mx-auto">
        <DrawerHeader>
          <DrawerTitle>Are you facing any problem?</DrawerTitle>
          <DrawerDescription>
            Please feel free to report us. We&apos;ll love to hear you!
          </DrawerDescription>
          <form className="mt-6 space-y-3">
            <div className="text-left space-y-1">
              <Label htmlFor="username">Name</Label>
              <Input id="username" placeholder="Enter your name" />
            </div>
            <div className="text-left space-y-1">
              <Label htmlFor="useremail">Email</Label>
              <Input id="useremail" placeholder="Enter your email" />
            </div>
            <div className="text-left space-y-1">
              <Label htmlFor="userIssue">Issue</Label>
              <Textarea
                id="userIssue"
                rows={5}
                placeholder="Enter your issue"
              />
            </div>
          </form>
        </DrawerHeader>

        <DrawerFooter>
          <Button>Submit a report</Button>
          <DrawerClose>
            <Button variant="outline" className="w-full">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ReportProblem;
