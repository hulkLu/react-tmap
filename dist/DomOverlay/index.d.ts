/// <reference types="@map-component/tmap-types" />
import React from 'react';
type DomData = {
  position: {
    lat: number;
    lng: number;
  };
  data: any;
};
interface Props {
  data: DomData[];
  createDom: (props: { data: DomData }) => HTMLElement;
  onClick: (props: DomData, e: any) => void;
}
declare class DomOverlayComponent extends React.Component<Props> {
  DomClass: any;
  map?: TMap.Map;
  DomClassList?: any[];
  componentDidMount(): void;
  componentDidUpdate(prevProps: Props): void;
  componentWillUnmount(): void;
  initMapEle(): void;
  destroyMapEle(): void;
  render(): null;
}
export default DomOverlayComponent;
