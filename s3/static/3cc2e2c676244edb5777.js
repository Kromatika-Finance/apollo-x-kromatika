"use strict";(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[3945],{75511:(e,t,n)=>{var o,i;n.d(t,{tO:()=>l}),function(){try{return"localStorage"in window&&null!==window.localStorage}catch(e){return!1}}()?o=window.localStorage:(i={},o={setItem:function(e,t){i[e]=t},getItem:function(e){return i[e]||null}});var a=function(e,t,n){try{o.setItem(e,n?String(t):JSON.stringify(t))}catch(e){}},r=function(e,t,n){try{var i=o.getItem(e);if("string"!=typeof i)throw a(e,t,n),new Error("init "+e+" - values");return n?i:JSON.parse(i||"null")}catch(e){return t}},l={setItem:a,getItem:r,setExpireItem:function(e,t,n){return void 0===n&&(n={}),n.ttl?a(e,{value:t,expire:(new Date).getTime()+n.ttl},!1):a(e,t)},getExpireItem:function(e,t){var n=r(e,t);return n&&n.expire?n.expire&&n.expire>(new Date).getTime()?n.value:null:n}}},93945:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var o=n(52322),i=n(2784),a=n(92036),r=n(94645),l=n(75511),c=n(5163),s=n(84423),u=n(73933),p=n(93603),d=n(38896),g=n(59111),x=n(45813),m=n(97060);const f=i.lazy((()=>Promise.all([n.e(3021),n.e(5796),n.e(9096),n.e(4106),n.e(9681),n.e(1435),n.e(7745),n.e(7845),n.e(1622)]).then(n.bind(n,91622)))),b=i.lazy((()=>Promise.all([n.e(3021),n.e(5796),n.e(9096),n.e(4106),n.e(9681),n.e(1435),n.e(7745),n.e(7845),n.e(7607)]).then(n.bind(n,97607)))),v=i.lazy((()=>Promise.all([n.e(3021),n.e(5796),n.e(9096),n.e(4106),n.e(9681),n.e(1435),n.e(7745),n.e(7845),n.e(4308)]).then(n.bind(n,64308)))),h=i.memo((e=>{const{isMobile:t,isIPad:n}=(0,m.Fs)();return(0,o.jsx)(i.Suspense,Object.assign({fallback:null},{children:t?(0,o.jsx)(v,Object.assign({},e),void 0):n?(0,o.jsx)(b,Object.assign({},e),void 0):(0,o.jsx)(f,Object.assign({},e),void 0)}),void 0)})),{supportLanguages:y=Object.keys(u.languageMap)}=g.ll,w=y.map((e=>({key:e,label:u.languageMap[e]}))),j=i.memo((()=>{const{logout:e}=(0,p.dc)(),t=(0,d._n)(),n=(0,d.el)(),u=(0,i.useCallback)((()=>{e().then((()=>{r.Q.erase("logined"),r.Q.erase("p20t"),r.Q.erase("cr00"),r.Q.erase("cid"),window.location.reload()})).then((()=>{}))}),[e]),g=(0,i.useCallback)((e=>{var o,i,a;t&&(i=(o={configName:e,configType:"preferLang"}).configName,a=o.configType,(0,c.__awaiter)(void 0,void 0,void 0,(function(){return(0,c.__generator)(this,(function(e){switch(e.label){case 0:return[4,(0,s.v_)("/bapi/accounts/v1/private/account/user-config/save",{configName:i,configType:a})];case 1:return[2,e.sent()]}}))}))),r.Q.erase("lang"),r.Q.write("lang","",-1,!1),r.Q.write("lang",e.toLowerCase()),l.tO.setItem("chatLang",e),n(e)}),[n,t]);return(0,o.jsx)(a.Z,Object.assign({sx:x.ZP},{children:(0,o.jsx)(h,{locales:w,onLocaleChange:g,logoutAndClearCookie:u},void 0)}),void 0)}))},45813:(e,t,n)=>{n.d(t,{J8:()=>o,N1:()=>i,ZP:()=>a});const o={".perpetual-button":{color:"primary","&:hover:not(:disabled):not(:active):not(.inactive)":{bg:"transparent"}},".swap-button":{color:"t.secondary","&:hover:not(:disabled):not(:active):not(.inactive)":{color:"t.secondary"},"&:active":{color:"t.secondary"}}},i={".price-link":{display:"flex",textDecoration:"none",height:"100%","&:hover":{".apx-price-txt":{color:"t.yellow"}}},".price-container":{justifyContent:"flex-end",alignItems:"center"},".price-text":{color:"t.secondary",ml:"6px"},".price-logo":{width:"24px"}},a=Object.assign(Object.assign({width:"100%",bg:"moduleBg",justifyContent:"space-between",px:"16px",height:"64px","> div":{display:"flex",alignItems:"center"},".desktopLogo, .mobileLogo":{mr:"6px",height:"48px",maxWidth:"100%"},".menu":{display:"flex",justifyContent:"center"},".suffix-menu":{display:"flex",justifyContent:"flex-end","> *":{ml:"12px"},".bn-tooltip-box":{borderRadius:"16px",padding:"8px 12px",fontSize:"14px",lineHeight:"20px",ml:0,mt:"-10px"}},".account-button":{color:"t.primary",alignItems:"center",width:"120px"},".connect-button":{width:"120px"},".customer-service-icon":{color:"t.secondary",cursor:"pointer",fontSize:"20px",mt:"6px","&:hover":{opacity:.65}},".mobile-menus":{justifyContent:"flex-end","> *":{ml:"10px"},".hamburger-icon":{color:"t.secondary"}}},o),i)},73933:(e,t,n)=>{n.d(t,{languageMap:()=>a.Q}),n(98537),n(82973);var o=n(98641),i=n.n(o);n(89926),i().unsubscribe;var a=n(52695)}}]);