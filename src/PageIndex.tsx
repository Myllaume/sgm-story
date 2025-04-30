import { Link } from '@tanstack/react-router';
import data from './data.json';
import { ROUTE_ITEM } from './routes';

export default function PageIndex() {
  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>
          <Link to={ROUTE_ITEM} params={{ id: index }}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
