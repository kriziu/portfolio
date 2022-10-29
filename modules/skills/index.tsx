import { useMouseVariant } from '../customMouse';

const Skills = () => {
  const { setMouseVariant } = useMouseVariant();

  return (
    <h2
      className="header text-center"
      onMouseEnter={setMouseVariant.text}
      onMouseLeave={setMouseVariant.default}
    >
      Lorem ipsum dolor sit amet.
    </h2>
  );
};

export default Skills;
