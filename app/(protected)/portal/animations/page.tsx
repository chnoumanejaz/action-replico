'use client';
import ErrorMessage from '@/components/common/ErrorMessage';
import SearchFilter from '@/components/common/SearchFilter';
import { CreateNewAnimationButton } from '@/components/common/CreateNewAnimationButton';
import ClassificationsPreviousData from '@/components/portal/ClassificationsPreviousData';
import PageWrapper from '@/components/portal/PageWrapper';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { PREVIOUS_CLASSIFICATION_DATA } from '@/data/portalPageData';
import { ClassificationData } from '@/types';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

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
            <CreateNewAnimationButton />
          </div>
          <div className="grid grid-cols-3 gap-4 ">
            {filteredData.length > 0 ? (
              filteredData.map(animation => (
                <Dialog key={animation.id}>
                  <DialogTrigger>
                    <Card className="cursor-pointer hover:bg-secondary transition hover:scale-95 ">
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
                  </DialogTrigger>

                  <DialogContent>
                    <DialogHeader className="font-medium text-2xl">
                      {animation.name}
                    </DialogHeader>
                    <video
                      autoPlay
                      loop
                      muted
                      className="object-cover w-[80%] mx-auto rounded-xl">
                      <source src={animation.videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    <h3 className="font-medium">What you Get:</h3>
                    <p className="text-sm">
                      You will get the CSV file and the animation script which
                      you will then add in to the blender and your model will
                      start animating
                    </p>
                    <Button>Create the animation</Button>
                  </DialogContent>
                </Dialog>
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
