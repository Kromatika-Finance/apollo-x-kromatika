"use strict";(self.webpackChunkcloud_onchain_trade_sdk=self.webpackChunkcloud_onchain_trade_sdk||[]).push([[839],{19844:(e,t,s)=>{s.d(t,{m:()=>g});var a=s(11273),l=s(96336),n=s(76126),i=s(47231),o=s(84090),r=s(33075),c=s(84542),u=s(91163),m=s(52983),d=s(82210),h=s(86364),x=s(12149),b=s(61239),f=s(69464),p=s(59712),v=function(e,t,s,a){return new(s||(s=Promise))((function(l,n){function i(e){try{r(a.next(e))}catch(e){n(e)}}function o(e){try{r(a.throw(e))}catch(e){n(e)}}function r(e){var t;e.done?l(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(i,o)}r((a=a.apply(e,t||[])).next())}))};const y=({hash:e,checked:t,onClose:s,snapshotRef:n,onCheckedChange:i,copy:r,download:c})=>{const{locale:u,getI18n:x,useTheme:p,useHistoryDetail:v,staticHost:y,siteHost:g,enableShareLink:E}=(0,m.useContext)(f.C),{useHistoryDetailSymbol:N,useHistoryDetailLeverage:C,useHistoryDetailPNLROI:P,useHistoryDetailPrice:S,useHistoryDetailDuration:D}=v(),{isLight:M}=p(),{PNLFormatted:I,ROI:L,tokenInSymbol:O}=P(e),{symbol:T,isLong:k}=N(e),H=C(e),{timestamp:w}=D(e),{closePrice:j,entryPrice:_}=S(e),{address:F}=(0,o.mA)(),{isMobile:R}=(0,a.F)(),V=(0,b.e)({staticHost:y});return m.createElement("div",{className:"flex flex-col"},s&&m.createElement(l.M,{width:"24px",height:"24px",fontSize:"24px",className:"text-t-third cursor-pointer absolute top-[8px] right-[8px] z-[1]",onClick:s}),m.createElement(d.L,{data:{hash:e,locale:u||"en",symbol:T,tokenInSymbol:O,closeTime:w,side:k?"LONG":"SHORT",leverage:H,markPrice:"-",entryPrice:_,closePrice:j,PNL:I,ROI:L,isLightTheme:M,staticResource:V,SITE_HOST:g,userAddress:F,getI18n:x,sharePNL:t,snapshotRef:n}}),!R&&m.createElement(m.Fragment,null,m.createElement(h.k,{className:"pt-[12px] pb-[24px]",getI18n:x,checked:t,onCheckedChange:i}),m.createElement(h.n,{getI18n:x,copy:E?r:void 0,download:c})))},g=()=>{const{selectedNetworkId:e}=(0,r.o6)(),t=(0,o.xx)({chainId:e}),s=(0,c.pT)(t),{ee:l,getI18n:d,locale:h}=(0,m.useContext)(f.C),[g,E]=(0,m.useState)(""),[N,C]=(0,m.useState)(!1),[P,S]=(0,m.useState)(!1),{isMobile:D}=(0,a.F)(),M=(0,m.useRef)(),I=(0,m.useMemo)((()=>(0,b.O)({network:null==s?void 0:s.apiNetwork,locale:h,hash:g,sharePNL:P})),[null==s?void 0:s.apiNetwork,h,g,P]),L=(0,m.useCallback)((()=>v(void 0,void 0,void 0,(function*(){try{yield(0,n.v)(I),D||(0,u.PV)(d("share-copy-message","Copy Successfully"),{variant:"success"})}catch(e){p.error(e)}}))),[d,D,I]),O=(0,m.useCallback)((()=>v(void 0,void 0,void 0,(function*(){M.current&&(0,i.Q)({el:M.current,success(e){(0,i.L)(e,`share-position-${Date.now()}`)}})}))),[]),T=(0,m.useCallback)((e=>{"boolean"==typeof e&&S(e)}),[]),k=(0,m.useCallback)((()=>{E("")}),[]);return(0,m.useEffect)((()=>l.on("MODAL_POSITION_SHARE_OPEN",(({hash:e,overlay:t})=>{E(e),C(t)}))),[l]),(0,m.useEffect)((()=>l.on("MODAL_POSITION_SHARE_CLOSE",(()=>{E(""),C(!1)}))),[l]),(0,m.useMemo)((()=>g?D?m.createElement(x.V,{hash:g,onClose:k,getI18n:d,checked:P,onCheckedChange:T,copy:L,download:O},m.createElement(y,{hash:g,checked:P,snapshotRef:M})):m.createElement(x.t,{onClose:k,overlay:N},m.createElement(y,{hash:g,checked:P,onClose:k,onCheckedChange:T,copy:L,download:O,snapshotRef:M})):null),[L,O,d,g,D,T,k,N,P])}},24719:(e,t,s)=>{s.d(t,{O:()=>a});const a={Classic:"Classic",Dumb:"Dumb"}},20355:(e,t,s)=>{s.d(t,{T:()=>a});const a=s(52983).createContext({})},25375:(e,t,s)=>{s.d(t,{ee:()=>a});const a=new(s(13565).v)},52075:(e,t,s)=>{s.d(t,{Z:()=>l});var a=s(52983);const l=function(e,t){var s=(0,a.useState)(null),l=s[0],n=s[1];return(0,a.useEffect)((function(){if(e.current&&"function"==typeof IntersectionObserver){var s=new IntersectionObserver((function(e){n(e[0])}),t);return s.observe(e.current),function(){n(null),s.disconnect()}}return function(){}}),[e.current,t.threshold,t.root,t.rootMargin]),l}},70839:(e,t,s)=>{s.r(t),s.d(t,{default:()=>me});var a=s(97458),l=s(27618),n=s(36829),i=s(86041),o=s(52983),r=s(96988),c=s(50291),u=s(78659),m=s(78922),d=s(21339),h=s(52075),x=s(72262),b=s(20355),f=s(5837),p=s(64617),v=s(49382),y=s(25375);const g=({hash:e})=>{const{enableShare:t,useHistoryDetail:s,useColumnMobile:a,useColumnLeverage:l,staticHost:n,useColumnPNL:i,useColumnSymbol:r}=(0,o.useContext)(b.T),{side:c}=a(e),u=l(e),{useHistoryDetailType:m}=s(),{type:d}=m(e),{symbolName:h,symbolType:x,symbol:g}=r(e),{isPNLNegative:E,isPNLPositive:N}=i(e),C=t&&1===d,P=(0,o.useCallback)((()=>y.ee.emit("MODAL_POSITION_SHARE_OPEN",{hash:e})),[e]),S=(0,o.useCallback)((()=>y.ee.emit("MODAL_HISTORY_DETAIL_OPEN",{hash:e})),[e]);return(0,o.useMemo)((()=>o.createElement("div",{className:"flex items-center justify-between"},o.createElement("div",{className:"flex items-center gap-2"},o.createElement(v.b,{staticHost:n,isPNLNegative:E,isPNLPositive:N,symbolType:x}),o.createElement("div",{className:"flex justify-center items-center text-subtitle2 rounded h-4 leading-5 text-t-white mr-2 px-1",style:{backgroundColor:"Long"===c?"var(--colors-t-buy)":"var(--colors-t-sell)"}},u),o.createElement("div",{className:"text-t-primary text-subtitle2"},h||g," ",c)),o.createElement("div",{className:"flex items-center"},C&&o.createElement(f.f,{className:"text-t-third mr-[8px]",width:"16px",height:"16px",fontSize:"16px",onClick:P}),o.createElement(p.J,{className:"text-t-third",width:"16px",height:"16px",fontSize:"16px",onClick:S})))),[n,E,N,x,c,u,h,g,C,P,S])},E=({hash:e})=>{const{useColumnMobile:t,useColumnFee:s,useColumnType:a,useColumnTime:l,useColumnPNL:n,getI18n:i}=(0,o.useContext)(b.T),{price:r,size:c}=t(e),u=s(e),m=a(e),d=l(e),{PNLNFormat:h,ROI:x,isPNLNegative:f,tokenInSymbol:p}=n(e);return(0,o.useMemo)((()=>o.createElement("div",{className:"flex mt-2 gap-[6px] w-full"},o.createElement("div",{className:"flex flex-1 w-[110px] flex-col items-start"},o.createElement("div",{className:"text-caption text-t-third"},i("userinfo-history-mobile-type","Type")),o.createElement("div",{className:"text-captionSub text-t-primary"},m),o.createElement("div",{className:"text-caption text-t-third mt-2"},i("userinfo-history-mobile-time","Time")),o.createElement("div",{className:"text-captionSub text-t-primary"},d)),o.createElement("div",{className:"flex flex-1 w-[110px] flex-col items-center"},o.createElement("div",{className:"text-caption text-t-third"},i("userinfo-history-mobile-price","Price")),o.createElement("div",{className:"text-captionSub text-t-primary"},r),o.createElement("div",{className:"text-caption text-t-third mt-2"},i("userinfo-history-mobile-fee","Fee")),o.createElement("div",{className:"text-captionSub text-t-primary"},u)),o.createElement("div",{className:"flex flex-1 w-[110px] flex-col items-end"},o.createElement("div",{className:"text-caption text-t-third"},i("userinfo-history-mobile-size","Size(USD)")),o.createElement("div",{className:"text-captionSub text-t-primary"},c),o.createElement("div",{className:"text-caption text-t-third mt-2"},i("userinfo-history-mobile-pnl-roi-v3","PNL/ROI")," (",p,")"),o.createElement("div",{className:"flex flex-row"},o.createElement("div",{className:"text-captionSub break-words",style:{color:void 0===f?"var(--colors-t-secondary)":f?"var(--colors-t-sell)":"var(--colors-t-buy)"}},h," (",x,")"))))),[h,x,u,i,f,r,c,d,m,p])},N=({hash:e})=>(0,o.useMemo)((()=>o.createElement("div",{className:"box-border mb-4 pb-4 border-b-[var(--colors-border-line)] border-b border-solid","data-column-hash":e},o.createElement(g,{hash:e}),o.createElement(E,{hash:e}))),[e]),C=()=>{const{useHistory:e,useHistoryInitialed:t,getI18n:s,useHistoryLoadMore:a,useTheme:l}=(0,o.useContext)(b.T),{isLight:n}=l(),i=(0,o.useRef)(null),r=(0,h.Z)(i,{root:null,rootMargin:"20px",threshold:1}),c=e(),u=t(),{loadMoreLoading:m,hasMore:f,loadMore:p}=a(),v=(0,o.useMemo)((()=>!!(null==r?void 0:r.isIntersecting)),[null==r?void 0:r.isIntersecting]);return(0,o.useEffect)((()=>{f&&!m&&v&&(null==p||p())}),[f,v,p,m]),(0,o.useMemo)((()=>o.createElement("div",{className:"flex flex-col w-full h-full"},c.length?c.map((e=>o.createElement(N,{key:`_h_classic_m_${e}`,hash:e}))):u?o.createElement(x.$,{isLight:n,title:s("userinfo-history-no-data",{defaultValue:"No History Data"})}):null,o.createElement("div",{ref:i}),m&&o.createElement(d.g,{fullScreen:!0,inner:!0}))),[s,c,u,n,m])};var P=s(99297),S=s(89663);const D=({hash:e})=>{const{staticHost:t,useDumbPrediction:s}=(0,o.useContext)(b.T),{usePredictionDataByFiled:a}=s(),l=a(e,"symbol"),n=a(e,"isLong");return(0,o.useMemo)((()=>o.createElement("div",{className:"flex items-center justify-between"},o.createElement("div",{className:"flex items-center gap-2"},o.createElement("img",{src:`${t}/static/images/dumb-mode/dumb-neutral.webp`,width:"20px",height:"20px"}),o.createElement("div",{className:"text-t-primary text-subtitle2"},l),o.createElement("div",{className:"flex items-center justify-center w-[16px] h-[16px] text-subtitle2 rounded h-5 leading-5 text-t-white mr-2 px-1",style:{backgroundColor:n?"var(--colors-t-buy)":"var(--colors-t-sell)"}},n?"L":"S")))),[t,l,n])},M=({hash:e})=>{const{getI18n:t,useDumbPrediction:s}=(0,o.useContext)(b.T),{usePredictionDataByFiled:a}=s(),l=a(e,"startTime");return(0,o.useMemo)((()=>o.createElement("div",{className:"flex flex-col text-left flex-[1]"},o.createElement("div",{className:"text-t-third text-caption"},t("userinfo-positions-column-entryTime",{defaultValue:"Entry Time"})),o.createElement("div",{className:"text-t-primary text-captionSub"},(0,P.v)(new Date(1e3*l),"MM-dd hh:mm:ss")))),[t,l])},I=({hash:e})=>{const{getI18n:t,useDumbPrediction:s}=(0,o.useContext)(b.T),{usePredictionDataByFiled:a,usePricePrecision:l}=s(),n=a(e,"symbol"),i=a(e,"entryPrice"),r=l(n);return(0,o.useMemo)((()=>o.createElement("div",{className:"flex flex-col text-center flex-[1]"},o.createElement("div",{className:"text-t-third text-caption"},t("userinfo-positions-column-entryPrice",{defaultValue:"Entry Price"})),o.createElement("div",{className:"text-t-primary text-captionSub"}," ",(0,S.uf)(i,r)))),[i,t,r])},L=({hash:e})=>{const{getI18n:t,useDumbPrediction:s}=(0,o.useContext)(b.T),{usePredictionDataByFiled:a}=s(),l=a(e,"principal"),n=a(e,"tokenIn");return(0,o.useMemo)((()=>o.createElement("div",{className:"flex flex-col text-right flex-[1]"},o.createElement("div",{className:"text-t-third text-caption"},t("userinfo-positions-column-initialAmount",{defaultValue:"Initial Amount"})),o.createElement("div",{className:"text-t-primary text-captionSub"}," ",`${l} ${n}`))),[t,l,n])},O=({hash:e})=>{const{getI18n:t,useDumbPrediction:s}=(0,o.useContext)(b.T),{usePredictionDataByFiled:a}=s(),l=a(e,"executionTime");return(0,o.useMemo)((()=>o.createElement("div",{className:"flex flex-col text-left flex-[1]"},o.createElement("div",{className:"text-t-third text-caption"},t("userinfo-positions-column-expireTime",{defaultValue:"Expire Time"})),o.createElement("div",{className:"text-t-primary text-captionSub"}," ",(0,P.v)(new Date(1e3*l),"MM-dd hh:mm:ss")))),[l,t])},T=({hash:e})=>{const{getI18n:t,useDumbPrediction:s}=(0,o.useContext)(b.T),{usePredictionDataByFiled:a,usePricePrecision:l}=s(),n=a(e,"symbol"),i=a(e,"executionPrice"),r=l(n);return(0,o.useMemo)((()=>o.createElement("div",{className:"flex flex-col text-center flex-[1]"},o.createElement("div",{className:"text-t-third text-caption"},t("userinfo-positions-column-expirePrice",{defaultValue:"Expire Price"})),o.createElement("div",{className:"text-t-primary text-captionSub"},(0,S.uf)(i,r)))),[i,t,r])},k=({hash:e})=>{const{getI18n:t,useDumbPrediction:s}=(0,o.useContext)(b.T),{usePredictionDataByFiled:a,useAssetPrecision:l}=s(),n=a(e,"tokenIn"),i=l(n),r=a(e,"executionPrice"),c=a(e,"entryPrice")||0,u=a(e,"principal")||0,m=a(e,"pnl")||0,d=a(e,"isLong"),h=a(e,"closeFee")||0,x=d?Number(r)>Number(c):Number(r)<Number(c),f=x?(Number(m)-Number(h))/Number(u):-1,p=x?Number(m)-Number(h):Number(u)*f,v=`${(0,S.uf)(100*f,2)}%`,y=(0,S.uf)(p,i);return(0,o.useMemo)((()=>o.createElement("div",{className:"flex flex-col text-right flex-[1]"},o.createElement("div",{className:"text-t-third text-caption"},t("userinfo-positions-column-PNL-ROI-v3",{defaultValue:"PNL (ROI%)"})),o.createElement("div",{className:"text-captionSub"},o.createElement("span",{style:{color:p>0?"var(--colors-t-buy)":"var(--colors-t-sell)"}},`${p>0?`+${y}`:y}`),o.createElement("span",{style:{color:p>0?"var(--colors-t-buy)":"var(--colors-t-sell)"}}," ",n),o.createElement("span",{style:{color:f>0?"var(--colors-t-buy)":"var(--colors-t-sell)"}}," (",v,")")))),[p,y,f,v,t,n])},H=({hash:e})=>{const{getI18n:t,useDumbPrediction:s}=(0,o.useContext)(b.T),{usePredictionDataByFiled:a}=s(),l=a(e,"state");return(0,o.useMemo)((()=>o.createElement("div",{className:"flex flex-col text-left flex-[1]"},o.createElement("div",{className:"text-t-third text-caption"},t("userinfo-history-column-status",{defaultValue:"Status"})),o.createElement("div",{className:(1===l?"text-t-emphasize":"text-t-primary")+"  text-captionSub"},1===l&&t("userinfo-history-column-status-in-progress","Statement in progress"),2===l&&t("userinfo-history-column-status-finish","Finish")))),[t,l])},w=({hash:e})=>(0,o.useMemo)((()=>o.createElement("div",{className:"flex flex-col mt-2 w-full"},o.createElement("div",{className:"flex flex-row mt-2"},o.createElement(M,{hash:e}),o.createElement(I,{hash:e}),o.createElement(L,{hash:e})),o.createElement("div",{className:"flex flex-row mt-2"},o.createElement(O,{hash:e}),o.createElement(T,{hash:e}),o.createElement(k,{hash:e})),o.createElement("div",{className:"flex flex-row mt-2"},o.createElement(H,{hash:e})))),[e]),j=({hash:e})=>(0,o.useMemo)((()=>o.createElement("div",{className:"box-border mb-4 pb-4 border-b-[var(--colors-border-line)] border-b border-solid","data-column-hash":e},o.createElement(D,{hash:e}),o.createElement(w,{hash:e}))),[e]),_=()=>{const{useDumbPrediction:e,getI18n:t,useTheme:s}=(0,o.useContext)(b.T),{fetchPredictions:a,usePredictions:l,usePredictionInitialed:n,usePredictionHasMore:i,usePredictionLoading:r}=e(),{isLight:c}=s(),u=(0,o.useRef)(null),m=(0,h.Z)(u,{root:null,rootMargin:"20px",threshold:1}),f=n(),p=l(),v=r(),y=i(),g=(0,o.useMemo)((()=>!!(null==m?void 0:m.isIntersecting)),[null==m?void 0:m.isIntersecting]);return(0,o.useEffect)((()=>{y&&!v&&g&&(null==a||a())}),[a,y,g,v]),(0,o.useMemo)((()=>o.createElement("div",{className:"flex flex-col w-full h-full"},p.length?p.map((e=>o.createElement(j,{key:`_h_dumb_m_${e}`,hash:e}))):f?o.createElement(x.$,{isLight:c,title:t("userinfo-history-no-data",{defaultValue:"No History Data"})}):null,o.createElement("div",{ref:u}),v&&o.createElement(d.g,{fullScreen:!0,inner:!0}))),[t,f,c,v,p])};var F=s(69464),R=s(2203),V=s(19844),A=s(24719);const z="h-[24px] py-0 px-2 mr-2 rounded-sm bg-interactive-interactiveBg text-t-third data-[state=active]:bg-interactive-interactive01 data-[state=active]:text-t-primary",B=()=>{const{isDumbMode:e}=(0,u.C)(),{enableDumb:t,getI18n:s}=(0,o.useContext)(b.T),[a,l]=(0,o.useState)(e?A.O.Dumb:A.O.Classic),n=e=>{l(e)};return(0,o.useEffect)((()=>{l(e?A.O.Dumb:A.O.Classic)}),[e]),(0,o.useMemo)((()=>o.createElement(m.mQ,{className:"relative w-full h-full",value:a,onValueChange:n},o.createElement("div",{className:"relative w-full h-full flex flex-col history-container-mobile"},t&&o.createElement(m.dr,{className:"rounded-sm bg-transparent justify-start h-[28px] my-[10px] mx-0 p-0"},o.createElement(m.SP,{className:z,value:A.O.Classic},s("userinfo-positions-tab-classic","Classic & Degen")),o.createElement(m.SP,{className:z,value:A.O.Dumb},s("userinfo-positions-tab-dumb","Dumb"))),o.createElement("div",{className:`w-full flex-col overflow-auto ${t?"h-[calc(100%-48px)":"h-full"}]`},o.createElement(m.nU,{className:"hidden flex-col w-full h-full data-[state=active]:flex mt-0",value:A.O.Classic},o.createElement(C,null)),o.createElement(m.nU,{className:"hidden flex-col w-full h-full data-[state=active]:flex mt-0",value:A.O.Dumb},o.createElement(_,null)))))),[t,s,a])},$=e=>(0,o.useMemo)((()=>o.createElement(b.T.Provider,{value:{locale:e.locale,staticHost:e.staticHost,siteHost:e.staticHost,enableShare:e.enableShare,enableShareLink:e.enableShareLink,enableDumb:e.enableDumb,getI18n:e.getI18n,useTheme:e.useTheme,useHistoryLoadMore:e.useHistoryLoadMore,useHistory:e.useHistory,useHistoryInitialed:e.useHistoryInitialed,useColumnFee:e.useColumnFee,useColumnMobile:e.useColumnMobile,useColumnLeverage:e.useColumnLeverage,useColumnPNL:e.useColumnPNL,useColumnPrice:e.useColumnPrice,useColumnSymbol:e.useColumnSymbol,useColumnTime:e.useColumnTime,useColumnType:e.useColumnType,useColumnSide:e.useColumnSide,useColumnSize:e.useColumnSize,useHistoryDetail:e.useHistoryDetail,useDumbPrediction:e.useDumbPrediction?e.useDumbPrediction:()=>({fetchPredictions:()=>{},useHistoryTab:()=>["",()=>{}],usePredictionDataByFiled:()=>{},usePredictionHasMore:()=>!1,usePredictionInitialed:()=>!1,usePredictionLoading:()=>!1,usePredictions:()=>[],usePricePrecision:()=>2,useAssetPrecision:()=>2,useCurrentPrice:()=>"-"})}},o.createElement(B,null),o.createElement(F.C.Provider,{value:{locale:e.locale,staticHost:e.staticHost,siteHost:e.siteHost,enableShare:e.enableShare,enableShareLink:e.enableShareLink,getI18n:e.getI18n,useTheme:e.useTheme,useHistoryDetail:e.useHistoryDetail,ee:y.ee}},o.createElement(R.F,null),o.createElement(V.m,null)))),[e]);var U=s(33740),Z=s(58395),K=s(84090),Q=s(33687),W=s(2547),Y=s(68692),q=s(52590),G=s(1619),J=s(56520);const X=()=>{const{loadMoreLoading:e,hasMore:t,loadMore:s}=(0,J.xK)(),{getI18n:l,i18n:{language:n}}=(0,r.V6)();(0,J.oU)();const i=(0,Y.h)(),c=(0,o.useCallback)((()=>({loadMore:s,hasMore:t,loadMoreLoading:e})),[t,s,e]),{dumb:u}=(0,W.B)();return(0,o.useMemo)((()=>(0,a.jsx)($,{locale:n,siteHost:Q.brokerConfig.staticBaseUrl,staticHost:Q.brokerConfig.apxStaticBaseUrl,getI18n:l,useTheme:q.F,useHistory:J.k6,useHistoryInitialed:J.zV,useColumnSymbol:J.iA,useColumnLeverage:J.ch,useColumnTime:J.a6,useColumnFee:J.b2,useColumnType:J.r2,useColumnPrice:J.yT,useColumnPNL:J.RM,useHistoryLoadMore:c,useColumnMobile:J.Xi,useColumnSide:J.uq,useColumnSize:J.v_,useHistoryDetail:J.uN,useDumbPrediction:J.D,enableShare:!0,enableShareLink:i,enableDumb:u})),[n,l,c,i,u])},ee=()=>{const{getI18n:e}=(0,r.V6)();return(0,o.useMemo)((()=>(0,a.jsx)("div",Object.assign({className:"text-body1 text-t-third"},{children:e("userinfo-history-no-data",{defaultValue:"No History Data"})}))),[e])},te=()=>{const[e,t]=(0,o.useState)(0),{getI18n:s}=(0,r.V6)(),{isConnected:l}=(0,K.mA)();(0,o.useEffect)((()=>G.ee.on("SHOW_HISTORY_DRAWER",(()=>{t(Date.now())}))),[]);const n=(0,o.useCallback)((()=>{t(0)}),[]);return(0,o.useMemo)((()=>(0,a.jsx)(U.yo,Object.assign({open:Boolean(e)},{children:(0,a.jsx)(U.ue,Object.assign({side:"bottom",className:"w-full outline-none border-none px-4 py-0 rounded-t-[4px] bg-[#121221] z-dialog",onPointerDownOutside:n},{children:e?l?(0,a.jsxs)("div",Object.assign({className:"h-[445px]"},{children:[(0,a.jsxs)("div",Object.assign({className:"h-[54px] flex items-center justify-center"},{children:[(0,a.jsx)("div",Object.assign({className:"text-t-primary pl-4 text-subtitle4"},{children:s("userinfo-history-module-titleV2",{defaultValue:"History"})})),(0,a.jsx)(Z.E,{width:"20px",height:"20px",fontSize:"20px",className:"cursor-pointer absolute right-4 text-t-third",onClick:n})]})),(0,a.jsx)("div",Object.assign({className:"w-full h-[calc(100%-54px)] overflow-auto"},{children:(0,a.jsx)(X,{})}))]}),e):(0,a.jsx)("div",Object.assign({className:"w-full h-[calc(100%-54px)] overflow-auto flex items-center justify-center"},{children:(0,a.jsx)(ee,{})})):null}))}))),[s,l,e,n])};var se=s(74377),ae=s(53221);const le=o.lazy((()=>Promise.all([s.e(6827),s.e(2682),s.e(6277)]).then(s.bind(s,66277)))),ne=o.lazy((()=>Promise.all([s.e(6827),s.e(384)]).then(s.bind(s,60384)))),ie={height:"auto"},oe={flex:1},re=({active:e,title:t})=>(0,o.useMemo)((()=>(0,a.jsx)("div",Object.assign({className:(0,l.cn)("flex items-center justify-center pl-0 text-subtitle1 h-12",e?"text-t-primary bg-background-bg1":"text-t-third bg-background-bg1Accent02")},{children:t}))),[e,t]),ce=({active:e})=>{const t=(0,ae.d)(),{getI18n:s}=(0,r.V6)();return(0,o.useMemo)((()=>(0,a.jsx)(re,{active:e,title:`${s("userinfo-positions-module-title",{defaultValue:"Positions"})} (${t})`})),[e,s,t])},ue=({active:e})=>{const t=(0,se.yi)(),{getI18n:s}=(0,r.V6)();return(0,o.useMemo)((()=>(0,a.jsx)(re,{active:e,title:`${s("userinfo-orders-module-title",{defaultValue:"Orders"})} (${t.length})`})),[e,s,t.length])},me=()=>{(0,ae.OB)(),(0,ae.yS)(),(0,se.M2)();const[e,t]=(0,o.useState)(c.T.positions),s=(0,o.useCallback)((e=>{t(e)}),[]);return(0,o.useMemo)((()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",Object.assign({className:"h-full bg-background-bg1 overflow-hidden rounded-lg"},{children:(0,a.jsxs)(n.Z,Object.assign({lazy:!0,defaultActiveKey:e,onChange:s,height:"100%",tabSx:oe},{children:[(0,a.jsx)(i.Z,Object.assign({tab:e=>(0,a.jsx)(ce,{active:e}),tabKey:c.T.positions,sx:ie,unmountOnBlur:!0},{children:(0,a.jsx)(o.Suspense,Object.assign({fallback:null},{children:(0,a.jsx)(le,{})}))})),(0,a.jsx)(i.Z,Object.assign({tab:e=>(0,a.jsx)(ue,{active:e}),tabKey:c.T.orders,sx:ie,unmountOnBlur:!0},{children:(0,a.jsx)(o.Suspense,Object.assign({fallback:null},{children:(0,a.jsx)(ne,{})}))}))]}))})),(0,a.jsx)(te,{})]})),[e,s])}}}]);