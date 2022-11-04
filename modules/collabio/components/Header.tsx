import ScrollOpacity from '@/common/components/ScrollOpacity';
import { useMouseVariant } from '@/modules/customMouse';

const Header = () => {
  const { setMouseVariant } = useMouseVariant();

  return (
    <div className="absolute z-50 flex h-full w-full flex-col items-center justify-center px-10 md:-mt-10 lg:-mt-24 xl:mt-0">
      <ScrollOpacity>
        <p
          className="header pointer-events-auto text-center"
          onMouseEnter={setMouseVariant.text}
          onMouseLeave={setMouseVariant.default}
        >
          <span className="text-gradient">real-time</span> tools
        </p>
      </ScrollOpacity>
    </div>
  );
};

export default Header;
