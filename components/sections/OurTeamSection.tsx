'use client';
import { TEAM_MEMBERS } from '@/data/landingPageData';
import MemberCard from '../MemberCard';
import SectionWrapper from '../providers/SectionWrapper';
import { useEffect } from 'react';

const OurTeamSection = () => {
  return (
    <SectionWrapper
      title="Our Team"
      id="team"
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
