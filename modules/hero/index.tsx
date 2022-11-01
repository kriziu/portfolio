import Header from './components/Header';
import ScrollIndicator from './components/ScrollIndicator';

const Hero = () => {
  return (
    <div className="flex h-full w-full items-end justify-center overflow-hidden pb-16">
      <div>
        <Header />

        <ScrollIndicator />
      </div>
    </div>
  );
};

export default Hero;
