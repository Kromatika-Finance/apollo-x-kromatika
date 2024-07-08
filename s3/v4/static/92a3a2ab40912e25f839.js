"use strict";(self.webpackChunkcloud_onchain_trade_sdk=self.webpackChunkcloud_onchain_trade_sdk||[]).push([[798],{95795:(e,t,s)=>{s.d(t,{t:()=>n});var a=s(66618),l=s(27618),r=s(52983),i=s(69738);const n=e=>{const{tip:t,children:s,tipClassName:n,mode:o="hover"}=e,[c,m]=(0,i.Z)(!1),[u,d]=(0,i.Z)(!0),h="click"===o,x=(0,r.useCallback)((()=>{m(!0)}),[m]),p=(0,r.useCallback)((()=>{m(!1)}),[m]),b=(0,r.useCallback)((()=>{d(!u),m(!c)}),[u,c,d,m]);return r.createElement(a.J2,{open:c},r.createElement(a.i9,null,r.createElement(a.yk,{side:"top",align:"start",className:"outline-none p-3 rounded",onMouseEnter:h&&u?void 0:x,onMouseLeave:h&&u?void 0:p,onEscapeKeyDown:p,onInteractOutside:p},r.createElement(a.QH,null),r.createElement("div",{className:(0,l.cn)("flex item-center text-t-secondary text-caption whitespace-pre-line",n)},t))),r.createElement(a.xo,{asChild:!0,onMouseEnter:h&&u?void 0:x,onMouseLeave:h&&u?void 0:p,onClick:h?b:x,className:"cursor-pointer"},s))}},18401:(e,t,s)=>{s.d(t,{r:()=>n});var a=s(52983),l=s(54402),r=s(27618);const i=a.memo((e=>{const{style:t,className:s,children:l}=e;return a.createElement("div",{className:(0,r.cn)("list-container relative",s),style:t},l)})),n=e=>{const{dataSource:t,itemElement:s,itemKey:n,emptyChildren:o,itemHeight:c,loading:m,loadWithContent:u,style:d,className:h,rowWrapper:x=!0,maxContent:p=!0,extraBottomElement:b,extraData:f}=e,y=!m&&0===t.length;return m&&!u?a.createElement(l.g,{fullScreen:!0,inner:!0}):y?a.createElement(i,{className:h,style:d},o||null):a.createElement(i,{className:h,style:d},t.map(((e,l)=>{const i=a.createElement(s,{key:n(l,t),index:l,...e,data:e,extraData:f});return x?a.createElement("div",{style:{height:`${c}px`},className:(0,r.cn)({"min-w-max":p}),key:n(l,t)},i):i})),Boolean(b)&&b)}},69738:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s(28370).Z},28370:(e,t,s)=>{s.d(t,{Z:()=>r});var a=s(52983),l=function(e,t){return"boolean"==typeof t?t:!e};const r=function(e){return(0,a.useReducer)(l,e)}},30798:(e,t,s)=>{s.r(t),s.d(t,{default:()=>be});var a=s(97458),l=s(78922),r=s(52983),i=s(44478),n=s(90471),o=s(18401),c=s(54402),m=s(37404),u=s(72262),d=s(20355);const h={time:130,symbol:120,side:100,leverage:110,type:110,size:100,price:100,fee:105,pnl:110,detail:76,direction:94,entryTime:140,expireTime:140,initialAmount:120,entryPrice:120,expirePrice:120,dumbPnl:140,status:150,hash:130},x=["time","symbol","side","leverage","type","size","price","fee","pnl","detail"].reduce(((e,t)=>e+h[t]),0),p=["symbol","direction","entryTime","expireTime","initialAmount","entryPrice","expirePrice","dumbPnl","status"].reduce(((e,t)=>e+h[t]),0),b="flex text-t-secondary items-center text-captionSub",f="justify-start",y={default:`${b}`,time:`${b}`,symbol:`${b}`,side:`${b}`,leverage:`${b}`,type:`${b}`,size:`${b} ${f}`,price:`${b} ${f}`,fee:`${b} ${f}`,hash:`${b} ${f}`,pnl:`${b} ${f}`,detail:`${b} justify-end`,direction:`${b}`,entryTime:`${b}`,expireTime:`${b}`,initialAmount:`${b}`,entryPrice:`${b}`,expirePrice:`${b}`,dumbPnl:`${b} ${f}`,status:`${b} ${f}`};var v=s(27618),E=s(5837),g=s(64617),N=s(28216),C=s(95795),P=s(25375);const $=({hash:e})=>{const{useColumnTime:t,getI18n:s}=(0,r.useContext)(d.T),a=t(e);return(0,r.useMemo)((()=>r.createElement("div",{className:y.time,style:{width:`${h.time}px`,flex:`1 1 ${h.time}px`}},r.createElement("div",{className:"flex flex-col items-start"},r.createElement("div",{className:"text-subtitle2 text-t-primary"},a),r.createElement("div",{className:"mt-0.5 text-caption1 text-t-third"},s("userinfo-history-column-timeUTC","Time (UTC)"))))),[a,s])},T=({hash:e})=>{const{useColumnSymbol:t,locale:s,Link:a="a",useColumnLeverage:l,useSymbolLogo:i,getI18n:n}=(0,r.useContext)(d.T),{symbol:o,symbolName:c,isLong:m}=t(e),u=l(e),x=i(o);return(0,r.useMemo)((()=>r.createElement("div",{className:y.symbol,style:{width:`${h.symbol}px`,flex:`1 1 ${h.symbol}px`}},r.createElement("img",{src:x,className:"h-5 w-5 mr-2"}),r.createElement(a,{className:"flex flex-col items-start",href:`/${s}/futures/v2/${o}`},r.createElement("div",{className:"text-t-primary text-subtitle2"},c||o),r.createElement("div",{className:(0,v.cn)("text-caption1 flex justify-center items-center mt-0.5",m?"text-t-buy":"text-t-sell")},m?n("userinfo-positions-long","Long"):n("userinfo-positions-short","Short")," ",u)))),[a,n,m,u,s,x,o,c])},w=({hash:e})=>{const{useColumnType:t,getI18n:s}=(0,r.useContext)(d.T),a=t(e);return(0,r.useMemo)((()=>r.createElement("div",{className:y.type,style:{width:`${h.type}px`,flex:`1 1 ${h.type}px`}},r.createElement("div",{className:"flex flex-col items-start"},r.createElement("div",{className:"text-subtitle2 text-t-primary"},a),r.createElement("div",{className:"mt-0.5 text-caption1 text-t-third"},s("userinfo-history-column-type","Type"))))),[s,a])},M=({hash:e})=>{const{useColumnInitialCollateral:t,getI18n:s}=(0,r.useContext)(d.T),a=t(e);return(0,r.useMemo)((()=>r.createElement("div",{className:y.type,style:{width:`${h.type}px`,flex:`1 1 ${h.type}px`}},r.createElement("div",{className:"flex flex-col items-start"},r.createElement("div",{className:"text-subtitle2 text-t-primary"},a),r.createElement("div",{className:"mt-0.5 text-caption1 text-t-third"},s("userinfo-positions-column-initialMargin","Initial Margin"))))),[s,a])},I=({hash:e})=>{const{useColumnSize:t,getI18n:s}=(0,r.useContext)(d.T),a=t(e);return(0,r.useMemo)((()=>r.createElement("div",{className:y.size,style:{width:`${h.size}px`,flex:`1 1 ${h.size}px`}},r.createElement("div",{className:"flex flex-col items-start"},r.createElement("div",{className:"text-subtitle2 text-t-primary"},a),r.createElement("div",{className:"mt-0.5 text-caption1 text-t-third"},s("userinfo-column-size",{defaultValue:"Size ({{symbol}})",symbol:i.e.USD}))))),[a,s])},L=({hash:e})=>{const{useColumnPrice:t,getI18n:s}=(0,r.useContext)(d.T),a=t(e);return(0,r.useMemo)((()=>r.createElement("div",{className:y.price,style:{width:`${h.price}px`,flex:`1 1 ${h.price}px`}},r.createElement("div",{className:"flex flex-col items-start"},r.createElement("div",{className:"text-subtitle2 text-t-primary"},a),r.createElement("div",{className:"mt-0.5 text-caption1 text-t-third"},s("userinfo-history-column-closePrice","Close Price"))))),[a,s])},S=({hash:e})=>{const{useColumnFee:t,getI18n:s}=(0,r.useContext)(d.T),a=t(e);return(0,r.useMemo)((()=>r.createElement("div",{className:y.fee,style:{width:`${h.fee}px`,flex:`1 1 ${h.fee}px`}},r.createElement("div",{className:"flex flex-col items-start"},r.createElement("div",{className:"text-subtitle2 text-t-primary"},a),r.createElement("div",{className:"mt-0.5 text-caption1 text-t-third"},s("userinfo-history-column-fee","Fee"))))),[a,s])},D=({hash:e})=>{const{getI18n:t,useClassicPerp:s}=(0,r.useContext)(d.T),{chain:a}=(0,N.m)(),{useClassicDataByFiled:l}=s(),i=l(e,"txHash");return(0,r.useMemo)((()=>r.createElement("div",{className:y.hash,style:{width:`${h.hash}px`,flex:`1 1 ${h.hash}px`}},r.createElement("div",{className:"flex flex-col items-start"},r.createElement(C.t,{tip:r.createElement("div",{className:"w-[282px]"},r.createElement("span",{className:"whitespace-pre-line break-words text-caption"},i))},r.createElement("a",{target:"_blank",rel:"noreferrer",href:`${a?.blockExplorers?.default.url.replace(/\/$/,"")}/tx/${i}`,className:"text-subtitle2 text-t-link cursor-pointer"},`${i}`.slice(0,11),"...")),r.createElement("div",{className:"mt-0.5 text-caption1 text-t-third flex gap-0.5"},t("userinfo-history-column-hash","Transaction Hash"))))),[i,a?.blockExplorers?.default.url,t])},k=({hash:e})=>{const{useColumnPNL:t}=(0,r.useContext)(d.T),{PNL:s,ROI:a,isPNLNegative:l,isROINegative:i}=t(e);return(0,r.useMemo)((()=>r.createElement("div",{className:y.pnl,style:{width:`${h.pnl}px`,flex:`1 1 ${h.pnl}px`}},r.createElement("div",{className:"flex flex-col !items-start"},r.createElement("div",{className:"text-subtitle2 whitespace-nowrap",style:{color:void 0===l?"rgb(var(--colors-t-secondary))":l?"rgb(var(--colors-t-sell))":"rgb(var(--colors-t-buy))"}},s),r.createElement("div",{className:"text-caption1 text-t-third mt-0.5"},"PNL ",r.createElement("span",{style:{color:void 0===i?"rgb(var(--colors-t-secondary))":i?"rgb(var(--colors-t-sell))":"rgb(var(--colors-t-buy))"}},a))))),[s,a,l,i])},H=({hash:e})=>{const{useHistoryDetail:t,enableShare:s}=(0,r.useContext)(d.T),{useHistoryDetailType:a}=t(),{type:l}=a(e),i=(0,r.useCallback)((()=>P.ee.emit("MODAL_HISTORY_DETAIL_OPEN",{hash:e})),[e]),n=(0,r.useCallback)((()=>P.ee.emit("MODAL_POSITION_SHARE_OPEN",{hash:e,overlay:!0})),[e]),o=s&&1===l,c="flex h-7 cursor-pointer justify-center items-center rounded bg-interactive-interactive01 text-subtitle3 text-t-third hover:text-t-primary hover:bg-interactive-interactive02Hover";return(0,r.useMemo)((()=>r.createElement("div",{style:{width:`${h.detail}px`},className:(0,v.cn)(y.detail,"sticky right-0 h-full px-2 gap-2 after:pointer-events-none after:content-[''] after:absolute after:left-[-16px] after:h-full after:w-4 after:bg-gradient-to-l after:from-background-bg1")},r.createElement("div",{className:"inline-flex flex-row gap-1"},o&&r.createElement("button",{className:(0,v.cn)(c,"h-7 w-7"),onClick:n},r.createElement(E.f,{className:"relative cursor-pointer",width:"16px",height:"16px",fontSize:"16px"})),r.createElement("button",{className:(0,v.cn)(c,"h-7 w-7"),onClick:i},r.createElement(g.J,{viewBox:"0 0 16 16",cursor:"pointer",width:"16px",height:"16px",fontSize:"16px"}))))),[i,n,o])},_=({hash:e,index:t})=>(0,r.useMemo)((()=>r.createElement("div",{className:"positions-column flex flex-row w-full h-full items-center justify-between relative","data-column-hash":e},r.createElement("div",{className:"flex flex-row h-full box-border pl-4 max-w-[1500px] flex-1"},r.createElement(T,{hash:e}),r.createElement(w,{hash:e}),r.createElement(k,{hash:e}),r.createElement(M,{hash:e}),r.createElement(I,{hash:e}),r.createElement(L,{hash:e}),r.createElement(S,{hash:e}),r.createElement($,{hash:e}),r.createElement(D,{hash:e})),r.createElement(H,{hash:e,rowIndex:t}))),[e,t]),F=(e,t)=>t[e].hash,B=()=>{const{useHistory:e,useHistoryInitialed:t,getI18n:s,useHistoryLoadMore:a,useTheme:l}=(0,r.useContext)(d.T),{isLight:i}=l(),n=(0,r.useRef)(null),h=(0,m.Z)(n,{root:null,rootMargin:"20px",threshold:1}),p=t(),b=e(),{loadMoreLoading:f,hasMore:y,loadMore:v}=a(),E=(0,r.useMemo)((()=>!!h?.isIntersecting),[h?.isIntersecting]);return(0,r.useEffect)((()=>{y&&!f&&E&&v?.()}),[y,E,v,f]),(0,r.useMemo)((()=>r.createElement(o.r,{className:"h-full [&_[data-column-hash]]:bg-background-bg1 [&_[data-column-hash]:hover]:bg-interactive-interactiveBg [&_[data-column-hash]_>_:last-child]:bg-background-bg1 [&_[data-column-hash]:hover_>_:last-child]:bg-interactive-interactiveBg [&_[data-column-hash]:hover_>_:last-child:after]:from-interactive-interactiveBg",style:{minWidth:`${x}px`},dataSource:b.map((e=>({hash:e}))),loading:!p,loadWithContent:!0,itemElement:_,itemKey:F,itemHeight:62,emptyChildren:r.createElement(u.$,{isLight:i,title:s("userinfo-history-no-data",{defaultValue:"No History Data"})}),extraBottomElement:r.createElement(r.Fragment,null,r.createElement("div",{ref:n}),f&&r.createElement(c.g,{fullScreen:!0,inner:!0,color:"rgb(var(--colors-interactive-primary))"}))})),[s,b,p,i,f])};var z=s(78659),A=s(26583),O=s(99297),R=s(89663),Z=s(95386),U=s(42249);const V=({hash:e})=>{const{isDumbMode:t,switchMode:s}=(0,z.C)(),{locale:a,Link:l="a",useDumbPrediction:i,useSymbolLogo:n,getI18n:o}=(0,r.useContext)(d.T),{usePredictionDataByFiled:c}=i(),m=c(e,"symbol"),u=c(e,"isLong"),x=n(m),p=(0,r.useCallback)((()=>{t||s("dumb")}),[t,s]);return(0,r.useMemo)((()=>r.createElement("div",{className:`symbol ${y.symbol}`,style:{width:`${h.symbol}px`,flex:`1 1 ${h.symbol}px`}},r.createElement("img",{src:x,className:"h-5 w-5 mr-2"}),r.createElement(l,{className:"flex flex-col items-start",onClick:p,href:`/${a}/futures/v2/${m}`},r.createElement("div",{className:"text-t-primary text-subtitle2"},m),r.createElement("div",{className:(0,v.cn)("text-caption1 flex justify-center items-center mt-0.5",u?"text-t-buy":"text-t-sell")},u?o("userinfo-positions-direction-long","Long"):o("userinfo-positions-direction-short","Short")," ")))),[x,l,p,a,m,u,o])},j=({hash:e})=>{const{useDumbPrediction:t,getI18n:s}=(0,r.useContext)(d.T),{usePredictionDataByFiled:a}=t(),l=a(e,"startTime");return(0,r.useMemo)((()=>r.createElement("div",{className:y.entryTime,style:{width:`${h.entryTime}px`,flex:`1 1 ${h.entryTime}px`}},r.createElement("div",{className:"flex flex-col items-start"},r.createElement("div",{className:"text-subtitle2 text-t-primary"},(0,O.v)(new Date(1e3*l),"MM-dd hh:mm:ss")),r.createElement("div",{className:"mt-0.5 text-caption1 text-t-third"},s("userinfo-positions-column-entryTime","Entry Time"))))),[l,s])},W=({hash:e})=>{const{useDumbPrediction:t,getI18n:s}=(0,r.useContext)(d.T),{usePredictionDataByFiled:a}=t(),l=a(e,"executionTime");return(0,r.useMemo)((()=>r.createElement("div",{className:y.expireTime,style:{width:`${h.expireTime}px`,flex:`1 1 ${h.expireTime}px`}},r.createElement("div",{className:"flex flex-col items-start"},r.createElement("div",{className:"text-subtitle2 text-t-primary"},(0,O.v)(new Date(1e3*l),"MM-dd hh:mm:ss")),r.createElement("div",{className:"mt-0.5 text-caption1 text-t-third"},s("userinfo-positions-column-expireTime","Expire Time"))))),[l,s])},K=({hash:e})=>{const t=(0,U.h)(),{useDumbPrediction:s,getI18n:a}=(0,r.useContext)(d.T),{usePredictionDataByFiled:l}=s(),i=l(e,"principal"),n=l(e,"tokenIn"),o=t[n]||n;return(0,r.useMemo)((()=>r.createElement("div",{className:y.initialAmount,style:{width:`${h.initialAmount}px`,flex:`1 1 ${h.initialAmount}px`}},r.createElement("div",{className:"flex flex-col items-start"},r.createElement("div",{className:"text-subtitle2 text-t-primary"},`${i} ${o}`),r.createElement("div",{className:"mt-0.5 text-caption1 text-t-third"},a("userinfo-positions-column-initialAmount","Initial Amount"))))),[i,o,a])},G=({hash:e})=>{const{useDumbPrediction:t,getI18n:s}=(0,r.useContext)(d.T),{usePredictionDataByFiled:a,usePricePrecision:l}=t(),i=a(e,"symbol"),n=a(e,"entryPrice"),o=l(i);return(0,r.useMemo)((()=>r.createElement("div",{className:y.entryPrice,style:{width:`${h.entryPrice}px`,flex:`1 1 ${h.entryPrice}px`}},r.createElement("div",{className:"flex flex-col items-start"},r.createElement("div",{className:"text-subtitle2 text-t-primary"},(0,R.uf)(n,o)),r.createElement("div",{className:"mt-0.5 text-caption1 text-t-third"},s("userinfo-positions-column-entryPrice","Entry Price"))))),[n,o,s])},J=({hash:e})=>{const{useDumbPrediction:t,getI18n:s}=(0,r.useContext)(d.T),{usePredictionDataByFiled:a,usePricePrecision:l,useCurrentPrice:i}=t(),n=a(e,"symbol"),o=i(e),c=a(e,"executionPrice"),m=l(n),u=0===(a(e,"state")||0)?o:c;return(0,r.useMemo)((()=>r.createElement("div",{className:y.expirePrice,style:{width:`${h.expirePrice}px`,flex:`1 1 ${h.expirePrice}px`}},r.createElement("div",{className:"flex flex-col items-start"},r.createElement("div",{className:"text-subtitle2 text-t-primary"},(0,R.uf)(u,m)),r.createElement("div",{className:"mt-0.5 text-caption1 text-t-third"},s("userinfo-positions-column-expirePrice","Expire Price"))))),[u,m,s])},Q=({hash:e})=>{const t=(0,U.h)(),{useDumbPrediction:s}=(0,r.useContext)(d.T),{usePredictionDataByFiled:a,useAssetPrecision:l,useCurrentPrice:i,predictionPairs:n}=s(),o=a(e,"tokenIn"),c=t[o]||o,m=a(e,"symbol"),u=l(c),x=i(e),p=a(e,"openFee")||0,b=a(e,"executionPrice"),f=a(e,"entryPrice")||0,v=a(e,"principal")||0,E=a(e,"pnl")||0,g=a(e,"isLong"),N=a(e,"state")||0,C=a(e,"closeFee")||0,P=a(e,"executionTime")||0,$=a(e,"startTime")||0,T=Number(P)-Number($),w=Z.Z1.get(T),M=(0,r.useMemo)((()=>n?.find((e=>m===e.name?.replace("/","")))?.predictionPeriods.find((e=>e.period===w))),[w,n,m]),I=Number(v)-Number(p),L=M&&void 0!==M.winRatio&&void 0!==M.winCloseFeeP?(M.winRatio-M.winCloseFeeP)/10**Z.cB.percent:0,S=0===N||1===N?Number(x):b,D=g?Number(S)>Number(f):Number(S)<Number(f),k=D?0===N?L:(Number(E)-Number(C))/Number(v):-1,H=D?0===N?I*k:Number(E)-Number(C):Number(v)*k,_=`${(0,R.uf)(100*k,2)}%`,F=(0,R.uf)(H,u);return(0,r.useMemo)((()=>r.createElement("div",{className:y.dumbPnl,style:{width:`${h.dumbPnl}px`,flex:`1 1 ${h.dumbPnl}px`}},r.createElement("div",{className:"flex flex-col !items-start"},r.createElement("div",{className:"text-subtitle2 whitespace-nowrap",style:{color:void 0===H?"rgb(var(--colors-t-secondary))":H<0?"rgb(var(--colors-t-sell))":"rgb(var(--colors-t-buy))"}},F," ",c),r.createElement("div",{className:"text-caption1 text-t-third mt-0.5"},"PNL ",r.createElement("span",{style:{color:void 0===k?"rgb(var(--colors-t-secondary))":k<0?"rgb(var(--colors-t-sell))":"rgb(var(--colors-t-buy))"}},_))))),[H,F,k,_,c])},q=e=>{const t=Math.floor((new Date).getTime()/1e3);return Math.max(e-t,-1)},X=({hash:e})=>{const{getI18n:t,useDumbPrediction:s}=(0,r.useContext)(d.T),{usePredictionDataByFiled:a}=s(),l=a(e,"state"),i=a(e,"startTime"),n=a(e,"executionTime"),o=n-i,c=(0,r.useRef)(null),[m,u]=(0,r.useState)(q(n)),x=window.getComputedStyle(document.documentElement),p=`rgb(${x.getPropertyValue("--colors-border-line")})`,b=`rgb(${x.getPropertyValue("--colors-highLight")})`;return(0,r.useEffect)((()=>{c.current&&clearInterval(c.current),u(q(n));const e=()=>{c.current&&(clearInterval(c.current),c.current=null)};return c.current=setInterval((()=>u((t=>{const s=t-1;if(s>-1)return s;const a=q(n);return a>-1?a:(e(),-1)}))),1e3),e}),[n]),(0,r.useMemo)((()=>r.createElement("div",{className:y.status,style:{width:`${h.status}px`,flex:`1 1 ${h.status}px`}},r.createElement("div",{className:"flex flex-col items-start"},r.createElement("div",{className:"text-subtitle2 "+(2===l?"text-t-primary":"text-highLight")},0===l&&r.createElement(r.Fragment,null,m>-1?r.createElement("div",{className:"flex flex-row items-center"},r.createElement("div",{className:"text-highLight mr-1.5"},m,"s"),r.createElement(A.m,{id:`canvas-${e}`,percent:m>o?100:(o-m)/o*100,size:16,width:1.6,color:b,bgColor:p})):t("userinfo-history-column-status-in-progress","Statement in progress")),1===l&&t("userinfo-history-column-status-in-progress","Statement in progress"),2===l&&t("userinfo-history-column-status-finish","Finish")),r.createElement("div",{className:"mt-0.5 text-caption1 text-t-third"},t("userinfo-history-column-status","Status"))))),[m,o,t,e,b,p,l])},Y=({hash:e})=>(0,r.useMemo)((()=>r.createElement("div",{className:"positions-column w-full h-full items-center","data-column-hash":e},r.createElement("div",{className:"flex flex-row h-full box-border pl-4 max-w-[1500px]",style:{minWidth:`${p}px`}},r.createElement(V,{hash:e}),r.createElement(Q,{hash:e}),r.createElement(j,{hash:e}),r.createElement(W,{hash:e}),r.createElement(K,{hash:e}),r.createElement(G,{hash:e}),r.createElement(J,{hash:e}),r.createElement(X,{hash:e})))),[e]),ee=(e,t)=>t[e].hash,te=()=>{const{useDumbPrediction:e,getI18n:t,useTheme:s}=(0,r.useContext)(d.T),{fetchPredictions:a,usePredictions:l,usePredictionInitialed:i,usePredictionHasMore:n,usePredictionLoading:h}=e(),{isLight:x}=s(),b=(0,r.useRef)(null),f=(0,m.Z)(b,{root:null,rootMargin:"20px",threshold:1}),y=i(),v=l(),E=h(),g=n(),N=(0,r.useMemo)((()=>!!f?.isIntersecting),[f?.isIntersecting]);return(0,r.useEffect)((()=>{g&&!E&&N&&!E&&a?.()}),[a,g,N,E]),(0,r.useMemo)((()=>r.createElement(o.r,{className:"h-full [&_[data-column-hash]]:bg-background-bg1 [&_[data-column-hash]:hover]:bg-interactive-interactiveBg [&_[data-column-hash]_>_:last-child]:bg-background-bg1 [&_[data-column-hash]:hover_>_:last-child]:bg-interactive-interactiveBg",style:{minWidth:`${p}px`},dataSource:v.map((e=>({hash:e}))),loading:!y,loadWithContent:!0,itemElement:Y,itemKey:ee,itemHeight:62,emptyChildren:r.createElement(u.$,{isLight:x,title:t("userinfo-history-no-data",{defaultValue:"No History Data"})}),extraBottomElement:r.createElement(r.Fragment,null,r.createElement("div",{ref:b}),E&&r.createElement(c.g,{fullScreen:!0,inner:!0,color:"rgb(var(--colors-interactive-primary))"}))})),[t,v,y,x,E])};var se=s(69464),ae=s(2203),le=s(19844);const re="h-6 py-0 rounded px-2 text-subtitle2 text-t-third data-[state=active]:bg-interactive-primary data-[state=active]:text-t-white",ie=()=>{const{enableDumb:e,getI18n:t}=(0,r.useContext)(d.T),{tradeModeTab:s,changeTradeModeTab:a}=(0,n.G)();return(0,r.useMemo)((()=>r.createElement(l.mQ,{className:"w-full h-full",value:s,onValueChange:a},r.createElement("div",{className:"flex flex-col items-start w-full h-full overflow-hidden border-t-border-lineSubtle border-t border-solid"},r.createElement("div",{className:"absolute flex items-center top-3 right-4"},e&&r.createElement(l.dr,{className:"p-0 bg-background-bg1Accent01 h-6 rounded"},r.createElement(l.SP,{className:re,value:i.O.Classic},t("userinfo-positions-tab-perp","Perp")),r.createElement(l.SP,{className:re,value:i.O.Dumb},t("userinfo-positions-tab-dumb","Dumb")))),r.createElement(l.nU,{className:"mt-0 hidden flex-col w-full h-full data-[state=active]:flex overflow-auto p-px pb-[10px] pr-0",value:i.O.Classic},r.createElement(B,null)),r.createElement(l.nU,{className:"mt-0 hidden flex-col w-full h-full data-[state=active]:flex overflow-auto p-px pb-[10px] pr-0",value:i.O.Dumb},r.createElement(te,null))))),[s,e,t,a])},ne=e=>(0,r.useMemo)((()=>r.createElement(d.T.Provider,{value:{locale:e.locale,Link:e.Link,staticHost:e.staticHost,siteHost:e.staticHost,enableShare:e.enableShare,enableShareLink:e.enableShareLink,enableDumb:e.enableDumb,getI18n:e.getI18n,useTheme:e.useTheme,useHistoryLoadMore:e.useHistoryLoadMore,useHistory:e.useHistory,useHistoryInitialed:e.useHistoryInitialed,useColumnFee:e.useColumnFee,useColumnMobile:e.useColumnMobile,useColumnLeverage:e.useColumnLeverage,useColumnPNL:e.useColumnPNL,useColumnPrice:e.useColumnPrice,useColumnSymbol:e.useColumnSymbol,useColumnTime:e.useColumnTime,useColumnType:e.useColumnType,useColumnSide:e.useColumnSide,useColumnSize:e.useColumnSize,useHistoryDetail:e.useHistoryDetail,useSymbolLogo:e.useSymbolLogo,useClassicPerp:e.useClassicPerp,useColumnInitialCollateral:e.useColumnInitialCollateral,useDumbPrediction:e.useDumbPrediction?e.useDumbPrediction:()=>({fetchPredictions:()=>{},useHistoryTab:()=>["",()=>{}],usePredictionDataByFiled:()=>{},usePredictionHasMore:()=>!1,usePredictionInitialed:()=>!1,usePredictionLoading:()=>!1,usePredictions:()=>[],usePricePrecision:()=>2,useAssetPrecision:()=>2,useCurrentPrice:()=>"-",predictionPairs:[]})}},r.createElement(ie,null),r.createElement(se.C.Provider,{value:{locale:e.locale,staticHost:e.staticHost,siteHost:e.siteHost,enableShare:e.enableShare,enableShareLink:e.enableShareLink,getI18n:e.getI18n,useTheme:e.useTheme,useHistoryDetail:e.useHistoryDetail,ee:P.ee}},r.createElement(ae.F,null),r.createElement(le.m,null)))),[e]);var oe=s(43693),ce=s(33687),me=s(87685),ue=s(2547),de=s(96988),he=s(68692),xe=s(52590),pe=s(10978);const be=()=>{const{loadMoreLoading:e,hasMore:t,loadMore:s}=(0,pe.xK)(),{getI18n:l,i18n:{language:i}}=(0,de.V6)(),n=(0,he.h)();(0,pe.oU)();const o=(0,r.useCallback)((()=>({loadMore:s,hasMore:t,loadMoreLoading:e})),[t,s,e]),{dumb:c}=(0,ue.B)();return(0,r.useMemo)((()=>(0,a.jsx)(ne,{locale:i,siteHost:ce.brokerConfig.staticBaseUrl,staticHost:ce.brokerConfig.apxStaticBaseUrl,getI18n:l,Link:oe.G,useTheme:xe.F,useHistory:pe.k6,useHistoryLoadMore:o,useHistoryInitialed:pe.zV,useColumnTime:pe.a6,useColumnSymbol:pe.iA,useColumnLeverage:pe.ch,useColumnFee:pe.b2,useColumnType:pe.r2,useColumnPrice:pe.yT,useColumnPNL:pe.RM,useColumnMobile:pe.Xi,useColumnSide:pe.uq,useColumnSize:pe.v_,useHistoryDetail:pe.uN,useDumbPrediction:pe.D,useClassicPerp:pe.ZK,enableShare:!0,enableShareLink:n,enableDumb:c,useSymbolLogo:me.sH,useColumnInitialCollateral:pe.d3})),[i,l,o,n,c])}}}]);