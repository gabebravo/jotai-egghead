import { useMemo } from 'react';
import { atom, useAtom } from 'jotai';

import { Point, ShapeAtom } from '../types';
import { selectAtom, selectedAtomCreator } from './selection';

const pointsToPath = (points: readonly Point[]) => {
  let d = '';
  points.forEach((point) => {
    if (d) {
      d += ` L ${point[0]} ${point[1]}`;
    } else {
      d = `M ${point[0]} ${point[1]}`;
    }
  });
  return d;
};

export const createShapeAtom = (points: readonly Point[]) =>
  atom({ path: pointsToPath(points) });

// takes a shapeAtom as a prop
export const SvgShape = ({ shapeAtom }: { shapeAtom: ShapeAtom }) => {
  const [shape] = useAtom(shapeAtom);

  // this is the setter coming from selection
  const [, select] = useAtom(selectAtom);

  // makes the atom passed in the source of truth by memoizing
  const [selected] = useAtom(
    useMemo(() => selectedAtomCreator(shapeAtom), [shapeAtom])
  );

  return (
    // get set on click
    <g onClick={() => select(shapeAtom)}>
      <path
        d={shape.path}
        fill="none"
        opacity={selected ? '0.3' : '0'} // renders the opacity based on whether selected
        stroke="red"
        strokeWidth="12"
      />
      <path d={shape.path} fill="none" stroke="black" strokeWidth="3" />
    </g>
  );
};
