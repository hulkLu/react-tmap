/// <reference types="@map-component/tmap-types" />
/// <reference types="@map-component/tmap-types" />
import { FC } from 'react';
type ControlConfig = {
  position?: ControlPos;
  className?: string;
};
type ControlPos =
  | 'TOP_LEFT'
  | 'TOP_CENTER'
  | 'TOP_RIGHT'
  | 'CENTER_LEFT'
  | 'CENTER'
  | 'CENTER_RIGHT'
  | 'BOTTOM_LEFT'
  | 'BOTTOM_CENTER'
  | 'BOTTOM_RIGHT';
type TMapProps = {
  version: string;
  mapKey: string;
  class?: string;
  style?: Record<string, string>;
  center?: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  minZoom?: number;
  maxZoom?: number;
  rotation?: number;
  pitch?: number;
  scale?: number;
  offset?: {
    x: number;
    y: number;
  };
  draggable?: boolean;
  scrollable?: boolean;
  doubleClickZoom?: boolean;
  boundary?: TMap.LatLngBounds;
  mapStyleId?: string;
  baseMap?: TMap.BaseMap;
  viewMode?: '2D' | '3D';
  showControl?: boolean;
  control?: {
    scale?: ControlConfig;
    zoom?: ControlConfig;
    rotate?: ControlConfig;
  };
  duration?: number;
  libraries?: string[];
  onLoad?: (map: TMap.Map) => void;
  [key: string]: any;
};
declare const TMapComponent: FC<TMapProps>;
export default TMapComponent;
