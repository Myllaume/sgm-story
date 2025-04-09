import { scaleLinear, ticks } from 'd3';
import { useWindowSize } from 'react-use';

export default function Timeline() {
  const { width } = useWindowSize();

  const height = 200;

  const begin = 1908;
  const end = 1950;
  const step = 10;

  const getX = scaleLinear(
    [generateTimestampForYear(begin), generateTimestampForYear(end)],
    [0, width]
  );

  return (
    <svg className="timeline" width={width} height={height}>
      <g>
        {[1920, 1914, 1918, 1939, 1945, 1949, 1950].map((year) => {
          return (
            <g
              key={year}
              transform={`translate(${getX(generateTimestampForYear(year))}, ${20})`}
            >
              <circle cx={0} cy={0} r={4} fill="red" />
              <text
                x={0}
                y={-10}
                fontSize={10}
                textAnchor="middle"
                fill="black"
              >
                {year}
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
  const date = new Date(year, 0, 1); // 1er janvier de l'année donnée
  return date.getTime() / 1000; // Convertir en timestamp UNIX (secondes)
}
