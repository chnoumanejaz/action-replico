import Loader from '@/components/common/Loader';

const Loading = () => {
  return (
    <div className="flex justify-center flex-col my-auto items-center h-full w-full">
      <Loader />
      <h2 className="text-2xl mt-6 font-mono animate-pulse font-bold">
        Action Replico
      </h2>
    </div>
  );
};

export default Loading;
