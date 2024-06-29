'use client';
import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import { FaSpinner, FaUpload } from 'react-icons/fa';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { formatFileSize } from '@/lib/utils';
import { toast } from '../ui/use-toast';
import { IoCloseCircleOutline } from 'react-icons/io5';
import axios from 'axios';

type responseDataT = {
  code: number;
  csvFilePath: string;
  message: string;
  status: string;
};

type props = {
  setResponseData: Dispatch<SetStateAction<responseDataT | null>>;
};

const AnimationWidget = ({ setResponseData }: props) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    if (ref.current) {
      ref.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    console.log(file);

    if (file && file.size > 10242880) {
      toast({
        title: 'File Size Limit Exceeded',
        description: (
          <div className="mt-1">Please select a file less than 10MB </div>
        ),
      });
      return;
    }

    if (file) {
      setSelectedFile(file);
      const videoURL = URL.createObjectURL(file);
      setVideoSrc(videoURL);
      console.log(videoURL);
    }
  };

  function handleCancle() {
    setSelectedFile(null);
    setVideoSrc(null);
  }

  async function handleAnimation() {
    toast({
      title: 'Processing Video',
      description: (
        <div className="mt-1 flex">
          <FaSpinner className="size-4 animate-spin mr-1" /> Please wait while
          we proceed the video
        </div>
      ),
    });

    try {
      setIsLoading(true);
      const formData = new FormData();
      if (selectedFile) {
        formData.append('video', selectedFile);
      }

      const res = await axios.post(
        'http://127.0.0.1:5000/api/v1/animate',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log(res);
      const data = res.data;
      setResponseData(data);
      if (data.code === 200) {
        toast({
          title: 'Animation Generated Successfully',
          description: (
            <div className="mt-1 flex">
              The animation has been generated successfully. You can now
              download it. 🎉
            </div>
          ),
        });
      }

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
    <div className="border-2 rounded-lg border-dashed h-[80vh] relative p-8 bg-secondary/20">
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
        </>
      )}
      <div className="flex flex-col items-center justify-center h-full gap-1">
        {selectedFile && (
          <>
            <p className="text-sm font-medium">{selectedFile.name}</p>
            <span>{formatFileSize(selectedFile.size)}</span>
          </>
        )}

        {videoSrc && (
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

        {!selectedFile && !videoSrc ? (
          <>
            <FaUpload className="md:h-14 md:w-14 h-8 w-8 opacity-60 " />
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-semibold mt-2">
                Animation from a new Video
              </h3>
              <p className="text-muted-foreground text-sm">
                Select a new video and upload to get the animation from it
              </p>
            </div>

            <Button
              variant="outline"
              size="lg"
              className="md:mt-8"
              onClick={handleButtonClick}>
              Select a Video
            </Button>
          </>
        ) : (
          <div className="grid grid-cols-2 gap-2 mt-6 w-full">
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
              disabled={isLoading}
              onClick={handleAnimation}>
              {isLoading && <FaSpinner className="size-5 animate-spin mr-2" />}
              {isLoading ? 'Processing...' : ' Process this Video'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimationWidget;
