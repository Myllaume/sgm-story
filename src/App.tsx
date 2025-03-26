import Map from './Map';
import {
  Outlet,
  RouterProvider,
  Link,
  createRouter,
  createRoute,
  createRootRoute,
} from '@tanstack/react-router';
import { ROUTE_ROOT, ROUTE_TIMELINE } from './routes';
import Timeline from './Timeline';

const rootRoute = createRootRoute({
  component: function () {
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
  },
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTE_ROOT,
  component: function () {
    return <div>Hello world!</div>;
  },
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTE_TIMELINE,
  component: function () {
    return (
      <div>
        <Timeline />
        <Map />
      </div>
    );
  },
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

const router = createRouter({ routeTree });

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
