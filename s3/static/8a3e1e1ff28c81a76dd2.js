"use strict";(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[9576],{19576:(e,t,n)=>{n.r(t),n.d(t,{HeaderSmall:()=>f,default:()=>p});var i=n(5163),r=n(2784),c=n(34274),a=n(92036),l=n(48658),s=function(e){var t=e.isActive,n=e.children,c=(0,i.__rest)(e,["isActive","children"]);return r.createElement(a.Z,(0,i.__assign)({},c,{sx:(0,i.__assign)({alignItems:"center",justifyContent:"center",py:"minor",color:t?"t.yellow":"t.primary"},c.sx)}),n)},o=function(e){var t=e.children,n=e.indicatorText,i=e.depthText,c=e.onClickIndicator,o=e.onClickDepth,u=e.isDepthActive;return r.createElement(a.Z,{sx:{justifyContent:"space-between",alignItems:"center",textAlign:"center",py:"xs"}},r.createElement(s,{isActive:!1,sx:{flex:1,height:32}},t),r.createElement(s,{isActive:!1,onClick:c,sx:{py:0,flex:1,height:32}},r.createElement(l.Z,{sx:{fontSize:1,textAlign:"center",padding:"8px",width:"100%"}},n)),r.createElement(s,{isActive:u,onClick:o,sx:{py:0,flex:1,height:32}},r.createElement(l.Z,{sx:{fontSize:1}},i)))},u=n(92424),d=n(86368),h=n(79193),f=function(e){var t=e.namespace,n=e.head,a=(0,c.Z)("trd-chart","trade-ui").getI18n,l=(0,u.createStore)(t),s=(0,d.createStore)(t),f=(0,i.__read)(l(u.getActiveTab),2),p=f[0],m=f[1],x=(0,i.__read)(s(d.getIntervalConfigOpen),2)[1],_=(0,i.__read)(s(d.getCandlestickReference),1)[0],g=(0,r.useMemo)((function(){return a("technicalIndicator",{defaultValue:"Technical Indicator"})||""}),[a]),k=(0,r.useMemo)((function(){return a("Depth",{defaultValue:"Depth"})||""}),[a]),v=(0,r.useCallback)((function(){p===u.Tabs.Origin&&(null==_||_.showIndicatorsDialog()),x(!1)}),[p,_,x]),C=(0,r.useCallback)((function(){m(u.Tabs.Depth),x(!1)}),[m,x]);return r.createElement(o,{indicatorText:g,depthText:k,onClickIndicator:v,onClickDepth:C,isDepthActive:p===u.Tabs.Depth},(0,h.V)(n))};const p=f},79193:(e,t,n)=>{n.d(t,{V:()=>c,l:()=>r});var i=n(2784),r=function(e,t){return e+"_mini_multi_"+t},c=function(e){return e.map((function(e,t){return i.createElement(i.Fragment,{key:t},e)}))}}}]);