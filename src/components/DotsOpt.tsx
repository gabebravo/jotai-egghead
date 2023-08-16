import { useEffect } from 'react';
import { atom, useAtomValue, useSetAtom } from 'jotai';
import { dotsAtom, numberOfDotsAtom, Point } from '../state/DrawDotsState';
import { useResetAtom, atomWithReset } from 'jotai/utils';

const drawingAtomState = atom(false);
const commitCountState = atomWithReset(0);

// write-only atom
const handleMouseDownAtom = atom(null, (get, set) => {
  set(drawingAtomState, true);
});

// write-only atom
const handleMouseUpAtom = atom(null, (get, set) => {
  set(drawingAtomState, false);
  set(commitCountState, (prev) => prev + 1);
});

// write-only atom
const handleMouseMoveAtom = atom(null, (get, set, update: Point) => {
  if (get(drawingAtomState)) {
    // update is the new value from the atom
    set(dotsAtom, (prev) => [...prev, update]);
  }
});

const SvgDots = () => {
  const dots = useAtomValue(dotsAtom);
  return (
    <g>
      {dots.map(([x, y]) => (
        <circle cx={x} cy={y} r="2" fill="#aaa" />
      ))}
    </g>
  );
};

const SvgRoot = () => {
  const handleMouseUp = useSetAtom(handleMouseUpAtom);
  const handleMouseDown = useSetAtom(handleMouseDownAtom);
  const handleMouseMove = useSetAtom(handleMouseMoveAtom);
  const commitCount = useAtomValue(commitCountState);

  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={(e) => {
        handleMouseMove([e.clientX, e.clientY]);
      }}
    >
      <rect width="200" height="200" fill="#eee" />
      <text x="3" y="12" font-size="12px">
        Commits: {commitCount}
      </text>
      <SvgDots />
    </svg>
  );
};

const Stats = () => {
  const numberOfDots = useAtomValue(numberOfDotsAtom);

  return (
    <ul>
      <li>Dots: {numberOfDots}</li>
    </ul>
  );
};

const DotsOpt = () => {
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

export default DotsOpt;
