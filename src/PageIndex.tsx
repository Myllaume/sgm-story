import { Link } from '@tanstack/react-router';
import data from './data.json';
import { ROUTE_ITEM } from './routes';
import cn from 'classnames';
import Selector from './Selector';
import { useOptions } from './options';

export default function PageIndex() {
  const { tags } = useOptions();

  return (
    <div className={cn(['flex'])}>
      <ul className={cn(['menu'])}>
        {data
          .filter(
            (item) =>
              tags.length === 0 || item.tags.some((tag) => tags.includes(tag))
          )
          .map((item, index) => (
            <li key={index}>
              <Link to={ROUTE_ITEM} params={{ id: index }}>
                {item.title}
              </Link>
            </li>
          ))}
      </ul>

      <Selector />
    </div>
  );
}
