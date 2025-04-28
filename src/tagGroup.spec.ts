import { InternMap } from 'd3';
import tagGroup from './tagGroup';

describe('tagGroup', () => {
  it('should group data by each tag', () => {
    const data = [
      { tags: ['tag1', 'tag2'], name: 'item1' },
      { tags: ['tag2'], name: 'item2' },
    ];

    expect(tagGroup(data)).toEqual(
      new InternMap([
        ['tag1', [{ tag: 'tag1', name: 'item1' }]],
        [
          'tag2',
          [
            { tag: 'tag2', name: 'item1' },
            { tag: 'tag2', name: 'item2' },
          ],
        ],
      ])
    );
  });
});
