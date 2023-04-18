/// <reference types="@map-component/tmap-types" />
import { FC } from 'react';
type InfoWindowOptions = {
  id: string;
  content: string;
  position: TMap.LatLngData;
  visible?: boolean;
  offset?: {
    x: any;
    y: any;
  };
  zIndex?: number;
  enableCustom?: boolean;
  [key: string]: any;
};
declare const InfoWindowComponent: FC<InfoWindowOptions>;
export default InfoWindowComponent;
