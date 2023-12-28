import Game from './components/Game';
import BallzoneHeader from './components/Header';

export default function Ballzone() {
  return (
    <section id="ballzone">
      <BallzoneHeader />
      <div className="h-[140vh]">
        <Game />
      </div>
    </section>
  );
}
