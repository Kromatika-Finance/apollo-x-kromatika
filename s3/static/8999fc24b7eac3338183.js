(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[316,5879],{56980:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(2784),o=function(){},a="undefined"!=typeof window;const i=a?n.useLayoutEffect:n.useEffect;var s={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};const l=a&&void 0!==window.ResizeObserver?function(){var e=(0,n.useState)(null),t=e[0],r=e[1],o=(0,n.useState)(s),a=o[0],l=o[1],c=(0,n.useMemo)((function(){return new window.ResizeObserver((function(e){if(e[0]){var t=e[0].contentRect,r=t.x,n=t.y,o=t.width,a=t.height,i=t.top,s=t.left,c=t.bottom,u=t.right;l({x:r,y:n,width:o,height:a,top:i,left:s,bottom:c,right:u})}}))}),[]);return i((function(){if(t)return c.observe(t),function(){c.disconnect()}}),[t]),[r,a]}:function(){return[o,s]}},37407:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(5163),o=r(2784),a=r(98569);const i=function(e){return o.createElement(a.Z,(0,n.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),o.createElement("path",{d:"M16.5 8.49v2.25L12 15.51l-4.5-4.77V8.49h9z",fill:"currentColor"}))}},8335:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(5163),o=r(2784),a=r(98569);const i=function(e){return o.createElement(a.Z,(0,n.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.035 16.812l-.001.002 2.121 2.121.002-.002 2.121-2.12 9.19-9.192-2.12-2.121-9.191 9.19-3.536-3.534-2.121 2.12 3.535 3.536z",fill:"currentColor"}))}},66306:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var n=r(5163),o=r(2784),a=r(62143),i=r(92036),s=r(48658),l=r(72779),c=r.n(l),u="32px",d=(0,o.forwardRef)((function(e,t){var r=e.children,i=e.required;return r?o.createElement(a.Z,(0,n.__assign)({ref:t,as:"label",className:c()({"bn-input-label-required":i},"bn-input-label"),tx:"forms",variant:"label"},e,{__css:{position:"absolute",top:"-32px",left:"0px",lineHeight:u,zIndex:"1",cursor:"text","&.bn-input-label-required::before":{display:"inline-block",marginRight:"minor",color:"error",content:'"*"'}}})):null})),f=(0,o.forwardRef)((function(e,t){return e.children?o.createElement(a.Z,(0,n.__assign)({ref:t,as:"label",className:"bn-input-label",tx:"forms",variant:"label"},e,{__css:{position:"absolute",top:"-32px",right:0,lineHeight:u,zIndex:"1",cursor:"text"}})):null}));d.displayName="TextFieldLabel";var b=(0,o.forwardRef)((function(e,t){var r=e.onFocus,i=e.onBlur,s=e.onChange,l=(0,n.__rest)(e,["onFocus","onBlur","onChange"]);return o.createElement(a.Z,(0,n.__assign)({ref:t,as:"input","data-bn-type":"input"},l,{onFocus:r,onBlur:i,onChange:s,__css:{width:"100%",height:"100%",padding:"0",outline:"none",border:"none",bg:"inherit",opacity:1,"&::placeholder":{color:"t.placeholder",fontSize:"14px"}}}))}));b.displayName="TextFieldInput";var p=(0,o.forwardRef)((function(e,t){var r=e.variant,l=void 0===r?"default":r,p=e.id,h=e.value,m=e.defaultValue,y=e.label,g=e.placeholder,v=e.error,w=e.disabled,S=e.prefix,x=e.suffix,j=e.infoText,k=void 0===j?"":j,C=e.errorText,M=void 0===C?"":C,_=e.onFocus,T=e.onBlur,I=e.onChange,E=e.boxProps,A=e.required,F=e.extraInfo,D=e.size,O=void 0===D?"lg":D,R=(0,n.__rest)(e,["variant","id","value","defaultValue","label","placeholder","error","disabled","prefix","suffix","infoText","errorText","onFocus","onBlur","onChange","boxProps","required","extraInfo","size"]),Z=o.useState(""),P=Z[0],N=Z[1],z=o.useRef(null!=h).current,B=o.useState(m),V=B[0],H=B[1];z&&h!==V&&H(h);var K=v?M:k,L=o.useState(16),W=L[0],$=L[1],U=v?"error":"info",q="string"==typeof y?y:R["area-label"],G=w?"disabled":v?"error":P;return""!==G&&(G="bn-input-status-"+G),o.createElement(i.Z,(0,n.__assign)({tx:"textFieldV2",className:c()([G]),variant:l},E,{__css:(0,n.__assign)((0,n.__assign)((0,n.__assign)((0,n.__assign)({display:"inline-flex",position:"relative",mt:y?u:"0px",mb:K.length>0?W+"px":"0px",alignItems:"center",lineHeight:1.6,height:"48px"},"lg"===O&&{height:"48px"}),"md"===O&&{height:"40px"}),"sm"===O&&{height:"32px"}),{"&.bn-input-status-focus .bn-input-label":{top:"-32px"}})}),S&&o.createElement(a.Z,{className:"bn-input-prefix"},S),o.createElement(b,(0,n.__assign)({id:p,onFocus:function(e){N("focus"),_&&_(e)},onBlur:function(e){N(""),T&&T(e)},onChange:function(e){z||H(e.target.value),I&&I(e)},ref:t,value:V,"aria-label":q,disabled:w,placeholder:g,required:A},R)),x&&o.createElement(a.Z,{className:"bn-input-suffix"},x),o.createElement(d,{htmlFor:p,required:A},y),F&&o.createElement(f,null,F),K.length>0&&o.createElement(s.Z,{ref:function(e){if(e){var t=e.getBoundingClientRect().height;$(t)}},className:"bn-input-helper-text",variant:"textField.helperText."+U,__css:{position:"absolute",bottom:-1*W-4+"px",lineHeight:W+"px"}},K))}));p.displayName="TextFieldV2";const h=p},67993:(e,t,r)=>{var n=r(752),o=r(90249);e.exports=function(e,t){return e&&n(t,o(t),e)}},55906:(e,t,r)=>{var n=r(752),o=r(18582);e.exports=function(e,t){return e&&n(t,o(t),e)}},18874:(e,t,r)=>{var n=r(86571),o=r(72517),a=r(60091),i=r(67993),s=r(55906),l=r(92175),c=r(51522),u=r(7680),d=r(19987),f=r(13483),b=r(76939),p=r(70940),h=r(99917),m=r(8222),y=r(78725),g=r(86152),v=r(73226),w=r(4714),S=r(29259),x=r(43679),j=r(90249),k=r(18582),C="[object Arguments]",M="[object Function]",_="[object Object]",T={};T[C]=T["[object Array]"]=T["[object ArrayBuffer]"]=T["[object DataView]"]=T["[object Boolean]"]=T["[object Date]"]=T["[object Float32Array]"]=T["[object Float64Array]"]=T["[object Int8Array]"]=T["[object Int16Array]"]=T["[object Int32Array]"]=T["[object Map]"]=T["[object Number]"]=T[_]=T["[object RegExp]"]=T["[object Set]"]=T["[object String]"]=T["[object Symbol]"]=T["[object Uint8Array]"]=T["[object Uint8ClampedArray]"]=T["[object Uint16Array]"]=T["[object Uint32Array]"]=!0,T["[object Error]"]=T[M]=T["[object WeakMap]"]=!1,e.exports=function e(t,r,I,E,A,F){var D,O=1&r,R=2&r,Z=4&r;if(I&&(D=A?I(t,E,A,F):I(t)),void 0!==D)return D;if(!S(t))return t;var P=g(t);if(P){if(D=h(t),!O)return c(t,D)}else{var N=p(t),z=N==M||"[object GeneratorFunction]"==N;if(v(t))return l(t,O);if(N==_||N==C||z&&!A){if(D=R||z?{}:y(t),!O)return R?d(t,s(D,t)):u(t,i(D,t))}else{if(!T[N])return A?t:{};D=m(t,N,O)}}F||(F=new n);var B=F.get(t);if(B)return B;F.set(t,D),x(t)?t.forEach((function(n){D.add(e(n,r,I,n,t,F))})):w(t)&&t.forEach((function(n,o){D.set(o,e(n,r,I,o,t,F))}));var V=P?void 0:(Z?R?b:f:R?k:j)(t);return o(V||t,(function(n,o){V&&(n=t[o=n]),a(D,o,e(n,r,I,o,t,F))})),D}},74511:(e,t,r)=>{var n=r(70940),o=r(15125);e.exports=function(e){return o(e)&&"[object Map]"==n(e)}},8109:(e,t,r)=>{var n=r(70940),o=r(15125);e.exports=function(e){return o(e)&&"[object Set]"==n(e)}},34727:(e,t,r)=>{var n=r(79882);e.exports=function(e,t){var r=t?n(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}},96058:e=>{var t=/\w*$/;e.exports=function(e){var r=new e.constructor(e.source,t.exec(e));return r.lastIndex=e.lastIndex,r}},70169:(e,t,r)=>{var n=r(50857),o=n?n.prototype:void 0,a=o?o.valueOf:void 0;e.exports=function(e){return a?Object(a.call(e)):{}}},7680:(e,t,r)=>{var n=r(752),o=r(80633);e.exports=function(e,t){return n(e,o(e),t)}},19987:(e,t,r)=>{var n=r(752),o=r(12680);e.exports=function(e,t){return n(e,o(e),t)}},76939:(e,t,r)=>{var n=r(1897),o=r(12680),a=r(18582);e.exports=function(e){return n(e,a,o)}},12680:(e,t,r)=>{var n=r(65067),o=r(47353),a=r(80633),i=r(30981),s=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)n(t,a(e)),e=o(e);return t}:i;e.exports=s},99917:e=>{var t=Object.prototype.hasOwnProperty;e.exports=function(e){var r=e.length,n=new e.constructor(r);return r&&"string"==typeof e[0]&&t.call(e,"index")&&(n.index=e.index,n.input=e.input),n}},8222:(e,t,r)=>{var n=r(79882),o=r(34727),a=r(96058),i=r(70169),s=r(6190);e.exports=function(e,t,r){var l=e.constructor;switch(t){case"[object ArrayBuffer]":return n(e);case"[object Boolean]":case"[object Date]":return new l(+e);case"[object DataView]":return o(e,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return s(e,r);case"[object Map]":return new l;case"[object Number]":case"[object String]":return new l(e);case"[object RegExp]":return a(e);case"[object Set]":return new l;case"[object Symbol]":return i(e)}}},4714:(e,t,r)=>{var n=r(74511),o=r(47826),a=r(4146),i=a&&a.isMap,s=i?o(i):n;e.exports=s},43679:(e,t,r)=>{var n=r(8109),o=r(47826),a=r(4146),i=a&&a.isSet,s=i?o(i):n;e.exports=s},95061:(e,t,r)=>{"use strict";r.r(t),r.d(t,{createMainToobar:()=>T,default:()=>E,miniToolbar:()=>I});var n=r(52322),o=r(2784),a=r(39727),i=r(55521),s=r(69392),l=r(11409),c=r(90404),u=r(38896),d=r(4946),f=r(23131),b=r(61870),p=r(70268),h=r(37127),m=r(30998);const y=e=>[e.miniMultiChartType,e.setMiniMultiChartType],g=e=>[e.lastSelectedMiniMultiChartWindow,e.setLastSelectedMiniMultiChartWindow],v=e=>[e.miniMultiChartWindows,e.setMiniMultiChartWindows],w=e=>[e.interval,e.setInterval],S=e=>[e.chartType,e.setChartType],x=e=>[e.priceType,e.setPriceType],j=(e,t,r)=>{const n=(0,h.lv)(e,r),a=(0,h.lv)(t,r);((e,t)=>{const r=s.k.Store.createStore(e),[n,a]=r(s.k.Store.getInterval),[i,l]=(0,m.Qy)(t)(w);(0,o.useEffect)((()=>l(n)),[n,l]),(0,p.Z)((()=>a(i)))})(n,a),((e,t)=>{const r=s.k.Store.createStore(e),[n,a]=r(s.k.Store.getOriginalChartStyle),[i,l]=(0,m.Nu)(t)(S);(0,o.useEffect)((()=>l(n)),[n,l]),(0,p.Z)((()=>a(i)))})(n,a),((e,t)=>{const r=s.k.Store.createStore(e),[n,a]=r(s.k.Store.getPriceType),[i,l]=(0,m.kH)(t)(x);(0,o.useEffect)((()=>l(n)),[n,l]),(0,p.Z)((()=>a(i)))})(n,a)};var k=r(59111);const C=o.lazy((()=>Promise.all([r.e(6067),r.e(7128)]).then(r.bind(r,17128)))),M=o.lazy((()=>r.e(6107).then(r.bind(r,46107)))),_=o.lazy((()=>r.e(7212).then(r.bind(r,67212)))),T=({headerSlot:e,closeHandler:t,isPro:r,showFullscreenIcon:o,showChartModeDropdown:u,tabKeys:d})=>{const f=t?(0,n.jsx)(c.Z,{onRemove:t},void 0):null,b=d.map((e=>s.k.Store.Tabs[e]));return({onSymbolChange:t})=>({namespace:n,components:{intervalFilter:c,indicator:d,chartStyleDropdown:p,cameraButton:h,compareButton:m,tabs:y,fullscreen:g,chartModeDropdown:v,priceDropdown:w,symbolTabs:S}})=>{const x=s.k.Store.createStore(n),[j]=x(s.k.Store.getChartMode),[k]=x(s.k.Store.getActiveTab),C=(0,a.I0)(),{isMobile:M}=(0,i.F)(),_=(0,a.v9)(l.Xj),T=j===s.k.Store.ChartMode.Single,I=s.k.Store.Tabs.TradingView,E=s.k.Store.Tabs.Depth,A=T&&(k!==E||M)?c({}):null,F=T&&(k!==E||M)?d():null,D=u&&T&&k===I?p():null,O=T&&(k!==E||M)?w():null,R=T&&k===I?h():null,Z=T&&k===I?m():null,P=T||M?null:S({onSymbolChange:t}),N=T?y({tabKeys:b}):null,z=o&&T?g({expanded:!_,onClick:C.pageStore.toggleFullScreen}):null,B=u?v():null;return{medium:{head:[e,A,F,D,R,Z,O,P],mid:[],tail:[N,z,B,f],useDraggableHandle:r&&!_},small:{head:[A]}}}},I=({onRemove:e,onResume:t})=>({components:{intervalFilter:r,indicator:n,miniSymbolStatus:o,resumeWindow:a,closeButton:i,priceDropdown:s}})=>{const l=r({});return{medium:{head:[l,n(),s()],mid:[o({showChange:!0})],tail:[a({onResume:t}),i({onRemove:e})],useDraggableHandle:!1},small:{head:[l]}}},E=({symbol:e,globalNamespace:t,namespace:r,useMiniTicker:i,toolbarConfig:c})=>{const h=s.k.Store.createStore(r),[w]=h(s.k.Store.getChartMode),[S]=h(s.k.Store.getActiveTab),x=(0,u.zO)(),E=(0,a.v9)((e=>e.products.products)),A=(0,a.v9)(l.Xj),F=(0,u.d0)(),D=(0,u.Vh)(),O=(0,o.useRef)(E),R=(0,o.useRef)(D);O.current=E,R.current=D;const{genSymbolDisplay:Z}=(0,u.nN)(),P="light"===(0,u.Fg)(),N=(0,o.useMemo)((()=>P?"white":"black"),[P]);((e,t)=>{((e,t)=>{const r=s.k.Store.createStore(e),[n,a]=r(s.k.Store.getChartMode),[i,l]=(0,m.PH)(t)(y);(0,o.useEffect)((()=>l(n)),[n,l]),(0,p.Z)((()=>a(i)))})(e,t),((e,t)=>{const r=s.k.Store.createStore(e),[n,a]=r(s.k.Store.getMiniMultiChartWindows),[i,l]=(0,m.Lb)(t)(v);(0,o.useEffect)((()=>l(n)),[n,l]),(0,p.Z)((()=>a(i)))})(e,t),((e,t)=>{const r=s.k.Store.createStore(e),[n,a]=r(s.k.Store.getLastSelectedMiniMultiChartWindow),[i,l]=(0,m.zz)(t)(g);(0,o.useEffect)((()=>l(n)),[n,l]),(0,p.Z)((()=>a(i)))})(e,t),j(e,t,0),j(e,t,1),j(e,t,2),j(e,t,3)})(r,t),(0,o.useEffect)((()=>{A&&(S===s.k.Store.Tabs.TradingView?d.ee.emit("HIDE_FLASH_ORDER",void 0):d.ee.emit("SHOW_FLASH_ORDER",void 0))}),[S,A]);const z=(0,o.useCallback)((e=>{const t=R.current[e]||{},{fullName:r}=Z(t);return r}),[Z]),B=(0,o.useCallback)((e=>{if(""===e)return e;const{curSymbol:t}=(0,b.Ib)(O.current,f.L6,"delivery"),{contractStatus:r}=R.current[e]||{},n=null==r?void 0:r.toLowerCase();return"close"===n||void 0===n?t:e}),[x]),V=(0,o.useCallback)((()=>{return e=void 0,t=void 0,n=function*(){return{isReadyToTrade:!0,openTime:0}},new((r=void 0)||(r=Promise))((function(o,a){function i(e){try{l(n.next(e))}catch(e){a(e)}}function s(e){try{l(n.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,s)}l((n=n.apply(e,t||[])).next())}));var e,t,r,n}),[]),H=(0,o.useCallback)((({symbol:e})=>{const t=R.current[e];t&&F({symbol:t.symbol})}),[F]),K=(0,o.useCallback)((e=>(0,n.jsx)(o.Suspense,Object.assign({fallback:null},{children:(0,n.jsx)(M,{symbol:e.symbol,namespace:e.namespace,useMiniTicker:w===s.k.Store.ChartMode.Four||i},void 0)}),void 0)),[w,i]),L=(0,o.useCallback)((e=>(0,n.jsx)(o.Suspense,Object.assign({fallback:null},{children:(0,n.jsx)(C,{symbol:e.symbol,namespace:e.namespace,useMiniTicker:i},void 0)}),void 0)),[i]),W=(0,o.useCallback)((e=>(0,n.jsx)(o.Suspense,Object.assign({fallback:null},{children:(0,n.jsx)(_,{namespace:e.namespace,symbol:e.symbol,forceHorizontalMode:!0},void 0)}),void 0)),[]);return(0,n.jsx)(s.k.Containers.Chart,{namespace:r,symbol:e,hostAddress:k.ll.staticBaseUrl,themeName:N,getSymbolDisplayName:z,checkTradeStatus:V,checkMiniSymbolAvaliablility:B,beforeMiniChartSymbolChange:H,hasDoneFetchingSymbols:Object.keys(R.current).length>0,generateMiniToolbar:I,generateToolbar:T(c),basicKline:K,tradingView:L,depth:W,isHiddenLogo:!0,electron:{}},void 0)}},30998:(e,t,r)=>{"use strict";r.d(t,{Nu:()=>m,Qy:()=>h,zz:()=>b,PH:()=>d,Lb:()=>f,kH:()=>p,Gt:()=>g,xG:()=>u});var n=r(74388),o=r(69392),a=r(44174);const i={keys:new Set,setItem(e,t,r){if("function"!=typeof r)return new Promise((r=>{this.keys.add(e),this[e]=t,r()}));this.keys.add(e),this[e]=t,r(null)},getItem(e,t){if("function"!=typeof t)return new Promise((t=>{t(this[e])}));t(this[e])},removeItem(e,t){if("function"!=typeof t)return new Promise((t=>{this[e]=void 0,this.keys.delete(e),t()}));this[e]=void 0,this.keys.delete(e),t(null)},clear(e){if("function"!=typeof e)return new Promise((e=>{this.keys.forEach((e=>{this[e]=void 0})),this.keys.clear(),e()}));this.keys.forEach((e=>{this[e]=void 0})),this.keys.clear(),e(null)},create(){return Object.create(this)}},s={setItem(e,t,r){const n="object"==typeof t?JSON.stringify(t):t;if("function"!=typeof r)return new Promise(((t,r)=>{try{window.localStorage.setItem(e,n),t()}catch(e){r(e)}}));try{window.localStorage.setItem(e,n),r(null)}catch(e){r(e)}},getItem(e,t){if("function"!=typeof t)return new Promise((t=>{t((0,a.As)(window.localStorage.getItem(e)))}));t(null,(0,a.As)(window.localStorage.getItem(e)))},removeItem(e,t){if("function"!=typeof t)return new Promise((t=>{window.localStorage.removeItem(e),t()}));window.localStorage.removeItem(e),t(null)},clear(e){if("function"!=typeof e)return new Promise((e=>{window.localStorage.clear(),e()}));window.localStorage.clear(),e(null)},create(){return Object.create(this)}};function l(e){const t=new Map;return function(r,...n){if(t.has(r))return t.get(r);const o=e(r,...n);return t.set(r,o),o}}function c({stateKey:e,storageKey:t=e,defaultValue:r,validator:o,storage:l}){const c=void 0!==(u=l)?u:"undefined"!=typeof window?s.create():i.create();var u,d;return(0,n.Z)((d=(t,n)=>({[e]:r,[`set${(0,a.kC)(e)}`]:r=>t({[e]:r}),[`toggle${(0,a.kC)(e)}`]:()=>t({[e]:!n()[e]})}),(n,i,s)=>{const l=d((r=>{n(r);const o=i()[e];c.setItem(t,o)}),i);let u={};return"undefined"!=typeof window&&c.getItem(t,((t,n)=>{let a;a="function"==typeof o?o(n)?n:r:null!=n?n:r,u={[e]:a}})),Object.assign(Object.assign(Object.assign({},l),u),{[`clear${(0,a.kC)(e)}`](){c.removeItem(t),n(l)}})}))}const u=(0,n.Z)((e=>({disableMouse:!1,setDisableMouse:t=>e({disableMouse:t})}))),d=l((function(e){return c({stateKey:"miniMultiChartType",storageKey:`${e}-chart-miniMultiChartType`,defaultValue:o.k.Store.ChartMode.Single})})),f=l((function(e){return c({stateKey:"miniMultiChartWindows",storageKey:`${e}-chart-miniMultiChartWindows`,defaultValue:["","","",""]})})),b=l((function(e){return c({stateKey:"lastSelectedMiniMultiChartWindow",storageKey:`${e}-chart-lastSelectedMiniMultiChartWindow`,defaultValue:0})})),p=l((function(e){return c({stateKey:"priceType",storageKey:`${e}-chart-priceType`,defaultValue:o.k.Store.PriceType.Last})})),h=l((function(e){return c({stateKey:"interval",storageKey:`${e}-chart-interval`,defaultValue:o.k.Store.DisplayIntervals["1d"]})})),m=l((function(e){return c({stateKey:"chartType",storageKey:`${e}-chart-type`,defaultValue:o.k.Store.OriginalChartStyle.CandleBar})}));var y=r(15729);const g=(0,n.Z)((e=>({posCalcData:{},setPosCalcData:(t,r,n)=>e((0,y.ZP)((e=>{e.posCalcData[t]||(e.posCalcData[t]={}),t&&r&&e.posCalcData[t][r]!==n&&(e.posCalcData[t][r]=n)})))})))}}]);