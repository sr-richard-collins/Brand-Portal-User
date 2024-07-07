import 'jsvectormap';
import 'jsvectormap/dist/maps/italy.js';

//components
import BaseVectorMap from './BaseVectorMap';
const ItalyVectorMap = ({
  width,
  height,
  options
}) => {
  return <>
      <BaseVectorMap width={width} height={height} options={options} type="italy" />
    </>;
};
export default ItalyVectorMap;