import { Link } from '@tanstack/react-router';
import data from './data.json';
import { itemRoute, ROUTE_INDEX } from './routes';

export default function PageIndex() {
  const { id } = itemRoute.useParams();

  const item = data[id];

  return (
    <div>
      <Link to={ROUTE_INDEX}>Retour à l'index</Link>
      <h1>{item.title}</h1>
    </div>
  );
}
