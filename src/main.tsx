import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../node_modules/leaflet/dist/leaflet.css';
import './index.css';
import App from './App.tsx';
import './map.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
