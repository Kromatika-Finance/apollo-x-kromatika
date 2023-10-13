"use strict";(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[6140],{97894:(e,t,n)=>{n.d(t,{t:()=>i});var o=n(5163),r=n(2784),a=n(92036),i=r.forwardRef((function(e,t){var n=e.active,i=e.hidden,l=void 0!==i&&i,u=(0,o.__rest)(e,["active","hidden"]);return l?null:r.createElement(a.Z,(0,o.__assign)({},u,{sx:(0,o.__assign)({alignItems:"center",justifyContent:"center",color:n?"t.yellow":"t.third",cursor:"pointer",fontSize:0,lineHeight:"16px",p:"minor",borderRadius:"2px","&:hover":{color:"t.yellow"}},u.sx),ref:t}))}))},56140:(e,t,n)=>{n.r(t),n.d(t,{IntervalFilterMedium:()=>T,default:()=>Z});var o=n(5163),r=n(2784),a=n(34274),i=n(30898),l=n.n(i),u=n(92036),c=n(26182),s=n(97894),d=function(e){var t=e.text,n=e.value,o=e.active,a=e.onClick,i=e.onObscured,l=e.onRevealed,u=(0,r.useRef)(null),d=(0,c.Z)(u,{root:null,rootMargin:"0px",threshold:1});return(0,r.useEffect)((function(){d&&(d.intersectionRatio<1?i(n):l(n))}),[d]),r.createElement(s.t,{id:n,active:o,onClick:a,ref:u,sx:{mr:2}},t)},p=n(10337),v=n(31023),f=n(48658),x=function(e){var t=e.dropdownExpanded,n=e.onDropdownMouseEnter,o=e.onDropdownMouseLeave,a=e.onDropdownButtonClick,i=e.isDropdownButtonActive,l=e.dropdownText,c=e.overlay;return r.createElement(v.Z,{open:t,onMouseEnter:n,onMouseLeave:o,overlay:c,sx:{position:"relative",height:"24px",flex:"1 0 auto",mr:2,"&:hover":{".interval-expand-btn":{color:"t.primary",transform:"rotate(180deg)"}}},enablePortal:!0},r.createElement(s.t,{onClick:a,sx:{width:"100%",height:"100%"},active:i},r.createElement(u.Z,{sx:{alignItems:"center",justifyContent:"center"}},l&&r.createElement(f.Z,null,l),r.createElement(p.Z,{className:"interval-expand-btn",size:3,sx:{color:"t.third",transition:"transform .2s, color .2s","&:not(:first-of-type)":{marginLeft:"4px"}}}))))},m=n(33322),h=n(62143),g=n(71218),w=function(e){var t=e.onChange,n=e.value,o=e.checked,a=e.checkboxSize,i=void 0===a?13:a;return r.createElement(h.Z,{sx:{position:"absolute",top:"-"+i/2+"px",right:"-"+i/2+"px"}},r.createElement("input",{type:"checkbox",value:n,onChange:t,hidden:!0}),r.createElement(u.Z,{sx:{alignItems:"center",justifyContent:"center",width:"16px",height:"16px",borderRadius:"100%",background:function(e){return o?e.colors.primary:e.colors.t.placeholder}}},r.createElement(g.Z,{color:"modalBg",size:i})))},k=n(69967),E=function(e){var t=e.showCheckbox,n=e.checked,o=e.value,a=e.onChange,i=e.onClick,l=e.children,u=e.className,c=void 0===u?"interval-option":u;return r.createElement(m.Z,{className:c,onClick:i,alignItems:"center",justifyContent:"center",sx:{fontWeight:"normal",fontSize:"14px",lineHeight:1.43,color:"t.primary",width:"60px",height:"24px",position:"relative",transition:"background-color 0.2s ease 0s",cursor:"pointer",bg:function(e){return n?(0,k.D)(e.colors.primary,.15):(0,k.D)(e.colors.line,.5)},"&:hover":{bg:function(e){return n?(0,k.D)(e.colors.primary,.3):e.colors.line}},borderRadius:"2px"}},r.createElement(f.Z,{sx:{color:n?"t.yellow":"t.primary",fontSize:"12px"}},l),t&&r.createElement(w,{onChange:a,value:o,checked:n}))},C=n(45362),y=function(e){var t=e.children,n=e.onClick;return r.createElement(C.Z,{sz:"s",sx:{lineHeight:"16px",fontSize:12,wordBreak:"keep-all",minHeight:"24px",border:"none",color:"primary",fontWeight:"normal",padding:"0",backgroundImage:"none",bg:"transparent","&:hover:not(:disabled):not(:active):not(.inactive)":{backgroundImage:"none"},"&:active:not(:disabled):not(.inactive)":{backgroundColor:"transparent"}},onClick:n},t)};function D(e){var t=e.options,n=e.onClickEdit,o=e.editText,a=e.title;return r.createElement(u.Z,{sx:{bg:"modalBg",marginTop:"8px",flexDirection:"column",boxShadow:"0px 0px 1px rgba(20, 21, 26, 0.1), 0px 7px 14px rgba(71, 77, 87, 0.08), 0px 3px 6px rgba(20, 21, 26, 0.08)",borderRadius:"4px",padding:"12px 16px 2px",width:"300px"}},r.createElement(u.Z,{sx:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"}},r.createElement(f.Z,{sx:{color:"t.third",fontSize:"12px"}},a),r.createElement(y,{onClick:n},o)),r.createElement(u.Z,{sx:{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between","&>.interval-option":{marginBottom:"10px"}}},t.map((function(e){var t=e.text,n=e.value,o=e.showCheckbox,a=e.checked,i=e.onClick,l=e.onChange;return r.createElement(E,{key:n,value:n,checked:a,showCheckbox:o,onClick:i,onChange:l},t)}))))}var b=function(e){var t=e.dropdownExpanded,n=e.onDropdownMouseEnter,o=e.onDropdownMouseLeave,a=e.onDropdownButtonClick,i=e.isDropdownButtonActive,l=e.dropdownText,c=e.options,s=e.onClickEdit,p=e.editText,v=e.title,f=e.displayedOptions;return r.createElement(u.Z,{height:24},r.createElement(u.Z,{sx:{flexWrap:"wrap",overflow:"hidden",justifyContent:"space-between"}},f.map((function(e){var t=e.text,n=e.value,o=e.active,a=e.onClick,i=e.onObscured,l=e.onRevealed;return r.createElement(d,{key:n,text:t,value:n,active:o,onClick:a,onObscured:i,onRevealed:l})}))),r.createElement(x,{dropdownExpanded:t,onDropdownMouseEnter:n,onDropdownMouseLeave:o,onDropdownButtonClick:a,isDropdownButtonActive:i,dropdownText:l,overlay:r.createElement(D,{options:c,onClickEdit:s,editText:p,title:v})}))},_=function(){return null},I=function(e){var t=function(e){var t=e.options,n=e.value,a=e.isEditing,i=e.onClickEdit,l=e.title,u=e.saveText,c=e.editText,s=e.dropdownExpanded,d=e.onDropdownMouseEnter,p=e.onDropdownMouseLeave,v=e.onDropdownButtonClick,f=e.onClickItem,x=(0,o.__rest)(e,["options","value","isEditing","onClickEdit","title","saveText","editText","dropdownExpanded","onDropdownMouseEnter","onDropdownMouseLeave","onDropdownButtonClick","onClickItem"]),m=(0,o.__read)((0,r.useState)(t),2),h=m[0],g=m[1],w=(0,o.__read)((0,r.useState)({}),2),k=w[0],E=w[1];(0,r.useEffect)((function(){return g(t)}),[t]);var C=h.map((function(e){return{text:e.text,value:e.text,checked:e.selected,showCheckbox:a,onClick:a?_:function(){return f(e.value)},onChange:function(){return g((function(t){return t.map((function(t){return(0,o.__assign)((0,o.__assign)({},t),{selected:t.value===e.value?!t.selected:t.selected})}))}))}}})),y=t.filter((function(e){return e.selected})).map((function(e){return{text:e.text,value:e.value,active:e.value===n,onClick:function(){return f(e.value)},onObscured:function(e){E((function(t){var n=(0,o.__assign)({},t);return n[e]=!0,n}))},onRevealed:function(e){E((function(t){var n=(0,o.__assign)({},t);return n[e]=!1,n}))}}})),D=t.find((function(e){return e.value===n&&(!e.selected||k[e.value])}));return(0,o.__assign)({options:C,displayedOptions:y,editText:a?u:c,dropdownText:(null==D?void 0:D.text)||"",dropdownExpanded:s,onDropdownMouseEnter:d,onDropdownMouseLeave:function(e){g(t),p(e)},onDropdownButtonClick:function(){return v((null==D?void 0:D.value)||"")},title:l,isDropdownButtonActive:!!D,onClickEdit:function(){return i(h)}},x)}(e);return r.createElement(b,(0,o.__assign)({},t))},M=n(92424),O=n(86368),S=n(12188),T=function(e){var t=e.namespace,n=e.intervalOptions,i=(0,a.Z)("trd-chart","trade-ui").getI18n,u=(0,M.createStore)(t),c=(0,O.createStore)(t),s=(0,S.J)({namespace:t,intervalOptions:n}),d=s.options,p=s.setOptions,v=s.option,f=s.dropdownExpanded,x=s.setDropdownOpen,m=s.handleClickItem,h=(0,o.__read)(u(M.getSelectedIntervals),2)[1],g=(0,o.__read)(c(O.getEditingInterval),2),w=g[0],k=g[1],E=(0,r.useCallback)((function(e){if(w){p(e),x(!1);var t=l()(n,e.filter((function(e){return e.selected})).map((function(e){return e.value})));h(t)}k(!w)}),[w,k,p,x,n,h]),C=(0,r.useCallback)((function(){w||(x(!1),k(!1))}),[w,x,k]),y=(0,r.useMemo)((function(){return i("selectIntervals",{defaultValue:"Select Intervals"})||""}),[i]),D=(0,r.useMemo)((function(){return i("save",{defaultValue:"Save"})||""}),[i]),b=(0,r.useMemo)((function(){return i("edit",{defaultValue:"Edit"})||""}),[i]);return r.createElement(I,{options:d,value:v,isEditing:w,onClickEdit:E,title:y,saveText:D,editText:b,dropdownExpanded:f,onDropdownMouseEnter:function(){return x(!0)},onDropdownMouseLeave:C,onDropdownButtonClick:function(){return x(!0)},onClickItem:m})};const Z=T},12188:(e,t,n)=>{n.d(t,{J:()=>d});var o=n(5163),r=n(2784);var a=n(44082);const i=n.n(a)(),l=function(e,t){!function(e,t,n){var o=(0,r.useRef)(void 0);o.current&&n(t,o.current)||(o.current=t),(0,r.useEffect)(e,o.current)}(e,t,i)};var u=n(34274),c=n(92424),s=n(86368),d=function(e){var t=e.namespace,n=e.intervalOptions,a=(0,u.Z)("trd-chart","trade-ui").getI18n,i=(0,c.createStore)(t),d=(0,s.createStore)(t),p=(0,o.__read)(i(c.getActiveTab),2),v=p[0],f=p[1],x=(0,o.__read)(i(c.getInterval),2),m=x[0],h=x[1],g=(0,o.__read)(i(c.getSelectedIntervals),1)[0],w=(0,o.__read)(d(s.getIntervalConfigOpen),2),k=w[0],E=w[1],C=(0,r.useMemo)((function(){return function(e){var t=e("line",{defaultValue:"Time"})||"Time",n=e("second",{defaultValue:"s"})||"s",o=e("minute",{defaultValue:"m"})||"m",r=e("hour",{defaultValue:"H"})||"H",a=e("day",{defaultValue:"D"})||"D",i=e("weekLine",{defaultValue:"W"})||"W",l=e("monthLine",{defaultValue:"M"})||"M";return function(e){var u;return{value:e,text:((u={})[c.DisplayIntervals.Time]=t,u[c.DisplayIntervals["1s"]]="1"+n,u[c.DisplayIntervals["1m"]]="1"+o,u[c.DisplayIntervals["3m"]]="3"+o,u[c.DisplayIntervals["5m"]]="5"+o,u[c.DisplayIntervals["15m"]]="15"+o,u[c.DisplayIntervals["30m"]]="30"+o,u[c.DisplayIntervals["1h"]]="1"+r,u[c.DisplayIntervals["2h"]]="2"+r,u[c.DisplayIntervals["4h"]]="4"+r,u[c.DisplayIntervals["6h"]]="6"+r,u[c.DisplayIntervals["8h"]]="8"+r,u[c.DisplayIntervals["12h"]]="12"+r,u[c.DisplayIntervals["1d"]]="1"+a,u[c.DisplayIntervals["3d"]]="3"+a,u[c.DisplayIntervals["1w"]]=i,u[c.DisplayIntervals["1M"]]=l,u)[e]}}}(a)}),[a]),y=(0,r.useMemo)((function(){return function(e){var t=e.createOption;return e.options.map((function(e){return t(e)}))}({options:n,createOption:C})}),[C,n]),D=(0,r.useMemo)((function(){return y.map((function(e){var t=e.value,n=e.text;return{value:t,text:void 0===n?"":n,selected:g.some((function(e){return e===t}))}}))}),[y,g]),b=(0,o.__read)((0,r.useState)(D),2),_=b[0],I=b[1];l((function(){return I(D)}),[D]);var M=(0,r.useCallback)((function(e){E(!1),h(e),f(v===c.Tabs.Depth?c.Tabs.Origin:v)}),[E,h,f,v]);return{options:_,setOptions:I,option:m,dropdownExpanded:k,setDropdownOpen:E,handleClickItem:M}}},44082:e=>{e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var o,r,a;if(Array.isArray(t)){if((o=t.length)!=n.length)return!1;for(r=o;0!=r--;)if(!e(t[r],n[r]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((o=(a=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(r=o;0!=r--;)if(!Object.prototype.hasOwnProperty.call(n,a[r]))return!1;for(r=o;0!=r--;){var i=a[r];if(!("_owner"===i&&t.$$typeof||e(t[i],n[i])))return!1}return!0}return t!=t&&n!=n}}}]);