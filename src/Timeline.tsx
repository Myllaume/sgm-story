import { scaleLinear, ticks, min, max } from 'd3';
import { useWindowSize } from 'react-use';
import useSelectedData from './useSelectedData';
import timelineBeginEnd from './timelineBeginEnd';
import { tagColors } from './computedData';

export default function Timeline() {
  const { width } = useWindowSize();

  const height = 200;

  const selectedData = useSelectedData();
  const selectedYears = selectedData.flatMap(({ timestamps }) =>
    timestamps.map((timestamp) => getYearForTimestamp(timestamp))
  );

  const { begin, end } = timelineBeginEnd(
    min(selectedYears),
    max(selectedYears)
  );
  const step = 10;

  const getX = scaleLinear(
    [generateTimestampForYear(begin), generateTimestampForYear(end)],
    [0, width]
  );

  const fiveYear =
    getX(generateTimestampForYear(1900)) -
    getX(generateTimestampForYear(1900 - 5));

  return (
    <svg className="timeline" width={width} height={height}>
      <g>
        {ticks(begin, end, (end - begin) / 10).map((year) => {
          return (
            <g
              key={year}
              transform={`translate(${getX(generateTimestampForYear(year))}, 0)`}
            >
              <rect
                x={0}
                y={0}
                width={fiveYear}
                height={height}
                fill="blue"
                opacity={0.05}
              />
            </g>
          );
        })}
      </g>

      <g>
        {selectedData
          .filter(({ timestamps }) => timestamps.length === 1)
          .map(({ timestamps, tags }) => {
            const timestamp = timestamps[0];
            const color = tagColors.get(tags[0]);

            return (
              <g
                key={timestamp}
                transform={`translate(${getX(timestamp)}, ${20})`}
              >
                <circle cx={0} cy={0} r={4} fill={color} />
                <text
                  x={0}
                  y={-10}
                  fontSize={10}
                  textAnchor="middle"
                  fill="black"
                >
                  {timestampYearText(timestamp * 1000)}
                </text>
              </g>
            );
          })}
      </g>

      <g>
        {selectedData
          .filter(({ timestamps }) => timestamps.length === 2)
          .map(({ timestamps, tags }) => {
            const [begin, end] = timestamps;
            const width = getX(begin) - getX(end);
            const color = tagColors.get(tags[0]);

            return (
              <g
                key={timestamps.join('-')}
                transform={`translate(${getX(begin)}, ${20})`}
              >
                <rect x={0} y={0} width={width} height={30} fill={color} />
                <text
                  x={0}
                  y={-10}
                  fontSize={10}
                  textAnchor="middle"
                  fill="black"
                >
                  {timestampYearText(begin * 1000)}
                </text>
                <text
                  x={width}
                  y={-10}
                  fontSize={10}
                  textAnchor="middle"
                  fill="black"
                >
                  {timestampYearText(end * 1000)}
                </text>
              </g>
            );
          })}
      </g>

      <g>
        {ticks(begin, end, (end - begin) / step).map((year) => {
          return (
            <g
              key={year}
              transform={`translate(${getX(generateTimestampForYear(year))}, ${height - 10})`}
            >
              <line x1={0} x2={0} y1={0} y2={10} stroke="black" />
              <text x={0} y={-3} fontSize={10} textAnchor="middle" fill="black">
                {year}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}

function generateTimestampForYear(year: number) {
  const date = new Date(year, 0, 1);
  return date.getTime() / 1000;
}

function getYearForTimestamp(timpestamp: number) {
  const date = new Date(timpestamp * 1000);
  return Number(date.getFullYear());
}

function timestampYearText(timestamp: number) {
  return new Date(timestamp).toLocaleDateString('fr-FR', {
    year: 'numeric',
  });
}
