import SingleWindow from './SingleWindow';

const Windows = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10 py-24 px-10 xl:flex-row">
      <SingleWindow />
      <SingleWindow />
    </div>
  );
};

export default Windows;
