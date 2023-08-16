import { atom } from 'jotai';
export type Point = [number, number];

// 2d coordinates of dots position
export const dotsAtom = atom<Point[]>([]);

// selector that dervices number of dots on screen
export const numberOfDotsAtom = atom((get) => get(dotsAtom).length);
