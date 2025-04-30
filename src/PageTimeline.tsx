import Map from './Map';
import Selector from './Selector';
import Timeline from './Timeline';

export default function PageTimeline() {
  return (
    <div>
      <Timeline />
      <div className="map-row">
        <Map />
        <Selector />
      </div>
    </div>
  );
}
