const SingleWindow = () => {
  return (
    <div className="relative flex h-[50vw] w-full flex-col overflow-hidden rounded-lg bg-white sm:h-[40vw] sm:w-2/3 md:h-[35vw] xl:h-[25vw] xl:w-1/2 2xl:h-[25vw] 2xl:w-2/5">
      <div className="relative flex h-10 w-full flex-row items-center justify-center bg-zinc-200">
        <div className="absolute left-5 flex h-full items-center gap-1 justify-self-start">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        <div className="ml-10 flex h-6 w-1/2 items-center justify-center overflow-hidden rounded-lg bg-zinc-300 text-sm text-zinc-500 md:ml-0">
          collabio.herokuapp.com/room
        </div>
      </div>

      <div className="flex flex-1 items-center px-3">
        <div className="h-2/3 w-6 rounded-lg bg-zinc-900"></div>
      </div>
    </div>
  );
};

export default SingleWindow;
