import { Link, Outlet } from '@tanstack/react-router';
import { ROUTE_ROOT, ROUTE_TIMELINE } from './routes';
import cn from 'classnames';

export default function Wrapper() {
  return (
    <>
      <main className={cn('main', 'h-[calc(100vh-30px)]', 'overflow-hidden')}>
        <Outlet />
      </main>

      <div role="tablist" className="tabs tabs-lift tabs-xs tabs-bottom">
        <Link
          to={ROUTE_ROOT}
          role="tab"
          className="tab"
          activeProps={{ className: 'tab-active' }}
        >
          Index
        </Link>
        <Link
          to={ROUTE_TIMELINE}
          role="tab"
          className="tab"
          activeProps={{ className: 'tab-active' }}
        >
          Timeline
        </Link>
      </div>
    </>
  );
}
