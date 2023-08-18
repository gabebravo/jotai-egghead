import { atom } from 'jotai';
import { ShapeAtom } from '../types';

const selectedShapeAtomAtom = atom<ShapeAtom | null>(null);

// setter for the selectedShapeAtomAtom - happens on click event on SvgShape
export const selectAtom = atom(null, (_get, set, shapeAtom: ShapeAtom) => {
  set(selectedShapeAtomAtom, shapeAtom);
});

// selector takes an atom as an arguement and returns a boolean
export const selectedAtomCreator = (shapeAtom: ShapeAtom) => {
  const selectedAtom = atom((get) => shapeAtom === get(selectedShapeAtomAtom));
  return selectedAtom;
};

// setter portion takes a color, and if there is a selectedShape, it appends the color
export const setColorAtom = atom(
  (get) => {
    // getter returns the current value
    const selectedShapeAtom = get(selectedShapeAtomAtom);
    if (selectedShapeAtom) {
      return get(selectedShapeAtom).color || '';
    }
    return null;
  },
  (get, set, color: string) => {
    const selectedShapeAtom = get(selectedShapeAtomAtom);
    if (selectedShapeAtom) {
      set(selectedShapeAtom, (prev) => ({
        ...prev,
        color,
      }));
    }
  }
);

// selector that gets the current atom
export const selectedAtom = atom((get) => get(selectedShapeAtomAtom));

// resets the selected atoms if none selected
export const unselectAtom = atom(null, (_get, set, _update) => {
  set(selectedShapeAtomAtom, null);
});
