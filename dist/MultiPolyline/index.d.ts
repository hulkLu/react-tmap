/// <reference types="@map-component/tmap-types" />
import { FC } from 'react';
interface MultiPolylineOptions {
  id: string;
  zIndex?: number;
  styles?: TMap.MultiPolylineStyleHash;
  geometries?: TMap.PolylineGeometry[];
  [key: string]: any;
}
declare const MultiPolylineComponent: FC<MultiPolylineOptions>;
export default MultiPolylineComponent;
