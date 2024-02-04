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
          width={100}
          height={100}
          className="object-cover mx-auto bg-primary/15 rounded-xl brightness-90 w-full h-auto"
        />
      </CardHeader>
      <CardContent className="text-center">
        <h3 className="text-xl">{member.name}</h3>
        <CardDescription>{member.email}</CardDescription>
        <p className="mt-2">{member.expertie}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
          <p>Contact {member.name}</p>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MemberCard;
