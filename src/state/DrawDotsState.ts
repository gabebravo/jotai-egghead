import { atomWithReset } from 'jotai/utils';
import { atom } from 'jotai';
export type Point = [number, number];

// 2d coordinates of dots position
export const dotsAtom = atomWithReset<Point[]>([]);

// selector that dervices number of dots on screen
export const numberOfDotsAtom = atom((get) => get(dotsAtom).length);

dotsAtom.debugLabel = 'DotsAtom';
numberOfDotsAtom.debugLabel = 'NumberOfDotsSelector';
