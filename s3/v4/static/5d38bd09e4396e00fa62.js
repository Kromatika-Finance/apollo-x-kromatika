"use strict";(self.webpackChunkcloud_onchain_trade_sdk=self.webpackChunkcloud_onchain_trade_sdk||[]).push([[8296],{70725:(e,t,n)=>{n.d(t,{t:()=>o});var r=n(52983),a=n(72249);const o=r.forwardRef((({active:e,hidden:t=!1,...n},o)=>t?null:r.createElement(a.Z,{...n,sx:{alignItems:"center",justifyContent:"center",color:e?"t.yellow":"t.third",cursor:"pointer",fontSize:0,lineHeight:"16px",p:"minor",borderRadius:"2px","&:hover":{color:"t.yellow"},...n.sx},ref:o})))},98296:(e,t,n)=>{n.r(t),n.d(t,{IntervalFilterExtraSmall:()=>f,default:()=>m});var r=n(52983),a=n(1138),o=n(70020),l=n(72249),s=n(49247),i=n(43533);const c=({isActive:e,children:t,...n})=>r.createElement(l.Z,{...n,sx:{alignItems:"center",justifyContent:"center",py:"minor",color:e?"t.yellow":"t.primary",...n.sx}},t);var u=n(70725);const p=({options:e,value:t,isDropdownActive:n,showDropdown:a,onClickDropdownButton:p,onClickItem:d})=>{const v=e.find((e=>e.value===t));return r.createElement(o.ZP,{open:a,isFixed:!0,placement:"bottom-start",enablePortal:!0,sx:{width:"100%"},overlay:r.createElement(l.Z,{sx:{flexWrap:"wrap",p:"xs",bg:"modalBg",mt:"minor",width:300}},e.map((e=>r.createElement(c,{key:e.value,isActive:e.value===t,onClick:()=>d(e.value),width:.2,sx:{textAlign:"center",padding:"6px 0 6px 0"}},r.createElement(s.Z,{fontSize:1},e.text)))))},r.createElement(u.t,{active:n,onClick:p},r.createElement(s.Z,{sx:{fontSize:1}},v?.text),r.createElement(i.Z,{sx:{transform:"scale(1.8)"},size:12})))};var d=n(75343),v=n(75414);const f=({namespace:e,intervalOptions:t})=>{const n=(0,d.createStore)(e),{isMobile:o}=(0,a.F)(),{options:l,option:s,dropdownExpanded:i,setDropdownOpen:c,handleClickItem:u}=(0,v.J)({namespace:e,intervalOptions:t}),[f,m]=n(d.getActiveTab),y=(0,r.useCallback)((()=>{f!==d.Tabs.Origin?m(d.Tabs.Origin):c(!0)}),[f,m,c]);var h;return h=()=>o&&c(!1),(0,r.useEffect)((()=>(document.addEventListener("click",h),()=>document.removeEventListener("click",h))),[h]),r.createElement(p,{options:l,value:s,isDropdownActive:f===d.Tabs.Origin,showDropdown:i,onClickDropdownButton:y,onClickItem:u})},m=f},75414:(e,t,n)=>{n.d(t,{J:()=>u});var r=n(52983);var a=n(53031);const o=n.n(a)(),l=function(e,t){!function(e,t,n){var a=(0,r.useRef)(void 0);a.current&&n(t,a.current)||(a.current=t),(0,r.useEffect)(e,a.current)}(e,t,o)};var s=n(26312),i=n(75343),c=n(79025);const u=({namespace:e,intervalOptions:t})=>{const{getI18n:n}=(0,s.Z)("trd-chart","trade-ui"),a=(0,i.createStore)(e),o=(0,c.createStore)(e),[u,p]=a(i.getActiveTab),[d,v]=a(i.getInterval),[f]=a(i.getSelectedIntervals),[m,y]=o(c.getIntervalConfigOpen),h=(0,r.useMemo)((()=>(e=>{const t=e("line",{defaultValue:"Time"})||"Time",n=e("second",{defaultValue:"s"})||"s",r=e("minute",{defaultValue:"m"})||"m",a=e("hour",{defaultValue:"H"})||"H",o=e("day",{defaultValue:"D"})||"D",l=e("weekLine",{defaultValue:"W"})||"W",s=e("monthLine",{defaultValue:"M"})||"M";return e=>({value:e,text:{[i.DisplayIntervals.Time]:t,[i.DisplayIntervals["1s"]]:`1${n}`,[i.DisplayIntervals["1m"]]:`1${r}`,[i.DisplayIntervals["3m"]]:`3${r}`,[i.DisplayIntervals["5m"]]:`5${r}`,[i.DisplayIntervals["15m"]]:`15${r}`,[i.DisplayIntervals["30m"]]:`30${r}`,[i.DisplayIntervals["1h"]]:`1${a}`,[i.DisplayIntervals["2h"]]:`2${a}`,[i.DisplayIntervals["4h"]]:`4${a}`,[i.DisplayIntervals["6h"]]:`6${a}`,[i.DisplayIntervals["8h"]]:`8${a}`,[i.DisplayIntervals["12h"]]:`12${a}`,[i.DisplayIntervals["1d"]]:`1${o}`,[i.DisplayIntervals["3d"]]:`3${o}`,[i.DisplayIntervals["1w"]]:l,[i.DisplayIntervals["1M"]]:s}[e]})})(n)),[n]),g=(0,r.useMemo)((()=>(({options:e,createOption:t})=>e.map((e=>t(e))))({options:t,createOption:h})),[h,t]),D=(0,r.useMemo)((()=>g.map((({value:e,text:t=""})=>({value:e,text:t,selected:f.some((t=>t===e))})))),[g,f]),[I,x]=(0,r.useState)(D);l((()=>x(D)),[D]);const w=(0,r.useCallback)((e=>{y(!1),v(e),p(u===i.Tabs.Depth?i.Tabs.Origin:u)}),[y,v,p,u]);return{options:I,setOptions:x,option:d,dropdownExpanded:m,setDropdownOpen:y,handleClickItem:w}}},53031:e=>{e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,a,o;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(a=r;0!=a--;)if(!e(t[a],n[a]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(o=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(a=r;0!=a--;)if(!Object.prototype.hasOwnProperty.call(n,o[a]))return!1;for(a=r;0!=a--;){var l=o[a];if(!("_owner"===l&&t.$$typeof||e(t[l],n[l])))return!1}return!0}return t!=t&&n!=n}}}]);