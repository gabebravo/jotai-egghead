import { atom, useAtom } from 'jotai';

import { Point } from '../types';
import { addShapeAtom } from './SvgShapes';
import React from 'react';

const dotsAtom = atom<readonly Point[]>([]);

export const addDotAtom = atom(null, (_get, set, update: Point) => {
  set(dotsAtom, (prev) => [...prev, update]);
});

export const commitDotsAtom = atom(null, (get, set) => {
  set(addShapeAtom, get(dotsAtom));
  set(dotsAtom, []);
});

// React.Children.toArray(children) to auto assign keys when needed
export const SvgDots = () => {
  const [dots] = useAtom(dotsAtom);
  return (
    <g>
      {React.Children.toArray(
        dots.map(([x, y]) => <circle cx={x} cy={y} r="2" fill="#aaa" />)
      )}
    </g>
  );
};
