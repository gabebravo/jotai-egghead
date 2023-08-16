import { Link } from 'wouter';

const Home = () => {
  return (
    <div>
      <div>
        <h1>Jotai Egghead</h1>
      </div>
      <h3>Pages:</h3>
      <div>
        <h5>Counter</h5>
        <Link href={`/counter`}>
          <a className="link">
            This is a simple state counter to prove the Jotai setup
          </a>
        </Link>
      </div>
      <div>
        <h5>Draw Dots</h5>
        <Link href={`/draw-dots`}>
          <a className="link">
            This is a dawing app that shows dots and counts them
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
