import { useAtom } from 'jotai';

import { setColorAtom } from './selection';

const colors = [
  { value: '', label: 'Default' },
  { value: 'red', label: 'Red' },
  { value: 'green', label: 'Green' },
  { value: 'blue', label: 'Blue' },
];

export const Controls = () => {
  const [currentColor, setColor] = useAtom(setColorAtom);
  return (
    <div>
      Color:
      {colors.map(({ value, label }) => (
        <button
          key={value}
          disabled={currentColor === null || currentColor === value}
          onClick={() => setColor(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
