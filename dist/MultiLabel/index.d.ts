/// <reference types="@map-component/tmap-types" />
import { FC } from 'react';
type MultiLabelOptions = {
  id: string;
  styles?: TMap.MultiLabelStyleHash;
  geometries?: TMap.LabelGeometry[];
  enableCollision?: boolean;
  [key: string]: any;
};
declare const MultiLabelComponent: FC<MultiLabelOptions>;
export default MultiLabelComponent;
