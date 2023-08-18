import { atom, SetStateAction } from 'jotai';

import { ShapeAtomPrimative, ShapeAtom } from '../types';

// XXX not ideal circular dependency
import { unselectAtom } from '../undo-lines/selection';

const internalShapeAtomsAtom = atom<ShapeAtomPrimative[]>([]);

const historyAtom = atom<ShapeAtom[][]>([]);

// write-only atom that saves shape history
export const saveHistoryAtom = atom(null, (get, set, _update) => {
  // line 12 : creates an immutable snapshot array of the shape atoms
  const shapes = get(internalShapeAtomsAtom).map((ShapeAtom) => get(ShapeAtom));

  // appends current shapes to the begging of the history atom
  set(historyAtom, (prev) => [shapes, ...prev]);
});

// saves history before the internal atom gets updated
export const shapeAtomsAtom = atom(
  (get) => get(internalShapeAtomsAtom), // returns the current shape atom
  (_get, set, update: SetStateAction<ShapeAtom[]>) => {
    set(saveHistoryAtom, null); // blanks history
    // @ts-ignore
    set(internalShapeAtomsAtom, update); // sets current shape atom to the new value
  }
);

export const undoAtom = atom(
  (get) => {
    const hasHistory = get(historyAtom).length > 0;
    return hasHistory; // used to determine if button should be disbaled
  },
  (get, set, _update) => {
    // restore internalShapeAtoms with first atom in the history
    const history = get(historyAtom);
    if (history.length > 0) {
      const [shapes, ...rest] = history;
      set(internalShapeAtomsAtom, (prev) =>
        shapes.map((shape, index) =>
          get(prev[index]) === shape ? prev[index] : atom(shape)
        )
      );
      set(historyAtom, rest);
      set(unselectAtom, null); // should only unselect if necessary
    }
  }
);
