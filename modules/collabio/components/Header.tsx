import ScrollOpacity from '@/common/components/ScrollOpacity';
import { useMouseVariant } from '@/modules/customMouse';

const Header = () => {
  const { setMouseVariant } = useMouseVariant();

  return (
    <div className="-mb-12 flex w-screen flex-col items-center justify-center px-10 2xl:mb-0">
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
