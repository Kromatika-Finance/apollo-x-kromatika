"use strict";(self.webpackChunkcloud_onchain_trade_sdk=self.webpackChunkcloud_onchain_trade_sdk||[]).push([[1525],{76482:(e,t,n)=>{n.d(t,{x:()=>a});var l=n(52983),r=n(35668);const a=e=>l.createElement(r.Z,{...e,sx:{flexShrink:0,color:"icons.close",cursor:"pointer","&:hover":{color:"t.third"},...e.sx}})},88212:(e,t,n)=>{n.d(t,{Pl:()=>i,Qm:()=>s,VG:()=>c,h0:()=>o,qb:()=>m});var l=n(52983),r=n(7384),a=n(70942);const c=({children:e})=>l.createElement(r.Z,{sx:{color:"t.primary",fontSize:"sm",letterSpacing:".16px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},e),o=({children:e})=>l.createElement(r.Z,{sx:{color:"t.buy",fontSize:"xs",letterSpacing:".32px"}},e),s=({children:e})=>l.createElement(r.Z,{sx:{color:"t.sell",fontSize:"xs",letterSpacing:".32px"}},e),i=({children:e})=>l.createElement(r.Z,{sx:{color:"t.primary",fontSize:"xs",letterSpacing:".32px"}},e),m=({name:e,price:t,change:n})=>l.createElement(a.Z,{sx:{alignItems:"center"}},l.createElement(a.Z,{sx:{alignItems:"center",flex:"1"}},e),l.createElement(a.Z,{sx:{alignItems:"center",pl:"minor"}},t),l.createElement(a.Z,{sx:{alignItems:"center",pl:"minor"}},n))},59697:(e,t,n)=>{n.d(t,{t:()=>c,Z:()=>o});var l=n(52983),r=n(96741),a=n(25694);const c=({namespace:e})=>{const t=(0,r.createStore)(e),[[n]=[void 0,void 0]]=t(r.getCandlestickHistory),c=n?.close||+close,o=(s=c,i=(0,l.useRef)(),(0,l.useEffect)((function(){i.current=s})),i.current||0);var s,i;return l.createElement(a.W,{oldPrice:o,newPrice:c},Number.isNaN(c)?"":c)},o=c},25694:(e,t,n)=>{n.d(t,{W:()=>a});var l=n(52983),r=n(88212);const a=({oldPrice:e,newPrice:t,children:n})=>t>e?l.createElement(r.h0,null,n):t<e?l.createElement(r.Qm,null,n):l.createElement(r.Pl,null,n)},21525:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var l=n(52983),r=n(88212),a=n(70942),c=n(76482);const o=({options:e,value:t,onChange:n,onClose:o})=>l.createElement(a.Z,{sx:{height:"100%"}},e.map((e=>l.createElement(a.Z,{key:`${e.value}`,onClick:()=>n(e),sx:{alignItems:"center",cursor:"pointer",p:"xs",bg:e.value===t?"bg3":"transparent"}},l.createElement(r.qb,{name:e.name,price:e.price}),e.showClose&&l.createElement(c.x,{size:16,onClick:t=>{t.stopPropagation(),o(e)}})))));var s=n(59697),i=n(57149),m=n(1015);const p=({namespace:e,getSymbolDisplayName:t,onSymbolChange:n})=>{const a=(0,i.createStore)(e),[c]=a(i.getLastSelectedMiniMultiChartWindow),[p,,u]=a(i.getMiniMultiChartWindows),d=(0,l.useMemo)((()=>p.map(((n,a)=>({name:l.createElement(r.VG,null,t(n)),price:l.createElement(s.Z,{namespace:(0,m.l)(e,a)}),change:"",visible:!!n,value:a,showClose:!0}))).filter((({visible:e})=>e)).map((({visible:e,...t})=>t))),[t,e,p]),h=(0,l.useCallback)((({value:e})=>u(e)),[u]),x=(0,l.useCallback)((({value:e})=>n(e)),[n]);return l.createElement(o,{options:d,value:c,onChange:x,onClose:h})}},1015:(e,t,n)=>{n.d(t,{V:()=>a,l:()=>r});var l=n(52983);const r=(e,t)=>`${e}_mini_multi_${t}`,a=e=>e.map(((e,t)=>l.createElement(l.Fragment,{key:t},e)))}}]);