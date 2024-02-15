interface ComingSoonProps {
  message?: string;
}

const ComingSoon = ({ message }: ComingSoonProps) => {
  return (
    <div className="flex justify-center flex-col items-center h-screen w-screen">
      <video
        autoPlay
        loop
        muted
        className="object-cover w-full h-full opacity-20 filter brightness-50">
        <source src="/heroVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-1/2 w-[95%] md:w-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary text-center py-8 rounded-lg">
        <h2 className="text-4xl md:text-8xl mt-6 animate-pulse font-medium dark:text-white tracking-widest">
          COMING SOON
        </h2>
        <p className="text-xl dark:text-white">{message}</p>
      </div>
    </div>
  );
};

export default ComingSoon;
