import CollabioHeader from './components/Header';
import Windows from './components/Windows';

export default function Collabio() {
  return (
    <section id="collabio" className="mt-24 lg:mt-96">
      <CollabioHeader />
      <div className="h-[250vh]">
        <Windows windowLength={1.5} />
      </div>
    </section>
  );
}
