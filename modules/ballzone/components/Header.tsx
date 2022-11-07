import ScrollOpacity from '@/common/components/ScrollOpacity';
import { useMouseVariant } from '@/modules/customMouse';

const Header = () => {
  const { setMouseVariant } = useMouseVariant();

  return (
    <div className="-mb-28 flex w-screen flex-col items-center justify-center px-10 sm:-mb-12 md:-mb-6 lg:mb-0 2xl:mb-24">
      <ScrollOpacity>
        <p
          className="header text-center"
          onMouseEnter={setMouseVariant.text}
          onMouseLeave={setMouseVariant.default}
        >
          simple games
        </p>
      </ScrollOpacity>
    </div>
  );
};

export default Header;
