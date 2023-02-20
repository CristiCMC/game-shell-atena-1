import { Link } from 'react-router-dom';
import { FullscreenLayout } from '../layouts';

export const FourOhFour = () => {
  return (
    <FullscreenLayout>
      <div class="bg-pink-400 w-screen h-screen flex items-center justify-center">
        <div class="text-center text-white">
          <span class="text-7xl animate-pulse block">404</span>

          <Link to="/" title="Home" className="font-bold">
            Home
          </Link>
        </div>
      </div>
    </FullscreenLayout>
  );
};
