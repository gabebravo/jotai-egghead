import { useAtom, useSetAtom } from 'jotai';

import { setColorAtom } from './selection';
import { deleteSelectedShapeAtom } from './SvgShapes';

const colors = [
  { value: '', label: 'Default' },
  { value: 'red', label: 'Red' },
  { value: 'green', label: 'Green' },
  { value: 'blue', label: 'Blue' },
];

export const Controls = () => {
  const [currentColor, setColor] = useAtom(setColorAtom);
  const [isSelected, deleteSelectedShape] = useAtom(deleteSelectedShapeAtom);

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
      <hr />
      <button disabled={!isSelected} onClick={deleteSelectedShape}>
        Delete
      </button>
    </div>
  );
};
