import { atom, useAtom } from 'jotai';

import { Point, ShapeAtom } from '../types';
import { createShapeAtom, SvgShape } from './SvgShape';
import { selectAtom, selectedAtom, unselectAtom } from './selection';
import { shapeAtomsAtom } from '../state/histroy';

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

// if there is a selected shape, it will remove it from the array of selected shapes
export const deleteSelectedShapeAtom = atom(
  (get) => {
    const isSelected = !!get(selectedAtom);
    return isSelected; // returns a boolean indicating if there is a selection or not
  },

  (get, set, update) => {
    const selected = get(selectedAtom);
    if (selected) {
      set(shapeAtomsAtom, (prev) => prev.filter((item) => item !== selected));
      set(unselectAtom, null); // also resets the selected shapes with unselectAtom
    }
  }
);

export const SvgShapes = () => {
  const [shapeAtoms] = useAtom(shapeAtomsAtom);
  return (
    <g>
      {shapeAtoms.map((shapeAtom) => (
        // shapeAtom props being passed - coming from the
        // @ts-ignore
        <SvgShape key={`${shapeAtom}`} shapeAtom={shapeAtom} />
      ))}
    </g>
  );
};
