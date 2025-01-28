import{l as q}from"./lottie-web-DQweSslK.js";import{r as D,R as z}from"./react-BGaulfyx.js";function G(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var n,u,c,i,b=[],f=!0,A=!1;try{if(c=(r=r.call(t)).next,e!==0)for(;!(f=(n=c.call(r)).done)&&(b.push(n.value),b.length!==e);f=!0);}catch(g){A=!0,u=g}finally{try{if(!f&&r.return!=null&&(i=r.return(),Object(i)!==i))return}finally{if(A)throw u}}return b}}function E(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(u){return Object.getOwnPropertyDescriptor(t,u).enumerable})),r.push.apply(r,n)}return r}function I(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?E(Object(r),!0).forEach(function(n){J(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function J(t,e,r){return e=ae(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Q(t,e){if(t==null)return{};var r={},n=Object.keys(t),u,c;for(c=0;c<n.length;c++)u=n[c],!(e.indexOf(u)>=0)&&(r[u]=t[u]);return r}function x(t,e){if(t==null)return{};var r=Q(t,e),n,u;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(u=0;u<c.length;u++)n=c[u],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function Z(t,e){return ee(t)||G(t,e)||te(t,e)||ne()}function ee(t){if(Array.isArray(t))return t}function te(t,e){if(t){if(typeof t=="string")return j(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(t,e)}}function j(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function ne(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(t,e){if(typeof t!="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ae(t){var e=re(t,"string");return typeof e=="symbol"?e:String(e)}var oe=["animationData","loop","autoplay","initialSegment","onComplete","onLoopComplete","onEnterFrame","onSegmentStart","onConfigReady","onDataReady","onDataFailed","onLoadedImages","onDOMLoaded","onDestroy","lottieRef","renderer","name","assetsPath","rendererSettings"],ie=function(e,r){var n=e.animationData,u=e.loop,c=e.autoplay,i=e.initialSegment,b=e.onComplete,f=e.onLoopComplete,A=e.onEnterFrame,g=e.onSegmentStart,O=e.onConfigReady,w=e.onDataReady,h=e.onDataFailed,l=e.onLoadedImages,L=e.onDOMLoaded,S=e.onDestroy;e.lottieRef,e.renderer,e.name,e.assetsPath,e.rendererSettings;var p=x(e,oe),P=D.useState(!1),s=Z(P,2),C=s[0],_=s[1],o=D.useRef(),v=D.useRef(null),H=function(){var a;(a=o.current)===null||a===void 0||a.play()},M=function(){var a;(a=o.current)===null||a===void 0||a.stop()},F=function(){var a;(a=o.current)===null||a===void 0||a.pause()},V=function(a){var d;(d=o.current)===null||d===void 0||d.setSpeed(a)},N=function(a,d){var m;(m=o.current)===null||m===void 0||m.goToAndPlay(a,d)},B=function(a,d){var m;(m=o.current)===null||m===void 0||m.goToAndStop(a,d)},$=function(a){var d;(d=o.current)===null||d===void 0||d.setDirection(a)},k=function(a,d){var m;(m=o.current)===null||m===void 0||m.playSegments(a,d)},W=function(a){var d;(d=o.current)===null||d===void 0||d.setSubframe(a)},K=function(a){var d;return(d=o.current)===null||d===void 0?void 0:d.getDuration(a)},U=function(){var a;(a=o.current)===null||a===void 0||a.destroy(),o.current=void 0},X=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d;if(v.current){(d=o.current)===null||d===void 0||d.destroy();var m=I(I(I({},e),a),{},{container:v.current});return o.current=q.loadAnimation(m),_(!!o.current),function(){var R;(R=o.current)===null||R===void 0||R.destroy(),o.current=void 0}}};D.useEffect(function(){var y=X();return function(){return y==null?void 0:y()}},[n,u]),D.useEffect(function(){o.current&&(o.current.autoplay=!!c)},[c]),D.useEffect(function(){if(o.current){if(!i){o.current.resetSegments(!0);return}!Array.isArray(i)||!i.length||((o.current.currentRawFrame<i[0]||o.current.currentRawFrame>i[1])&&(o.current.currentRawFrame=i[0]),o.current.setSegment(i[0],i[1]))}},[i]),D.useEffect(function(){var y=[{name:"complete",handler:b},{name:"loopComplete",handler:f},{name:"enterFrame",handler:A},{name:"segmentStart",handler:g},{name:"config_ready",handler:O},{name:"data_ready",handler:w},{name:"data_failed",handler:h},{name:"loaded_images",handler:l},{name:"DOMLoaded",handler:L},{name:"destroy",handler:S}],a=y.filter(function(m){return m.handler!=null});if(a.length){var d=a.map(function(m){var R;return(R=o.current)===null||R===void 0||R.addEventListener(m.name,m.handler),function(){var T;(T=o.current)===null||T===void 0||T.removeEventListener(m.name,m.handler)}});return function(){d.forEach(function(m){return m()})}}},[b,f,A,g,O,w,h,l,L,S]);var Y=z.createElement("div",I({style:r,ref:v},p));return{View:Y,play:H,stop:M,pause:F,setSpeed:V,goToAndStop:B,goToAndPlay:N,setDirection:$,playSegments:k,setSubframe:W,getDuration:K,destroy:U,animationContainerRef:v,animationLoaded:C,animationItem:o.current}};function ue(t){var e=t.getBoundingClientRect(),r=e.top,n=e.height,u=window.innerHeight-r,c=window.innerHeight+n;return u/c}function le(t,e,r){var n=t.getBoundingClientRect(),u=n.top,c=n.left,i=n.width,b=n.height,f=(e-c)/i,A=(r-u)/b;return{x:f,y:A}}var se=function(e){var r=e.wrapperRef,n=e.animationItem,u=e.mode,c=e.actions;D.useEffect(function(){var i=r.current;if(!(!i||!n||!c.length)){n.stop();var b=function(){var g=null,O=function(){var h=ue(i),l=c.find(function(S){var p=S.visibility;return p&&h>=p[0]&&h<=p[1]});if(l){if(l.type==="seek"&&l.visibility&&l.frames.length===2){var L=l.frames[0]+Math.ceil((h-l.visibility[0])/(l.visibility[1]-l.visibility[0])*l.frames[1]);//! goToAndStop must be relative to the start of the current segment
n.goToAndStop(L-n.firstFrame-1,!0)}l.type==="loop"&&(g===null||g!==l.frames||n.isPaused)&&(n.playSegments(l.frames,!0),g=l.frames),l.type==="play"&&n.isPaused&&(n.resetSegments(!0),n.play()),l.type==="stop"&&n.goToAndStop(l.frames[0]-n.firstFrame-1,!0)}};return document.addEventListener("scroll",O),function(){document.removeEventListener("scroll",O)}},f=function(){var g=function(l,L){var S=l,p=L;if(S!==-1&&p!==-1){var P=le(i,S,p);S=P.x,p=P.y}var s=c.find(function(o){var v=o.position;return v&&Array.isArray(v.x)&&Array.isArray(v.y)?S>=v.x[0]&&S<=v.x[1]&&p>=v.y[0]&&p<=v.y[1]:v&&!Number.isNaN(v.x)&&!Number.isNaN(v.y)?S===v.x&&p===v.y:!1});if(s){if(s.type==="seek"&&s.position&&Array.isArray(s.position.x)&&Array.isArray(s.position.y)&&s.frames.length===2){var C=(S-s.position.x[0])/(s.position.x[1]-s.position.x[0]),_=(p-s.position.y[0])/(s.position.y[1]-s.position.y[0]);n.playSegments(s.frames,!0),n.goToAndStop(Math.ceil((C+_)/2*(s.frames[1]-s.frames[0])),!0)}s.type==="loop"&&n.playSegments(s.frames,!0),s.type==="play"&&(n.isPaused&&n.resetSegments(!1),n.playSegments(s.frames)),s.type==="stop"&&n.goToAndStop(s.frames[0],!0)}},O=function(l){g(l.clientX,l.clientY)},w=function(){g(-1,-1)};return i.addEventListener("mousemove",O),i.addEventListener("mouseout",w),function(){i.removeEventListener("mousemove",O),i.removeEventListener("mouseout",w)}};switch(u){case"scroll":return b();case"cursor":return f()}}},[u,n])},de=function(e){var r=e.actions,n=e.mode,u=e.lottieObj,c=u.animationItem,i=u.View,b=u.animationContainerRef;return se({actions:r,animationItem:c,mode:n,wrapperRef:b}),i},fe=["style","interactivity"],ve=function(e){var r,n,u,c=e.style,i=e.interactivity,b=x(e,fe),f=ie(b,c),A=f.View,g=f.play,O=f.stop,w=f.pause,h=f.setSpeed,l=f.goToAndStop,L=f.goToAndPlay,S=f.setDirection,p=f.playSegments,P=f.setSubframe,s=f.getDuration,C=f.destroy,_=f.animationContainerRef,o=f.animationLoaded,v=f.animationItem;return D.useEffect(function(){e.lottieRef&&(e.lottieRef.current={play:g,stop:O,pause:w,setSpeed:h,goToAndPlay:L,goToAndStop:l,setDirection:S,playSegments:p,setSubframe:P,getDuration:s,destroy:C,animationContainerRef:_,animationLoaded:o,animationItem:v})},[(r=e.lottieRef)===null||r===void 0?void 0:r.current]),de({lottieObj:{View:A,play:g,stop:O,pause:w,setSpeed:h,goToAndStop:l,goToAndPlay:L,setDirection:S,playSegments:p,setSubframe:P,getDuration:s,destroy:C,animationContainerRef:_,animationLoaded:o,animationItem:v},actions:(n=i==null?void 0:i.actions)!==null&&n!==void 0?n:[],mode:(u=i==null?void 0:i.mode)!==null&&u!==void 0?u:"scroll"})};export{ve as L};
