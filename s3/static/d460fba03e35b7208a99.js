"use strict";(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[4853],{5894:(e,t,i)=>{i.d(t,{FP:()=>s});var o=i(5163),n=i(84423),s=function(e){return(0,o.__awaiter)(void 0,void 0,void 0,(function(){return(0,o.__generator)(this,(function(t){return[2,(0,n.v_)("/bapi/futures/v2/private/future/order/clear-position",e)]}))}))}},56271:(e,t,i)=>{i.d(t,{Z:()=>h});var o=i(52322),n=i(2784),s=i(98537),r=i.n(s),a=i(5163),l=i(98569);const c=function(e){return n.createElement(l.Z,(0,a.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),n.createElement("path",{d:"M9 14.5A6.5 6.5 0 0115.5 8h1.672l-2.586 2.586L16 12l5-5-5-5-1.414 1.414L17.172 6H15.5A8.5 8.5 0 007 14.5V17h2v-2.5z",fill:"currentColor"}),n.createElement("path",{d:"M19 15h2v6H3v-6h2v4h14v-4z",fill:"currentColor"}))};var u=i(62143),d=i(21030),m=i(97060),f=i(53096);const y=(0,n.lazy)((()=>Promise.all([i.e(8063),i.e(1040)]).then(i.bind(i,91040)))),g={display:"flex",alignItems:"center",cursor:"pointer",color:"t.third","&:hover":{color:"t.primary"}},b={display:"flex",alignItems:"center"},p=({text:e,onClick:t,sx:i,showTip:s=!1,showIcon:a=!0})=>{const{t:l}=(0,m.yk)(),f=(0,n.useMemo)((()=>r()({},g,i)),[i]),y=(0,o.jsxs)(u.Z,Object.assign({sx:f,onClick:t},{children:[a&&(0,o.jsx)(c,{className:"share-icon",ml:"4px",mr:e?"4px":"0px",size:16},void 0),e]}),void 0);return s?(0,o.jsx)(d.ZP,Object.assign({sx:b,arrow:!0,tip:l("share",{defaultValue:"Share"})},{children:y}),void 0):y},h=(0,n.memo)((({btnText:e,btnSx:t,sideKey:i,showIcon:s,onClickIcon:r})=>{const[a,l]=(0,n.useState)(!1),c=(0,n.useCallback)((()=>{r&&r(),l(!0)}),[r]),u=(0,n.useCallback)((()=>{l(!1)}),[]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p,{sx:t,text:e,showIcon:s,onClick:c},void 0),(0,o.jsx)(n.Suspense,Object.assign({fallback:(0,o.jsx)(f.Z,{},void 0)},{children:a&&(0,o.jsx)(y,{visible:a,onClose:u,sideKey:i},void 0)}),void 0)]},void 0)}))},51991:(e,t,i)=>{i.d(t,{ME:()=>n,ZP:()=>r,hZ:()=>s});var o=i(30998);const n=e=>e.posCalcData,s=e=>e.setPosCalcData,r=o.Gt},72019:(e,t,i)=>{i.d(t,{z1:()=>W,A4:()=>I,Mx:()=>D,Yq:()=>U,jK:()=>H,qU:()=>J,ek:()=>Q,v_:()=>G,iA:()=>x,Mn:()=>L});var o=i(23131),n=i(2784),s=i(39727),r=i(37227),a=i(33470),l=i(97060),c=i(38896),u=i(85656),d=i(23716);const{calculation:{abacus:{future:{model:m,calculateUmLiquidationPriceForSingleAssetMode:f},model:y,base:g}}}=u.com,{KotlinArrayList:b}=g,p=m.FutureBalance,h=m.FutureBracket,v=m.RiskBracket,P=y.FuturePosition;var S=i(7523),M=i(41260);const A=(0,S._)((e=>Object.values(e).map((e=>{const{asset:t,marginAvailable:i,initialMargin:o,maintenanceMargin:n,marginBalance:s,unrealizedProfit:r,walletBalance:a,crossWalletBalance:l}=e;return new p(t,Boolean(i),String(o),String(n),String(s),String(r),String(a),String(l))}))));var K=i(29261);const k=(0,S._)((e=>{const t=[];return Object.entries(e).forEach((([e,i])=>{if("boolean"==typeof i)return;const o=i.map((e=>new v(e.bracketMaintenanceMarginRate,e.bracketNotionalCap,e.bracketNotionalFloor,e.bracketSeq,e.cumFastMaintenanceAmount,e.maxOpenPosLeverage,e.minOpenPosLeverage))),n=new h(e,o);t.push(n)})),t}));var O=i(31953);function w(e,t){const{askNotional:i,bidNotional:o,collateral:n=(null==t?void 0:t.marginAsset)||"",cumRealized:s,entryPrice:r,id:a,leverage:l,notionalValue:c,positionSize:u,symbol:d,markPrice:m,unrealizedProfit:f,isolated:y,isolatedWallet:g,adl:b,positionSide:p}=e;return new P(String(i),String(o),n,String(s),String(r),a,l,String(c),String(u),d,String(m),String(f),y,String(g),b,p)}const C=(0,S._)(((e,t)=>(0,O.J9)(e).map((e=>w(e,t[e.symbol])))));var Z=i(51991),N=i(13644),z=i(42871),V=i(92521);const{leverageInfo:E}=o.Fy,j={long:"buy",short:"sell"},x=({sideKey:e})=>{const t=(0,c.t2)(e,"symbol"),i=(0,c.t2)(e,"isolated"),o=(0,c.t2)(e,"isolatedWallet"),n=(0,c.t2)(e,"positionSize"),s=0===Number(n)&&i&&Number(o)<0,a=Number(n)>0?"long":"short",u=s?"liq":j[a],{leverageList:d={}}=(0,c.rf)()||{},m=d[t]||E.defaultVal,f=(0,c.AM)()[t],{getI18n:y}=(0,l.yk)();let g,b=t;return f&&(g=(0,r.H)(f,y),b=g.fullName),{color:u,symbolText:b,symbolName:g,leverage:m}},I=({sideKey:e})=>{const t=(0,c.t2)(e,"symbol"),i=(0,c.t2)(e,"entryPrice"),o=(0,c.AM)()[t]||{},{pricePrecision:n}=o;return{formatedEntryPrice:(0,a.uf)(i,n)}},W=({sideKey:e})=>{const t=(0,c.t2)(e,"symbol"),i=(0,c.t2)(e,"markPrice"),{lastPrice:o}=(0,c.zZ)({symbol:t}),n=(0,c.AM)()[t]||{},{pricePrecision:s}=n;return{formatedMarkPrice:(0,a.uf)(i,s),formatedLastPrice:(0,a.uf)(o,s)}},L=({sideKey:e})=>{var t,i;const o=(0,c.t2)(e,"symbol"),n=(0,c.t2)(e,"positionSize"),s=(0,c.t2)(e,"positionSide"),r=(0,c.AM)()[o]||{},{pricePrecision:l}=r,{preOrders:u}=(0,c.E)(),d=Number(n),m={};u.forEach((e=>{const t=!0===e.closePosition,i=o===e.symbol,n=s===e.positionSide,r=d<0&&"BUY"===e.side||d>0&&"SELL"===e.side;t&&i&&n&&r&&("TAKE_PROFIT_MARKET"===e.type&&(m.tp=e),"STOP_MARKET"===e.type&&(m.sl=e))}));const f=(null===(t=null==m?void 0:m.tp)||void 0===t?void 0:t.stopPrice)?(0,a.uf)(m.tp.stopPrice,l):"--",y=(null===(i=null==m?void 0:m.sl)||void 0===i?void 0:i.stopPrice)?(0,a.uf)(m.sl.stopPrice,l):"--";return{strategyOrders:m,formatedTPPrice:f,formatedSLPrice:y}};var $=i(27657),q=i(48752),T=i(45385);const{leverageInfo:B}=o.Fy,F={long:"buy",short:"sell"},_=()=>{const e=(0,c.F)(),t=(0,c.AM)()||{};return e.map((e=>{var i;return Object.assign(Object.assign({},e),{contractVal:null===(i=t[e.symbol])||void 0===i?void 0:i.contractVal})}))},R=(0,o.nM)(),G=e=>R?(({sideKey:e,columnKey:t=""})=>{const{getI18n:i}=(0,l.yk)(),o=(0,c.t2)(e,"symbol"),s=(0,c.t2)(e,"isolated"),r=(0,c.t2)(e,"isolatedWallet"),u=(0,c.t2)(e,"positionSize"),d=(0,c.cO)(e)||{},{lastPrice:m}=(0,c.zZ)({symbol:null==d?void 0:d.symbol}),f=(0,Z.ZP)(Z.hZ),y=Number(u),g=y>0?"long":"short",b=0===y&&s&&Number(r)<0?"liq":F[g],p=(0,c.AM)()[o]||{},{quantityPrecision:h,marginAsset:v="",equalQtyPrecision:P,contractVal:S=100}=p,{isCoinUnit:M}=(0,$.Q)(),A=y>0?"":"-",K=M?(0,q.unitChangeCoinQty)({quantity:Math.abs(y),contractVal:S,price:m,precision:P,format:!1}):y.toFixed(h),k=M?`${A}${K}`:(0,a.uf)(y,h),O=M?v:i("Cont",{defaultValue:"Cont"});return(0,n.useEffect)((()=>{t&&f(e,t,Math.abs(M?Number(K):y))}),[]),{color:b,quantityAmount:K,formatedQuantityAmount:k,unit:O}})(e):(({sideKey:e,columnKey:t=""})=>{const i=(0,c.t2)(e,"symbol"),o=(0,c.t2)(e,"isolated"),s=(0,c.t2)(e,"isolatedWallet"),r=(0,c.t2)(e,"positionSize"),l=(0,c.cO)(e)||{},{lastPrice:u}=(0,c.zZ)({symbol:null==l?void 0:l.symbol}),d=(0,Z.ZP)(Z.hZ),m=Number(r),f=m>0?"long":"short",y=0===m&&o&&Number(s)<0?"liq":j[f],g=(0,c.AM)()[i]||{},{baseAsset:b="",pricePrecision:p=2,quantityPrecision:h=8,marginAsset:v=""}=g,{isCoinUnit:P}=(0,N.Q)(),S=m>0?"":"-",M=P?m.toFixed(h):(0,z.WA)({quantity:Math.abs(m),price:u,precision:p,format:!1}),A=P?(0,a.uf)(m,h):`${S}${M}`,K=P?b:v;return(0,n.useEffect)((()=>{t&&d(e,t,Math.abs(P?m:Number(M)))}),[]),{color:y,quantityAmount:M,formatedQuantityAmount:A,unit:K}})(e),H=e=>R?(({sideKey:e,columnKey:t=""})=>{const i=(0,c.t2)(e,"symbol"),o=(0,c.t2)(e,"positionSize"),s=(0,Z.ZP)(Z.hZ),r=(0,c.AM)()[i]||{},{contractVal:l}=r,u=Math.abs(o)*Number(l),d=l?(0,a.uf)(u,2):"-";return(0,n.useEffect)((()=>{t&&s(e,t,u)}),[]),{notionalSize:u,formattedNotionalSize:d,unit:"USD"}})(e):(({sideKey:e,columnKey:t=""})=>{const i=(0,c.t2)(e,"symbol"),o=(0,c.t2)(e,"positionSize"),s=(0,c.t2)(e,"markPrice"),r=(0,Z.ZP)(Z.hZ),l=(0,c.AM)()[i]||{},{quoteAsset:u=""}=l,d=Math.abs(o)*s,m=(0,a.uf)(d,2);return(0,n.useEffect)((()=>{t&&r(e,t,d)}),[]),{notionalSize:d,formattedNotionalSize:m,unit:u}})(e),D=e=>R?(({sideKey:e,columnKey:t=""})=>{const i=(0,c.KQ)(),o=(0,c.Gf)(),s=_(),r=(0,c.cO)(e)||{},l=(0,Z.ZP)(Z.hZ),{symbol:u,isolated:d,isolatedWallet:m=0,positionSide:f}=r,y=(0,c.AM)()[u]||{},{marginAsset:g,pricePrecision:b,contractVal:p}=y,h=Object.assign(Object.assign({},r),{contractVal:p}),v=i[g]||{},{crossWalletBalance:P=0}=v,S=(null==o?void 0:o[u])||[],M=!d&&f&&"BOTH"!==f,A=d?m:P;let K=0;if(!d){const e=s.filter((e=>e.marginAsset===g)).filter((e=>!(null==e?void 0:e.isolated))).filter((e=>(null==e?void 0:e.symbol)!==u));K=(0,T.zW)(e,o)-(0,T.ot)(e)}let k,O,w=0;if(M){const e=s.filter((e=>{const{symbol:t,positionSide:i}=e||{};return t===u&&"BOTH"!==i&&i!==f}))[0]||{positionSize:0,entryPrice:0};k="LONG"===f?h:e,O="SHORT"===f?h:e}w=M&&k.positionSize&&O.positionSize?(0,T.ST)(S,A,K,k,O,h):(0,T.W8)(S,A,K,h),w=w<0?0:w;const C=w>0?(0,a.uf)(w,b):"-";return(0,n.useEffect)((()=>{t&&l(e,t,w)}),[]),{liquidationPrice:w,formatedLiqPrice:C}})(e):(({sideKey:e,columnKey:t=""})=>{const i=function(){const e=(0,M.KQ)();return A(e)}(),o=function(){const e=(0,K.Gf)();return k(e)}(),r=(()=>{const e=(0,s.v9)((e=>e.position.positionMap)),t=(0,K.Vh)();return C(e,t)})(),l=(e=>{const t=(0,s.v9)((e=>e.position.positionMap))[e],i=(0,K.Vh)();return t?w(t,i[t.symbol]):null})(e),u=(0,c.t2)(e,"symbol"),m=(0,Z.ZP)(Z.hZ),y=(0,c.AM)()[u]||{},{pricePrecision:g}=y;let b=0;const p=(0,s.v9)((e=>e.loading.effects.preference.getMultiAssetMarginEnableConfig)),h=(0,s.v9)((e=>e.loading.effects.preference.getAssetMode));p||h||!l||(b=((...e)=>{let t=0;try{t=f(...e)}catch(e){d.log(e)}return t})(l,r,i,o));const v=b>0?(0,a.uf)(b,g):"-";return(0,n.useEffect)((()=>{t&&m(e,t,b)}),[]),{liquidationPrice:b,formatedLiqPrice:v}})(e),Q=e=>R?(({sideKey:e,columnKey:t=""})=>{const i=(0,c.KQ)(),o=(0,c.Gf)(),s=_(),r=(0,c.cO)(e)||{},{symbol:a,isolated:l}=r,u=(0,c.AM)()[a]||{},d=(0,Z.ZP)(Z.hZ),{marginAsset:m,contractVal:f}=u;let y;if(l){const{isolatedWallet:e=0,symbol:t}=r,i=(null==o?void 0:o[t])||[],n=(0,T.SH)(i,Object.assign(Object.assign({},r),{contractVal:f})),s=(0,T.nn)(Object.assign(Object.assign({},r),{contractVal:f}));y=(0,T.Vo)(n,e,s)}else{const e=i[m]||{},{crossWalletBalance:t=0}=e,n=s.filter((e=>e.marginAsset===m)).filter((e=>!(null==e?void 0:e.isolated))),r=(0,T.zW)(n,o),a=(0,T.ot)(n);y=(0,T.Vo)(r,t,a)}const g=Number(y)>80?"negative":"";return(0,n.useEffect)((()=>{t&&d(e,t,Number(y))}),[]),{ratioColor:g,riskRatio:y}})(e):(({sideKey:e,columnKey:t=""})=>{const i=(0,c.KQ)(),o=(0,c.Gf)(),r=(0,c.F)(),a=(0,c.cO)(e)||{},{symbol:l,isolated:u}=a,d=(0,c.AM)()[l]||{},m=(0,Z.ZP)(Z.hZ),{marginAsset:f}=d;let y;if(u){const{isolatedWallet:e=0,symbol:t}=a,i=(null==o?void 0:o[t])||[],n=(0,V.SH)(i,a),s=(0,V.nn)(a);y=(0,V.Vo)(n,e,s)}else{const e=i[f]||{},{crossWalletBalance:t=0}=e,n=r.filter((e=>e.marginAsset===f)).filter((e=>!(null==e?void 0:e.isolated))),s=(0,V.zW)(n,o),a=(0,V.ot)(n);y=(0,V.Vo)(s,t,a)}const g=(0,s.v9)((e=>e.loading.effects.preference.getMultiAssetMarginEnableConfig)),b=(0,s.v9)((e=>e.loading.effects.preference.getAssetMode));(g||b)&&(y="0.00");const p=Number(y)>80?"negative":"";return(0,n.useEffect)((()=>{t&&m(e,t,Number(y))}),[]),{ratioColor:p,riskRatio:y}})(e),U=e=>R?(({sideKey:e,columnKey:t=""})=>{const i=(0,c.ce)(),o=(0,c.cO)(e)||{},s=(0,Z.ZP)(Z.hZ),{symbol:r,isolated:l,isolatedWallet:u=0,positionSize:d,markPrice:m}=o,{leverageList:f={}}=(0,c.rf)()||{},y=f[r]||B.defaultVal,g=(0,c.AM)()[r]||{},{marginAsset:b="",contractVal:p=100}=g,h=(0,T.fS)({positionSize:d,markPrice:m,contractVal:p})*(0,T.yh)(y),v=l?u:h,P=`${(0,a.GW)(v,i,!0)} ${b}`;return(0,n.useEffect)((()=>{t&&s(e,t,v)}),[]),{margin:v,formatedMargin:P}})(e):(({sideKey:e,columnKey:t=""})=>{const i=(0,c.ce)(),o=(0,c.cO)(e)||{},s=(0,Z.ZP)(Z.hZ),{symbol:r,isolated:l,isolatedWallet:u=0}=o,{leverageList:d={}}=(0,c.rf)()||{},m=d[r]||E.defaultVal,f=(0,c.AM)()[r]||{},{marginAsset:y=""}=f,g=(0,V.fS)(o)*(0,V.yh)(m),b=l?u:g,p=`${(0,a.uf)(b,i)} ${y}`;return(0,n.useEffect)((()=>{t&&s(e,t,b)}),[]),{margin:b,formatedMargin:p}})(e),J=e=>R?(({sideKey:e,columnKey:t=""})=>{const{useLastPrice:i}=(0,c.F7)(),o=(0,c.ce)(),s=(0,c.cO)(e)||{},r=(0,Z.ZP)(Z.hZ),{symbol:l,positionSize:u,markPrice:d}=s,{leverageList:m={}}=(0,c.rf)()||{},f=m[l]||B.defaultVal,{lastPrice:y}=(0,c.zZ)({symbol:l}),g=(0,c.AM)()[l]||{},{marginAsset:b="",contractVal:p=100}=g,h=(0,T.fS)({positionSize:u,markPrice:d,contractVal:p})*(0,T.yh)(f),v=(0,T.nn)(Object.assign(Object.assign({},s),{contractVal:p,lastPrice:y}),i),P=0===Number(v)?"":Number(v)>0?"buy":"sell",S=0===Number(v)?"":Number(v)>0?"+":"",M=`${S}${(0,a.GW)(v,o,!0)} ${b} `,A=100*(v/h||0),K=`${S}${A.toFixed(2)}%`;return(0,n.useEffect)((()=>{t&&r(e,t,A)}),[]),{unrealizedPnl:v,formatedPnl:M,pnlColor:P,ROEVal:K}})(e):(({sideKey:e,columnKey:t=""})=>{const{useLastPrice:i}=(0,c.F7)(),o=(0,c.ce)(),s=(0,c.cO)(e)||{},r=(0,Z.ZP)(Z.hZ),{leverageList:l={}}=(0,c.rf)()||{},u=l[null==s?void 0:s.symbol]||E.defaultVal,{lastPrice:d}=(0,c.zZ)({symbol:null==s?void 0:s.symbol}),m=(0,c.AM)()[null==s?void 0:s.symbol]||{},{marginAsset:f=""}=m,y=(0,V.fS)(s)*(0,V.yh)(u),g=(0,V.nn)(Object.assign(Object.assign({},s),{lastPrice:d}),i),b=0===Number(g)?"":Number(g)>0?"buy":"sell",p=Number(g)>0?"+":"",h=`${p}${(0,a.GW)(g,o,!0)} ${f}`,v=100*(g/y||0),P=`${p}${v.toFixed(2)}%`;return(0,n.useEffect)((()=>{t&&r(e,t,v)}),[]),{unrealizedPnl:g,formatedPnl:h,pnlColor:b,ROEVal:P}})(e)},71994:(e,t,i)=>{i.d(t,{U:()=>d,e:()=>u});var o=i(2784),n=i(33470),s=i(31953),r=i(38896),a=i(51991),l=i(92521),c=i(62684);const u=({sideKey:e,columnKey:t=""})=>{const i=(0,r.KQ)(),u=(0,r.Gf)(),d=(0,r.F)(),m=(0,r.cO)(e)||{},f=(0,a.ZP)(a.hZ),{symbol:y,positionSide:g}=m,b=(0,r.AM)()[y]||{},{marginAsset:p,pricePrecision:h}=b,v=i[p]||{},{crossWalletBalance:P=0}=v,S=(null==u?void 0:u[y])||[],{assetsRateEquity:M,assetsMM:A}=(0,r.Nx)(),K=(0,r.G8)(),k=K[p]||{},O=((0,s.L6)(d)[p]||[]).filter((e=>(null==e?void 0:e.symbol)!==y)),w=(0,l.zW)(O,u),C=(0,l.ot)(O);let Z=0;Object.entries(M).forEach((([e,t])=>{e!==p&&(Z+=t)})),Object.entries(A).forEach((([e,t])=>{const i=K[e]||{},{askRate:o=0}=i;Z-=e!==p?t*o:w*o}));let N=0;if(g&&"BOTH"!==g){const e=d.filter((e=>{const{symbol:t,positionSide:i}=e||{};return t===y&&"BOTH"!==i&&i!==g}))[0]||{positionSize:0,entryPrice:0},t="LONG"===g?m:e,i="SHORT"===g?m:e;N=(0,c._O)({accEquityAndMMs:Z,assetIndex:k,bracket:S,crossWalletBalance:P,smdsUPNL:C,longPosition:t,shortPosition:i,curPosition:m})}else N=(0,c.Dj)({accEquityAndMMs:Z,assetIndex:k,bracket:S,crossWalletBalance:P,smdsUPNL:C,curPosition:m});const z=N>0?(0,n.uf)(N,h):"-";return(0,o.useEffect)((()=>{t&&f(e,t,N)}),[]),{liquidationPrice:N,formatedLiqPrice:z}},d=({sideKey:e,columnKey:t=""})=>{const i=(0,a.ZP)(a.hZ),{riskRatio:n}=(0,r.Nx)(),s=Number(n)>80?"negative":"";return(0,o.useEffect)((()=>{t&&i(e,t,Number(n))}),[]),{ratioColor:s,riskRatio:n}}},30998:(e,t,i)=>{i.d(t,{Nu:()=>b,Qy:()=>g,zz:()=>f,PH:()=>d,Lb:()=>m,kH:()=>y,Gt:()=>h,xG:()=>u});var o=i(74388),n=i(49475),s=i(44174);const r={keys:new Set,setItem(e,t,i){if("function"!=typeof i)return new Promise((i=>{this.keys.add(e),this[e]=t,i()}));this.keys.add(e),this[e]=t,i(null)},getItem(e,t){if("function"!=typeof t)return new Promise((t=>{t(this[e])}));t(this[e])},removeItem(e,t){if("function"!=typeof t)return new Promise((t=>{this[e]=void 0,this.keys.delete(e),t()}));this[e]=void 0,this.keys.delete(e),t(null)},clear(e){if("function"!=typeof e)return new Promise((e=>{this.keys.forEach((e=>{this[e]=void 0})),this.keys.clear(),e()}));this.keys.forEach((e=>{this[e]=void 0})),this.keys.clear(),e(null)},create(){return Object.create(this)}},a={setItem(e,t,i){const o="object"==typeof t?JSON.stringify(t):t;if("function"!=typeof i)return new Promise(((t,i)=>{try{window.localStorage.setItem(e,o),t()}catch(e){i(e)}}));try{window.localStorage.setItem(e,o),i(null)}catch(e){i(e)}},getItem(e,t){if("function"!=typeof t)return new Promise((t=>{t((0,s.As)(window.localStorage.getItem(e)))}));t(null,(0,s.As)(window.localStorage.getItem(e)))},removeItem(e,t){if("function"!=typeof t)return new Promise((t=>{window.localStorage.removeItem(e),t()}));window.localStorage.removeItem(e),t(null)},clear(e){if("function"!=typeof e)return new Promise((e=>{window.localStorage.clear(),e()}));window.localStorage.clear(),e(null)},create(){return Object.create(this)}};function l(e){const t=new Map;return function(i,...o){if(t.has(i))return t.get(i);const n=e(i,...o);return t.set(i,n),n}}function c({stateKey:e,storageKey:t=e,defaultValue:i,validator:n,storage:l}){const c=void 0!==(u=l)?u:"undefined"!=typeof window?a.create():r.create();var u,d;return(0,o.Z)((d=(t,o)=>({[e]:i,[`set${(0,s.kC)(e)}`]:i=>t({[e]:i}),[`toggle${(0,s.kC)(e)}`]:()=>t({[e]:!o()[e]})}),(o,r,a)=>{const l=d((i=>{o(i);const n=r()[e];c.setItem(t,n)}),r);let u={};return"undefined"!=typeof window&&c.getItem(t,((t,o)=>{let s;s="function"==typeof n?n(o)?o:i:null!=o?o:i,u={[e]:s}})),Object.assign(Object.assign(Object.assign({},l),u),{[`clear${(0,s.kC)(e)}`](){c.removeItem(t),o(l)}})}))}const u=(0,o.Z)((e=>({disableMouse:!1,setDisableMouse:t=>e({disableMouse:t})}))),d=l((function(e){return c({stateKey:"miniMultiChartType",storageKey:`${e}-chart-miniMultiChartType`,defaultValue:n.k.Store.ChartMode.Single})})),m=l((function(e){return c({stateKey:"miniMultiChartWindows",storageKey:`${e}-chart-miniMultiChartWindows`,defaultValue:["","","",""]})})),f=l((function(e){return c({stateKey:"lastSelectedMiniMultiChartWindow",storageKey:`${e}-chart-lastSelectedMiniMultiChartWindow`,defaultValue:0})})),y=l((function(e){return c({stateKey:"priceType",storageKey:`${e}-chart-priceType`,defaultValue:n.k.Store.PriceType.Last})})),g=l((function(e){return c({stateKey:"interval",storageKey:`${e}-chart-interval`,defaultValue:n.k.Store.DisplayIntervals["1d"]})})),b=l((function(e){return c({stateKey:"chartType",storageKey:`${e}-chart-type`,defaultValue:n.k.Store.OriginalChartStyle.CandleBar})}));var p=i(15729);const h=(0,o.Z)((e=>({posCalcData:{},setPosCalcData:(t,i,o)=>e((0,p.ZP)((e=>{e.posCalcData[t]||(e.posCalcData[t]={}),t&&i&&e.posCalcData[t][i]!==o&&(e.posCalcData[t][i]=o)})))})))}}]);