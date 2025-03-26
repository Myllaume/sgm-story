import { createRoot } from 'react-dom/client';
import '../node_modules/leaflet/dist/leaflet.css';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(<App />);
