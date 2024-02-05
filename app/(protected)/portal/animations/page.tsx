'use client';
import SearchFilter from '@/components/common/SearchFilter';
import PageWrapper from '@/components/portal/PageWrapper';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { PREVIOUS_CLASSIFICATION_DATA } from '@/data/portalPageData';
import { ClassificationData } from '@/types';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ErrorMessage from '@/components/common/ErrorMessage';

const AnimationsPage = () => {
  const [filteredData, setFilteredData] = useState<ClassificationData[]>(
    PREVIOUS_CLASSIFICATION_DATA
  );

  return (
    <PageWrapper
      title="Animations"
      subheading="Explore all the available animations at one place!">
      <div className="mb-4">
        <SearchFilter
          data={PREVIOUS_CLASSIFICATION_DATA}
          setData={setFilteredData}
        />
      </div>
      <div className="flex gap-4 flex-wrap">
        {filteredData.length > 0 ? (
          filteredData.map(animation => (
            <Card
              key={animation.id}
              className="cursor-pointer w-[46%] md:w-[18.7%] hover:bg-secondary transition hover:scale-95">
              <CardContent className="py-2 px-3">
                <video
                  autoPlay
                  loop
                  muted
                  className="object-cover w-full h-auto rounded-xl opacity-90">
                  <source src={animation.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </CardContent>
              <CardFooter className="flex flex-col items-start px-2">
                <h3 className="text-nowrap">{animation.name}</h3>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Category: {animation.name}
                </p>
              </CardFooter>
            </Card>
          ))
        ) : (
          <ErrorMessage
            heading="No Result found"
            subheading="Nothing found for your search query please try something else!"
          />
        )}
      </div>
    </PageWrapper>
  );
};

export default AnimationsPage;
