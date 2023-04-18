/// <reference types="@map-component/tmap-types" />
import { FC } from 'react';
export declare function builtStyle(opt: {
  [key: string]: TMap.PolygonStyleOptions;
}): TMap.MultiPolygonStyleHash;
export declare function buildGeometries<T>(
  geometries: TMap.PolygonGeometry<T>[],
): TMap.PolygonGeometry<T>[];
type MultiPolygonOptions = {
  id: string;
  zIndex?: number;
  styles?: TMap.MultiPolygonStyleHash;
  geometries?: TMap.PolygonGeometry[];
  [key: string]: any;
};
declare const MultiPolygonComponent: FC<MultiPolygonOptions>;
export default MultiPolygonComponent;
