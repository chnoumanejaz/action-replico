import React from 'react';
import SectionWrapper from '../providers/SectionWrapper';
import MemberCard from '../MemberCard';

export type TeamMember = {
  id: string;
  name: string;
  email: string;
  imgSrc: string;
  expertie: string;
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '12467',
    name: 'M Nouman Ejaz',
    email: 'noumanejaz92@gmail.com',
    imgSrc: '/team/nouman.png',
    expertie: 'Expert in the Web technologies and Machine learning!',
  },
  {
    id: '098764',
    name: 'Shahid Chaudhary',
    email: 'shahidchaudhary0729@gmail.com',
    imgSrc: '/team/shahid.png',
    expertie: 'Expert in the Web technologies!',
  },
  {
    id: '809757',
    name: 'Salah Ud Din',
    email: 'sallujutt33@gmail.com',
    imgSrc: '/team/salah.png',
    expertie: 'Expert in the Data Science!',
  },
  {
    id: '5626651',
    name: 'Khaula Sohail',
    email: 'Khaulasohail313@gmail.com',
    imgSrc: '/team/khaula.png',
    expertie: 'Expert in the Mobile development and Data Science!',
  },
];

const OurTeamSection = () => {
  return (
    <SectionWrapper
      title="Our Team"
      subheading="Meet the team of our top experts">
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-8">
        {TEAM_MEMBERS.map(member => (
          <MemberCard member={member} key={member.id} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default OurTeamSection;
