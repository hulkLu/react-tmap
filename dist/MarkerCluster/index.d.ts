/// <reference types="@map-component/tmap-types" />
import { FC } from 'react';
type MarkerClusterOptions = {
  id: string;
  enableDefaultStyle?: boolean;
  minimumClusterSize?: number;
  geometries?: TMap.PointGeometry[];
  zoomOnClick?: boolean;
  gridSize?: number;
  averageCenter?: boolean;
  maxZoom?: number;
  [key: string]: any;
};
declare const MarkerClusterComponent: FC<MarkerClusterOptions>;
export default MarkerClusterComponent;
