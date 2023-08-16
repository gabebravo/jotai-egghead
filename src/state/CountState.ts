import { atom } from 'jotai';

export const count1Atom = atom(0);
export const count2Atom = atom(0);

count1Atom.debugLabel = 'Count1';
count2Atom.debugLabel = 'Count2';
