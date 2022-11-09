import Game from './components/Game';
import BallzoneHeader from './components/Header';

const Ballzone = () => {
  return (
    <section className="mt-24" id="ballzone">
      <BallzoneHeader />

      <div className="h-[140vh]">
        <Game />
      </div>
    </section>
  );
};

export default Ballzone;
