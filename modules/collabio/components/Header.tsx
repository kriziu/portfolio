import ScrollOpacity from '@/common/components/ScrollOpacity';
import { useMouseVariant } from '@/modules/customMouse';

export default function Header() {
  const { setMouseVariant } = useMouseVariant();

  return (
    <div className="flex w-screen flex-col items-center justify-center px-10">
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
}
