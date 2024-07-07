import 'jsvectormap';
import 'jsvectormap/dist/maps/us-merc-en.js';

//components
import BaseVectorMap from './BaseVectorMap';
const UsaVectorMap = ({
  width,
  height,
  options
}) => {
  return <>
      <BaseVectorMap width={width} height={height} options={options} type="us_merc_en" />
    </>;
};
export default UsaVectorMap;