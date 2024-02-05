'use client';
import { PREVIOUS_CLASSIFICATION_DATA } from '@/data/portalPageData';
import Image from 'next/image';
import { useState } from 'react';
import SearchFilter from '../common/SearchFilter';
import { Card, CardContent, CardDescription } from '../ui/card';
import { ScrollArea } from '../ui/scroll-area';

const ClassificationsPreviousData = () => {
  const [filteredData, setFilteredData] = useState(
    PREVIOUS_CLASSIFICATION_DATA
  );
  return (
    <div className="order-2">
      <h3 className="text-xl mb-2">History</h3>
      <div className="mb-4">
        <SearchFilter
          data={PREVIOUS_CLASSIFICATION_DATA}
          setData={setFilteredData}
        />
      </div>
      <ScrollArea className="w-full md:w-[300px] bg-secondary/10 h-[420px] rounded-lg border p-2 pr-3">
        {filteredData.length > 0 ? (
          filteredData.map(item => (
            <Card
              key={item.id}
              className="flex justify-center items-center mb-2 py-2 cursor-pointer hover:bg-secondary dark:hover:brightness-125 hover:opacity-100 opacity-90 transition">
              <CardContent className="flex gap-3 py-0 px-3">
                <video
                  autoPlay
                  loop
                  muted
                  className="object-cover w-1/3 h-auto rounded-md opacity-90">
                  <source src={item.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div>
                  <h3>{item.name}</h3>
                  <CardDescription>{item.date}</CardDescription>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div>
            <h3 className=" mb-4">No Data Available!</h3>
            <p className="text-muted-foreground">
              Classify a new video to make your data history!
            </p>
            <Image
              src="/site/errorman.png"
              alt="Image not found"
              height={500}
              width={500}
              className="w-1/3 mt-6 mx-auto h-auto drop-shadow-lg filter brightness-75"
            />
          </div>
        )}
      </ScrollArea>
    </div>
  );
};

export default ClassificationsPreviousData;
