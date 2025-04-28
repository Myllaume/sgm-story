import { group } from 'd3';

export default function tagGroup(data: { tags: string[] }[]) {
  const unflodedData: { tag: string }[] = [];

  data.forEach((d) => {
    d.tags.forEach((tag: string) => {
      const { tags, ...rest } = d;
      unflodedData.push({ ...rest, tag });
    });
  });

  return group(unflodedData, (d) => d.tag);
}
