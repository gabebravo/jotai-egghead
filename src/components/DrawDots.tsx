import { useAtom } from 'jotai';
import { Point, dotsAtom, numberOfDotsAtom } from '../state/DrawDotsState';

const SvgDots = () => {
  const [dots] = useAtom(dotsAtom);
  return (
    <g>
      {dots.map(([x, y]) => (
        <circle cx={x} cy={y} r="2" fill="#aaa" />
      ))}
    </g>
  );
};

const SvgRoot = () => {
  const [, setDots] = useAtom(dotsAtom);
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      onMouseMove={(e) => {
        const p: Point = [e.clientX, e.clientY];
        setDots((prev) => [...prev, p]);
      }}
    >
      <rect width="200" height="200" fill="#eee" />
      <SvgDots />
    </svg>
  );
};

const Stats = () => {
  const [numberOfDots] = useAtom(numberOfDotsAtom);
  return (
    <ul>
      <li>Dots: {numberOfDots}</li>
    </ul>
  );
};

const DrawDots = () => (
  <>
    <SvgRoot />
    <Stats />
  </>
);

export default DrawDots;
