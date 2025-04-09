import data from './data.json';
import { group } from 'd3';
import { useOptions } from './options';

const groupTag = group(data, (d) => d.tag);

export default function Selector() {
  const { hasTag, toggleTag } = useOptions();

  return (
    <div className='list'>
      {[...groupTag.keys()]
        .sort((a, b) => a.localeCompare(b))
        .map((tag) => {
          return (
            <label>
              <input
                type="checkbox"
                checked={hasTag(tag)}
                onChange={() => toggleTag(tag)}
              />
              {tag}
            </label>
          );
        })}
    </div>
  );
}
