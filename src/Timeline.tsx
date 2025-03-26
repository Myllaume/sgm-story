import { scaleLinear } from 'd3';

export default function Timeline() {
  const begin = generateTimestampForYear(1908);
  const end = generateTimestampForYear(1950);

  const x = scaleLinear([begin, end], [0, 800]);

  const d1920 = x(generateTimestampForYear(1920));
  const d1914 = x(generateTimestampForYear(1914));
  const d1918 = x(generateTimestampForYear(1918));
  const d1939 = x(generateTimestampForYear(1939));
  const d1945 = x(generateTimestampForYear(1945));
  const d1949 = x(generateTimestampForYear(1949));
  const d1950 = x(generateTimestampForYear(1950));

  return (
    <svg className="timeline">
      {[d1920, d1914, d1918, d1939, d1945, d1949, d1950].map((x) => {
        return <circle cx={x} cy={20} r={2} fill="red" />;
      })}
    </svg>
  );
}

function generateTimestampForYear(year: number) {
  const date = new Date(year, 0, 1); // 1er janvier de l'année donnée
  return date.getTime() / 1000; // Convertir en timestamp UNIX (secondes)
}
