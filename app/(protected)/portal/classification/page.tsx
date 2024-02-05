import ClassificationsPreviousData from '@/components/portal/ClassificationsPreviousData';
import PageWrapper from '@/components/portal/PageWrapper';
import { Button } from '@/components/ui/button';
import { FaUpload } from 'react-icons/fa';

const ClassificationPage = () => {
  return (
    <PageWrapper
      title="Video Classification"
      subheading="Provide your video and check what action is in that!">
      <div className="flex gap-4 flex-col md:flex-row">
        <ClassificationsPreviousData />
        <div className="border-2 rounded-lg border-dashed flex-1 p-8 bg-secondary/20">
          <div className="flex flex-col items-center justify-center h-full gap-4">
            <FaUpload className="md:h-14 md:w-14 h-8 w-8 opacity-60 " />
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-semibold">
                Classify a new Video
              </h3>
              <p className="text-muted-foreground text-sm">
                Upload a new video and check what is the action in that video
              </p>
            </div>
            <Button variant="outline" size="lg" className="md:mt-8">
              Upload Video
            </Button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ClassificationPage;
