"use strict";(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[1813],{90467:(e,t,r)=>{r.d(t,{Z:()=>L});var n,o=r(56666),a=r(48658),s=r(62143),i=r(65760),l=r(37227),c=r(2784),u=r(39727),d=r(64988),f=r(58560),p=r(38896),m=r(97060),h=r(49464),v=r(24838),b=r(57162),y=r(52322);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}e=r.hmd(e),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var x="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},w=(0,c.memo)((function(e){return(0,y.jsx)(a.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({__css:v.C8},e))})),k={},j=function(e){var t=e.symbol,r=e.lastPrice,n=e.difference,o=void 0===n?"--":n,a=e.quoteVolume,g=e.bigThan,x=e.tickSize,j=void 0===x?1e-7:x,S=e.pair,L=e.contractType,C=e.noFavorite,E=e.changeSymbol,M=e.lastFlag,O=e.isGridWidget,_=e.isDefaultChange,H=e.needBreakline,D=e.activityUrl,Z=(0,p.Kn)()[t]||k,T=g?"buy":"sell",G=(0,p.U1)(j),I=(0,p.tZ)()||"en",P=(0,p.C7)(G).format,F=(0,p.C7)(0).format,K=(0,p.ux)(),z=K.favorites,N=K.setFavorite,W=((0,c.useContext)(b.Z).activeTab,"change"===(0,u.v9)((function(e){return e.futureMarket.radioWord}))),R=(0,m.yk)().getI18n,U=(0,c.useMemo)((function(){return M>0?"buy":M<0?"sell":"t.grey600"}),[M]),B=z.indexOf(t),A=(0,c.useCallback)((function(e){e.preventDefault(),e.stopPropagation(),N(t,B,z)}),[N,!1,S,L,t,B,z]),q=(h.I_,(0,c.useCallback)((function(e){var r,n;if(null!==(r=(n=e.target).closest)&&void 0!==r&&r.call(n,".".concat(f.mA))){var o=Z.cnDoc,a=Z.enDoc;(0,f.JO)({lng:I,cnDoc:o,enDoc:a})}else e.metaKey||e.ctrlKey||(e.preventDefault(),E&&E(t))}),[Z,I,E,t])),V=(0,c.useMemo)((function(){var t=(0,l.H)(e,R),r=t.symbol,n=t.contractTypeI18n,o=t.deliveryDateFormat;return(0,y.jsxs)(c.Fragment,{children:[(0,y.jsxs)("span",{className:"symbol",children:["".concat(r)," "]}),(0,y.jsxs)("div",{style:{width:H&&O?"100%":"auto",display:"flex",alignItems:"center"},children:[(0,y.jsxs)("div",{children:[n," ",o]}),(0,y.jsx)(f.yK,{url:D})]})]})}),[e,R,H,O,Z,D]);return(0,y.jsx)(s.Z,{className:"futuresMarketColumnWrap",children:(0,y.jsxs)(s.Z,{className:"content",onClick:q,children:[(0,y.jsxs)("div",{className:"item",style:h.X3.first,children:[C?null:(0,y.jsx)("div",{className:"favorite ".concat(B>-1?"primary":""),onClick:A,children:(0,y.jsx)(i.Z,{size:12})}),(0,y.jsx)(w,{className:"name",children:V})]}),!O||_?(0,y.jsx)("div",{className:"item",style:h.X3.second,children:(0,y.jsx)(w,{sx:{color:U},children:""+P(r)})}):null,(0,y.jsx)("div",{className:"item",style:h.X3.third,children:(0,y.jsx)(d.XI,{sx:{color:W?T:"t.grey600"},__css:v.C8,children:W?"".concat(o,"%"):"".concat(F(a))})})]})})};x(j,"useSymbolConfigInfo{}\nuseTk{tk}\nuseLng{}\nuseFormat{{ format }}\nuseFormat{{ format: formatZero }}\nuseMarketFavorites{{ favorites, setFavorite }}\nuseContext{{ activeTab }}\nuseSelector{radioWord}\nuseFuturesLanguage{{ getI18n: getFutI18n }}\nuseMemo{priceColor}\nuseCallback{favoriteFunc}\nuseCallback{handleClick}\nuseMemo{symbolItem}",(function(){return[p.Kn,p.U1,p.tZ,p.C7,p.C7,p.ux,u.v9,m.yk]}));var S=(0,c.memo)(j);const L=S;var C,E;(C="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(C.register(w,"TextPrice","/Users/leo/projects/mono-2/web/apps/cloud-trade-sdk/src/futures/components/Market/Column.js"),C.register(k,"emptyObject","/Users/leo/projects/mono-2/web/apps/cloud-trade-sdk/src/futures/components/Market/Column.js"),C.register(j,"Column","/Users/leo/projects/mono-2/web/apps/cloud-trade-sdk/src/futures/components/Market/Column.js"),C.register(S,"default","/Users/leo/projects/mono-2/web/apps/cloud-trade-sdk/src/futures/components/Market/Column.js")),(E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&E(e)},85874:(e,t,r)=>{r.d(t,{Z:()=>d});var n,o=r(2784),a=r(92036),s=r(48658),i=r(49464),l=r(52322);e=r.hmd(e),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c=(0,o.memo)((function(e){var t=e.name;return(0,l.jsx)(a.Z,{variant:"columns.space",sx:{px:"sm",height:i.O$,"&::after":{content:'""',position:"absolute",width:"2px",background:"#F0B90B",borderRadius:"2px",height:"7px",left:"11px",top:"calc(50% - 3px)"}},children:(0,l.jsx)(s.Z,{__css:{fontSize:0,color:"t.grey600",fontWeight:"normal"},sx:{color:"#CACED3"},children:t.toUpperCase()})})})),u=c;const d=u;var f,p;(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(f.register(c,"DeliveryTag","/Users/leo/projects/mono-2/web/apps/cloud-trade-sdk/src/futures/components/Market/DeliveryTag.js"),f.register(u,"default","/Users/leo/projects/mono-2/web/apps/cloud-trade-sdk/src/futures/components/Market/DeliveryTag.js")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)},53533:(e,t,r)=>{r.d(t,{Z:()=>j});var n,o=r(2867),a=r(56666),s=r(62143),i=r(65184),l=r.n(i),c=r(2784),u=r(39727),d=r(45219),f=r(38896),p=r(24838),m=r(52322);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}e=r.hmd(e),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},y=(0,d.W8)((function(e){var t=e.itemElement,r=e.itemData,n=e.itemHeight;return(0,m.jsx)(s.Z,{style:{height:n,zIndex:2e3},sx:p.R3,children:(0,m.jsx)(t,v({},r))})})),g=(0,d.JN)((function(e){var t=e.items,r=e.itemElement,n=e.itemHeight;return(0,m.jsx)("div",{style:{overflow:"auto"},children:Boolean(t.length)&&t.map((function(e,t){return(0,m.jsx)(y,{index:t,itemElement:r,itemData:e,itemHeight:n},"".concat(e.symbolDisplay,"-").concat(e.symbol))}))})})),x=[],w=function(e){var t=e.itemElement,r=e.itemHeight,n=e.dataSource,a=(0,u.I0)(),s=(0,f._n)(),i=(0,c.useState)({items:[]}),d=(0,o.Z)(i,2),p=d[0],h=d[1];return(0,c.useEffect)((function(){h({items:n})}),[n]),(0,c.useEffect)((function(){x=[],n.forEach((function(e){e.isDelivery?x.includes("".concat(e.pair,"-").concat(e.contractType))||x.push("".concat(e.pair,"-").concat(e.contractType)):x.includes(e.symbol)||x.push(e.symbol)}))}),[n.length]),(0,m.jsx)(g,{distance:1,items:p.items,onSortEnd:function(e){var t=e.oldIndex,r=e.newIndex,n=x[t];x[t]=x[r],x[r]=n,a.futureMarket.oprFuturesFavorite({values:x,isLoggedIn:s}),h((function(e){var n=e.items;return{items:l()(n,t,r)}}))},itemElement:t,itemHeight:r})};b(w,"useDispatch{dispatch}\nuseIsLogin{isLoggedIn}\nuseState{[data, changeData]({ items: [] })}\nuseEffect{}\nuseEffect{}",(function(){return[u.I0,f._n]}));var k=(0,c.memo)(w);const j=k;var S,L;(S="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(S.register(y,"SortableItem","/Users/leo/projects/mono-2/web/apps/cloud-trade-sdk/src/futures/components/Market/DragList.js"),S.register(g,"SortableList","/Users/leo/projects/mono-2/web/apps/cloud-trade-sdk/src/futures/components/Market/DragList.js"),S.register(x,"defaultIndex","/Users/leo/projects/mono-2/web/apps/cloud-trade-sdk/src/futures/components/Market/DragList.js"),S.register(w,"DragList","/Users/leo/projects/mono-2/web/apps/cloud-trade-sdk/src/futures/components/Market/DragList.js"),S.register(k,"default","/Users/leo/projects/mono-2/web/apps/cloud-trade-sdk/src/futures/components/Market/DragList.js")),(L="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&L(e)},29428:(e,t,r)=>{r.d(t,{Z:()=>_});var n,o=r(56666),a=r(18495),s=r(62143),i=r(48658),l=r(30749),c=r(27911),u=r(75548),d=r(2784),f=r(38896),p=r(92392),m=r(97060),h=r(90467),v=r(49464),b=r(57162),y=r(85874),g=r(53533),x=r(15509),w=r(77295),k=r(24838),j=r(52322);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}e=r.hmd(e),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var C="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},E=function(e,t){var r=t[e];return"string"==typeof r?r:"".concat(r.symbolDisplay,"-").concat(r.symbol)},M=(0,d.memo)(C((function(e){var t=e.filterFunc,r=e.sortFunc,n=e.noFavorite,o=e.noFiat,S=e.changeSymbol,C=e.isGridWidget,M=e.isDefaultChange,O=e.needBreakline,_=e.openShotCut,H=e.onKeyDownCallback,D="light"===(0,f.Fg)(),Z=(0,m.ZK)("","futures-ui").getI18n,T=(0,x.Pj)(),G=T.nextTickers,I=T.loading,P=(0,d.useContext)(b.Z),F=P.activeTab,K=P.keyword,z=(0,f.iB)(),N=(0,d.useMemo)((function(){var e=[];return G.forEach((function(t){var r,n=t.contractVal,o=t.volume,a=t.symbol,s=t.isDelivery;(0,p.cZ)(t)&&(s&&(t.quoteVolume=Number(n)*Number(o||(null===(r=z[a])||void 0===r?void 0:r.volume)||0)),e.push(t))})),e}),[z,G]),W=(0,d.useMemo)((function(){return N.filter(t)}),[N,t]),R=(0,w.C)({data:W,activeTab:F,keyword:K}),U=(0,d.useMemo)((function(){return R.sort(r)}),[R,r]),B=(0,d.useMemo)((function(){return(0,j.jsxs)(s.Z,{sx:{textAlign:"center"},children:[D?(0,j.jsx)(l.Z,{size:96}):(0,j.jsx)(c.Z,{size:96}),(0,j.jsx)(i.Z,{variant:"body2",color:"t.placeholder",pt:C?"18px":"5px",children:Z("futures-Market-NoSymbolUnder","No symbol under this category")})]})}),[Z,C,D]),A=(0,u.D)((function(e){return null!=e&&e.isPushItem?(0,j.jsx)(y.Z,{name:null==e?void 0:e.baseAsset}):(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(h.Z,L(L({},e),{},{noFavorite:n,noFiat:o,changeSymbol:S,isGridWidget:C,isDefaultChange:M,needBreakline:O,openShotCut:_}))})})),q=C?v.O$:24;return F===v.I_?(0,j.jsx)(g.Z,{dataSource:U,itemElement:A,itemHeight:q}):(0,j.jsx)(a.a,{sx:k.kb,dataSource:U,loading:I,itemElement:A,itemKey:E,itemHeight:q,openShotCut:_,onKeyDownCallback:H,emptyChildren:B})}),"useTheme{}\nuseLanguage{{ getI18n }}\nuseFuturesMarket{{ nextTickers: tickers, loading }}\nuseContext{{ activeTab, keyword }}\nuseProduct{productMap}\nuseMemo{nextTickers}\nuseMemo{ftRows}\nusePushAssetItem{rows}\nuseMemo{sortRows}\nuseMemo{emptyChildren}\nusePersistCallback{RenderItem}",(function(){return[f.Fg,m.ZK,x.Pj,f.iB,w.C,u.D]}))),O=M;const _=O;var H,D;(H="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(H.register(E,"itemKey","/Users/leo/projects/mono-2/web/apps/cloud-trade-sdk/src/futures/components/Market/MarketData.js"),H.register(M,"MarketData","/Users/leo/projects/mono-2/web/apps/cloud-trade-sdk/src/futures/components/Market/MarketData.js"),H.register(O,"default","/Users/leo/projects/mono-2/web/apps/cloud-trade-sdk/src/futures/components/Market/MarketData.js")),(D="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&D(e)},37312:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(2784),o=r(47101),a=r(49464),s=r(52322);e=r.hmd(e);var i,l=r(34406);(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&i(e);var c=function(e){var t=e.sx,r=e.value,i=e.search,c=void 0===i?function(){return!1}:i,u=e.openShotCut,d=n.useRef(),f=(0,(0,a.wC)().getI18n)("searchHolder",{defaultValue:"Search"});return(0,n.useEffect)((function(){u&&l.electron&&setTimeout((function(){d.current&&d.current.focus()}),100)}),[u]),(0,s.jsx)(o.Z,{sx:t,value:r,search:c,placeholder:f,ref:d})};("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(c,"useRef{ref}\nuseTrdMarketLanguage{{ getI18n }}\nuseEffect{}",(function(){return[a.wC]}));var u=n.memo(c);const d=u;var f,p;(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(f.register(c,"SearchComponent","/Users/leo/projects/mono-2/web/apps/cloud-trade-sdk/src/futures/components/Market/Search.js"),f.register(u,"default","/Users/leo/projects/mono-2/web/apps/cloud-trade-sdk/src/futures/components/Market/Search.js")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)},28745:(e,t,r)=>{r.d(t,{Z:()=>W});var n=r(56666),o=r(5163),a=r(2784),s=r(98569);const i=function(e){return a.createElement(s.Z,(0,o.__assign)({width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},e),a.createElement("path",{fillRule:"evenodd",d:"M5.85 19.952a8.698 8.698 0 010-12.301l5.443-5.444a1 1 0 011.414 0l5.444 5.444A8.698 8.698 0 015.849 19.952zm11.265-1.825a5.17 5.17 0 00-1.453-4.466l-2.955-2.954a1 1 0 00-1.414 0L8.34 13.661a5.17 5.17 0 00-1.454 4.466 6.7 6.7 0 01.379-9.062L12 4.328l4.737 4.737a6.699 6.699 0 01.379 9.062zM12 20.5a3.178 3.178 0 002.247-5.425L12 12.83l-2.246 2.246A3.178 3.178 0 0012 20.5z",clipRule:"evenodd"}))};var l=r(65760),c=r(62143);const u=function(e){return a.createElement(s.Z,(0,o.__assign)({width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M16 18.172a1 1 0 11-1.414 1.414L8 13a1 1 0 010-1.414L14.586 5A1 1 0 0116 6.414l-5.879 5.879 5.88 5.879z"}))},d=function(e){return a.createElement(s.Z,(0,o.__assign)({width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M8 17.586A1 1 0 009.414 19L16 12.414A1 1 0 0016 11L9.414 4.414A1 1 0 108 5.828l5.879 5.879L8 17.586z"}))};var f={position:"absolute",left:"-1px",height:"100%",cursor:"pointer",width:"58px",display:"flex",alignItems:"center",justifyContent:"flex-start",color:"icons.close"},p={position:"absolute",cursor:"pointer",width:"58px",right:"-1px",height:"100%",display:"flex",alignItems:"center",justifyContent:"flex-end",color:"icons.close"},m=r(33941);const h=(0,a.memo)((function(e){var t=e.children,r=e.speed,n=e.zIndex,s=e.bgColor,i=(0,a.useRef)(null),l=(0,o.__read)((0,a.useState)(!1),2),h=l[0],v=l[1],b=(0,o.__read)((0,a.useState)(!1),2),y=b[0],g=b[1],x=(0,m.z)((function(){var e=i.current||{},t=e.scrollWidth,r=void 0===t?0:t,n=e.clientWidth,o=void 0===n?0:n,a=e.scrollLeft,s=void 0===a?0:a,l=r>Math.ceil(o+s);v(l),g(Boolean(s))}),[v,g,i],1e3);(0,a.useEffect)((function(){x()}),[x]);var w=(0,a.useMemo)((function(){return function(){return function(e){return{position:"relative",display:"flex",".leftArrow":(0,o.__assign)((0,o.__assign)({},f),{background:function(t){return"linear-gradient(to right, "+t.colors[e]+" 42.24%, transparent 95.69%)"},svg:{"&:hover":{color:"t.third"}}}),".rightArrow":(0,o.__assign)((0,o.__assign)({},p),{background:function(t){return"linear-gradient(to left, "+t.colors[e]+" 42.24%, transparent 95.69%)"},svg:{"&:hover":{color:"t.third"}}}),".container":{whiteSpace:"nowrap",overflow:"auto","::-webkit-scrollbar":{display:"none"}}}}(s)}}),[s]);(0,a.useEffect)((function(){if("ResizeObserver"in window){var e=new ResizeObserver(x);return i.current&&e.observe(i.current),function(){return e.disconnect()}}return window.addEventListener("resize",x,{capture:!1,passive:!0}),function(){window.removeEventListener("resize",x)}}),[x,i.current]);var k=(0,a.useCallback)((function(){var e;"number"==typeof(null===(e=null==i?void 0:i.current)||void 0===e?void 0:e.scrollLeft)&&(i.current.scrollLeft-=r||30,i.current.scrollLeft<0&&(i.current.scrollLeft=0),x())}),[x]),j=(0,a.useCallback)((function(){var e;"number"==typeof(null===(e=null==i?void 0:i.current)||void 0===e?void 0:e.scrollLeft)&&(i.current.scrollLeft+=r||30,x())}),[x]);return a.createElement(c.Z,{sx:w},y&&a.createElement("div",{onClick:k,className:"leftArrow",style:{zIndex:n}},a.createElement(u,{size:20,color:"icons.close"})),a.createElement("div",{className:"container",ref:i,onScroll:x},t),h&&a.createElement("div",{className:"rightArrow",onClick:j,style:{zIndex:n}},a.createElement(d,{size:20,color:"icons.close"})))}));var v=r(21030),b={display:"flex",flexWrap:"wrap",fontWeight:"500"},y={bg:"popupBg",color:"t.primary",borderRadius:"4px",boxShadow:"elevation2",maxHeight:"320px",overflow:"auto",".tabBtn":{textAlign:"left",padding:"8px 16px",maxWidth:"227px","&:hover":{bg:"bg3",color:"primary"}},".tabText":{fontSize:"14px",maxWidth:"227px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}},g={bg:"popupBg",color:"t.primary",borderRadius:"4px",boxShadow:"elevation2",".tabBtn":{textAlign:"left",padding:"8px 16px",maxWidth:"227px","&:hover":{bg:"bg3",color:"primary"}},".tabText":{fontSize:"14px",maxWidth:"227px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}},x={display:"flex",width:"259px",flexWrap:"wrap",bg:"popupBg",color:"t.primary",padding:"10px 16px 0 16px",borderRadius:"4px",boxShadow:"elevation2",".tabBtn":{textAlign:"center",minWidth:"48px",padding:"0 4px",mb:"16px",maxWidth:"227px"},".tabText":{fontSize:"14px",maxWidth:"227px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}},w={alignItems:"center",justifyContent:"center",color:"t.third",cursor:"pointer",fontSize:0,p:"minor",borderRadius:"2px","&:hover":{color:"primary"},"& .btnChildren":{display:"flex",alignItems:"center"}},k={color:"t.yellow"},j=(0,a.forwardRef)((function(e,t){var r=e.active,n=(0,o.__rest)(e,["active"]),s=r?(0,o.__assign)((0,o.__assign)({},w),k):w;return a.createElement(c.Z,(0,o.__assign)({sx:s},n,{ref:t}))})),S=(0,a.forwardRef)((function(e,t){var r=e.active,n=(0,o.__rest)(e,["active"]),s=r?(0,o.__assign)((0,o.__assign)({},w),k):w;return a.createElement(c.Z,(0,o.__assign)({sx:s},n,{ref:t}))}));const L=a.memo(j);var C=r(55742),E=r(40887),M=r(48658),O=(0,a.memo)((function(e){var t=e.trees,r=e.getCoin,n=e.activeTab,s=e.tooltipProps,i=t.length>3;return a.createElement(c.Z,{sx:i?x:g},t.map((function(e){var t=e.description,i=e.sectionKey,l=e.display,c=t?v.Z:a.Fragment,u=(0,o.__assign)({arrow:!0,placement:"right",tip:t,container:function(){},sx:{display:"initial"}},s);return a.createElement(c,(0,o.__assign)({key:i},t?u:{}),a.createElement("div",{className:"tabBtn"},a.createElement(S,{key:i,onClick:function(){return r({display:l,sectionKey:i})},active:i===n},a.createElement(M.Z,{className:"tabText"},l))))})))}));(0,a.memo)((function(e){var t=e.trees,r=e.getCoin,n=e.activeTab,s=e.tooltipProps;return a.createElement(c.Z,{sx:y},t.map((function(e){var t=e.description,i=e.sectionKey,l=e.display,c=t?v.Z:a.Fragment,u=(0,o.__assign)({arrow:!0,placement:"right",tip:t,container:function(){},sx:{display:"initial"}},s);return a.createElement(c,(0,o.__assign)({key:i},t?u:{}),a.createElement(j,{active:i===n,onClick:function(){return r({display:l,sectionKey:i})},className:"tabBtn"},l))})))}));const _=O,H=(0,a.memo)((function(e){var t=e.className,r=e.trees,n=e.display,o=e.sectionKey,s=e.defaultDisplay,i=e.defaultSectionKey,l=e.activeTab,c=e.switchTab,u=e.style,d=(0,a.useCallback)((function(e){c(e)}),[c]),f=(0,a.useMemo)((function(){var e=r.filter((function(e){return e.sectionKey===o}));return e.length?e[0].display:s}),[r,n,s]),p=(0,a.useMemo)((function(){return r.filter((function(e){return e.sectionKey===o})).length?o:i}),[r,o,i]);return a.createElement(C.ZP,{enablePortal:!0,trigger:"hover",overlay:a.createElement(_,{trees:r,getCoin:d,activeTab:l}),style:u},a.createElement(L,{"data-testid":l+"Type",active:l===p,className:t},a.createElement("div",{className:"btnChildren"},a.createElement("span",null,f),a.createElement(E.Z,{size:16}))))})),D=(0,a.memo)((function(e){var t=e.list,r=e.activeTab,n=e.switchTab,s=e.tabsStyle,i=(0,o.__read)((0,a.useState)(""),2),l=i[0],u=i[1],d=(0,o.__read)((0,a.useState)(r||""),2),f=d[0],p=d[1],m=function(e){u(e.display),p(e.sectionKey),n(e.sectionKey)};return a.createElement(c.Z,{sx:b,className:"tabBoxWrap"},t.map((function(e){var t=e.sectionKey,i=e.display,c=e.description,d=e.trees,h=c?v.Z:a.Fragment,b={arrow:!0,tip:c,placement:"top",container:function(){}};return a.createElement(h,(0,o.__assign)({key:t},c?b:{}),(null==d?void 0:d.length)?a.createElement(H,{className:"tabBoxBtn",trees:d,display:l,sectionKey:f,defaultDisplay:i,defaultSectionKey:t,activeTab:r,switchTab:m,style:s}):a.createElement(L,{active:t===r,onClick:function(){u(""),p(""),n(t)},style:s,className:"tabBtn"},i))})))}));var Z,T=r(49464),G=r(52322);function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}e=r.hmd(e),(Z="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&Z(e);var F="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},K=!0,z=function(e){e.width;var t=e.activeTab,r=e.switchTab,n=(e.w,e.tabs),o=(0,a.useMemo)((function(){var e=n,t=e.findIndex((function(e){return e.sectionKey===T.UC})),r=e.find((function(e){return e.sectionKey===T.UC}));return t>-1&&K&&(K=!1,e.splice(t,1,P(P({},r),{},{display:(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)("span",{children:[" ",r.display]}),(0,G.jsx)(i,{size:14,sx:{color:"t.yellow200",ml:"3px",fontSize:"16px",position:"relative",bottom:"2px"}})]})}))),[{sectionKey:T.I_,display:(0,G.jsx)(l.Z,{size:14}),description:"",ruleNumber:"1000"}].concat(e)}),[n]);return(0,G.jsx)(h,{speed:30,zIndex:3,children:(0,G.jsx)(D,{list:o,activeTab:t,switchTab:r})})};F(z,"useMemo{list}");var N=(0,a.memo)(z);const W=N;var R,U;(R="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(R.register(K,"flag","/Users/leo/projects/mono-2/web/apps/cloud-trade-sdk/src/futures/components/Market/TabList.js"),R.register(z,"TabList","/Users/leo/projects/mono-2/web/apps/cloud-trade-sdk/src/futures/components/Market/TabList.js"),R.register(N,"default","/Users/leo/projects/mono-2/web/apps/cloud-trade-sdk/src/futures/components/Market/TabList.js")),(U="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&U(e)},52416:(e,t,r)=>{r.r(t),r.d(t,{default:()=>E});var n,o=r(56666),a=r(2867),s=r(76940),i=r(62143),l=r(2784),c=r(39727),u=r(97060),d=r(38896),f=r(49464),p=r(39406),m=r(37312),h=r(57162),v=r(15509),b=r(29428),y=r(28745),g=r(24838),x=r(15676),w=r(52322);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}e=r.hmd(e),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var S=function(e){e.name;var t=e.noFavorite,r=e.noFiat,n=e.isGridWidget,o=void 0!==n&&n,k=(e.electronUpdateTabs,e.openShotCut),S=e.selectedCallback,L=e.changeSymbolCb,C=void 0===L?null:L,E=e.w,M=(0,c.I0)(),O=(0,d.G3)(),_=(0,c.v9)((function(e){return e.futureMarket.sortInfo})),H=(0,c.v9)((function(e){return e.futureMarket.radioWord})),D=(0,l.useRef)(),Z=(0,l.useState)(!1),T=(0,a.Z)(Z,2),G=T[0],I=T[1],P=(0,u.iP)().width,F=(0,l.useState)(!0),K=(0,a.Z)(F,2),z=K[0],N=K[1],W=(0,d.zv)(),R=(0,d.d0)();R=C||R;var U=(0,s.Z)("futuresSort"),B=(0,a.Z)(U,2),A=B[0],q=B[1],V=(0,u.yk)().getI18n,X=(0,l.useMemo)((function(){return O?f.mW:f.UD}),[O]),$=W.map((function(e){return j(j({},e),{},{display:e.display||V(e.displayKey)})}));(0,l.useEffect)((function(){I(D.current.offsetWidth>256),N(D.current.offsetWidth<400)}),[P,E]);var J=(0,l.useCallback)((function(e){R({symbol:e}),S&&S()}),[R,S]),Q=(0,v.Mp)(X,$),Y=Q.tabState,ee=Y.activeTab,te=Y.switchTab,re=Q.searchState,ne=re.keyword,oe=re.search,ae=Q.favoritesState,se=Q.filterFunc,ie=(0,v.e)("change"===H,o,G,ee),le=ie.sortFunc,ce=ie.sortHeaders,ue=(0,l.useCallback)((function(e){return M.futureMarket.updateState({sortInfo:e})}),[M.futureMarket]),de=(0,l.useCallback)((function(e){var t=$.find((function(t){return t.sectionKey=e}));f.jQ[null==t?void 0:t.ruleNumber]&&M.futureMarket.updateState({radioWord:f.jQ[t.ruleNumber].key}),te(e)}),[M.futureMarket,te,$]),fe=(0,l.useCallback)((function(e){return M.futureMarket.updateState({radioWord:e})}),[M.futureMarket]);return(0,l.useEffect)((function(){A?ue(A):ee===f.I_?ue({index:null,desc:0}):ue({index:2,desc:2})}),[ee,A,ue]),(0,w.jsx)(i.Z,{ref:D,sx:g.NL,children:(0,w.jsxs)(h.Z.Provider,{value:{favorite:ae,activeTab:ee,keyword:ne},children:[(0,w.jsxs)("div",{onClick:f.UW,children:[(0,w.jsx)(i.Z,{className:"searchWrap",pt:o?2:3,px:3,children:(0,w.jsx)(m.Z,{value:ne,search:oe,openShotCut:k,sx:g.oo})}),(0,w.jsx)("div",{className:"tabListWrap",children:(0,w.jsx)(y.Z,{tabs:$,switchTab:de,activeTab:ee,width:P,w:E})}),(0,w.jsx)("div",{className:"sortHeaderWrap",children:(0,w.jsx)(p.Z,{group:ce,active:_,getGroupOrderKey:function(e){q(e),ue(e)},showSort:!ne,renderProps:(0,w.jsx)(x.Z,{value:H,change:fe})})})]}),(0,w.jsx)(b.Z,{filterFunc:se,sortFunc:le,noFavorite:t,noFiat:r,changeSymbol:J,isGridWidget:o,isDefaultChange:G,needBreakline:z,openShotCut:k,onKeyDownCallback:function(){setTimeout((function(){S&&S()}),100)}})]})})};("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(S,"useDispatch{dispatch}\nuseDeliveryPath{isDelivery}\nuseSelector{sortInfo}\nuseSelector{radioWord}\nuseRef{wrapWidth}\nuseState{[marketStyle, changeStyle](false)}\nuseWindowSize{{ width }}\nuseState{[needBreakline, setNeedBreakline](true)}\nuseFuturesMarketTabs{marketTabs}\nuseChangeSymbol{changeSymbolCallback}\nuseLocalStorage{[futuresSort, setFuturesSort]}\nuseFuturesLanguage{{ getI18n }}\nuseMemo{defaultTab}\nuseEffect{}\nuseCallback{changeSymbol}\nuseMarketFilter{{\n    tabState: { activeTab, switchTab },\n    searchState: { keyword, search },\n    favoritesState: favorite,\n    filterFunc,\n  }}\nuseFuturesMarketSort{{ sortFunc, sortHeaders }}\nuseCallback{switchSort}\nuseCallback{switchTabWithReset}\nuseCallback{switchRadio}\nuseEffect{}",(function(){return[c.I0,d.G3,c.v9,c.v9,u.iP,d.zv,d.d0,s.Z,u.yk,v.Mp,v.e]}));var L=l.memo(S),C=L;const E=C;var M,O;(M="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(M.register(S,"MarketComponent","/Users/leo/projects/mono-2/web/apps/cloud-trade-sdk/src/futures/components/Market/index.js"),M.register(L,"Market","/Users/leo/projects/mono-2/web/apps/cloud-trade-sdk/src/futures/components/Market/index.js"),M.register(C,"default","/Users/leo/projects/mono-2/web/apps/cloud-trade-sdk/src/futures/components/Market/index.js")),(O="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&O(e)},40887:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(5163),o=r(2784),a=r(98569);const s=function(e){return o.createElement(a.Z,(0,n.__assign)({width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},e),o.createElement("path",{d:"M14.5 10.29a1 1 0 011 1v.353a1 1 0 01-.273.686l-2.5 2.65a1 1 0 01-1.454 0l-2.5-2.65a1 1 0 01-.273-.686v-.353a1 1 0 011-1h5z"}))}},65760:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(5163),o=r(2784),a=r(98569);const s=function(e){return o.createElement(a.Z,(0,n.__assign)({width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},e),o.createElement("path",{d:"M21.766 10.858c-1.2 1.462-3.245 3.61-3.847 4.237a.5.5 0 00-.135.422c.12.801.503 3.402.696 5.192.1 1.09-.685 1.561-1.576 1.136-1.525-.768-3.77-1.726-4.622-2.124a.543.543 0 00-.454-.002c-.862.392-3.132 1.332-4.674 2.097-.9.423-1.695-.049-1.594-1.136.195-1.773.641-4.338.786-5.151a.502.502 0 00-.14-.444c-.638-.639-2.76-2.785-3.97-4.239-.507-.625-.18-1.518.82-1.681 1.707-.323 4.203-.806 4.967-.954a.496.496 0 00.343-.252c.4-.736 1.783-3.276 2.712-4.93.85-1.68 1.404-1.027 1.95.003a523.652 523.652 0 012.68 4.936c.07.132.195.224.342.253.759.15 3.223.633 4.908.956.989.163 1.31 1.053.808 1.681z"}))}},18495:(e,t,r)=>{r.d(t,{a:()=>z,H:()=>T});var n,o=r(5163),a=r(2784),s=r(13980),i=r.n(s),l=r(8301),c=r(12436),u=r.n(c),d=r(61049),f=r.n(d),p=r(18149),m=r.n(p),h=r(62143),v=r(72779),b=r.n(v),y=r(20573),g=r(7688),x=r(28316),w=r(10687),k={position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",textAlign:"center"},j=(0,a.memo)((function(e){var t=e.show,r=void 0===t||t,n=e.fullScreen,s=void 0!==n&&n,i=e.inner,l=e.children,c=e.zIndex;if(!r)return l||null;var u=a.createElement(w.Z,{sx:(0,o.__assign)({zIndex:c||"100"},k)});return s?a.createElement(a.Fragment,null,l,a.createElement("div",{style:{position:i?"absolute":"fixed",top:0,left:0,width:"100%",height:"100%",background:"radial-gradient(rgba(0, 0, 0, 0.05) 30%, transparent)",zIndex:2e3}},u)):a.createElement(a.Fragment,null,l,u)}));j.show=function(e){var t=(void 0===e?{}:e).fullScreen,r=void 0!==t&&t;n||(n=document.createElement("div"),document.body.appendChild(n)),x.render(a.createElement(j,{fullScreen:r}),n)},j.hide=function(){n&&x.render(a.createElement(j,{show:!1}),n)};const S=j;var L={fontSize:0,textAlign:"center",padding:"8px 6px",color:"t.third"};const C=(0,a.memo)((function(e){var t=e.children,r=(0,o.__rest)(e,["children"]);return a.createElement(h.Z,(0,o.__assign)({sx:L,className:"emptyLine"},r),t)}));var E=r(44613),M=r(74628),O=r(76699),_=function(){var e=(0,O.$)().i18n.language||"undefined"!=typeof window&&window.localStorage.i18nextLng||"en";return(0,M.yV)(e)};l.t7.displayName="FixedSizeList";var H,D,Z,T=(0,a.memo)((function(e){var t=e.className,r=e.children,n=(0,o.__rest)(e,["className","children"]),s=b()("list-item-entity",t);return a.createElement(a.Fragment,null,a.createElement("div",(0,o.__assign)({className:s},n),r),a.createElement(y.xB,{styles:{".list-item-entity":{display:"flex",alignItems:"center",justifyContent:" space-between",flex:1}}}))})),G=function(){},I=(0,o.__read)([38,40],2),P=I[0],F=I[1],K=function(e){function t(t){var r,n=e.call(this,t)||this;return n.state={isScrolling:!1,isHover:!1,activeId:0,scrollOffset:0},n.renderItem=function(e){var t=e.index,r=e.style,s=n.props,i=s.dataSource,l=s.itemElement,c=s.openShotCut,u=n.state.activeId,d=!!c&&u===t;return a.createElement(a.Fragment,null,a.createElement("div",{style:r,className:"list-item-container"},a.createElement(l,(0,o.__assign)({},i[t],{activeId:u,active:d}))),a.createElement(y.xB,{styles:{".list-item-container":{display:"flex",alignItems:"center",overflowX:"hidden"}}}))},n.renderChild=function(){var e=n.props,t=e.dataSource,r=void 0===t?[]:t,s=e.itemKey,i=e.itemHeight,c=e.loading,u=void 0!==c&&c,d=e.loadWithContent,f=void 0!==d&&d,p=e.direction,m=e.listSx,h=void 0===m?{}:m,v=e.emptyText,b=e.emptyChildren,y=n.state.isScrolling,x=!u&&0===r.length;n.ListStyle=(0,o.__assign)({direction:p},h);var w=a.createElement(g.Z,{className:"list-auto-sizer"},(function(e){var t=e.width,c=e.height;return a.createElement(l.t7,{style:(0,o.__assign)({direction:p},h),className:"fixed-size-list",width:t,height:c,itemCount:r.length,itemSize:i,itemData:r,itemKey:s,overscanCount:y?10:1,outerRef:n.outerListRef,innerRef:n.innerListRef,useIsScrolling:!0},n.renderItem)}));return u?f?a.createElement(a.Fragment,null,a.createElement(S,{fullScreen:!0,inner:!0}),w):a.createElement(S,{fullScreen:!0,inner:!0}):x?a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexGrow:1}},b||(v?a.createElement(C,null,v):null)):w},n.handleScroll=u()(n.handleScroll.bind(n),200),n.handleMouseEnter=n.handleMouseEnter.bind(n),n.handleMouseLeave=n.handleMouseLeave.bind(n),n.handleKeyDown=n.handleKeyDown.bind(n),n.keyScroll=n.keyScroll.bind(n),n.outerListRef=a.createRef(null),n.innerListRef=a.createRef(null),n.maxHeight=t.itemHeight,n.minHeight=.1,n.eventAttached=!1,n.keys=((r={})[P]=0,r[F]=0,r),n}return(0,o.__extends)(t,e),t.prototype.componentDidMount=function(){this.props.openShotCut&&(this.eventAttached=!0,document.addEventListener("keydown",this.handleKeyDown),this.keyScroll())},t.prototype.componentDidUpdate=function(){this.props.openShotCut&&(this.eventAttached||document.addEventListener("keydown",this.handleKeyDown),this.keyScroll())},t.prototype.componentWillUnmount=function(){this.eventAttached&&(this.eventAttached=!1,document.removeEventListener("keydown",this.handleKeyDown)),this.clearTimer()},t.prototype.shouldComponentUpdate=function(e,t){return m()(e.dataSource,this.props.dataSource)?e.loading!==this.props.loading||e.itemHeight!==this.props.itemHeight||e.listSx!==this.props.listSx:!(t.isScrolling&&this.state.isScrolling||t.isHover!==this.state.isHover)},t.prototype.handleMouseEnter=function(){this.setState({isHover:!0})},t.prototype.handleMouseLeave=function(){this.setState({isHover:!1})},t.prototype.handleScroll=function(){var e=this;this.state.isHover&&(this.setState({isScrolling:!0}),this.clearTimer(),this.timer=setTimeout((function(){e.setState({isScrolling:!1})}),1e3))},t.prototype.clearTimer=function(){this.timer&&(clearTimeout(this.timer),this.timer=null)},t.prototype.handleKeyDown=function(e){var t,r=e.keyCode,n=e.metaKey,o=e.ctrlKey,a=this.props,s=a.itemHeight,i=a.dataSource,l=a.openShotCut,c=a.onKeyDownCallback,u=a.tradeType,d=this.state.activeId;if(l&&(13===r||r===P||r===F)&&(e&&e.preventDefault(),e.stopPropagation(),this.keys=((t={})[P]=Math.max(this.minHeight,this.state.scrollOffset-s),t[F]=Math.min(this.state.scrollOffset+s,this.maxHeight),t),this.keys[r]&&this.scrollItem(this.keys[r]),13===r)){var p=i.filter((function(e,t){return t===d})),m=p.length?p[0]:{};f()(c)&&c({data:m,metaKey:n,ctrlKey:o,tradeType:u})}},t.prototype.keyScroll=function(){this.innerListRef.current&&(this.maxHeight=this.innerListRef.current.style.height.replace("px","")||this.props.itemHeight),this.outerListRef.current&&this.outerListRef.current.scrollTo({left:0,top:this.state.scrollOffset,behavior:"auto"})},t.prototype.scrollItem=function(e){this.setState({activeId:Math.floor(e/this.props.itemHeight),scrollOffset:e})},t.prototype.render=function(){var e=this.props,t=e.variant,r=e.sx,n=e.tx,o=e.scrollPerf,s=void 0===o||o;return a.createElement(h.Z,{onScroll:s?this.handleScroll:G,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,__css:{position:"relative",display:"flex",flexDirection:"column",flexGrow:1},className:"list-container",variant:t,sx:r,tx:n},this.renderChild())},t.propTypes={dataSource:i().array.isRequired,itemElement:i().elementType.isRequired,itemHeight:i().number.isRequired,itemKey:i().func,sx:i().object,tx:i().string,variant:i().string,loading:i().bool,openShotCut:i().bool,onKeyDownCallback:i().func,emptyText:i().string,tradeType:i().string},t}(a.Component),z=(D=(H=K).displayName||H.name||"Component",(Z=function(e){var t,r=(t=_(),(0,E.cp)(t));return a.createElement(H,(0,o.__assign)({},e,{direction:r}))}).displayName="WithDirection("+D+")",Z)},33941:(e,t,r)=>{r.d(t,{z:()=>s});var n=r(5163),o=r(2784),a=r(76635),s=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var s=(0,o.useRef)((function(){}));return s.current=e,(0,o.useCallback)(a.throttle.apply(void 0,(0,n.__spreadArray)([function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return s.current.apply(this,e)}],(0,n.__read)(t))),[])}},53858:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(2784),o=r(22706);function a(){return n.useContext(o.Z)}}}]);