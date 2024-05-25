import ClassificationWidget from '@/components/portal/ClassificationWidget';
import ClassificationsPreviousData from '@/components/portal/ClassificationsPreviousData';
import PageWrapper from '@/components/portal/PageWrapper';

const ClassificationPage = () => {
  return (
    <PageWrapper
      title="Video Classification"
      subheading="Provide your video and check what action is in that!">
      <div className="flex gap-4 flex-col md:flex-row">
        <ClassificationsPreviousData />
        <ClassificationWidget />
      </div>
    </PageWrapper>
  );
};

export default ClassificationPage;
