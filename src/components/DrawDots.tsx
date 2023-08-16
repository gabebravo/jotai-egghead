import { useAtom } from 'jotai';
import { Point, dotsAtom } from '../state/DrawDotsState';
import { useResetAtom } from 'jotai/utils';
import { useEffect } from 'react';
import SvgDots from './SvgDots';
import Stats from './Stats';

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

const DrawDots = () => {
  const resetDots = useResetAtom(dotsAtom);

  // @ts-ignore
  useEffect(() => {
    return () => resetDots();
  }, []);

  return (
    <>
      <SvgRoot />
      <Stats />
    </>
  );
};

export default DrawDots;
