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
      <h3>Pages:</h3>
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
    </div>
  );
};

export default Home;
