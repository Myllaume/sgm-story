import { createRootRoute, createRoute } from '@tanstack/react-router';
import PageIndex from './PageIndex';
import PageItem from './PageItem';
import PageTimeline from './PageTimeline';
import Wrapper from './Wrapper';

export const ROUTE_ROOT = '/';
export const ROUTE_INDEX = ROUTE_ROOT;
export const ROUTE_ITEM = '/item/$id';
export const ROUTE_TIMELINE = '/timeline';

const rootRoute = createRootRoute({
  component: function () {
    return <Wrapper />;
  },
});

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTE_INDEX,
  component: function () {
    return <PageIndex />;
  },
});

export const itemRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTE_ITEM,
  component: function () {
    return <PageItem />;
  },
});

export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTE_TIMELINE,
  component: function () {
    return <PageTimeline />;
  },
});

export const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  itemRoute,
]);
