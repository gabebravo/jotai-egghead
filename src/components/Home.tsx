/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'wouter';

const linkStyle = css`
  color: blue;
`;

const Home = () => {
  return (
    <div>
      <div>
        <h1>Jotai Egghead</h1>
      </div>
      <div>
        <h5>
          <Link href={`/counter`}>
            <a css={linkStyle} className="link">
              Counter
            </a>
          </Link>
        </h5>
        <p>This is a simple state counter to prove the Jotai setup</p>
      </div>
      <div>
        <h5>
          <Link href={`/draw-dots`}>
            <a css={linkStyle}>Draw Dots</a>
          </Link>
        </h5>
        <p>This is a dawing app that shows dots and counts them</p>
      </div>
      <div>
        <h5>
          <Link href={`/draw-opt`}>
            <a css={linkStyle}>Draw Dots - Optimized</a>
          </Link>
        </h5>
        <p>
          This version of the dawing app saves re-renders and uses the
          useResetAtom to reset the same DrawDotsState in multiple places
        </p>
      </div>
      <div>
        <h5>
          <Link href={`/draw-multi`}>
            <a css={linkStyle}>Draw Multi Lines</a>
          </Link>
        </h5>
        <p>
          This version of the dawing app uses multi lines. Note the addShapeAtom
          in SvgShapes.
        </p>
      </div>
      <div>
        <h5>
          <Link href={`/selectable-lines`}>
            <a css={linkStyle}>Selectable Lines</a>
          </Link>
        </h5>
        <p>
          Makes use of setters and selectors that contain atoms instead of just
          values.
        </p>
      </div>
      <div>
        <h5>
          <Link href={`/color-lines`}>
            <a css={linkStyle}>Color Lines</a>
          </Link>
        </h5>
        <p>
          Update Atom value from a different React component to chnage color of
          lines.
        </p>
      </div>
      <div>
        <h5>
          <Link href={`/delete-lines`}>
            <a css={linkStyle}>Delete Lines</a>
          </Link>
        </h5>
        <p>
          Delete a selected line by filtering out a selectedShape from the array
          of values.
        </p>
      </div>
      <div>
        <h5>
          <Link href={`/undo-lines`}>
            <a css={linkStyle}>Undo Lines</a>
          </Link>
        </h5>
        <p>Undo lines by removing them from the history collected over time.</p>
      </div>
    </div>
  );
};

export default Home;
