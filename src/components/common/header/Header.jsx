import { FiMeh } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { UserControls } from '.';

export const Header = () => {
  return (
    <div className="container mx-auto px-4 flex justify-between">
      <h1 className="uppercase font-bold text-lg inline-block">
        <Link to="/" title="Home" className="flex gap-3 items-center">
          <FiMeh size={24} className="inline-block"></FiMeh>
          Game Shell
        </Link>
      </h1>

      <div>
        <UserControls></UserControls>
      </div>
    </div>
  );
};
