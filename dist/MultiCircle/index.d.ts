/// <reference types="@map-component/tmap-types" />
import { FC } from 'react';
type MultiCircleOptions = {
  id: string;
  zIndex?: number;
  styles?: TMap.MultiCircleStyleHash;
  geometries?: TMap.CircleGeometry[];
  [key: string]: any;
};
declare const MultiCircleComponent: FC<MultiCircleOptions>;
export default MultiCircleComponent;
