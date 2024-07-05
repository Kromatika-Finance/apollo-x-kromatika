"use strict";(self.webpackChunkcloud_onchain_trade_sdk=self.webpackChunkcloud_onchain_trade_sdk||[]).push([[6277],{66277:(e,t,s)=>{s.r(t),s.d(t,{default:()=>ce});var l=s(97458),a=s(78922),i=s(54402),n=s(52983),r=s(72262),o=s(89019),c=s(82596),u=s(44478),m=s(90471),d=s(8429),x=s(27618),h=s(64617),f=s(5837),b=s(83130),E=s(30826),P=s(32142),p=s(50855),v=s(37672);const C=({hash:e})=>{const{getI18n:t,locale:s,Link:l="a",useColumnSymbol:a,useColumnLeverage:i,useIsMarketClose:r,enableShare:o}=(0,n.useContext)(p.Z),{symbol:c,symbolName:u,symbolPair:m,isLong:d}=a(e),b=i(e),E=r(c),P=(0,n.useCallback)((()=>v.ee.emit("MODAL_POSITION_DETAIL_OPEN",{hash:e})),[e]),C=(0,n.useCallback)((()=>v.ee.emit("MODAL_POSITION_SHARE_OPEN",{hash:e,overlay:!0})),[e]),N=(0,n.useCallback)((()=>v.ee.emit("MODAL_CLOSE_POSITION",{hash:e})),[e]),g="flex h-6 px-2 cursor-pointer justify-center items-center rounded bg-interactive-interactive01 text-caption text-t-third hover:text-t-primary";return(0,n.useMemo)((()=>n.createElement("div",{className:"flex items-center justify-between mb-4"},n.createElement(l,{className:"flex items-center",href:`/${s}/futures/v2/${m}`},n.createElement("div",{className:"text-t-primary text-subtitle2 mr-1"},u||c),n.createElement("div",{className:"flex items-center gap-1"},n.createElement("div",{className:`flex items-center justify-center h-4 px-1 rounded ${d?"text-t-buy":"text-t-sell"} ${d?"bg-support-success/30":"bg-support-error/30"} text-subtitle3`},b))),n.createElement("div",{className:"flex gap-2"},!E&&n.createElement("button",{type:"button",className:g,onClick:N,disabled:E,title:E?t("orderForm-button-marketClosed","Market Closed"):""},t("userinfo-positions-close-position-V2",{defaultValue:"Close"})),n.createElement("button",{type:"button",className:(0,x.cn)(g,"px-1"),onClick:P},n.createElement(h.J,{width:"16px",height:"16px",fontSize:"16px"})),o&&n.createElement("button",{type:"button",className:(0,x.cn)(g,"px-1"),onClick:C},n.createElement(f.f,{width:"16px",height:"16px",fontSize:"16px"}))))),[l,s,m,u,c,d,b,P,E,N,t,o,C])},N=({hash:e})=>{const{useColumnCollateral:t,getI18n:s,useColumnSymbol:l}=(0,n.useContext)(p.Z),a=t(e),{symbolType:i}=l(e),r=(0,n.useCallback)((()=>v.ee.emit("MODAL_ADD_MARGIN_OPEN",{hash:e})),[e]);return(0,n.useMemo)((()=>n.createElement("div",{className:"flex flex-col text-right items-end"},n.createElement("div",{className:"text-t-primary text-subtitle3"},a),n.createElement("div",{className:"flex flex-row items-center"},n.createElement("div",{className:"text-t-third text-caption1"},s("userinfo-positions-column-initialMargin",{defaultValue:"Initial Margin"})),(0,d.L)(i).isClassicMode?n.createElement(b.o,{className:"cursor-pointer text-t-third ml-1",width:"16px",height:"16px",fontSize:"16px",onClick:r}):null))),[a,s,r,i])},g=({hash:e})=>{const{useColumnPNL:t}=(0,n.useContext)(p.Z),{PNL:s,ROI:l,isPNLNegative:a,isROINegative:i}=t(e),r=(0,n.useMemo)((()=>"-"===s?"--":n.createElement(n.Fragment,null,n.createElement("div",{className:(0,x.cn)("text-subtitle3",a?"text-t-sell":"text-t-buy")},s)," ",n.createElement("div",{className:(0,x.cn)("text-subtitle3",i?"text-t-sell":"text-t-buy")},"(",l,")"))),[a,s,i,l]);return(0,n.useMemo)((()=>n.createElement("div",{className:"flex flex-col text-left items-start"},n.createElement("div",{className:"flex leading-4"},r),n.createElement("div",{className:"flex flex-row items-center"},n.createElement("div",{className:"text-t-third text-caption1"},"PNL")))),[r])},y=({hash:e})=>{const{useColumnSize:t,getI18n:s}=(0,n.useContext)(p.Z),l=t(e);return(0,n.useMemo)((()=>n.createElement("div",{className:"flex flex-col text-left items-start"},n.createElement("div",{className:"text-t-primary text-subtitle3"},l),n.createElement("div",{className:"text-t-third text-caption1"},s("userinfo-column-size",{defaultValue:"Size ({{symbol}})",symbol:u.e.USD})))),[s,l])},L=({hash:e})=>{const{useColumnEntryPrice:t,getI18n:s}=(0,n.useContext)(p.Z),l=t(e);return(0,n.useMemo)((()=>n.createElement("div",{className:"flex flex-col flex-[1] text-left items-start"},n.createElement("div",{className:"text-t-primary text-subtitle3"},l),n.createElement("div",{className:"text-t-third text-caption1"},s("userinfo-positions-column-entryPrice",{defaultValue:"Entry Price"})))),[l,s])},S=({hash:e})=>{const{useColumnMarkPrice:t,getI18n:s}=(0,n.useContext)(p.Z),l=t(e);return(0,n.useMemo)((()=>n.createElement("div",{className:"flex flex-col text-center flex-[1] items-center"},n.createElement("div",{className:"text-t-primary text-subtitle3"},l),n.createElement("div",{className:"text-t-third text-caption1"},s("userinfo-positions-column-markPrice",{defaultValue:"Mark Price"})))),[s,l])},M=({hash:e})=>{const{useColumnLiquidPrice:t,getI18n:s}=(0,n.useContext)(p.Z),l=t(e);return(0,n.useMemo)((()=>n.createElement("div",{className:"flex flex-col text-right items-end flex-[1]"},n.createElement("div",{className:"text-t-primary text-subtitle3"},l),n.createElement("div",{className:"flex justify-end"},n.createElement(P.e,{tip:s("userinfo-column-liquidPrice-tip",{defaultValue:"The position will be liquidated when the initial margin (after deducting the fee) reaches the corresponding lost rate."})},n.createElement("div",{className:"text-t-third text-caption1"},s("userinfo-positions-column-liquidPriceV2",{defaultValue:"Liq. Price"})))))),[l,s])},I=({hash:e})=>{const{getI18n:t,useColumnTPSL:s}=(0,n.useContext)(p.Z),{takeProfit:l,stopLoss:a}=s(e),i=(0,n.useCallback)((()=>v.ee.emit("MODAL_EDIT_TP_SL_OPEN",{hash:e})),[e]);return(0,n.useMemo)((()=>n.createElement("div",{className:"flex flex-col text-right items-end"},n.createElement("div",{className:"text-t-primary text-subtitle3"},l," / ",a),n.createElement("div",{className:"flex flex-row items-center"},n.createElement("div",{className:"text-t-third text-caption1"},t("userinfo-positions-column-tpsl",{defaultValue:"TP/SL"})),n.createElement(E.s,{className:"cursor-pointer text-t-third ml-1",width:"16px",height:"16px",fontSize:"16px",onClick:i})))),[t,i,a,l])},D=({hash:e})=>(0,n.useMemo)((()=>n.createElement("div",{className:"positions-column-mobile box-border p-4 [&+.positions-column-mobile]:border-t-border-line [&+.positions-column-mobile]:border-t [&+.positions-column-mobile]:border-t-solid","data-column-hash":e},n.createElement(C,{hash:e}),n.createElement("div",{className:"flex flex-row justify-between mt-2"},n.createElement(g,{hash:e}),n.createElement(N,{hash:e})),n.createElement("div",{className:"flex flex-row mt-2"},n.createElement(L,{hash:e}),n.createElement(S,{hash:e}),n.createElement(M,{hash:e})),n.createElement("div",{className:"flex flex-row justify-between mt-2"},n.createElement(y,{hash:e}),n.createElement(I,{hash:e})))),[e]);var k=s(78659),O=s(26583),w=s(99297),T=s(89663),A=s(95386),_=s(42249);const V=({hash:e})=>{const{isDumbMode:t,switchMode:s}=(0,k.C)(),{locale:l,Link:a="a",getI18n:i,useDumbPrediction:r}=(0,n.useContext)(p.Z),{usePredictionDataByFiled:o}=r(),c=o(e,"symbol"),u=o(e,"isLong"),m=(0,n.useCallback)((()=>{t||s("dumb")}),[t,s]);return(0,n.useMemo)((()=>n.createElement("div",{className:"flex items-center flex-1"},n.createElement(a,{className:"flex items-center",href:`/${l}/futures/v2/${c}`,onClick:m},n.createElement("div",{className:"text-t-primary text-subtitle2 mr-1"},c),n.createElement("div",{className:(0,x.cn)("flex items-center justify-center h-4 px-1 rounded text-subtitle3",u?"bg-support-success/30 text-t-buy":"bg-support-error/30 text-t-sell")},u?i("userinfo-positions-long","Long"):i("userinfo-positions-short","Short"))))),[m,a,l,c,u,i])},Z=e=>{const t=Math.floor((new Date).getTime()/1e3);return Math.max(e-t,-1)},B=({hash:e})=>{const{getI18n:t,useDumbPrediction:s}=(0,n.useContext)(p.Z),{usePredictionDataByFiled:l}=s(),a=l(e,"startTime"),i=l(e,"executionTime"),r=i-a,o=(0,n.useRef)(null),[c,u]=(0,n.useState)(Z(i)),m=window.getComputedStyle(document.documentElement),d=`rgb(${m.getPropertyValue("--colors-border-line")})`,x=`rgb(${m.getPropertyValue("--colors-highLight")})`;return(0,n.useEffect)((()=>{o.current&&clearInterval(o.current),u(Z(i));const e=()=>{o.current&&(clearInterval(o.current),o.current=null)};return o.current=setInterval((()=>u((t=>{const s=t-1;if(s>-1)return s;const l=Z(i);return l>-1?l:(e(),-1)}))),1e3),e}),[i]),(0,n.useMemo)((()=>n.createElement("div",{className:"flex flex-col text-right items-end flex-1"},n.createElement("div",{className:"text-t-primary text-subtitle3 flex flex-row items-center justify-end"},c>-1?n.createElement(n.Fragment,null,n.createElement("div",{className:"text-highLight mr-1.5"},c,"s"),n.createElement(O.m,{id:`canvas-${e}`,percent:c>r?100:(r-c)/r*100,size:16,width:1.6,color:x,bgColor:d})):n.createElement("div",{className:"text-t-emphasize"},t("userinfo-history-column-status-in-progress","Statement in progress"))))),[c,r,t,e,x,d])},$=({hash:e})=>{const{getI18n:t,useDumbPrediction:s}=(0,n.useContext)(p.Z),{usePredictionDataByFiled:l}=s(),a=l(e,"startTime");return(0,n.useMemo)((()=>n.createElement("div",{className:"flex flex-col text-right items-end flex-1"},n.createElement("div",{className:"text-t-primary text-subtitle3"},(0,w.v)(new Date(1e3*a),"MM-dd hh:mm:ss")),n.createElement("div",{className:"text-t-third text-caption1 mt-0.5"},t("userinfo-positions-column-entryTime",{defaultValue:"Entry Time"})))),[t,a])},F=({hash:e})=>{const t=(0,_.h)(),{getI18n:s,useDumbPrediction:l}=(0,n.useContext)(p.Z),{usePredictionDataByFiled:a}=l(),i=a(e,"principal"),r=a(e,"tokenIn"),o=t[r]||r;return(0,n.useMemo)((()=>n.createElement("div",{className:"flex flex-col flex-1 items-start text-left"},n.createElement("div",{className:"text-t-primary text-subtitle3"}," ",`${i} ${o}`),n.createElement("div",{className:"text-t-third text-caption1 mt-0.5"},s("userinfo-positions-column-initialAmount",{defaultValue:"Initial Amount"})))),[s,i,o])},H=({hash:e})=>{const{getI18n:t,useDumbPrediction:s}=(0,n.useContext)(p.Z),{usePredictionDataByFiled:l,usePricePrecision:a}=s(),i=l(e,"symbol"),r=l(e,"entryPrice"),o=a(i);return(0,n.useMemo)((()=>n.createElement("div",{className:"flex flex-col text-center items-center flex-1"},n.createElement("div",{className:"text-t-primary text-subtitle3"},(0,T.uf)(r,o)),n.createElement("div",{className:"text-t-third text-caption1 mt-0.5"},t("userinfo-positions-column-entryPrice",{defaultValue:"Entry Price"})))),[t,r,o])},z=({hash:e})=>{const{getI18n:t,useDumbPrediction:s}=(0,n.useContext)(p.Z),{useCurrentPrice:l}=s(),a=l(e);return(0,n.useMemo)((()=>n.createElement("div",{className:"flex flex-col text-right items-end flex-1"},n.createElement("div",{className:"text-t-primary text-subtitle3"}," ",a),n.createElement("div",{className:"flex justify-end"},n.createElement("div",{className:"text-t-third text-caption1 mt-0.5"},t("userinfo-positions-column-currentPrice",{defaultValue:"Current Price"}))))),[t,a])},j=({hash:e})=>{const t=(0,_.h)(),{useDumbPrediction:s}=(0,n.useContext)(p.Z),{usePredictionDataByFiled:l,useAssetPrecision:a,useCurrentPrice:i,predictionPairs:r}=s(),o=l(e,"tokenIn"),c=t[o]||o,u=l(e,"symbol"),m=i(e),d=a(c),x=l(e,"entryPrice")||0,h=l(e,"principal")||0,f=l(e,"isLong"),b=l(e,"openFee")||0,E=l(e,"executionTime")||0,P=l(e,"startTime")||0,v=Number(E)-Number(P),C=A.Z1.get(v),N=(0,n.useMemo)((()=>r?.find((e=>u===e.name?.replace("/","")))?.predictionPeriods.find((e=>e.period===C))),[C,r,u]),g=Number(h)-Number(b),y=N&&void 0!==N.winRatio&&void 0!==N.winCloseFeeP?(N.winRatio-N.winCloseFeeP)/10**A.cB.percent:0,L=f?Number(m.replace(/,/g,""))>Number(x):Number(m.replace(/,/g,""))<Number(x),S=L?y:-1,M=L?g*S:Number(h)*S,I=`${(0,T.uf)(100*S,2)}%`,D=(0,T.uf)(M,d);return(0,n.useMemo)((()=>n.createElement("div",{className:"flex flex-col text-left items-start flex-1"},n.createElement("div",{className:"flex leading-4"},n.createElement("div",{className:"text-subtitle3",style:{color:M>0?"rgb(var(--colors-t-buy)":"var(--colors-t-sell))"}},`${M>0?`+${D}`:D}`),n.createElement("div",{className:"text-subtitle3",style:{color:M>0?"rgb(var(--colors-t-buy)":"var(--colors-t-sell))"}}," ",c),n.createElement("div",{className:"text-subtitle3",style:{color:S>0?"rgb(var(--colors-t-buy)":"var(--colors-t-sell))"}}," (",I,")")),n.createElement("div",{className:"flex flex-row items-center"},n.createElement("div",{className:"text-t-third text-caption1 mt-0.5"},"PNL")))),[M,D,S,I,c])},q=({hash:e})=>(0,n.useMemo)((()=>n.createElement("div",{className:"positions-column-mobile box-border p-4 border-b-border-line border-b border-solid","data-column-hash":e},n.createElement("div",{className:"flex flex-row items-start"},n.createElement(V,{hash:e}),n.createElement(B,{hash:e})),n.createElement("div",{className:"flex flex-row mt-3"},n.createElement(j,{hash:e}),n.createElement($,{hash:e})),n.createElement("div",{className:"flex flex-row mt-2"},n.createElement(F,{hash:e}),n.createElement(H,{hash:e}),n.createElement(z,{hash:e})))),[e]);var R=s(48837),U=s(80291),G=s(70326),J=s(26997),K=s(66099),Q=s(26130);const W="h-6 py-0 rounded px-2 text-subtitle2 text-t-third data-[state=active]:bg-interactive-primary data-[state=active]:text-t-white",X=()=>{const{enableDumb:e,useDumbPrediction:t,usePositions:s,useContractCloseAllPosition:l,useContractClosePosition:o,usePositionsInitialed:c,getI18n:d,useTheme:x}=(0,n.useContext)(p.Z),{isLight:h}=x(),{tradeModeTab:f,changeTradeModeTab:b}=(0,m.G)(),E=l(),P=o(),{refetchPredictions:C,usePredictions:N,usePredictionInitialed:g}=t(),y=N(),L=g(),S=s(),M=c(),I=(0,n.useCallback)((()=>v.ee.emit("MODAL_CLOSE_ALL_POSITION",void 0)),[]);return(0,n.useEffect)((()=>v.ee.on("POSITION_CLOSE",(async e=>{await P(e),v.ee.emit("MODAL_CLOSE_POSITION_CLOSE",void 0)}))),[P]),(0,n.useEffect)((()=>v.ee.on("POSITION_ALL_CLOSE",(async()=>{await E(),v.ee.emit("MODAL_CLOSE_ALL_POSITION_CLOSE",void 0)}))),[E]),(0,n.useEffect)((()=>{e&&f===u.O.Dumb&&!L&&C()}),[e,L,C,f]),(0,n.useMemo)((()=>n.createElement(a.mQ,{className:"w-full h-full",value:f,onValueChange:b},n.createElement("div",{className:"positions-container-mobile flex"},n.createElement("div",{className:"flex-col w-full"},n.createElement("div",{className:"flex justify-between items-center px-4 mt-4"},n.createElement("div",null,e&&n.createElement("div",{className:"flex items-center"},n.createElement(a.dr,{className:"p-0 bg-background-bg1Accent01 h-6 rounded"},n.createElement(a.SP,{className:W,value:u.O.Classic},d("userinfo-positions-tab-perp","Perp")),n.createElement(a.SP,{className:W,value:u.O.Dumb},d("userinfo-positions-tab-dumb","Dumb"))))),f===u.O.Classic?n.createElement("button",{type:"button",className:"flex item-center text-body2 cursor-pointer text-t-link hover:text-t-linkHover",onClick:I},d("userinfo-positions-column-close-all-V2",{defaultValue:"Close All"})):null),n.createElement(a.nU,{className:"hidden flex-col w-full h-full data-[state=active]:flex mt-0",value:u.O.Classic},M?S.length?S.map((e=>n.createElement(D,{key:e,hash:e}))):n.createElement(r.$,{isLight:h,title:d("userinfo-positions-no-data",{defaultValue:"No Positions Data"})}):n.createElement(i.g,{fullScreen:!0,inner:!0})),n.createElement(a.nU,{className:"hidden flex-col w-full h-full data-[state=active]:flex mt-0",value:u.O.Dumb},L?y.length?y.map((e=>n.createElement(q,{key:e,hash:e}))):n.createElement(r.$,{isLight:h,title:d("userinfo-positions-no-data",{defaultValue:"No Positions Data"})}):n.createElement(i.g,{fullScreen:!0,inner:!0})))))),[b,f,e,d,M,S,h,L,y,I])},Y=e=>(0,n.useMemo)((()=>n.createElement(p.Z.Provider,{value:{staticHost:e.staticHost,siteHost:e.staticHost,enableShare:e.enableShare,enableShareLink:e.enableShareLink,enableDumb:e.enableDumb,getI18n:e.getI18n,useTheme:e.useTheme,useIsMarketClose:e.useIsMarketClose,useChangeSymbol:e.useChangeSymbol,usePositions:e.usePositions,useContractCloseAllPosition:e.useContractCloseAllPosition,useContractClosePosition:e.useContractClosePosition,usePositionTPSL:e.usePositionTPSL,usePositionAddMargin:e.usePositionAddMargin,usePositionsInitialed:e.usePositionsInitialed,useColumnLeverage:e.useColumnLeverage,useColumnCollateral:e.useColumnCollateral,useColumnPNL:e.useColumnPNL,useColumnSymbol:e.useColumnSymbol,useColumnLiquidPrice:e.useColumnLiquidPrice,useColumnEntryPrice:e.useColumnEntryPrice,useColumnMarkPrice:e.useColumnMarkPrice,useColumnTPSL:e.useColumnTPSL,useColumnSize:e.useColumnSize,useMarkPrice:e.useMarkPrice,useSpread:e.useSpread,onChainPerpContractAddress:e.onChainPerpContractAddress,usePositionDetail:e.usePositionDetail,useActionBtnDisabled:e.useActionBtnDisabled,useLeverage:e.useLeverage,useSymbolLogo:e.useSymbolLogo,useDumbPrediction:e.useDumbPrediction?e.useDumbPrediction:()=>({refetchPredictions:()=>{},usePredictionDataByFiled:()=>{},usePredictionInitialed:()=>!1,usePredictions:()=>[],usePricePrecision:()=>2,useAssetPrecision:()=>2,useCurrentPrice:()=>"-",predictionPairs:[]}),minLeverage:e.minLeverage,maxLeverage:e.maxLeverage}},n.createElement(X,null),n.createElement(R.t,null),n.createElement(U.n,null),n.createElement(G.D,null),n.createElement(o.l.Provider,{value:{getI18n:e.getI18n,useTPSL:e.usePositionTPSL,useMarkPrice:e.useMarkPrice,useActionBtnDisabled:e.useActionBtnDisabled,ee:v.ee,useColumnSymbol:e.useColumnSymbol,useLeverage:e.useLeverage}},n.createElement(c.y,null)),n.createElement(J.C.Provider,{value:{staticHost:e.staticHost,siteHost:e.siteHost,getI18n:e.getI18n,useTheme:e.useTheme,useMarkPrice:e.useMarkPrice,usePositionDetail:e.usePositionDetail,ee:v.ee}},n.createElement(K.F,null),n.createElement(Q.m,null)))),[e]);var ee=s(43693),te=s(33687),se=s(87685),le=s(85177),ae=s(2547),ie=s(96988),ne=s(68692),re=s(52590),oe=s(43664);const ce=()=>{(0,oe.Jo)(),(0,oe.eO)();const{getI18n:e,i18n:{language:t}}=(0,ie.V6)(),s=(0,se.E4)(),{dumb:a}=(0,ae.B)(),i=(0,ne.h)(),[r,o]=(0,se.zC)();return(0,n.useMemo)((()=>(0,l.jsx)(Y,{locale:t,getI18n:e,siteHost:te.brokerConfig.staticBaseUrl,staticHost:te.brokerConfig.apxStaticBaseUrl,Link:ee.G,useTheme:re.F,useMarkPrice:oe.CE,useSpread:oe.vH,useIsMarketClose:se.Ze,useChangeSymbol:oe.d0,usePositions:oe.$J,usePositionTPSL:oe.mO,usePositionAddMargin:oe.zS,useContractCloseAllPosition:oe.h2,useContractClosePosition:oe.Im,usePositionsInitialed:oe.Zm,useColumnSymbol:oe.iA,useColumnLeverage:oe.ch,useColumnCollateral:oe.SD,useColumnEntryPrice:oe.A4,useColumnMarkPrice:oe.PH,useColumnLiquidPrice:oe.lW,useColumnPNL:oe.RM,useColumnTPSL:oe.a1,useColumnSize:oe.v_,usePositionDetail:oe.KB,onChainPerpContractAddress:s.address,useActionBtnDisabled:le.a9,useDumbPrediction:oe.D,useLeverage:oe.rf,enableShare:!0,enableShareLink:i,enableDumb:a,minLeverage:r,maxLeverage:o,useSymbolLogo:se.sH})),[t,e,s.address,i,a,r,o])}}}]);