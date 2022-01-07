(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),c=(n(0),n(218)),i={id:"pinch-gh",title:"PinchGestureHandler",sidebar_label:"Pinch"},o={unversionedId:"gesture-handlers/api/pinch-gh",id:"gesture-handlers/api/pinch-gh",isDocsHomePage:!1,title:"PinchGestureHandler",description:"A continuous gesture handler that recognizes pinch gesture. It allows for tracking the distance between two fingers and use that information to scale or zoom your content.",source:"@site/docs/gesture-handlers/api/pinch-gh.md",slug:"/gesture-handlers/api/pinch-gh",permalink:"/react-native-gesture-handler/docs/next/gesture-handlers/api/pinch-gh",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/docs/gesture-handlers/api/pinch-gh.md",version:"current",sidebar_label:"Pinch",sidebar:"docs",previous:{title:"FlingGestureHandler",permalink:"/react-native-gesture-handler/docs/next/gesture-handlers/api/fling-gh"},next:{title:"ForceTouchGestureHandler (iOS only)",permalink:"/react-native-gesture-handler/docs/next/gesture-handlers/api/force-gh"}},s=[{value:"Properties",id:"properties",children:[]},{value:"Event data",id:"event-data",children:[{value:"<code>scale</code>",id:"scale",children:[]},{value:"<code>velocity</code>",id:"velocity",children:[]},{value:"<code>focalX</code>",id:"focalx",children:[]},{value:"<code>focalY</code>",id:"focaly",children:[]}]},{value:"Example",id:"example",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"A continuous gesture handler that recognizes pinch gesture. It allows for tracking the distance between two fingers and use that information to scale or zoom your content.\nThe handler ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/gesture-handlers/basics/state#active"}),"activates")," when fingers are placed on the screen and change their position.\nGesture callback can be used for continuous tracking of the pinch gesture. It provides information about velocity, anchor (focal) point of gesture and scale."),Object(c.b)("p",null,"The distance between the fingers is reported as a scale factor. At the beginning of the gesture, the scale factor is 1.0. As the distance between the two fingers increases, the scale factor increases proportionally.\nSimilarly, the scale factor decreases as the distance between the fingers decreases.\nPinch gestures are used most commonly to change the size of objects or content onscreen.\nFor example, map views use pinch gestures to change the zoom level of the map."),Object(c.b)("p",null,"The handler is implemented using ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.apple.com/documentation/uikit/uipinchgesturerecognizer"}),"UIPinchGestureRecognizer")," on iOS and from scratch on Android."),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("p",null,"Properties provided to ",Object(c.b)("inlineCode",{parentName:"p"},"PinchGestureHandler")," do not extend ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/gesture-handlers/api/common-gh#properties"}),"common set of properties from base handler class"),"."),Object(c.b)("h2",{id:"event-data"},"Event data"),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/gesture-handlers/api/common-gh#event-data"}),"set of event attributes from base handler class"),". Below is a list of gesture event attributes specific to ",Object(c.b)("inlineCode",{parentName:"p"},"PinchGestureHandler"),":"),Object(c.b)("h3",{id:"scale"},Object(c.b)("inlineCode",{parentName:"h3"},"scale")),Object(c.b)("p",null,"The scale factor relative to the points of the two touches in screen coordinates."),Object(c.b)("h3",{id:"velocity"},Object(c.b)("inlineCode",{parentName:"h3"},"velocity")),Object(c.b)("p",null,"Velocity of the pan gesture the current moment. The value is expressed in point units per second."),Object(c.b)("h3",{id:"focalx"},Object(c.b)("inlineCode",{parentName:"h3"},"focalX")),Object(c.b)("p",null,"Position expressed in points along X axis of center anchor point of gesture"),Object(c.b)("h3",{id:"focaly"},Object(c.b)("inlineCode",{parentName:"h3"},"focalY")),Object(c.b)("p",null,"Position expressed in points along Y axis of center anchor point of gesture"),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)("p",null,"See the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"hhttps://github.com/software-mansion/react-native-gesture-handler/blob/main/example/src/recipes/scaleAndRotate/index.tsx"}),"scale and rotation example")," from ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"../../example"}),"GestureHandler Example App"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"export class PinchableBox extends React.Component {\n  _baseScale = new Animated.Value(1);\n  _pinchScale = new Animated.Value(1);\n  _scale = Animated.multiply(this._baseScale, this._pinchScale);\n  _lastScale = 1;\n  _onPinchGestureEvent = Animated.event(\n    [{ nativeEvent: { scale: this._pinchScale } }],\n    { useNativeDriver: USE_NATIVE_DRIVER }\n  );\n\n  _onPinchHandlerStateChange = (event) => {\n    if (event.nativeEvent.oldState === State.ACTIVE) {\n      this._lastScale *= event.nativeEvent.scale;\n      this._baseScale.setValue(this._lastScale);\n      this._pinchScale.setValue(1);\n    }\n  };\n\n  render() {\n    return (\n      <PinchGestureHandler\n        onGestureEvent={this._onPinchGestureEvent}\n        onHandlerStateChange={this._onPinchHandlerStateChange}>\n        <View style={styles.container} collapsable={false}>\n          <Animated.Image\n            style={[\n              styles.pinchableImage,\n              {\n                transform: [{ perspective: 200 }, { scale: this._scale }],\n              },\n            ]}\n          />\n        </View>\n      </PinchGestureHandler>\n    );\n  }\n}\n")))}p.isMDXComponent=!0},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,b=d["".concat(i,".").concat(h)]||d[h]||u[h]||c;return n?a.a.createElement(b,o(o({ref:t},l),{},{components:n})):a.a.createElement(b,o({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);