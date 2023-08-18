import { PrimitiveAtom } from 'jotai';

export type Point = readonly [number, number];

export type ShapeAtom = PrimitiveAtom<{
  path: string;
  color?: string;
}>;

export type ShapeAtomPrimative = PrimitiveAtom<ShapeAtom>;
