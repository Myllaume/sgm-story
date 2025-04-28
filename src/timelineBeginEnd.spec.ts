import generateTimestampForYear from './timelineBeginEnd';

describe('timelineBeginEnd', () => {
  it('should return begin and end dates with maring', () => {
    expect(generateTimestampForYear(1900, 1950)).toEqual({
      begin: 1890,
      end: 1960,
    });
  });

  it('should return default begin and end dates', () => {
    expect(generateTimestampForYear()).toEqual({
      begin: 1800,
      end: 2010,
    });
  });

  it('should not return begin under min year or over max year', () => {
    expect(generateTimestampForYear(1700, 2009)).toEqual({
      begin: 1800,
      end: 2010,
    });
  });
});
