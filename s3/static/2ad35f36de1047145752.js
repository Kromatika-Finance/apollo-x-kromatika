"use strict";(self.webpackChunkcloud_onchain_trade_sdk=self.webpackChunkcloud_onchain_trade_sdk||[]).push([[9418],{7202:(e,t,r)=>{r.d(t,{c:()=>a});var l=r(52983),n=r(70942);const a=({onClick:e,active:t,children:r,...a})=>l.createElement(n.Z,{...a,onClick:e,sx:{px:"ls",py:"sm",fontSize:"xs",color:t?"t.yellow":"t.primary",bg:"transparent",cursor:"pointer",alignItems:"center",":hover":{bg:"bg3"},"& > *:not(:last-child)":{mr:"5px"},...a.sx}},r)},7745:(e,t,r)=>{r.d(t,{a:()=>a});var l=r(52983),n=r(70942);const a=({children:e,...t})=>l.createElement(n.Z,{...t,sx:{bg:"popupBg",shadow:"0px 7px 14px rgba(0, 0, 0, 0.08), 0px 3px 6px rgba(0, 0, 0, 0.08), inset 0px 0px 1px rgba(94, 102, 115, 0.9)",borderRadius:"4px",py:"5px",flexDirection:"column",...t.sx}},e)},89418:(e,t,r)=>{r.r(t),r.d(t,{OrderMark:()=>h,default:()=>k});var l=r(52983),n=r(1514),a=r(27245),o=r(7384),i=r(70942),s=r(69240),c=r(14673),p=r(18799),m=r(41745),d=r(7202),x=r(7745);const u=({values:e,options:t,onClickDropdownItem:r})=>{const n=l.createElement(x.a,null,t.map((({value:t,children:n,tooltip:c})=>l.createElement(d.c,{key:`${t}`,active:!1,onClick:e=>{e.stopPropagation(),r?.(t)},sx:{px:"xs",py:"ls"}},l.createElement(o.Z,{sx:{width:"100%",display:"grid",gridTemplateColumns:"1fr auto auto"}},l.createElement(i.Z,{sx:{alignItems:"center",fontSize:"12px",lineHeight:"16px",marginRight:"5px"}},n),l.createElement(i.Z,{sx:{marginRight:"16px"}},c?l.createElement(a.Z,{enablePortal:!0,arrow:!0,placement:"top",tip:c,sx:{display:"flex",alignItems:"center"}},l.createElement(p.Z,{size:14,color:"t.third"})):null),l.createElement(i.Z,{sx:{alignItems:"center"}},l.createElement(s.Z,{sx:{width:"20px",height:"20px",margin:"0px"},checked:e.includes(t)})))))));return l.createElement(c.ZP,{enablePortal:!0,trigger:"hover",overlay:n,sx:{display:"block"}},l.createElement(m.Z,{sx:{display:"block"},color:e.length>0?"t.yellow":"t.third",size:20}))};var g=r(62661);const h=({namespace:e,isFullscreen:t,options:r,orderHistoryTooltip:o})=>{const{values:i,options:s,onClickItem:c}=(0,g.u)({namespace:e,options:r,orderHistoryTooltip:o}),{getI18n:p}=(0,n.Z)("","trade-ui"),m=(0,l.useMemo)((()=>p("trd-chart-order-mark",{defaultValue:"Display Settings"})||""),[p]),d=(0,l.useMemo)((()=>s.map((({text:e,...t})=>({children:e,...t})))),[s]);return l.createElement(a.Z,{enablePortal:!0,placement:t?"left":"top",arrow:!0,tip:m,sx:{cursor:"pointer",minWidth:"auto"}},l.createElement(u,{values:i,options:d,onClickDropdownItem:c}))},k=h}}]);