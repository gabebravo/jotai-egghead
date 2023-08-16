import { useAtomValue } from 'jotai';
import { numberOfDotsAtom } from '../state/DrawDotsState';

const Stats = () => {
  const numberOfDots = useAtomValue(numberOfDotsAtom);

  return (
    <ul>
      <li>Dots: {numberOfDots}</li>
    </ul>
  );
};

export default Stats;
