import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="container mx-auto px-4 flex justify-between">
      <div>
        <h1>Game Shell</h1>
        <p className="text-xs">Crafted by Pixellab</p>
      </div>

      <ul>
        <li>
          <Link to="/profile" title="Go to profile">
            Profile
          </Link>
        </li>

        <li>
          <Link to="/play" title="Play now">
            Play
          </Link>
        </li>

        <li>
          <Link to="/ranks" title="See users">
            Ranks
          </Link>
        </li>
      </ul>
    </div>
  );
};
