const minYear = 1800;
const maxYear = 2010;
const yearMargin = 10;

export default function timelineBeginEnd(
  displayBegin = minYear,
  displayEnd = maxYear
) {
  let begin: number;
  let end: number;

  begin = displayBegin - yearMargin;
  end = displayEnd + yearMargin;

  if (begin < minYear) {
    begin = minYear;
  }
  if (end > maxYear) {
    end = maxYear;
  }

  return { begin, end };
}
