import { useOptions } from './options';
import data from './data.json';

export default function useSelectedData() {
  const { tags } = useOptions();

  return data.filter((item) => {
    return item.tags.some((tag) => tags.includes(tag));
  });
}
