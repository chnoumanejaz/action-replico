'use client';
import React, { useRef, useState } from 'react';
import { FaSpinner, FaUpload } from 'react-icons/fa';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { formatFileSize } from '@/lib/utils';
import { toast } from '../ui/use-toast';
import { IoCloseCircleOutline } from 'react-icons/io5';
import ClassificationInstModal from './ClassificationInstModal';

const ClassificationWidget = () => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [rulesReaded, setRulesReaded] = useState(false);

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
      const videoURL = URL.createObjectURL(file);
      setVideoSrc(videoURL);
      console.log(videoURL);
    }
  };

  function handleCancle() {
    setSelectedFile(null);
    setVideoSrc(null);
  }

  function handleClassification() {
    toast({
      title: 'Classifying Video',
      description: (
        <div className="mt-1 flex">
          <FaSpinner className="size-4 animate-spin mr-1" /> Please wait while
          we proceed the video
        </div>
      ),
    });
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
                onClick={() => setRulesReaded(true)}>
                Rules of Classification
              </Button>
            </ClassificationInstModal>

            <p className="text-sm text-muted-foreground mt-1">
              Please read the rules before proceeding
            </p>
            <Button
              variant="outline"
              size="lg"
              className="md:mt-2"
              disabled={!rulesReaded}
              onClick={handleButtonClick}>
              Select Video
            </Button>
          </>
        ) : (
          <div className="grid grid-cols-2 gap-2 w-full">
            <Button
              variant="outline"
              size="lg"
              className="md:mt-2"
              onClick={handleButtonClick}>
              Select another Video
            </Button>
            <Button
              size="lg"
              className="md:mt-2"
              onClick={handleClassification}>
              Classify this Video
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassificationWidget;
