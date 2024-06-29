import { EnvelopeClosedIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from './ui/card';
import { TeamMember } from '@/types';
import PingServer from './common/PingServer';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from './ui/dialog';
import { MemberContactContent } from './sections/MemberContactContent';

interface MemberCardProps {
  member: TeamMember;
}

const MemberCard = ({ member }: MemberCardProps) => {
  return (
    <Card className="w-full md:w-1/2 flex flex-col justify-between">
      <CardHeader className="flex justify-center">
        <Image
          src={member.imgSrc}
          alt={member.name}
          width={500}
          height={500}
          className="object-cover mx-auto bg-primary/15 rounded-xl brightness-90 w-full h-auto"
        />
      </CardHeader>
      <CardContent className="text-center">
        <h3 className="text-xl">{member.name}</h3>
        <CardDescription>{member.email}</CardDescription>
        <p className="mt-2">{member.expertie}</p>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full">
              <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
              <p>Contact {member.name}</p>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className="space-y-0">
              <h4 className="font-semibold">Contact - {member.name}</h4>
              <p className="text-muted-foreground text-sm">{member.email}</p>
            </DialogHeader>
            <MemberContactContent />
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default MemberCard;
