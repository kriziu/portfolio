import CollabioHeader from './components/Header';
import Windows from './components/Windows';

const Collabio = () => {
  return (
    <div className="mt-24 h-[250vh] 2xl:mt-96">
      <CollabioHeader />

      <Windows windowLength={1.5} />
    </div>
  );
};

export default Collabio;
