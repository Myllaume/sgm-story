import cn from 'classnames';
import Map from './Map';
import Selector from './Selector';
import Timeline from './Timeline';

export default function PageTimeline() {
  return (
    <div>
      <Timeline />
      <div className={cn(['flex'])}>
        <Map />
        <Selector />
      </div>
    </div>
  );
}
