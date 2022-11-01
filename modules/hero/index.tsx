import Header from './components/Header';
import ScrollIndicator from './components/ScrollIndicator';

const Hero = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <div className="flex w-max flex-1 flex-col">
        <div className="flex h-[55%] items-end">
          <Header />
        </div>

        <ScrollIndicator />
      </div>
    </div>
  );
};

export default Hero;
