"use strict";(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[230],{87698:(e,t,n)=>{n.d(t,{t:()=>i});var o=n(5163),r=n(2784),a=n(35635),i=r.forwardRef((function(e,t){var n=e.active,i=e.hidden,l=void 0!==i&&i,c=(0,o.__rest)(e,["active","hidden"]);return l?null:r.createElement(a.Z,(0,o.__assign)({},c,{sx:(0,o.__assign)({alignItems:"center",justifyContent:"center",color:n?"t.yellow":"t.third",cursor:"pointer",fontSize:0,lineHeight:"16px",p:"minor",borderRadius:"2px","&:hover":{color:"t.yellow"}},c.sx),ref:t}))}))},45230:(e,t,n)=>{n.r(t),n.d(t,{IntervalFilterMedium:()=>S,default:()=>O});var o=n(5163),r=n(2784),a=n(65403),i=n(30898),l=n.n(i),c=n(35635),u=n(26182),s=n(87698),d=function(e){var t=e.text,n=e.value,o=e.active,a=e.onClick,i=e.onObscured,l=e.onRevealed,c=(0,r.useRef)(null),d=(0,u.Z)(c,{root:null,rootMargin:"0px",threshold:1});return(0,r.useEffect)((function(){d&&(d.intersectionRatio<1?i(n):l(n))}),[d]),r.createElement(s.t,{id:n,active:o,onClick:a,ref:c,sx:{mr:2}},t)},p=n(76743),v=n(20952),f=n(20512),x=function(e){var t=e.dropdownExpanded,n=e.onDropdownMouseEnter,o=e.onDropdownMouseLeave,a=e.onDropdownButtonClick,i=e.isDropdownButtonActive,l=e.dropdownText,u=e.overlay;return r.createElement(v.Z,{open:t,onMouseEnter:n,onMouseLeave:o,overlay:u,sx:{position:"relative",height:"24px",flex:"1 0 auto",mr:2,"&:hover":{".interval-expand-btn":{color:"t.primary",transform:"rotate(180deg)"}}},enablePortal:!0},r.createElement(s.t,{onClick:a,sx:{width:"100%",height:"100%"},active:i},r.createElement(c.Z,{sx:{alignItems:"center",justifyContent:"center"}},l&&r.createElement(f.Z,null,l),r.createElement(p.Z,{className:"interval-expand-btn",size:3,sx:{color:"t.third",transition:"transform .2s, color .2s","&:not(:first-of-type)":{marginLeft:"4px"}}}))))},m=n(57808),h=n(52613),g=n(9541),w=function(e){var t=e.onChange,n=e.value,o=e.checked,a=e.checkboxSize,i=void 0===a?13:a;return r.createElement(h.Z,{sx:{position:"absolute",top:"-"+i/2+"px",right:"-"+i/2+"px"}},r.createElement("input",{type:"checkbox",value:n,onChange:t,hidden:!0}),r.createElement(c.Z,{sx:{alignItems:"center",justifyContent:"center",width:"16px",height:"16px",borderRadius:"100%",background:function(e){return o?e.colors.primary:e.colors.t.placeholder}}},r.createElement(g.Z,{color:"modalBg",size:i})))},k=n(74609),E=function(e){var t=e.showCheckbox,n=e.checked,o=e.value,a=e.onChange,i=e.onClick,l=e.children,c=e.className,u=void 0===c?"interval-option":c;return r.createElement(m.Z,{className:u,onClick:i,alignItems:"center",justifyContent:"center",sx:{fontWeight:"normal",fontSize:"14px",lineHeight:1.43,color:"t.primary",width:"60px",height:"24px",position:"relative",transition:"background-color 0.2s ease 0s",cursor:"pointer",bg:function(e){return n?(0,k.D)(e.colors.primary,.15):(0,k.D)(e.colors.line,.5)},"&:hover":{bg:function(e){return n?(0,k.D)(e.colors.primary,.3):e.colors.line}},borderRadius:"2px"}},r.createElement(f.Z,{sx:{color:n?"t.yellow":"t.primary",fontSize:"12px"}},l),t&&r.createElement(w,{onChange:a,value:o,checked:n}))},C=n(44520),D=function(e){var t=e.children,n=e.onClick;return r.createElement(C.Z,{sz:"s",sx:{lineHeight:"16px",fontSize:12,wordBreak:"keep-all",minHeight:"24px",border:"none",color:"primary",fontWeight:"normal",padding:"0",backgroundImage:"none",bg:"transparent","&:hover:not(:disabled):not(:active):not(.inactive)":{backgroundImage:"none"},"&:active:not(:disabled):not(.inactive)":{backgroundColor:"transparent"}},onClick:n},t)};function b(e){var t=e.options,n=e.onClickEdit,o=e.editText,a=e.title;return r.createElement(c.Z,{sx:{bg:"modalBg",marginTop:"8px",flexDirection:"column",boxShadow:"0px 0px 1px rgba(20, 21, 26, 0.1), 0px 7px 14px rgba(71, 77, 87, 0.08), 0px 3px 6px rgba(20, 21, 26, 0.08)",borderRadius:"4px",padding:"12px 16px 2px",width:"300px"}},r.createElement(c.Z,{sx:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"}},r.createElement(f.Z,{sx:{color:"t.third",fontSize:"12px"}},a),r.createElement(D,{onClick:n},o)),r.createElement(c.Z,{sx:{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between","&>.interval-option":{marginBottom:"10px"}}},t.map((function(e){var t=e.text,n=e.value,o=e.showCheckbox,a=e.checked,i=e.onClick,l=e.onChange;return r.createElement(E,{key:n,value:n,checked:a,showCheckbox:o,onClick:i,onChange:l},t)}))))}var y=function(e){var t=e.dropdownExpanded,n=e.onDropdownMouseEnter,o=e.onDropdownMouseLeave,a=e.onDropdownButtonClick,i=e.isDropdownButtonActive,l=e.dropdownText,u=e.options,s=e.onClickEdit,p=e.editText,v=e.title,f=e.displayedOptions;return r.createElement(c.Z,{height:24},r.createElement(c.Z,{sx:{flexWrap:"wrap",overflow:"hidden",justifyContent:"space-between"}},f.map((function(e){var t=e.text,n=e.value,o=e.active,a=e.onClick,i=e.onObscured,l=e.onRevealed;return r.createElement(d,{key:n,text:t,value:n,active:o,onClick:a,onObscured:i,onRevealed:l})}))),r.createElement(x,{dropdownExpanded:t,onDropdownMouseEnter:n,onDropdownMouseLeave:o,onDropdownButtonClick:a,isDropdownButtonActive:i,dropdownText:l,overlay:r.createElement(b,{options:u,onClickEdit:s,editText:p,title:v})}))},_=function(){return null},I=function(e){var t=function(e){var t=e.options,n=e.value,a=e.isEditing,i=e.onClickEdit,l=e.title,c=e.saveText,u=e.editText,s=e.dropdownExpanded,d=e.onDropdownMouseEnter,p=e.onDropdownMouseLeave,v=e.onDropdownButtonClick,f=e.onClickItem,x=(0,o.__rest)(e,["options","value","isEditing","onClickEdit","title","saveText","editText","dropdownExpanded","onDropdownMouseEnter","onDropdownMouseLeave","onDropdownButtonClick","onClickItem"]),m=(0,o.__read)((0,r.useState)(t),2),h=m[0],g=m[1],w=(0,o.__read)((0,r.useState)({}),2),k=w[0],E=w[1];(0,r.useEffect)((function(){return g(t)}),[t]);var C=h.map((function(e){return{text:e.text,value:e.text,checked:e.selected,showCheckbox:a,onClick:a?_:function(){return f(e.value)},onChange:function(){return g((function(t){return t.map((function(t){return(0,o.__assign)((0,o.__assign)({},t),{selected:t.value===e.value?!t.selected:t.selected})}))}))}}})),D=t.filter((function(e){return e.selected})).map((function(e){return{text:e.text,value:e.value,active:e.value===n,onClick:function(){return f(e.value)},onObscured:function(e){E((function(t){var n=(0,o.__assign)({},t);return n[e]=!0,n}))},onRevealed:function(e){E((function(t){var n=(0,o.__assign)({},t);return n[e]=!1,n}))}}})),b=t.find((function(e){return e.value===n&&(!e.selected||k[e.value])}));return(0,o.__assign)({options:C,displayedOptions:D,editText:a?c:u,dropdownText:(null==b?void 0:b.text)||"",dropdownExpanded:s,onDropdownMouseEnter:d,onDropdownMouseLeave:function(e){g(t),p(e)},onDropdownButtonClick:function(){return v((null==b?void 0:b.value)||"")},title:l,isDropdownButtonActive:!!b,onClickEdit:function(){return i(h)}},x)}(e);return r.createElement(y,(0,o.__assign)({},t))},M=n(69922),T=n(67300),Z=n(85353),S=function(e){var t=e.namespace,n=e.intervalOptions,i=(0,a.Z)("trd-chart","trade-ui").getI18n,c=(0,M.createStore)(t),u=(0,T.createStore)(t),s=(0,Z.J)({namespace:t,intervalOptions:n}),d=s.options,p=s.setOptions,v=s.option,f=s.dropdownExpanded,x=s.setDropdownOpen,m=s.handleClickItem,h=(0,o.__read)(c(M.getSelectedIntervals),2)[1],g=(0,o.__read)(u(T.getEditingInterval),2),w=g[0],k=g[1],E=(0,r.useCallback)((function(e){if(w){p(e),x(!1);var t=l()(n,e.filter((function(e){return e.selected})).map((function(e){return e.value})));h(t)}k(!w)}),[w,k,p,x,n,h]),C=(0,r.useCallback)((function(){w||(x(!1),k(!1))}),[w,x,k]),D=(0,r.useMemo)((function(){return i("selectIntervals",{defaultValue:"Select Intervals"})||""}),[i]),b=(0,r.useMemo)((function(){return i("save",{defaultValue:"Save"})||""}),[i]),y=(0,r.useMemo)((function(){return i("edit",{defaultValue:"Edit"})||""}),[i]);return r.createElement(I,{options:d,value:v,isEditing:w,onClickEdit:E,title:D,saveText:b,editText:y,dropdownExpanded:f,onDropdownMouseEnter:function(){return x(!0)},onDropdownMouseLeave:C,onDropdownButtonClick:function(){return x(!0)},onClickItem:m})};const O=S},85353:(e,t,n)=>{n.d(t,{J:()=>c});var o=n(5163),r=n(2784),a=n(65403),i=n(69922),l=n(67300),c=function(e){var t=e.namespace,n=e.intervalOptions,c=(0,a.Z)("trd-chart","trade-ui").getI18n,u=(0,i.createStore)(t),s=(0,l.createStore)(t),d=(0,o.__read)(u(i.getActiveTab),2),p=d[0],v=d[1],f=(0,o.__read)(u(i.getInterval),2),x=f[0],m=f[1],h=(0,o.__read)(u(i.getSelectedIntervals),1)[0],g=(0,o.__read)(s(l.getIntervalConfigOpen),2),w=g[0],k=g[1],E=(0,r.useMemo)((function(){return function(e){var t=e("line",{defaultValue:"Time"})||"Time",n=e("second",{defaultValue:"s"})||"s",o=e("minute",{defaultValue:"m"})||"m",r=e("hour",{defaultValue:"H"})||"H",a=e("day",{defaultValue:"D"})||"D",l=e("weekLine",{defaultValue:"W"})||"W",c=e("monthLine",{defaultValue:"M"})||"M";return function(e){var u;return{value:e,text:((u={})[i.DisplayIntervals.Time]=t,u[i.DisplayIntervals["1s"]]="1"+n,u[i.DisplayIntervals["1m"]]="1"+o,u[i.DisplayIntervals["3m"]]="3"+o,u[i.DisplayIntervals["5m"]]="5"+o,u[i.DisplayIntervals["15m"]]="15"+o,u[i.DisplayIntervals["30m"]]="30"+o,u[i.DisplayIntervals["1h"]]="1"+r,u[i.DisplayIntervals["2h"]]="2"+r,u[i.DisplayIntervals["4h"]]="4"+r,u[i.DisplayIntervals["6h"]]="6"+r,u[i.DisplayIntervals["8h"]]="8"+r,u[i.DisplayIntervals["12h"]]="12"+r,u[i.DisplayIntervals["1d"]]="1"+a,u[i.DisplayIntervals["3d"]]="3"+a,u[i.DisplayIntervals["1w"]]=l,u[i.DisplayIntervals["1M"]]=c,u)[e]}}}(c)}),[c]),C=(0,r.useMemo)((function(){return function(e){var t=e.createOption;return e.options.map((function(e){return t(e)}))}({options:n,createOption:E})}),[E,n]),D=(0,r.useMemo)((function(){return C.map((function(e){var t=e.value,n=e.text;return{value:t,text:void 0===n?"":n,selected:h.some((function(e){return e===t}))}}))}),[C,h]),b=(0,o.__read)((0,r.useState)(D),2),y=b[0],_=b[1];(0,r.useEffect)((function(){return _(D)}),[D]);var I=(0,r.useCallback)((function(e){k(!1),m(e),v(p===i.Tabs.Depth?i.Tabs.Origin:p)}),[k,m,v,p]);return{options:y,setOptions:_,option:x,dropdownExpanded:w,setDropdownOpen:k,handleClickItem:I}}}}]);