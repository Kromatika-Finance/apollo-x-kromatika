"use strict";(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[2919],{16902:(e,n,t)=>{t.d(n,{o:()=>c});var r=t(5163),o=t(2784),a=t(92036),i=t(51896),s=t(24336),l=t(76364),c=function(e){var n=e.onClickItem,t=e.options,c=(0,r.__rest)(e,["onClickItem","options"]),u=t.map((function(e,t){return{value:e.value,display:o.createElement(a.Z,{sx:{fontSize:"xs",color:"t.third"}},e.text),children:o.createElement(s.c,{key:t,active:e.value===c.value,onClick:function(){return n(e.value)},sx:{px:"xs",py:"ls"}},e.text)}}));return o.createElement(i.l,(0,r.__assign)({},c,{options:u,overlay:function(){return o.createElement(l.a,{sx:{position:"absolute",left:"-8px",width:"max-content"}},u.map((function(e){return e.children})))}}))}},51896:(e,n,t)=>{t.d(n,{l:()=>l});var r=t(5163),o=t(2784),a=t(55742),i=t(92036),s=t(10337),l=function(e){var n=e.options,t=e.value,l=e.showArrowIcon,c=void 0!==l&&l,u=e.onClickDropdownButton,p=e.overlay,d=(0,r.__rest)(e,["options","value","showArrowIcon","onClickDropdownButton","overlay"]),x=n.find((function(e){return e.value===t}));return o.createElement(a.ZP,(0,r.__assign)({},d,{enablePortal:!0,overlay:p({option:x,options:n}),sx:(0,r.__assign)({cursor:"pointer",minWidth:"auto","&:hover":{".interval-expand-btn":{color:"t.primary",transform:"rotate(180deg)"}}},d.sx)}),o.createElement(i.Z,{onClick:u,sx:{minWidth:"auto",alignItems:"center",justifyContent:"center"}},null==x?void 0:x.display,c&&o.createElement(s.Z,{className:"interval-expand-btn",size:3,sx:{color:"t.third",transition:"transform .2s, color .2s","&:not(:first-of-type)":{ml:"minor"}}})))}},24336:(e,n,t)=>{t.d(n,{c:()=>i});var r=t(5163),o=t(2784),a=t(92036),i=function(e){var n=e.onClick,t=e.active,i=e.children,s=(0,r.__rest)(e,["onClick","active","children"]);return o.createElement(a.Z,(0,r.__assign)({},s,{onClick:n,sx:(0,r.__assign)({px:"ls",py:"sm",fontSize:"xs",color:t?"t.yellow":"t.primary",bg:"transparent",cursor:"pointer",alignItems:"center",":hover":{bg:"bg3"},"& > *:not(:last-child)":{mr:"5px"}},s.sx)}),i)}},76364:(e,n,t)=>{t.d(n,{a:()=>i});var r=t(5163),o=t(2784),a=t(92036),i=function(e){var n=e.children,t=(0,r.__rest)(e,["children"]);return o.createElement(a.Z,(0,r.__assign)({},t,{sx:(0,r.__assign)({bg:"popupBg",shadow:"0px 7px 14px rgba(0, 0, 0, 0.08), 0px 3px 6px rgba(0, 0, 0, 0.08), inset 0px 0px 1px rgba(94, 102, 115, 0.9)",borderRadius:"4px",py:"5px",flexDirection:"column"},t.sx)}),n)}},92919:(e,n,t)=>{t.r(n),t.d(n,{PriceDropdown:()=>l,default:()=>c});var r=t(5163),o=t(2784),a=t(16902),i=t(92424),s=t(25837),l=function(e){var n=e.namespace,t=(0,i.createStore)(n),l=(0,s.w)({namespace:n}),c=l.priceType,u=l.options,p=l.onClickItem,d=(0,r.__read)(t(i.getActiveTab),2),x=d[0],v=d[1],m=(0,r.__read)((0,o.useState)(!1),2),_=m[0],f=m[1],k=(0,o.useCallback)((function(){return f(!0)}),[f]),h=(0,o.useCallback)((function(){return f(!1)}),[f]),b=(0,o.useCallback)((function(){return f(!0)}),[f]),g=(0,o.useCallback)((function(e){p(e),f(!1),x===i.Tabs.Depth&&v(i.Tabs.Origin)}),[p,x,v]);return o.createElement(a.o,{showArrowIcon:!0,open:_,onMouseEnter:k,onMouseLeave:h,onClickDropdownButton:b,onClickItem:g,options:u,value:c})};const c=l}}]);