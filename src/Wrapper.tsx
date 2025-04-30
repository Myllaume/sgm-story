import { Link, Outlet } from '@tanstack/react-router';
import { ROUTE_ROOT, ROUTE_TIMELINE } from './routes';

export default function Wrapper() {
  return (
    <>
      <main className="main">
        <Outlet />
      </main>

      <nav className="">
        <Link to={ROUTE_ROOT} className="">
          Index
        </Link>
        <Link to={ROUTE_TIMELINE} className="">
          Timeline
        </Link>
      </nav>
    </>
  );
}
