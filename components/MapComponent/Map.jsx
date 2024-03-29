import dynamic from 'next/dynamic';
import { Spinner } from '@nextui-org/spinner';

const Map = dynamic(() => import('./MapComponent'), {
  ssr: false,
  loading: () =>
    <div className="hidden md:flex items-center justify-center h-screen w-0 md:w-2/3">
      <Spinner size='large' />
    </div>
});

export default Map;