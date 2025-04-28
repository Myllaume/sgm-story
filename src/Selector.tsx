import data from './data.json';
import { useOptions } from './options';
import tagGroup from './tagGroup';

const groupTag = tagGroup(data);

export default function Selector() {
  const { hasTag, toggleTag } = useOptions();

  return (
    <div className="list">
      {[...groupTag.keys()]
        .sort((a, b) => a.localeCompare(b))
        .map((tag) => {
          return (
            <label key={tag}>
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
