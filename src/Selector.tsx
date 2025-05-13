import cn from 'classnames';
import { tags } from './computedData';
import { useOptions } from './options';

export default function Selector() {
  const { hasTag, toggleTag } = useOptions();

  return (
    <ul className={cn(['list-none', 'w-64'])}>
      {tags
        .sort((a, b) => a.localeCompare(b))
        .map((tag) => {
          return (
            <li className={cn(['pl-2', 'hover:bg-base-200'])}>
              <label key={tag} className={cn(['mb-1', 'flex', 'space-x-2'])}>
                <input
                  type="checkbox"
                  checked={hasTag(tag)}
                  onChange={() => toggleTag(tag)}
                />
                <span>{tag}</span>
              </label>
            </li>
          );
        })}
    </ul>
  );
}
