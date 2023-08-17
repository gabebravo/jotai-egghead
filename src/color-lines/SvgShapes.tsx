import { atom, useAtom } from 'jotai';

import { Point, ShapeAtom } from '../types';
import { createShapeAtom, SvgShape } from './SvgShape';
import { selectAtom } from './selection';

const shapeAtomsAtom = atom<ShapeAtom[]>([]);

// this gets set on the commit (mouse up)
export const addShapeAtom = atom(
  null,
  (_get, set, update: readonly Point[]) => {
    if (update.length < 2) return;
    const shapeAtom = createShapeAtom(update);
    set(shapeAtomsAtom, (prev) => [...prev, shapeAtom]);
    set(selectAtom, shapeAtom);
  }
);

export const SvgShapes = () => {
  const [shapeAtoms] = useAtom(shapeAtomsAtom);
  return (
    <g>
      {shapeAtoms.map((shapeAtom) => (
        // shapeAtom props being passed - coming from the
        <SvgShape key={`${shapeAtom}`} shapeAtom={shapeAtom} />
      ))}
    </g>
  );
};
