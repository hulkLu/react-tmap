---
nav:
  title: 多边形
  path: /components
---

# 多边形

## 基础示例

```tsx
/**
 * compact: true
 */

import React, { useState } from 'react';
import { TMap, MultiPolygon } from '@map-component/react-tmap';

const styles = {
  polygon: {
    color: '#3777FF', //面填充色
    showBorder: false, //是否显示拔起面的边线
    borderColor: '#00FFFF', //边线颜色
  },
};

// console.log(
//   'window.Tmap',
//   new window.TMap.LatLng(23.7528878404531, 109.22046387081),
// );
const path = [
  //多边形轮廓点串（LatLng数组）
  [
    [
      // new window.TMap.LatLng(23.7528878404531, 109.22046387081),
      // new window.TMap.LatLng(23.7527798580694, 109.22340253847733),
      // new window.TMap.LatLng(23.750541662115342, 109.22341326338437),
      { lat: 23.7528878404531, lng: 109.22046387081 },
      { lat: 23.7527798580694, lng: 109.22340253847733 },
      { lat: 23.750541662115342, lng: 109.22341326338437 },
    ],
  ],
];

const geometries = [
  {
    id: 'p1', //该多边形在图层中的唯一标识（删除、更新数据时需要）
    styleId: 'polygon', //绑定样式名
    paths: path, //多边形轮廓
  },
];

export default () => {
  const [color, setColor] = useState('#00FF00');

  const getStyles = () => {
    return {
      ...styles,
      polygon: {
        ...styles.polygon,
        color,
      },
    };
  };

  return (
    <div>
      <div>
        <div>改变颜色：</div>
        <button onClick={() => setColor('#00FF00')}>00FF00</button>
        <button onClick={() => setColor('#00FFFF')}>00FFFF</button>
      </div>

      <TMap
        mapKey="TOZBZ-OU2CX-JJP4Z-7FCBV-CDDJ2-AHFQZ"
        zoom={16}
        center={{ lat: 23.7528878404531, lng: 109.22046387081 }}
      >
        <MultiPolygon
          styles={getStyles()}
          geometries={geometries}
          onClick={e => {
            console.log('click', e);
          }}
          onHover={() => console.log('hover')}
        />
      </TMap>
    </div>
  );
};
```

## Props

| 名称       | 类型                                        | 说明             |
| ---------- | ------------------------------------------- | ---------------- |
| id         | String                                      | 图层 id          |
| zIndex     | Number                                      | 图层绘制顺序     |
| styles     | { [key: string]: TMap.PolygonStyleOptions } | 多边形的相关样式 |
| geometries | TMap.PolygonGeometry[]                      | 多边形数据数组   |

详细文档见官网 https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector#7
