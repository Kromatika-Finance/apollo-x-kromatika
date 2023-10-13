"use strict";(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[9257],{3185:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(5163),i=n(2784),s=n(98569);const o=function(e){return i.createElement(s.Z,(0,a.__assign)({width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},e),i.createElement("path",{d:"M12 10.586l5.95-5.95a1 1 0 111.414 1.414L13.414 12l5.95 5.95a1 1 0 01-1.414 1.414L12 13.414l-5.95 5.95a1 1 0 01-1.414-1.414l5.95-5.95-5.95-5.95A1 1 0 016.05 4.636l5.95 5.95z"}))}},32027:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(5163),i=n(2784),s=n(98569);const o=function(e){return i.createElement(s.Z,(0,a.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 21a9 9 0 100-18 9 9 0 000 18zm-1.25-5.5V18h2.5v-2.5h-2.5zm0-9.5v7h2.5V6h-2.5z",fill:"currentColor"}))}},19076:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(5163),i=n(2784),s=n(92036),o=n(62143),r=n(87938),l=n(32027),c=n(71927),d=n(23377),u=n(77711),h=function(e){var t=e.isShow,n=e.variant,o=e.getValid,r=e.customIcon,u={info:l.Z,error:c.Z,warning:l.Z,success:d.Z}[n],h=r&&o(r)?i.cloneElement(r,(0,a.__assign)({size:20},r.props),[]):i.createElement(u,{size:20});return t?i.createElement(s.Z,{sx:{width:"24px",height:"24px",mr:"xs",justifyContent:"center",alignItems:"center",flexShrink:0}},h):null},m=function(e){var t=e.isShow,n=e.onClose;return t?i.createElement(s.Z,{sx:{width:"24px",height:"24px",justifyContent:"center",alignItems:"center",color:"t.disabled",marginLeft:"auto"}},i.createElement(u.Z,{size:18,onClick:n,cursor:"pointer"})):null},p=(0,i.forwardRef)((function(e,t){var n=e.children,r=e.icon,l=e.variant,c=void 0===l?"warning":l,d=e.closable,u=void 0!==d&&d,p=e.showIcon,v=void 0===p||p,x=e.onClose,f=e.title,g=e.insideCenter,b=void 0!==g&&g,j=e.__css,w=(0,a.__rest)(e,["children","icon","variant","closable","showIcon","onClose","title","insideCenter","__css"]);return i.createElement(s.Z,(0,a.__assign)({tx:"alertV2",variant:c,alignItems:"flex-start",ref:t,width:"100%",__css:(0,a.__assign)({p:"ls"},j)},w),i.createElement(s.Z,{justifyContent:b?"center":"",flex:"1",alignItems:"flex-start"},i.createElement(h,{isShow:v,variant:c,getValid:i.isValidElement,customIcon:r}),i.createElement(o.Z,{__css:{wordBreak:"break-word",flexShrink:1,height:"auto",lineHeight:"24px",width:b?"auto":"100%",color:"alertV2."+c+"FontColor"}},f&&i.createElement(o.Z,{as:"p",__css:{fontWeight:"medium"}},f),n)),i.createElement(m,{isShow:u,onClose:x}))})),v=(0,i.forwardRef)((function(e,t){var n=e.enablePortal,s=e.container,o=e.topOfPage,l=e.__css,c=(0,a.__rest)(e,["enablePortal","container","topOfPage","__css"]);return o||n||s?i.createElement(r.ZP,{container:s},i.createElement(p,(0,a.__assign)({__css:o?(0,a.__assign)({position:"fixed",top:0,left:0,zIndex:"alert",borderRadius:0},l):{}},c,{ref:t}))):i.createElement(p,(0,a.__assign)({},c))}));v.displayName="AlertV2";const x=v},47535:(e,t,n)=>{n.d(t,{C:()=>h,Z:()=>m});var a=n(52322),i=n(33322),s=n(48658),o=n(45362),r=n(66306),l=n(33470),c=n(31843),d=n(65866);const u={className:"amount-input-container",sx:{height:"48px",width:"100%",bg:"bg3",mb:"16px","&.bn-input-status-error":{border:"none"},".bn-input-helper-text":{color:"errors",fontSize:"14px"}}};var h;!function(e){e[e.Deposit=1]="Deposit",e[e.Withdraw=2]="Withdraw"}(h||(h={}));const m=({value:e,onChange:t,available:n,maxWithdraw:m,asset:p,type:v,precision:x=8,getI18n:f})=>{var g;const b=(0,c.w)({oldValue:e,precision:x}),j=Number(-1===m?n:Math.min(m,Number(n))),w=Number(e)>j,y=(null===(g=m.toString().split(".")[1])||void 0===g?void 0:g.length)||0;return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",Object.assign({className:"amount-label"},{children:[(0,a.jsx)(i.Z,Object.assign({width:"auto"},{children:f("Amount")}),void 0),(0,a.jsxs)(s.Z,Object.assign({variant:"body2",color:"t.third"},{children:[f("Available"),(0,a.jsxs)(s.Z,Object.assign({ml:"4px",as:"span",variant:"subtitle2",color:"t.primary"},{children:[n," ",p]}),void 0)]}),void 0)]}),void 0),(0,a.jsx)(r.Z,{value:e,onChange:e=>t(b(e.currentTarget.value)),boxProps:u,variant:"outlineLarge",className:"amount-input",labelFixed:!0,error:w,suffix:(0,a.jsx)(o.Z,Object.assign({variant:"quiet",onClick:()=>{t((0,l.GW)(j,x).toString())}},{children:f("MAX")}),void 0),errorText:v===h.Withdraw?f("wallet-withdraw-amount-error",{defaultValue:"Please enter an amount less than the max withdrawal amount."}):f("wallet-deposit-amount-error",{defaultValue:"Please enter an amount less than the max deposit amount."})},void 0),-1!==m&&(0,a.jsx)("div",Object.assign({className:"amount-info"},{children:f("wallet-remaining-withdraw-info",{defaultValue:"Daily withdrawal amount remaining: {{maxWithdraw}} USD",maxWithdraw:(0,d.uf)(m,y>8?8:y,3)})}),void 0)]},void 0)}},76644:(e,t,n)=>{n.d(t,{m:()=>o});var a=n(52322),i=n(88767);const s=new i.QueryClient({defaultOptions:{queries:{refetchOnWindowFocus:!1,retry:!1}}}),o=({children:e})=>(0,a.jsx)(i.QueryClientProvider,Object.assign({client:s},{children:e}),void 0)},69257:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var a=n(52322),i=n(2784),s=n(87612),o=n(22944),r=n(19076),l=n(54073),c=n.n(l),d=n(42902),u=n(3185),h=n(86828),m=n(21209),p=n(48658),v=n(33411),x=n(38896),f=n(88795),g=n(22292),b=n(86529),j=n(76644),w=n(84977),y=n(56218),C=n(47535),O=n(56929),_=function(e,t,n,a){return new(n||(n=Promise))((function(i,s){function o(e){try{l(a.next(e))}catch(e){s(e)}}function r(e){try{l(a.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}l((a=a.apply(e,t||[])).next())}))};const Z=({visible:e,onClose:t,defaultCoin:n,getI18n:l,locale:j,hitRisk:Z=!1,sx:S={},dialogSx:k={},t:N,disabled:E,onTransactionStart:I=(()=>null)})=>{var V;const[M]=(0,v.WS)(),W=(0,i.useRef)(n||b.J$),[$,T]=(0,i.useState)("0"),z=(()=>{const[,e]=i.useState({});return i.useCallback((()=>e({})),[])})(),D=(0,y.r9)(),F=(0,y.fF)(),P=(0,x._n)(),{data:R,refetch:B}=(0,O.i)(F&&P,W.current),{data:A,refetch:L}=(0,O.I)(F&&P),G=(null===(V=null==A?void 0:A.data)||void 0===V?void 0:V.reduce(((e,t)=>(e[t.asset]=Number(t.walletBalance),e)),{}))||{},H=(0,i.useCallback)((({coin:e,amount:n})=>_(void 0,void 0,void 0,(function*(){if(M){I({coin:e,amount:n});try{const a=yield M.getWalletBalance(W.current);if(T(a),Number(a)<Number(n))return void(0,o.i)({message:l("wallet-deposit-amount-error",{defaultValue:"Please enter an amount less than the max deposit amount."}),okText:l("dex-dialog-ok","Ok"),cancelText:""});M.deposit(e,n),t()}finally{}}}))),[M,t]),J=(0,i.useMemo)((()=>c()((()=>_(void 0,void 0,void 0,(function*(){if(!M)return;const e=yield M.getWalletBalance(W.current);T(e)}))),500)),[W,M]),q=(0,i.useCallback)((e=>{W.current=e,e?(J(),z()):T("0")}),[J,z]);(0,i.useEffect)((()=>{P&&e&&(J(),F&&(B(),L()))}),[e,P,F]),(0,i.useEffect)((()=>{W.current=n,e&&J()}),[n,e]);const Y=(0,i.useMemo)((()=>(0,a.jsx)(a.Fragment,{children:Z&&(0,a.jsxs)(r.Z,Object.assign({variant:"warning",ml:"-24px",width:"calc(100% + 48px)"},{children:[l("deposit-risk-hint",{defaultValue:"The current address might be abnormal or have security risk issues,  \n              please contact us if you found any suspicious related to your funds."}),(0,a.jsx)(h.Z,Object.assign({href:`https://apollox.zendesk.com/hc/${(0,d.s)(j)}/requests/new`,color:"t.yellow",display:"block",target:"_blank"},{children:l("contact-us",{defaultValue:"Contact Us >"})}),void 0)]}),void 0)},void 0)),[Z,l,j]),Q=(0,i.useMemo)((()=>D?[(0,a.jsx)(w.Y,{label:l("dex-deposit-to","Deposit to"),getI18n:l},"tradeType")]:[]),[l]);return(0,a.jsxs)(m.Z,Object.assign({sx:Object.assign(Object.assign({},f.i),k),visible:e},{children:[(0,a.jsxs)(p.Z,Object.assign({variant:"headline6",className:"title"},{children:[l("Deposit",{defaultValue:"Deposit"}),(0,a.jsx)(u.Z,{className:"close",onClick:t},void 0)]}),void 0),(0,a.jsx)(g.Z,{top:Y,suffixFields:Q,available:$,defaultCoin:n,type:C.C.Deposit,onConfirm:H,onChangeCoin:q,getI18n:l,sx:S,residualDeposit:R,bottom:R&&R>=0?(0,a.jsx)(p.Z,Object.assign({variant:"body2",color:"t.secondary",mt:"16px"},{children:(0,a.jsx)(s.c,{t:N,i18nKey:"deposit-residual-hint",defaults:"You can have a maximum of {{maxDeposit}} {{coin}} in your account as margin asset.",values:{maxDeposit:R+G[W.current],coin:W.current}},void 0)}),void 0):null,disabled:E},void 0)]}),void 0)},S=e=>{var{tradeType:t=y.v3.Futures,isSupportSpot:n=!0}=e,i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n}(e,["tradeType","isSupportSpot"]);return(0,a.jsx)(j.m,{children:(0,a.jsx)(y.B9,Object.assign({tradeType:t,isSupportSpot:n},{children:(0,a.jsx)(Z,Object.assign({},i),void 0)}),void 0)},void 0)}},22292:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(52322),i=n(2784),s=n(62143),o=n(45362),r=n(65866),l=n(37745),c=n(64296),d=n(33411),u=n(92036),h=n(7845);const m={color:"t.primary",justifyContent:"flex-start",alignItems:"center",flex:1,height:"100%",fontSize:"14px",".asset-code":{ml:"4px"},".asset-name":{ml:"4px",color:"t.third"}},p=({logo:e,code:t,name:n})=>(0,a.jsxs)(u.Z,Object.assign({sx:m},{children:[(0,a.jsx)(h.Z,{variant:"avatar",src:e,alt:"",width:16,height:16},void 0),(0,a.jsx)("div",Object.assign({className:"asset-code"},{children:t}),void 0),(0,a.jsx)("div",Object.assign({className:"asset-name"},{children:n}),void 0)]}),void 0);var v=n(86529);const x=({value:e,onChange:t,getI18n:n})=>{const s=(0,d.v8)(),o=(0,i.useCallback)((e=>{const t=s.find((t=>t.code===e));return t?(0,a.jsx)(p,Object.assign({},t),void 0):null}),[s]);return(0,i.useEffect)((function(){s.length&&!s.find((t=>t.code===e))&&t(v.J$)}),[e,s,t]),(0,a.jsx)(l.Z,Object.assign({label:n("Coin",{defaultValue:"Coin"}),hideSearch:!0,onChange:e=>{t(e)},size:"lg",value:e,renderValue:o},{children:s.map((e=>(0,a.jsx)(c.W,Object.assign({value:e.code},{children:(0,a.jsx)(p,Object.assign({},e),void 0)}),e.code)))}),void 0)};var f=n(47535);const g={display:"flex",flexDirection:"column",justifyContent:"space-between",flex:1,".footer":{mt:"52px",textAlign:"right"},".confirm":{height:40,width:["100%",164]},".bn-sdd-noResults":{color:"t.secondary"},".amount-label":{justifyContent:"space-between",alignItems:"center",mb:"4px",lineHeight:"32px",display:"flex"},".amount-info":{color:"t.secondary",fontSize:"14px",mt:"32px"}},b=({available:e,maxWithdraw:t=-1,residualDeposit:n=-1,onChangeCoin:l,onConfirm:c,defaultCoin:u=v.J$,bottom:h=null,top:m=null,suffixFields:p=[],type:b,getI18n:j,sx:w={},disabled:y})=>{const[C,O]=(0,i.useState)(""),[_,Z]=(0,i.useState)(u),S=(0,d.W4)(_),k=(0,r.GW)(e,S).toString();let N=Number(k);t>=0?N=Math.min(Number(k),t):n>=0&&(N=Math.min(N,n));const E=y||!t||!Number(e)||!Number(C)||Number(C||0)>N;return(0,a.jsxs)(s.Z,Object.assign({sx:Object.assign(Object.assign({},g),w)},{children:[m,(0,a.jsxs)("div",{children:[p.map(((e,t)=>(0,a.jsx)(s.Z,Object.assign({mt:"24px"},{children:e}),t))),(0,a.jsx)(s.Z,Object.assign({mt:"24px"},{children:(0,a.jsx)(x,{value:_,onChange:e=>{l(e),Z(e)},getI18n:j},void 0)}),void 0),(0,a.jsx)(s.Z,Object.assign({mt:"24px"},{children:(0,a.jsx)(f.Z,{maxWithdraw:t,value:C,onChange:O,available:k,asset:_,type:b,getI18n:j,precision:S},void 0)}),void 0)]},void 0),h,(0,a.jsx)("div",Object.assign({className:"footer"},{children:(0,a.jsx)(o.Z,Object.assign({disabled:E,onClick:()=>c({coin:_,amount:C}),className:"confirm"},{children:j("Confirm")}),void 0)}),void 0)]}),void 0)}},84977:(e,t,n)=>{n.d(t,{Y:()=>l});var a=n(52322),i=n(2784),s=n(37745),o=n(64296),r=n(56218);const l=({label:e,getI18n:t,onChangeType:n})=>{const{tradeType:l,setTradeType:c}=(0,r.Gt)(),d=(0,i.useMemo)((()=>[{label:t("dex-trade-type-spot",{defaultValue:"Spot"}),value:`${r.v3.Spot}`},{label:t("dex-trade-type-futures",{defaultValue:"Futures"}),value:`${r.v3.Futures}`}]),[t]),u=(0,i.useCallback)((e=>{const t=d.find((t=>t.value===e));return t&&t.label||""}),[d]),h=(0,i.useCallback)((e=>{c(Number(e)),setTimeout((()=>{n&&n()}))}),[]);return(0,a.jsx)(s.Z,Object.assign({size:"lg",renderValue:u,value:`${l}`,onChange:h,hideSearch:!0,label:e},{children:d.map((({value:e,label:t})=>(0,a.jsx)(o.W,Object.assign({value:`${e}`},{children:t}),`${e}`)))}),void 0)}},88795:(e,t,n)=>{n.d(t,{i:()=>a});const a={padding:"18px 24px 24px",width:["100%",420],height:["100%","auto"],minHeight:"400px",display:"flex",flexDirection:"column",bg:"modalBg",".title":{color:"t.primary",display:"flex",alignItems:"center",justifyContent:"space-between",pb:18,".close":{color:"icons.close",width:24,height:24,cursor:"pointer","&:hover":{color:"t.third"}}}}},31843:(e,t,n)=>{n.d(t,{w:()=>o});var a=n(65866);const i=/^\d+\.?\d*|%$/,s=/^0+(?=\d)/,o=({oldValue:e,maxValue:t,maxLength:n,precision:o})=>r=>!i.test(r)&&""!==r||isNaN(Number(r))?e:(r=r.replace(s,""),(0,a.N3)(r)>o&&(r=r.replace(new RegExp(`^(\\d*\\.\\d{${o}})\\d*`),"$1")),n&&r.split(".")[0].length>n&&(r=e),0===o&&(r=r.replace(".","")),t&&Number(r)>t&&(r=t.toString()),r)},65866:(e,t,n)=>{n.d(t,{GW:()=>d,HV:()=>u,N3:()=>l,uf:()=>c});var a=n(30733),i=n.n(a),s=n(33470);const o=/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/,r=i()(((e,t)=>new RegExp(`\\d(?=(\\d{${t||3}})+${e>0?"\\.":"$"})`,"g")),((...e)=>e.join(","))),l=e=>{const t=`${e}`.match(o);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0},c=(e,t,n=3)=>{e="number"==typeof e?e:+e;const a=r(t,n);return e.toFixed(Math.max(0,~~t)).replace(a,"$&,")},d=(e,t=2,n)=>((e,t,n="round",a=!1)=>{const i=e||0;let s;const o=Math.pow(10,t);let r=(+i+1/Math.pow(10,t+3))*o;if("string"==typeof n){const e=2;r=parseInt(""+r*Math.pow(10,e),10)/Math.pow(10,e),l=n,s=(()=>{if(Math[l])return Math[l];throw new Error("getRoundFunc called with unknown type")})()}else s=n;var l;if("function"!=typeof s)throw new Error("decRound unknown rounding func");return a?c(s(r)/o,t):(s(r)/o).toFixed(t)})(e,t,"floor",n),u=(e,t)=>(0,s.Jp)(e).toFixed(Math.min(8,t),1)}}]);