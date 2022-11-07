import Game from './components/Game';
import BallzoneHeader from './components/Header';

const Ballzone = () => {
  return (
    <div className="h-[140vh] lg:h-[180vh] 2xl:mt-36">
      <BallzoneHeader />

      <Game />
    </div>
  );
};

export default Ballzone;
