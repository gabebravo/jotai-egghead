import { atom, useAtom } from 'jotai';

import { createShapeAtom, SvgShape } from './SvgShape';
import { ShapeAtom, Point } from '../types';

const shapeAtomsAtom = atom<ShapeAtom[]>([]);

export const addShapeAtom = atom(
  null,
  (_get, set, update: readonly Point[]) => {
    const shapeAtom = createShapeAtom(update);
    set(shapeAtomsAtom, (prev) => [...prev, shapeAtom]);
  }
);

export const SvgShapes = () => {
  const [shapeAtoms] = useAtom(shapeAtomsAtom);
  return (
    <g>
      {shapeAtoms.map((shapeAtom) => (
        <SvgShape key={`${shapeAtom}`} shapeAtom={shapeAtom} />
      ))}
    </g>
  );
};
