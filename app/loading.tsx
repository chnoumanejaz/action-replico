import Loader from '@/components/common/Loader';

const Loading = () => {
  return (
    <div className="flex justify-center flex-col items-center h-screen w-screen">
      <Loader />
      <h2 className="text-3xl mt-6 font-mono animate-pulse font-bold">
        Action Replico
      </h2>
    </div>
  );
};

export default Loading;
