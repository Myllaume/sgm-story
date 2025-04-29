import { tags } from './computedData';
import { useOptions } from './options';

export default function Selector() {
  const { hasTag, toggleTag } = useOptions();

  return (
    <div className="list">
      {tags
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
