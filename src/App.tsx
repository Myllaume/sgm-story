import { RouterProvider, createRouter } from '@tanstack/react-router';
import { OptionsProvider } from './options';
import { routeTree } from './routes';

const router = createRouter({ routeTree });

function App() {
  return (
    <OptionsProvider>
      <RouterProvider router={router} />
    </OptionsProvider>
  );
}

export default App;
