import { useAtomValue } from 'jotai';
import { dotsAtom } from '../state/DrawDotsState';
import React from 'react';

const SvgDots = () => {
  const dots = useAtomValue(dotsAtom);

  return (
    <g>
      {React.Children.toArray(
        dots.map(([x, y]) => <circle cx={x} cy={y} r="2" fill="#aaa" />)
      )}
    </g>
  );
};

export default SvgDots;
