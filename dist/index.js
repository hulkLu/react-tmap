'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : { default: e };
}

var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);

function _iterableToArrayLimit(r, l) {
  var t =
    null == r
      ? null
      : ('undefined' != typeof Symbol && r[Symbol.iterator]) || r['@@iterator'];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (((i = (t = t.call(r)).next), 0 === l)) {
        if (Object(t) !== t) return;
        f = !1;
      } else
        for (
          ;
          !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l);
          f = !0
        );
    } catch (r) {
      (o = !0), (n = r);
    } finally {
      try {
        if (!f && null != t.return && ((u = t.return()), Object(u) !== u))
          return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r &&
      (o = o.filter(function(r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? ownKeys(Object(t), !0).forEach(function(r) {
          _defineProperty(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : ownKeys(Object(t)).forEach(function(r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return e;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, 'prototype', {
    writable: false,
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true,
    },
  });
  Object.defineProperty(subClass, 'prototype', {
    writable: false,
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function() {}),
    );
    return true;
  } catch (e) {
    return false;
  }
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === 'object' || typeof call === 'function')) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError(
      'Derived constructors may only return object or undefined',
    );
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}
function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (
    (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
    iter['@@iterator'] != null
  )
    return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}
function _toPrimitive(input, hint) {
  if (typeof input !== 'object' || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || 'default');
    if (typeof res !== 'object') return res;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (hint === 'string' ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, 'string');
  return typeof key === 'symbol' ? key : String(key);
}

function loadSDK(version, key, libraries) {
  var libs = ['visualization', 'tools', 'geometry'].concat(
    _toConsumableArray(libraries || []),
  );
  return new Promise(function(resolve) {
    if (window.TMap) {
      resolve(window.TMap);
      return;
    }
    window.tmapCallback = function tmapCallback() {
      resolve(window.TMap);
    };
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://map.qq.com/api/gljs?v='
      .concat(version, '&key=')
      .concat(key, '&libraries=')
      .concat(libs.join(','), '&callback=tmapCallback');
    document.body.appendChild(script);
  });
}

var MapContext = /*#__PURE__*/ React__default['default'].createContext(
  undefined,
);

/*
 * @Author: baoluoqiang
 * @LastEditors: baoluoqiang
 * @Description:
 */
var useEvent = function useEvent(overlay, props) {
  React.useEffect(
    function() {
      if (!overlay) {
        return;
      }
      var events = [];
      var listeners = [];
      Object.keys(props).forEach(function(attr) {
        if (attr.indexOf('on') === 0) {
          var eventName = attr[2].toLowerCase() + attr.slice(3);
          events.push(eventName);
          if (typeof props[attr] === 'function') {
            listeners.push(props[attr]);
          }
        }
      });
      events.forEach(function(eventName, i) {
        if (eventName === 'getinstance') {
          return;
        }
        overlay.on(eventName, listeners[i]);
      });
      return function() {
        events.forEach(function(eventName, i) {
          if (eventName === 'getinstance') {
            return;
          }
          overlay.off(eventName, listeners[i]);
        });
      };
    },
    [overlay, props],
  );
  React.useEffect(
    function() {
      if (!overlay) {
        return;
      }
      if (props.onGetInstance && typeof props.onGetInstance === 'function') {
        props.onGetInstance(overlay);
      }
    },
    [overlay],
  );
};

var defaultCenter = {
  lat: 39.98412,
  lng: 116.307484,
};
var defaultProps = {
  version: '1.exp',
  mapKey: '',
  class: '',
  style: undefined,
  center: {
    lat: 40.040452,
    lng: 116.273486,
  },
  zoom: 17,
  minZoom: 3,
  maxZoom: 20,
  rotation: 0,
  pitch: 0,
  scale: 1,
  offset: {
    x: 0,
    y: 0,
  },
  draggable: true,
  scrollable: true,
  doubleClickZoom: true,
  baseMap: undefined,
  boundary: undefined,
  viewMode: undefined,
  showControl: true,
  duration: 500,
  libraries: [],
  onLoad: function onLoad() {},
};
var TMapComponent = /*#__PURE__*/ React__default['default'].forwardRef(function(
  props,
  ref,
) {
  var domRef = React.useRef(null);
  var _useState = React.useState(),
    _useState2 = _slicedToArray(_useState, 2),
    map = _useState2[0],
    setMap = _useState2[1];
  var mapRef = React.useRef(map);
  mapRef.current = map;
  var setMapCtrl = function setMapCtrl(mapIns, ctrlId, config) {
    if (!config) {
      mapIns.removeControl(ctrlId);
      return;
    }
    var ctrl = mapIns.getControl(ctrlId);
    var position = config.position,
      className = config.className;
    if (position) {
      ctrl.setPosition(TMap.constants.CONTROL_POSITION[position]);
    }
    if (className) {
      ctrl.setClassName(className);
    }
  };
  var initMap = function initMap() {
    loadSDK(props.version || '1.exp', props.mapKey, props.libraries).then(
      function(v) {
        if (domRef.current) {
          var centerGeo = props.center || defaultCenter;
          var center = new TMap.LatLng(centerGeo.lat, centerGeo.lng);
          var mapIns = new TMap.Map(domRef.current, {
            center: center,
            zoom: props.zoom,
            minZoom: props.minZoom,
            maxZoom: props.maxZoom,
            rotation: props.rotation,
            pitch: props.pitch,
            scale: props.scale,
            offset: props.offset,
            draggable: props.draggable,
            scrollable: props.scrollable,
            doubleClickZoom: props.doubleClickZoom,
            boundary: props.boundary,
            mapStyleId: props.mapStyleId,
            baseMap: props.baseMap,
            viewMode: props.viewMode,
            showControl: props.showControl,
          });
          // 控件的显示隐藏要前置，不然控件会先出现再隐藏
          if (props.control) {
            setMapCtrl(
              mapIns,
              TMap.constants.DEFAULT_CONTROL_ID.SCALE,
              props.control.scale,
            );
            setMapCtrl(
              mapIns,
              TMap.constants.DEFAULT_CONTROL_ID.ZOOM,
              props.control.zoom,
            );
            setMapCtrl(
              mapIns,
              TMap.constants.DEFAULT_CONTROL_ID.ROTATION,
              props.control.rotate,
            );
          }
          setMap(mapIns);
        }
      },
    );
  };
  React.useEffect(function() {
    initMap();
    return function() {
      var _mapRef$current;
      (_mapRef$current = mapRef.current) === null || _mapRef$current === void 0
        ? void 0
        : _mapRef$current.destroy();
    };
  }, []);
  useEvent(map, props);
  React.useEffect(
    function() {
      var centerGeo = props.center || defaultCenter;
      map === null || map === void 0
        ? void 0
        : map.panTo(new TMap.LatLng(centerGeo.lat, centerGeo.lng), {
            duration: props.duration || 500,
          });
    },
    [props.center],
  );
  React.useEffect(
    function() {
      map === null || map === void 0
        ? void 0
        : map.zoomTo(props.zoom || 17, {
            duration: props.duration || 500,
          });
    },
    [props.zoom],
  );
  React.useEffect(
    function() {
      map === null || map === void 0
        ? void 0
        : map.rotateTo(props.rotation || defaultProps.rotation, {
            duration: props.duration || 500,
          });
    },
    [props.rotation],
  );
  React.useEffect(
    function() {
      map === null || map === void 0
        ? void 0
        : map.pitchTo(props.pitch || defaultProps.pitch, {
            duration: props.duration || 500,
          });
    },
    [props.pitch],
  );
  React.useEffect(
    function() {
      map === null || map === void 0
        ? void 0
        : map.setScale(props.scale || defaultProps.scale);
    },
    [props.scale],
  );
  React.useEffect(
    function() {
      map === null || map === void 0
        ? void 0
        : map.setOffset(props.offset || defaultProps.offset);
    },
    [props.offset],
  );
  React.useEffect(
    function() {
      map === null || map === void 0
        ? void 0
        : map.setDraggable(props.draggable || defaultProps.draggable);
    },
    [props.draggable],
  );
  React.useEffect(
    function() {
      map === null || map === void 0
        ? void 0
        : map.setScrollable(props.scrollable || defaultProps.scrollable);
    },
    [props.scrollable],
  );
  React.useEffect(
    function() {
      map === null || map === void 0
        ? void 0
        : map.setDoubleClickZoom(
            props.doubleClickZoom || defaultProps.doubleClickZoom,
          );
    },
    [props.doubleClickZoom],
  );
  React.useEffect(
    function() {
      if (props.boundary && map) {
        map.setBoundary(props.boundary);
      }
    },
    [props.boundary],
  );
  React.useEffect(
    function() {
      if (map && props.control) {
        setMapCtrl(
          map,
          TMap.constants.DEFAULT_CONTROL_ID.SCALE,
          props.control.scale,
        );
        setMapCtrl(
          map,
          TMap.constants.DEFAULT_CONTROL_ID.ZOOM,
          props.control.zoom,
        );
        setMapCtrl(
          map,
          TMap.constants.DEFAULT_CONTROL_ID.ROTATION,
          props.control.rotate,
        );
      } else {
        map === null || map === void 0
          ? void 0
          : map.removeControl(TMap.constants.DEFAULT_CONTROL_ID.SCALE);
        map === null || map === void 0
          ? void 0
          : map.removeControl(TMap.constants.DEFAULT_CONTROL_ID.ROTATION);
        map === null || map === void 0
          ? void 0
          : map.removeControl(TMap.constants.DEFAULT_CONTROL_ID.ZOOM);
      }
    },
    [props.control, map],
  );
  // TODO: 提供给ref实例使用
  React.useImperativeHandle(
    ref,
    function() {
      return {
        map: map,
      };
    },
    [map],
  );
  React.useEffect(
    function() {
      if (map && props.onLoad) {
        props.onLoad(map);
      }
    },
    [map],
  );
  var renderChildren = function renderChildren() {
    return React__default['default'].Children.map(props.children, function(
      child,
    ) {
      if (child) {
        var cType = child.type;
        /* 针对下面两种组件不注入地图相关属性
         * 1. 明确声明不需要注入的
         * 2. DOM 元素
         */
        if (typeof cType === 'string') {
          return child;
        }
        // map 实例没有初始化时不渲染组件
        if (!map) {
          return null;
        }
        return /*#__PURE__*/ React__default['default'].cloneElement(child);
      }
      return child;
    });
  };
  return /*#__PURE__*/ React__default['default'].createElement(
    MapContext.Provider,
    {
      value: map,
    },
    /*#__PURE__*/ React__default['default'].createElement(
      'div',
      {
        ref: domRef,
        style: props.style
          ? props.style
          : {
              height: '100%',
              width: '100%',
            },
      },
      renderChildren(),
    ),
  );
});
TMapComponent.defaultProps = defaultProps;

var _excluded = ['id', 'zIndex', 'styles', 'geometries'];
function builtStyle(opt) {
  var styled = {};
  Object.keys(opt).forEach(function(k) {
    styled[k] = new TMap.CircleStyle(opt[k]);
  });
  return styled;
}
function builtGeometry(geo) {
  return geo.map(function(item) {
    return _objectSpread2(
      _objectSpread2({}, item),
      {},
      {
        center: new TMap.LatLng(item.center.lat, item.center.lng),
      },
    );
  });
}
var MultiCircleComponent = function MultiCircleComponent(_ref) {
  var id = _ref.id,
    _ref$zIndex = _ref.zIndex,
    zIndex = _ref$zIndex === void 0 ? 1 : _ref$zIndex,
    _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    _ref$geometries = _ref.geometries,
    geometries = _ref$geometries === void 0 ? [] : _ref$geometries,
    reset = _objectWithoutProperties(_ref, _excluded);
  var circleRef = React.useRef(null);
  var _useState = React.useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    overlayIns = _useState2[0],
    setOverlayIns = _useState2[1];
  var map = React.useContext(MapContext);
  React.useEffect(
    function() {
      if (map) {
        circleRef.current = new TMap.MultiCircle({
          id: id,
          map: map,
          styles: builtStyle(styles),
          geometries: builtGeometry(geometries),
          zIndex: zIndex,
        });
        setOverlayIns(circleRef.current);
      }
      return function cleanUp() {
        if (circleRef.current) {
          circleRef.current.setMap(null);
        }
      };
    },
    [map],
  );
  useEvent(overlayIns, reset);
  React.useEffect(
    function() {
      var _circleRef$current;
      circleRef === null || circleRef === void 0
        ? void 0
        : (_circleRef$current = circleRef.current) === null ||
          _circleRef$current === void 0
        ? void 0
        : _circleRef$current.setGeometries(builtGeometry(geometries));
    },
    [geometries],
  );
  React.useEffect(
    function() {
      var _circleRef$current2;
      circleRef === null || circleRef === void 0
        ? void 0
        : (_circleRef$current2 = circleRef.current) === null ||
          _circleRef$current2 === void 0
        ? void 0
        : _circleRef$current2.setStyles(builtStyle(styles));
    },
    [styles],
  );
  return null;
};
MultiCircleComponent.defaultProps = {
  id: 'default',
  styles: {},
};

function builtGeometry$1(geo) {
  return geo.map(function(item) {
    return _objectSpread2(
      _objectSpread2({}, item),
      {},
      {
        position: new TMap.LatLng(item.position.lat, item.position.lng),
      },
    );
  });
}
function builtStyle$1(opt) {
  var styled = {};
  Object.keys(opt).forEach(function(k) {
    styled[k] = new TMap.LabelStyle(opt[k]);
  });
  return styled;
}
var MultiLabelComponent = function MultiLabelComponent(props) {
  var labelRef = React.useRef(null);
  var _useState = React.useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    overlayIns = _useState2[0],
    setOverlayIns = _useState2[1];
  var map = React.useContext(MapContext);
  React.useEffect(
    function() {
      if (map) {
        labelRef.current = new TMap.MultiLabel({
          id: props.id,
          map: map,
          styles: builtStyle$1(props.styles || {}),
          geometries: builtGeometry$1(props.geometries || []),
          enableCollision: props.enableCollision,
        });
        setOverlayIns(labelRef.current);
      }
      return function cleanUp() {
        if (labelRef.current) {
          labelRef.current.setMap(null);
        }
      };
    },
    [map],
  );
  useEvent(overlayIns, props);
  React.useEffect(
    function() {
      var _labelRef$current;
      labelRef === null || labelRef === void 0
        ? void 0
        : (_labelRef$current = labelRef.current) === null ||
          _labelRef$current === void 0
        ? void 0
        : _labelRef$current.setGeometries(
            builtGeometry$1(props.geometries || []),
          );
    },
    [props.geometries],
  );
  React.useEffect(
    function() {
      var _labelRef$current2;
      labelRef === null || labelRef === void 0
        ? void 0
        : (_labelRef$current2 = labelRef.current) === null ||
          _labelRef$current2 === void 0
        ? void 0
        : _labelRef$current2.setStyles(builtStyle$1(props.styles || {}));
    },
    [props.styles],
  );
  return null;
};
MultiLabelComponent.defaultProps = {
  id: 'default',
  styles: {},
  enableCollision: false,
};

var _excluded$1 = ['id', 'styles', 'geometries'];
function builtStyle$2(opt) {
  var styled = {};
  Object.keys(opt).forEach(function(k) {
    styled[k] = new TMap.MarkerStyle(opt[k]);
  });
  return styled;
}
function builtGeometry$2(geo) {
  return geo.map(function(item) {
    return _objectSpread2(
      _objectSpread2({}, item),
      {},
      {
        position: new TMap.LatLng(item.position.lat, item.position.lng),
      },
    );
  });
}
var MultiMarkerComponent = /*#__PURE__*/ React__default['default'].forwardRef(
  function(_ref, ref) {
    var id = _ref.id,
      styles = _ref.styles,
      geometries = _ref.geometries,
      reset = _objectWithoutProperties(_ref, _excluded$1);
    var markerRef = React.useRef(null);
    var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      overlayIns = _useState2[0],
      setOverlayIns = _useState2[1];
    var map = React.useContext(MapContext);
    var init = function init() {
      if (map) {
        markerRef.current = new TMap.MultiMarker({
          id: id,
          map: map,
          styles: builtStyle$2(styles || {}),
          geometries: builtGeometry$2(geometries || []),
        });
        setOverlayIns(markerRef.current);
      }
    };
    useEvent(overlayIns, reset);
    React.useEffect(
      function() {
        init();
        return function cleanUp() {
          if (markerRef.current) {
            markerRef.current.setMap(null);
          }
        };
      },
      [map],
    );
    // 提供给ref实例使用
    React.useImperativeHandle(ref, function() {
      var _markerRef$current,
        _markerRef$current2,
        _markerRef$current3,
        _markerRef$current4,
        _markerRef$current5,
        _markerRef$current6;
      return {
        getStyles:
          markerRef === null || markerRef === void 0
            ? void 0
            : (_markerRef$current = markerRef.current) === null ||
              _markerRef$current === void 0
            ? void 0
            : _markerRef$current.getStyles,
        moveAlong:
          markerRef === null || markerRef === void 0
            ? void 0
            : (_markerRef$current2 = markerRef.current) === null ||
              _markerRef$current2 === void 0
            ? void 0
            : _markerRef$current2.moveAlong.bind(markerRef.current),
        stopMove:
          markerRef === null || markerRef === void 0
            ? void 0
            : (_markerRef$current3 = markerRef.current) === null ||
              _markerRef$current3 === void 0
            ? void 0
            : _markerRef$current3.stopMove.bind(markerRef.current),
        pauseMove:
          markerRef === null || markerRef === void 0
            ? void 0
            : (_markerRef$current4 = markerRef.current) === null ||
              _markerRef$current4 === void 0
            ? void 0
            : _markerRef$current4.pauseMove.bind(markerRef.current),
        resumeMove:
          markerRef === null || markerRef === void 0
            ? void 0
            : (_markerRef$current5 = markerRef.current) === null ||
              _markerRef$current5 === void 0
            ? void 0
            : _markerRef$current5.resumeMove.bind(markerRef.current),
        on:
          markerRef === null || markerRef === void 0
            ? void 0
            : (_markerRef$current6 = markerRef.current) === null ||
              _markerRef$current6 === void 0
            ? void 0
            : _markerRef$current6.on.bind(markerRef.current),
      };
    });
    React.useEffect(
      function() {
        var _markerRef$current7;
        markerRef === null || markerRef === void 0
          ? void 0
          : (_markerRef$current7 = markerRef.current) === null ||
            _markerRef$current7 === void 0
          ? void 0
          : _markerRef$current7.setGeometries(
              builtGeometry$2(geometries || []),
            );
      },
      [geometries],
    );
    React.useEffect(
      function() {
        var _markerRef$current8;
        markerRef === null || markerRef === void 0
          ? void 0
          : (_markerRef$current8 = markerRef.current) === null ||
            _markerRef$current8 === void 0
          ? void 0
          : _markerRef$current8.setStyles(builtStyle$2(styles || {}));
      },
      [styles],
    );
    return null;
  },
);
MultiMarkerComponent.defaultProps = {
  id: 'default',
  styles: {},
};

function builtGeometry$3(geo) {
  return geo.map(function(item) {
    return _objectSpread2(
      _objectSpread2({}, item),
      {},
      {
        position: new TMap.LatLng(item.position.lat, item.position.lng),
      },
    );
  });
}
var MarkerClusterComponent = function MarkerClusterComponent(props) {
  var map = React.useContext(MapContext);
  var _useState = React.useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    overlayIns = _useState2[0],
    setOverlayIns = _useState2[1];
  var markerClusterRef = React.useRef(null);
  React.useEffect(
    function() {
      if (map) {
        markerClusterRef.current = new TMap.MarkerCluster({
          id: props.id,
          map: map,
          geometries: builtGeometry$3(props.geometries || []),
          enableDefaultStyle: props.enableDefaultStyle,
          minimumClusterSize: props.minimumClusterSize,
          zoomOnClick: props.zoomOnClick,
          gridSize: props.gridSize,
          averageCenter: props.averageCenter,
          maxZoom: props.maxZoom,
        });
        setOverlayIns(markerClusterRef.current);
      }
      return function cleanUp() {
        if (markerClusterRef.current) {
          markerClusterRef.current.setMap(null);
        }
      };
    },
    [map],
  );
  useEvent(overlayIns, props);
  React.useEffect(
    function() {
      var _markerClusterRef$cur;
      markerClusterRef === null || markerClusterRef === void 0
        ? void 0
        : (_markerClusterRef$cur = markerClusterRef.current) === null ||
          _markerClusterRef$cur === void 0
        ? void 0
        : _markerClusterRef$cur.setGeometries(
            builtGeometry$3(props.geometries || []),
          );
    },
    [props.geometries],
  );
  return null;
};
MarkerClusterComponent.defaultProps = {
  id: 'default',
  enableDefaultStyle: true,
  minimumClusterSize: 2,
  zoomOnClick: true,
  gridSize: 60,
  averageCenter: false,
  maxZoom: 16,
};

var _excluded$2 = ['id', 'zIndex', 'styles', 'geometries'];
function builtStyle$3(opt) {
  var styled = {};
  Object.keys(opt).forEach(function(k) {
    styled[k] = new TMap.PolygonStyle(opt[k]);
  });
  return styled;
}
function buildGeometries(geometries) {
  return geometries;
}
var MultiPolygonComponent = function MultiPolygonComponent(_ref) {
  var id = _ref.id,
    zIndex = _ref.zIndex,
    styles = _ref.styles,
    geometries = _ref.geometries,
    reset = _objectWithoutProperties(_ref, _excluded$2);
  var polygonRef = React.useRef(null);
  var _useState = React.useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    overlayIns = _useState2[0],
    setOverlayIns = _useState2[1];
  var map = React.useContext(MapContext);
  var init = function init() {
    if (map) {
      polygonRef.current = new TMap.MultiPolygon({
        id: id,
        map: map,
        styles: (styles === null || styles === void 0
        ? void 0
        : styles.builtStyle)
          ? styles === null || styles === void 0
            ? void 0
            : styles.builtStyle
          : builtStyle$3(styles || {}),
        geometries: buildGeometries(geometries || []),
      });
      setOverlayIns(polygonRef.current);
    }
  };
  useEvent(overlayIns, reset);
  React.useEffect(
    function() {
      init();
      return function() {
        if (polygonRef.current) {
          polygonRef.current.setMap(null);
        }
      };
    },
    [map],
  );
  React.useEffect(
    function() {
      var _polygonRef$current;
      polygonRef === null || polygonRef === void 0
        ? void 0
        : (_polygonRef$current = polygonRef.current) === null ||
          _polygonRef$current === void 0
        ? void 0
        : _polygonRef$current.setGeometries(buildGeometries(geometries || []));
    },
    [geometries],
  );
  React.useEffect(
    function() {
      var _polygonRef$current2;
      polygonRef === null || polygonRef === void 0
        ? void 0
        : (_polygonRef$current2 = polygonRef.current) === null ||
          _polygonRef$current2 === void 0
        ? void 0
        : _polygonRef$current2.setStyles(
            (styles === null || styles === void 0
            ? void 0
            : styles.builtStyle)
              ? styles === null || styles === void 0
                ? void 0
                : styles.builtStyle
              : builtStyle$3(styles || {}),
          );
    },
    [styles],
  );
  return null;
};
MultiPolygonComponent.defaultProps = {
  id: 'default',
  styles: {},
  zIndex: 1,
};

var _excluded$3 = ['id', 'zIndex', 'styles', 'geometries'];
function builtStyle$4(opt) {
  var styled = {};
  Object.keys(opt).forEach(function(k) {
    styled[k] = new TMap.PolylineStyle(opt[k]);
  });
  return styled;
}
function buildGeometries$1(geometries) {
  return geometries;
}
var MultiPolylineComponent = function MultiPolylineComponent(_ref) {
  var id = _ref.id,
    zIndex = _ref.zIndex,
    styles = _ref.styles,
    geometries = _ref.geometries,
    reset = _objectWithoutProperties(_ref, _excluded$3);
  var polylineRef = React.useRef(null);
  var _useState = React.useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    overlayIns = _useState2[0],
    setOverlayIns = _useState2[1];
  var map = React.useContext(MapContext);
  var init = function init() {
    if (map) {
      polylineRef.current = new TMap.MultiPolyline({
        id: id,
        map: map,
        zIndex: zIndex,
        styles: builtStyle$4(styles || {}),
        geometries: buildGeometries$1(geometries || []),
      });
      setOverlayIns(polylineRef.current);
    }
  };
  useEvent(overlayIns, reset);
  React.useEffect(
    function() {
      init();
      return function cleanUp() {
        if (polylineRef.current) {
          polylineRef.current.setMap(null);
        }
      };
    },
    [map],
  );
  React.useEffect(
    function() {
      var _polylineRef$current;
      polylineRef === null || polylineRef === void 0
        ? void 0
        : (_polylineRef$current = polylineRef.current) === null ||
          _polylineRef$current === void 0
        ? void 0
        : _polylineRef$current.setGeometries(
            buildGeometries$1(geometries || []),
          );
    },
    [geometries],
  );
  React.useEffect(
    function() {
      var _polylineRef$current2;
      polylineRef === null || polylineRef === void 0
        ? void 0
        : (_polylineRef$current2 = polylineRef.current) === null ||
          _polylineRef$current2 === void 0
        ? void 0
        : _polylineRef$current2.setStyles(builtStyle$4(styles || {}));
    },
    [styles],
  );
  React.useEffect(
    function() {
      var _polylineRef$current3;
      polylineRef === null || polylineRef === void 0
        ? void 0
        : (_polylineRef$current3 = polylineRef.current) === null ||
          _polylineRef$current3 === void 0
        ? void 0
        : _polylineRef$current3.setZIndex(zIndex);
    },
    [zIndex],
  );
  return null;
};
MultiPolylineComponent.defaultProps = {
  id: 'default',
  styles: {},
  zIndex: 1,
};

var DomOverlayComponent = /*#__PURE__*/ (function(_React$Component) {
  _inherits(DomOverlayComponent, _React$Component);
  var _super = _createSuper(DomOverlayComponent);
  function DomOverlayComponent() {
    var _this;
    _classCallCheck(this, DomOverlayComponent);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.DomClass = void 0;
    _this.map = void 0;
    _this.DomClassList = void 0;
    return _this;
  }
  _createClass(DomOverlayComponent, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this$props = this.props,
          onClick = _this$props.onClick,
          createDom = _this$props.createDom;
        function DomClass(options) {
          TMap.DOMOverlay.call(this, options);
        }
        DomClass.prototype = new TMap.DOMOverlay();
        // 初始化
        DomClass.prototype.onInit = function(options) {
          this.position = options.position;
          this.data = options.data;
        };
        // 销毁时需解绑事件监听
        DomClass.prototype.onDestroy = function() {
          if (this.onClick) {
            this.ele.removeEventListener('click', this.onClick);
          }
        };
        // 创建DOM元素，返回一个DOMElement，使用this.dom可以获取到这个元素
        DomClass.prototype.createDOM = function() {
          var _this2 = this;
          this.ele = document.createElement('div');
          this.ele.style.cssText = 'position:absolute;top:0px;left:0px;';
          var dom = createDom(_objectSpread2({}, this.data));
          this.ele.append(dom);
          if (onClick) {
            this.onClick = function(e) {
              onClick(_this2.data, e);
            };
            this.ele.addEventListener('click', this.onClick);
          }
          return this.ele;
        };
        // 更新DOM元素，在地图移动/缩放后执行
        DomClass.prototype.updateDOM = function() {
          if (!this.map) {
            return;
          }
          // 经纬度坐标转容器像素坐标
          var pixel = this.map.projectToContainer(this.position);
          // 使饼图中心点对齐经纬度坐标点
          var left = ''.concat(pixel.getX() - this.dom.clientWidth / 2, 'px');
          var top = ''.concat(pixel.getY() - this.dom.clientHeight / 2, 'px');
          this.dom.style.transform = 'translate('
            .concat(left, ', ')
            .concat(top, ')');
        };
        this.map = this.context;
        this.DomClass = DomClass;
        this.initMapEle();
      },
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (this.props.data !== prevProps.data) {
          this.destroyMapEle();
          this.initMapEle();
        }
      },
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.destroyMapEle();
      },
    },
    {
      key: 'initMapEle',
      value: function initMapEle() {
        var _this3 = this;
        this.DomClassList = this.props.data.map(function(item) {
          return new _this3.DomClass({
            map: _this3.map,
            position: new TMap.LatLng(item.position.lat, item.position.lng),
            data: item,
          });
        });
      },
    },
    {
      key: 'destroyMapEle',
      value: function destroyMapEle() {
        var _this$DomClassList;
        (_this$DomClassList = this.DomClassList) === null ||
        _this$DomClassList === void 0
          ? void 0
          : _this$DomClassList.forEach(function(item) {
              item === null || item === void 0 ? void 0 : item.destroy();
            });
      },
    },
    {
      key: 'render',
      value: function render() {
        return null;
      },
    },
  ]);
  return DomOverlayComponent;
})(React__default['default'].Component);
DomOverlayComponent.contextType = MapContext;

