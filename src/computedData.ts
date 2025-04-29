import data from './data.json';
import tagGroup from './tagGroup';
import Palette from 'iwanthue/palette';

export const groupTag = tagGroup(data);
export const tags = [...groupTag.keys()];
export const tagColors = Palette.generateFromValues('cities', tags, {
  defaultColor: '#000',
});
