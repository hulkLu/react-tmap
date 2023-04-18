/// <reference types="@map-component/tmap-types" />
import { FC } from 'react';
type MultiMarkerOptions = {
  id: string;
  styles?: TMap.MultiMarkerStyleHash;
  geometries?: TMap.PointGeometry[];
  [key: string]: any;
};
declare const MultiMarkerComponent: FC<MultiMarkerOptions>;
export default MultiMarkerComponent;
