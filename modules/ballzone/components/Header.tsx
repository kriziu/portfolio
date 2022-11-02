import ScrollOpacity from '@/common/components/ScrollOpacity';
import { useMouseVariant } from '@/modules/customMouse';

const Header = () => {
  const { setMouseVariant } = useMouseVariant();

  return (
    <div className="absolute z-50 flex h-full w-full flex-col items-center justify-center px-10 lg:-mt-16">
      <ScrollOpacity>
        <p
          className="header text-center"
          onMouseEnter={setMouseVariant.text}
          onMouseLeave={setMouseVariant.default}
        >
          and also games.
        </p>
      </ScrollOpacity>
    </div>
  );
};

export default Header;
