import { useAtom } from 'jotai';
import { count1Atom, count2Atom } from '../state/CountState';

const Counter1 = () => {
  const [count, setCount] = useAtom(count1Atom);
  return (
    <div>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <button onClick={() => setCount((c) => c - 1)}>-1</button>
    </div>
  );
};

const Counter2 = () => {
  const [count, setCount] = useAtom(count2Atom);
  return (
    <div>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <button onClick={() => setCount((c) => c - 1)}>-1</button>
    </div>
  );
};

const Counter = () => (
  <div>
    <h3>Jotai Counter</h3>
    <Counter1 />
    <Counter2 />
  </div>
);

export default Counter;
