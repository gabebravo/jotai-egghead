import { useEffect, useRef } from 'react';
import { atom, useAtomValue, useSetAtom } from 'jotai';
import { dotsAtom, numberOfDotsAtom, Point } from '../state/DrawDotsState';
import { useResetAtom } from 'jotai/utils';

const drawingAtom = atom(false);

// write-only atom
const handleMouseDownAtom = atom(null, (get, set) => {
  set(drawingAtom, true);
});

// write-only atom
const handleMouseUpAtom = atom(null, (get, set) => {
  set(drawingAtom, false);
});

// write-only atom
const handleMouseMoveAtom = atom(null, (get, set, update: Point) => {
  if (get(drawingAtom)) {
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

const useCommitCount = () => {
  const commitCountRef = useRef(0);
  useEffect(() => {
    commitCountRef.current += 1;
  });
  return commitCountRef.current;
};

const SvgRoot = () => {
  const handleMouseUp = useSetAtom(handleMouseUpAtom);
  const handleMouseDown = useSetAtom(handleMouseDownAtom);
  const handleMouseMove = useSetAtom(handleMouseMoveAtom);
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
        Commits: {useCommitCount()}
      </text>
      <SvgDots />
    </svg>
  );
};

const Stats = () => {
  const numberOfDots = useAtomValue(numberOfDotsAtom);
  return (
    <ul>
      <li>Dots: {!drawingAtom && numberOfDots}</li>
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
