'use client';
import AnimationTermsConds from '@/components/portal/AnimationTermsConds';
import AnimationWidget from '@/components/portal/AnimationWidget';
import PageWrapper from '@/components/portal/PageWrapper';
import { useState } from 'react';

type responseDataT = {
  code: number;
  csvFilePath: string;
  message: string;
  status: string;
};

const ClassificationPage = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [responseData, setResponseData] = useState<responseDataT | null>(null);

  return (
    <PageWrapper
      title="Make Animation "
      subheading="Select & Upload the video and get the animation done!">
      <div>
        {isAgreed && !responseData && (
          <AnimationWidget setResponseData={setResponseData} />
        )}
        {!isAgreed && !responseData && (
          <AnimationTermsConds setIsAgreed={setIsAgreed} />
        )}

        {responseData && (
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-secondary/20 border p-6 rounded-lg">
              <h3 className="text-xl">Copy the path 😊</h3>

              <p>CSV file:</p>
              <code>{responseData.csvFilePath}</code>
            </div>
            <div className="bg-secondary/20 border p-6 rounded-lg">
              <h1>Response Data</h1>
              <pre>{JSON.stringify(responseData, null, 2)}</pre>
            </div>
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default ClassificationPage;