var getLatLng = function getLatLng(latlngData) {
  return new TMap.LatLng(latlngData.lat, latlngData.lng);
};
var InfoWindowComponent = function InfoWindowComponent(props) {
  var map = React.useContext(MapContext);
  var infoWindowRef = React.useRef(null);
  useEvent(infoWindowRef.current, props);
  React.useEffect(
    function() {
      if (map) {
        var center = getLatLng(props.position);
        infoWindowRef.current = new TMap.InfoWindow({
          map: map,
          position: center,
          content: props.content,
          zIndex: props.zIndex,
          offset: props.offset,
          enableCustom: props.enableCustom,
        });
        infoWindowRef.current.on('closeclick', function() {
          if (props.onClose) {
            props.onClose();
          }
          if (props.onCloseClick) {
            props.onCloseClick();
          }
          window.dispatchEvent(new CustomEvent('close-click'));
        });
      }
      return function cleanUp() {
        if (infoWindowRef.current) {
          infoWindowRef.current.destroy();
          infoWindowRef.current.setMap(null);
        }
      };
    },
    [map],
  );
  React.useEffect(
    function() {
      if (props.visible) {
        var _infoWindowRef$curren;
        infoWindowRef === null || infoWindowRef === void 0
          ? void 0
          : (_infoWindowRef$curren = infoWindowRef.current) === null ||
            _infoWindowRef$curren === void 0
          ? void 0
          : _infoWindowRef$curren.open();
      } else {
        var _infoWindowRef$curren2;
        infoWindowRef === null || infoWindowRef === void 0
          ? void 0
          : (_infoWindowRef$curren2 = infoWindowRef.current) === null ||
            _infoWindowRef$curren2 === void 0
          ? void 0
          : _infoWindowRef$curren2.close();
      }
    },
    [props.visible],
  );
  React.useEffect(
    function() {
      var _infoWindowRef$curren3;
      infoWindowRef === null || infoWindowRef === void 0
        ? void 0
        : (_infoWindowRef$curren3 = infoWindowRef.current) === null ||
          _infoWindowRef$curren3 === void 0
        ? void 0
        : _infoWindowRef$curren3.setPosition(getLatLng(props.position));
    },
    [props.position],
  );
  React.useEffect(
    function() {
      var _infoWindowRef$curren4;
      infoWindowRef === null || infoWindowRef === void 0
        ? void 0
        : (_infoWindowRef$curren4 = infoWindowRef.current) === null ||
          _infoWindowRef$curren4 === void 0
        ? void 0
        : _infoWindowRef$curren4.setContent(props.content);
    },
    [props.content],
  );
  return null;
};
InfoWindowComponent.defaultProps = {
  id: 'default',
  content: '',
  zIndex: 0,
  offset: {
    x: 0,
    y: 0,
  },
  enableCustom: false,
};

exports.DomOverLay = DomOverlayComponent;
exports.InfoWindow = InfoWindowComponent;
exports.MapContext = MapContext;
exports.MultiCircle = MultiCircleComponent;
exports.MultiCluster = MarkerClusterComponent;
exports.MultiLabel = MultiLabelComponent;
exports.MultiMarker = MultiMarkerComponent;
exports.MultiPolygon = MultiPolygonComponent;
exports.MultiPolyline = MultiPolylineComponent;
exports.TMap = TMapComponent;
