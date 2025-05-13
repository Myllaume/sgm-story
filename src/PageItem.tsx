import { Link } from '@tanstack/react-router';
import data from './data.json';
import { itemRoute, ROUTE_INDEX } from './routes';
import cn from 'classnames';
import { marked } from 'marked';

export default function PageIndex() {
  const { id } = itemRoute.useParams();

  const item = data[id];

  return (
    <div className={cn('p-4')}>
      <Link to={ROUTE_INDEX} className={cn('btn', 'btn-xs')}>
        Retour à l'index
      </Link>
      <h1 className={cn('text-2xl', 'mb-8', 'mt-2')}>{item.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: marked.parse(item.description) }}
      />
    </div>
  );
}
