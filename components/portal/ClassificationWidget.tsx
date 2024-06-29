'use client';
import React, { useRef, useState, useTransition } from 'react';
import { FaSpinner, FaUpload } from 'react-icons/fa';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { fileToBase64, formatFileSize } from '@/lib/utils';
import { toast } from '../ui/use-toast';
import { IoCloseCircleOutline } from 'react-icons/io5';
import ClassificationInstModal from './ClassificationInstModal';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { classHistory } from '@/actions/classification-history';

type responseDataT = {
  confidence: number;
  predicted_action: string;
  message: string;
};

const ClassificationWidget = () => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState<responseDataT | null>(null);
  const [rulesReaded, setRulesReaded] = useState(false);
  const session = useSession();
  const [isPending, startTransition] = useTransition();

  const { data: userData } = session;

  const handleButtonClick = () => {
    if (ref.current) {
      ref.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    console.log(file);

    if (file && file.size > 6242880) {
      toast({
        title: 'File Size Limit Exceeded',
        description: (
          <div className="mt-1">Please select a file less than 6MB </div>
        ),
      });
      return;
    }

    if (file) {
      setSelectedFile(file);
      setResponseData(null);
      const videoURL = URL.createObjectURL(file);
      setVideoSrc(videoURL);
      console.log(videoURL);
    }
  };

  function handleCancle() {
    setSelectedFile(null);
    setVideoSrc(null);
    setResponseData(null);
  }

  async function handleClassification() {
    try {
      setIsLoading(true);
      const formData = new FormData();
      if (selectedFile) {
        formData.append('file', selectedFile);
      }

      const res = await axios.post(
        'http://127.0.0.1:5000/api/v1/classify',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('res class', res);
      const data = res.data;
      console.log('data class', data);

      if (data.code === 200) {
        toast({
          title: 'Animation Generated Successfully',
          description: (
            <div className="mt-1 flex">
              The Classification has been completed successfully. 🎉
            </div>
          ),
        });
      }

      // update the classification data create a new entry
      // in the database using prisma

      // if (selectedFile) {
      //   const base64File = await fileToBase64(selectedFile);
      //   console.log('base64File', base64File);
      //   const dataToStore = {
      //     name: data.predicted_action,
      //     confidence: data.confidence.toString(),
      //     video: 'base64File.toString()',
      //     user_Id: userData?.user.id,
      //   };
      //   const historyResponse = await classHistory(dataToStore);
      setResponseData(data);
      //   console.log('historyResponse', historyResponse);
      // }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast({
        title: 'Failed to proceed video',
        description: (
          <div className="mt-1">
            An error occured while processing the video. Please try again
          </div>
        ),
      });
    }
  }

  return (
    <div className="border-2 rounded-lg border-dashed relative flex-1 p-8 bg-secondary/20">
      <Input
        type="file"
        ref={ref}
        onChange={handleFileChange}
        accept="video/*"
        className="hidden"
      />
      {selectedFile && videoSrc && (
        <>
          <IoCloseCircleOutline
            className="size-7 cursor-pointer absolute top-2 right-2 hover:text-primary transition-colors"
            onClick={handleCancle}
          />
          <ClassificationInstModal>
            <Button
              variant="outline"
              size="sm"
              disabled={isLoading}
              className="absolute top-2 right-12"
              onClick={() => setRulesReaded(true)}>
              Rules of Classification
            </Button>
          </ClassificationInstModal>
        </>
      )}
      <div className="flex flex-col items-center justify-center h-full gap-1">
        {selectedFile && (
          <>
            <p className="text-sm font-medium">{selectedFile.name}</p>
            <span>{formatFileSize(selectedFile.size)}</span>
          </>
        )}

        {videoSrc && !responseData && (
          <div className="mt-2">
            <video
              src={videoSrc}
              controls
              autoPlay
              loop
              muted
              className="w-full h-[50vh] rounded-lg">
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {videoSrc && responseData && (
          <div className="mt-2 flex gap-4 justify-center items-center">
            <video
              src={videoSrc}
              controls
              autoPlay
              loop
              muted
              className="w-25  rounded-lg">
              Your browser does not support the video tag.
            </video>
            <div className="mt-2 w-full">
              <h2 className="text-lg font-semibold mb-6">
                {responseData.message} 🎉
              </h2>
              <h4 className="font-semibold mb-2">Classification Results</h4>
              <ul className="list-disc list-inside">
                <li>
                  <span className="font-semibold">Action:</span>{' '}
                  {responseData.predicted_action}
                </li>
                <li>
                  <span className="font-semibold">Confidence:</span>{' '}
                  {responseData.confidence?.toFixed(6)}
                </li>
                <li>
                  <span className="font-semibold">Percentage:</span>{' '}
                  {responseData.confidence ? (
                    <span>
                      {((responseData.confidence * 100) / 1).toFixed(2)}%
                    </span>
                  ) : (
                    <span>0%</span>
                  )}
                </li>
              </ul>
            </div>
          </div>
        )}

        {!selectedFile && !videoSrc ? (
          <>
            <FaUpload className="md:h-14 md:w-14 h-8 w-8 opacity-60 " />
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-semibold">
                Classify a new Video
              </h3>
              <p className="text-muted-foreground text-sm">
                Select a new video and check what is the action in that video
              </p>
            </div>
            <ClassificationInstModal>
              <Button
                variant="outline"
                size="sm"
                className="md:mt-8"
                disabled={isLoading}
                onClick={() => setRulesReaded(true)}>
                Rules of Classification
              </Button>
            </ClassificationInstModal>

            <Button
              variant="outline"
              size="lg"
              className="md:mt-2"
              disabled={!rulesReaded || isLoading}
              onClick={handleButtonClick}>
              Select Video
            </Button>
            {!rulesReaded && (
              <p className="text-xs text-muted-foreground mt-1">
                Please read the rules before proceeding
              </p>
            )}
          </>
        ) : (
          <div className="grid grid-cols-2 gap-2 w-full">
            <Button
              variant="outline"
              size="lg"
              className="md:mt-2"
              disabled={isLoading}
              onClick={handleButtonClick}>
              Select another Video
            </Button>
            <Button
              size="lg"
              className="md:mt-2"
              disabled={isLoading || responseData !== null}
              onClick={handleClassification}>
              {isLoading && <FaSpinner className="size-5 animate-spin mr-2" />}
              {isLoading ? 'Processing...' : 'Classify this Video'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassificationWidget;
