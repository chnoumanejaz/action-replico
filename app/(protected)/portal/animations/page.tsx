'use client';
import SearchFilter from '@/components/common/SearchFilter';
import PageWrapper from '@/components/portal/PageWrapper';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { PREVIOUS_CLASSIFICATION_DATA } from '@/data/portalPageData';
import { ClassificationData } from '@/types';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ErrorMessage from '@/components/common/ErrorMessage';
import { SelectFilter } from '@/components/common/SelectFilter';
import ClassificationsPreviousData from '@/components/portal/ClassificationsPreviousData';

const AnimationsPage = () => {
  const [filteredData, setFilteredData] = useState<ClassificationData[]>(
    PREVIOUS_CLASSIFICATION_DATA
  );

  return (
    <PageWrapper
      title="Animations"
      subheading="Explore all the available animations at one place!">
      <div className="flex gap-4 flex-col md:flex-row">
        {/* content side */}
        <div className="flex flex-col w-full gap-4 flex-wrap">
          <div className="mb-4 flex gap-4">
            <SearchFilter
              data={PREVIOUS_CLASSIFICATION_DATA}
              setData={setFilteredData}
            />
            <SelectFilter />
          </div>
          <div className="flex gap-4 flex-wrap">
            {filteredData.length > 0 ? (
              filteredData.map(animation => (
                <Card
                  key={animation.id}
                  className="cursor-pointer w-[46%] md:w-[31%] hover:bg-secondary transition hover:scale-95 ">
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
        </div>

        {/* History side */}
        <ClassificationsPreviousData />
      </div>
    </PageWrapper>
  );
};

export default AnimationsPage;
