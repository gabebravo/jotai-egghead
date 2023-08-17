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
