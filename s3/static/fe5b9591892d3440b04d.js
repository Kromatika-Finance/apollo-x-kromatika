(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[7109],{56980:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var n=i(2784),s=function(){},r="undefined"!=typeof window;const o=r?n.useLayoutEffect:n.useEffect;var a={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};const l=r&&void 0!==window.ResizeObserver?function(){var e=(0,n.useState)(null),t=e[0],i=e[1],s=(0,n.useState)(a),r=s[0],l=s[1],c=(0,n.useMemo)((function(){return new window.ResizeObserver((function(e){if(e[0]){var t=e[0].contentRect,i=t.x,n=t.y,s=t.width,r=t.height,o=t.top,a=t.left,c=t.bottom,d=t.right;l({x:i,y:n,width:s,height:r,top:o,left:a,bottom:c,right:d})}}))}),[]);return o((function(){if(t)return c.observe(t),function(){c.disconnect()}}),[t]),[i,r]}:function(){return[s,a]}},31615:(e,t,i)=>{"use strict";i.d(t,{Z:()=>o});var n=i(5163),s=i(2784),r=i(98569);const o=function(e){return s.createElement(r.Z,(0,n.__assign)({width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},e),s.createElement("path",{d:"M12 9a1 1 0 100-2 1 1 0 100 2zm0 8a1 1 0 001-1v-5a1 1 0 10-2 0v5a1 1 0 001 1z"}),s.createElement("path",{fillRule:"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-2 0a8 8 0 10-16 0 8 8 0 0016 0z",clipRule:"evenodd"}))}},53858:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r});var n=i(2784),s=i(22706);function r(){return n.useContext(s.Z)}},31023:(e,t,i)=>{"use strict";i.d(t,{Z:()=>a});var n=i(5163),s=i(2784),r=i(55742),o=i(53858);const a=s.forwardRef((function(e,t){return s.createElement(r.ZP,(0,n.__assign)({ref:t},e,{dir:(0,o.Z)()}))}))},57449:function(e){e.exports=function(){"use strict";return function(e,t,i){var n=t.prototype,s=n.format;i.en.ordinal=function(e){var t=["th","st","nd","rd"],i=e%100;return"["+e+(t[(i-20)%10]||t[i]||t[0])+"]"},n.format=function(e){var t=this,i=this.$locale(),n=this.$utils(),r=(e||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(e){switch(e){case"Q":return Math.ceil((t.$M+1)/3);case"Do":return i.ordinal(t.$D);case"gggg":return t.weekYear();case"GGGG":return t.isoWeekYear();case"wo":return i.ordinal(t.week(),"W");case"w":case"ww":return n.s(t.week(),"w"===e?1:2,"0");case"W":case"WW":return n.s(t.isoWeek(),"W"===e?1:2,"0");case"k":case"kk":return n.s(String(0===t.$H?24:t.$H),"k"===e?1:2,"0");case"X":return Math.floor(t.$d.getTime()/1e3);case"x":return t.$d.getTime();case"z":return"["+t.offsetName()+"]";case"zzz":return"["+t.offsetName("long")+"]";default:return e}}));return s.bind(this)(r)}}}()},89945:function(e){e.exports=function(){"use strict";var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,i=/\d\d/,n=/\d\d?/,s=/\d*[^\s\d-_:/()]+/,r={},o=function(e){return(e=+e)+(e>68?1900:2e3)},a=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),i=60*t[1]+(+t[2]||0);return 0===i?0:"+"===t[0]?-i:i}(e)}],c=function(e){var t=r[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var i,n=r.meridiem;if(n){for(var s=1;s<=24;s+=1)if(e.indexOf(n(s,0,t))>-1){i=s>12;break}}else i=e===(t?"pm":"PM");return i},u={A:[s,function(e){this.afternoon=d(e,!1)}],a:[s,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[i,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,a("seconds")],ss:[n,a("seconds")],m:[n,a("minutes")],mm:[n,a("minutes")],H:[n,a("hours")],h:[n,a("hours")],HH:[n,a("hours")],hh:[n,a("hours")],D:[n,a("day")],DD:[i,a("day")],Do:[s,function(e){var t=r.ordinal,i=e.match(/\d+/);if(this.day=i[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,a("month")],MM:[i,a("month")],MMM:[s,function(e){var t=c("months"),i=(c("monthsShort")||t.map((function(e){return e.substr(0,3)}))).indexOf(e)+1;if(i<1)throw new Error;this.month=i%12||i}],MMMM:[s,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,a("year")],YY:[i,function(e){this.year=o(e)}],YYYY:[/\d{4}/,a("year")],Z:l,ZZ:l};function h(i){var n,s;n=i,s=r&&r.formats;for(var o=(i=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,i,n){var r=n&&n.toUpperCase();return i||s[n]||e[n]||s[r].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,i){return t||i.slice(1)}))}))).match(t),a=o.length,l=0;l<a;l+=1){var c=o[l],d=u[c],h=d&&d[0],f=d&&d[1];o[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},i=0,n=0;i<a;i+=1){var s=o[i];if("string"==typeof s)n+=s.length;else{var r=s.regex,l=s.parser,c=e.substr(n),d=r.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var i=e.hours;t?i<12&&(e.hours+=12):12===i&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,i){i.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=t.prototype,s=n.parse;n.parse=function(e){var t=e.date,n=e.utc,o=e.args;this.$u=n;var a=o[1];if("string"==typeof a){var l=!0===o[2],c=!0===o[3],d=l||c,u=o[2];c&&(u=o[2]),r=this.$locale(),!l&&u&&(r=i.Ls[u]),this.$d=function(e,t,i){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),s=n.year,r=n.month,o=n.day,a=n.hours,l=n.minutes,c=n.seconds,d=n.milliseconds,u=n.zone,f=new Date,m=o||(s||r?1:f.getDate()),p=s||f.getFullYear(),g=0;s&&!r||(g=r>0?r-1:f.getMonth());var v=a||0,x=l||0,y=c||0,b=d||0;return u?new Date(Date.UTC(p,g,m,v,x,y,b+60*u.offset*1e3)):i?new Date(Date.UTC(p,g,m,v,x,y,b)):new Date(p,g,m,v,x,y,b)}catch(e){return new Date("")}}(t,a,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!==this.format(a)&&(this.$d=new Date("")),r={}}else if(a instanceof Array)for(var f=a.length,m=1;m<=f;m+=1){o[1]=a[m-1];var p=i.apply(this,o);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}m===f&&(this.$d=new Date(""))}else s.call(this,e)}}}()},64989:function(e){e.exports=function(){"use strict";var e,t,i=1e3,n=6e4,s=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,l=2592e6,c=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,d={years:a,months:l,days:r,hours:s,minutes:n,seconds:i,milliseconds:1,weeks:6048e5},u=function(e){return e instanceof x},h=function(e,t,i){return new x(e,i,t.$l)},f=function(e){return t.p(e)+"s"},m=function(e){return e<0},p=function(e){return m(e)?Math.ceil(e):Math.floor(e)},g=function(e){return Math.abs(e)},v=function(e,t){return e?m(e)?{negative:!0,format:""+g(e)+t}:{negative:!1,format:""+e+t}:{negative:!1,format:""}},x=function(){function m(e,t,i){var n=this;if(this.$d={},this.$l=i,void 0===e&&(this.$ms=0,this.parseFromMilliseconds()),t)return h(e*d[f(t)],this);if("number"==typeof e)return this.$ms=e,this.parseFromMilliseconds(),this;if("object"==typeof e)return Object.keys(e).forEach((function(t){n.$d[f(t)]=e[t]})),this.calMilliseconds(),this;if("string"==typeof e){var s=e.match(c);if(s){var r=s.slice(2).map((function(e){return Number(e)}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var g=m.prototype;return g.calMilliseconds=function(){var e=this;this.$ms=Object.keys(this.$d).reduce((function(t,i){return t+(e.$d[i]||0)*d[i]}),0)},g.parseFromMilliseconds=function(){var e=this.$ms;this.$d.years=p(e/a),e%=a,this.$d.months=p(e/l),e%=l,this.$d.days=p(e/r),e%=r,this.$d.hours=p(e/s),e%=s,this.$d.minutes=p(e/n),e%=n,this.$d.seconds=p(e/i),e%=i,this.$d.milliseconds=e},g.toISOString=function(){var e=v(this.$d.years,"Y"),t=v(this.$d.months,"M"),i=+this.$d.days||0;this.$d.weeks&&(i+=7*this.$d.weeks);var n=v(i,"D"),s=v(this.$d.hours,"H"),r=v(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var a=v(o,"S"),l=e.negative||t.negative||n.negative||s.negative||r.negative||a.negative,c=s.format||r.format||a.format?"T":"",d=(l?"-":"")+"P"+e.format+t.format+n.format+c+s.format+r.format+a.format;return"P"===d||"-P"===d?"P0D":d},g.toJSON=function(){return this.toISOString()},g.format=function(e){var i=e||"YYYY-MM-DDTHH:mm:ss",n={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return i.replace(o,(function(e,t){return t||String(n[e])}))},g.as=function(e){return this.$ms/d[f(e)]},g.get=function(e){var t=this.$ms,i=f(e);return"milliseconds"===i?t%=1e3:t="weeks"===i?p(t/d[i]):this.$d[i],0===t?0:t},g.add=function(e,t,i){var n;return n=t?e*d[f(t)]:u(e)?e.$ms:h(e,this).$ms,h(this.$ms+n*(i?-1:1),this)},g.subtract=function(e,t){return this.add(e,t,!0)},g.locale=function(e){var t=this.clone();return t.$l=e,t},g.clone=function(){return h(this.$ms,this)},g.humanize=function(t){return e().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},g.milliseconds=function(){return this.get("milliseconds")},g.asMilliseconds=function(){return this.as("milliseconds")},g.seconds=function(){return this.get("seconds")},g.asSeconds=function(){return this.as("seconds")},g.minutes=function(){return this.get("minutes")},g.asMinutes=function(){return this.as("minutes")},g.hours=function(){return this.get("hours")},g.asHours=function(){return this.as("hours")},g.days=function(){return this.get("days")},g.asDays=function(){return this.as("days")},g.weeks=function(){return this.get("weeks")},g.asWeeks=function(){return this.as("weeks")},g.months=function(){return this.get("months")},g.asMonths=function(){return this.as("months")},g.years=function(){return this.get("years")},g.asYears=function(){return this.as("years")},m}();return function(i,n,s){e=s,t=s().$utils(),s.duration=function(e,t){var i=s.locale();return h(e,{$l:i},t)},s.isDuration=u;var r=n.prototype.add,o=n.prototype.subtract;n.prototype.add=function(e,t){return u(e)&&(e=e.asMilliseconds()),r.bind(this)(e,t)},n.prototype.subtract=function(e,t){return u(e)&&(e=e.asMilliseconds()),o.bind(this)(e,t)}}}()},70909:function(e){e.exports=function(){"use strict";return function(e,t,i){var n=t.prototype,s=function(e){return e&&(e.indexOf?e:e.s)},r=function(e,t,i,n,r){var o=e.name?e:e.$locale(),a=s(o[t]),l=s(o[i]),c=a||l.map((function(e){return e.substr(0,n)}));if(!r)return c;var d=o.weekStart;return c.map((function(e,t){return c[(t+(d||0))%7]}))},o=function(){return i.Ls[i.locale()]},a=function(e,t){return e.formats[t]||function(e){return e.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,i){return t||i.slice(1)}))}(e.formats[t.toUpperCase()])},l=function(){var e=this;return{months:function(t){return t?t.format("MMMM"):r(e,"months")},monthsShort:function(t){return t?t.format("MMM"):r(e,"monthsShort","months",3)},firstDayOfWeek:function(){return e.$locale().weekStart||0},weekdays:function(t){return t?t.format("dddd"):r(e,"weekdays")},weekdaysMin:function(t){return t?t.format("dd"):r(e,"weekdaysMin","weekdays",2)},weekdaysShort:function(t){return t?t.format("ddd"):r(e,"weekdaysShort","weekdays",3)},longDateFormat:function(t){return a(e.$locale(),t)},meridiem:this.$locale().meridiem,ordinal:this.$locale().ordinal}};n.localeData=function(){return l.bind(this)()},i.localeData=function(){var e=o();return{firstDayOfWeek:function(){return e.weekStart||0},weekdays:function(){return i.weekdays()},weekdaysShort:function(){return i.weekdaysShort()},weekdaysMin:function(){return i.weekdaysMin()},months:function(){return i.months()},monthsShort:function(){return i.monthsShort()},longDateFormat:function(t){return a(e,t)},meridiem:e.meridiem,ordinal:e.ordinal}},i.months=function(){return r(o(),"months")},i.monthsShort=function(){return r(o(),"monthsShort","months",3)},i.weekdays=function(e){return r(o(),"weekdays",null,null,e)},i.weekdaysShort=function(e){return r(o(),"weekdaysShort","weekdays",3,e)},i.weekdaysMin=function(e){return r(o(),"weekdaysMin","weekdays",2,e)}}}()},10264:function(e){e.exports=function(){"use strict";var e="minute",t=/[+-]\d\d(?::?\d\d)?/g,i=/([+-]|\d\d)/g;return function(n,s,r){var o=s.prototype;r.utc=function(e){return new s({date:e,utc:!0,args:arguments})},o.utc=function(t){var i=r(this.toDate(),{locale:this.$L,utc:!0});return t?i.add(this.utcOffset(),e):i},o.local=function(){return r(this.toDate(),{locale:this.$L,utc:!1})};var a=o.parse;o.parse=function(e){e.utc&&(this.$u=!0),this.$utils().u(e.$offset)||(this.$offset=e.$offset),a.call(this,e)};var l=o.init;o.init=function(){if(this.$u){var e=this.$d;this.$y=e.getUTCFullYear(),this.$M=e.getUTCMonth(),this.$D=e.getUTCDate(),this.$W=e.getUTCDay(),this.$H=e.getUTCHours(),this.$m=e.getUTCMinutes(),this.$s=e.getUTCSeconds(),this.$ms=e.getUTCMilliseconds()}else l.call(this)};var c=o.utcOffset;o.utcOffset=function(n,s){var r=this.$utils().u;if(r(n))return this.$u?0:r(this.$offset)?c.call(this):this.$offset;if("string"==typeof n&&null===(n=function(e){void 0===e&&(e="");var n=e.match(t);if(!n)return null;var s=(""+n[0]).match(i)||["-",0,0],r=s[0],o=60*+s[1]+ +s[2];return 0===o?0:"+"===r?o:-o}(n)))return this;var o=Math.abs(n)<=16?60*n:n,a=this;if(s)return a.$offset=o,a.$u=0===n,a;if(0!==n){var l=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(a=this.local().add(o+l,e)).$offset=o,a.$x.$localOffset=l}else a=this.utc();return a};var d=o.format;o.format=function(e){var t=e||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return d.call(this,t)},o.valueOf=function(){var e=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||(new Date).getTimezoneOffset());return this.$d.valueOf()-6e4*e},o.isUTC=function(){return!!this.$u},o.toISOString=function(){return this.toDate().toISOString()},o.toString=function(){return this.toDate().toUTCString()};var u=o.toDate;o.toDate=function(e){return"s"===e&&this.$offset?r(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():u.call(this)};var h=o.diff;o.diff=function(e,t,i){if(e&&this.$u===e.$u)return h.call(this,e,t,i);var n=this.local(),s=r(e).local();return h.call(n,s,t,i)}}}()},90742:function(e){e.exports=function(){"use strict";var e="week",t="year";return function(i,n,s){var r=n.prototype;r.week=function(i){if(void 0===i&&(i=null),null!==i)return this.add(7*(i-this.week()),"day");var n=this.$locale().yearStart||1;if(11===this.month()&&this.date()>25){var r=s(this).startOf(t).add(1,t).date(n),o=s(this).endOf(e);if(r.isBefore(o))return 1}var a=s(this).startOf(t).date(n).startOf(e).subtract(1,"millisecond"),l=this.diff(a,e,!0);return l<0?s(this).startOf("week").week():Math.ceil(l)},r.weeks=function(e){return void 0===e&&(e=null),this.week(e)}}}()},42090:function(e){e.exports=function(){"use strict";return function(e,t){t.prototype.weekYear=function(){var e=this.month(),t=this.week(),i=this.year();return 1===t&&11===e?i+1:0===e&&t>=52?i-1:i}}}()},92547:function(e){e.exports=function(){"use strict";return function(e,t){t.prototype.weekday=function(e){var t=this.$locale().weekStart||0,i=this.$W,n=(i<t?i+7:i)-t;return this.$utils().u(e)?n:this.subtract(n,"day").add(e,"day")}}}()},18149:(e,t,i)=>{var n=i(88746);e.exports=function(e,t){return n(e,t)}},23844:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>te});var n=i(52322),s=i(2784),r=i(39727),o=i(97060),a=i(38896),l=i(14485),c=i(68135),d=i(71859),u=i(51099),h=i(55354),f=i(92036),m=i(62143),p=i(4028),g=i(53096),v=i(85435),x=i(27986),y=i(48658);const b=s.memo((()=>{const{getI18n:e}=(0,o.yk)(),{handleHideOtherPairs:t,checked:i}=(0,s.useContext)(d.Z);return(0,n.jsx)("div",Object.assign({className:"action-bar"},{children:(0,n.jsxs)(f.Z,Object.assign({sx:{alignItems:"center",color:"t.third"},onClick:()=>t(!i)},{children:[(0,n.jsx)(x.Z,{name:"hidePairs",checked:i,onChange:()=>!1},void 0),(0,n.jsx)(y.Z,Object.assign({variant:"caption",sx:{userSelect:"none"}},{children:e("hideOtherSymbol",{defaultValue:"Hide Other Symbols"})}),void 0)]}),void 0)}),void 0)}));var j=i(5163),O=(0,s.forwardRef)((function(e,t){return s.createElement(m.Z,(0,j.__assign)({ref:t,as:"div",tx:"tag",variant:"default"},e,{__css:{display:"inline-block"}}))}));O.displayName="Tag";const w=O;var $=i(55137);const M=({children:e})=>(0,n.jsx)(y.Z,Object.assign({variant:"caption",__css:{color:"t.third"}},{children:e}),void 0),S=e=>{var{color:t="t.primary"}=e,i=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["color"]);return(0,n.jsx)(y.Z,Object.assign({variant:"captionSub",color:t},i),void 0)},k=({children:e,sx:t={}})=>(0,n.jsx)(f.Z,Object.assign({className:"row-item",sx:t},{children:e}),void 0),T=" / ",Z=({symbolName:e,side:t,positionSide:i,nextPair:s,nextType:r,status:o})=>{const{getI18n:a}=(0,h.ZK)(),l=(e=>{switch((e||"").toLowerCase()){case"canceled":return"gray";case"filled":return"green";case"partial fill":default:return"default"}})(o);return(0,n.jsxs)(k,Object.assign({sx:{pb:"10px !important"}},{children:[(0,n.jsxs)("div",Object.assign({className:"symbol-wrap"},{children:[e?(0,n.jsxs)("div",Object.assign({className:"symbolText"},{children:[(0,n.jsx)("div",Object.assign({className:"symbol"},{children:e.symbol}),void 0),(0,n.jsx)("div",{children:`${e.contractTypeI18n} ${e.deliveryDateFormat}`},void 0)]}),void 0):(0,n.jsx)("div",Object.assign({className:"symbolText"},{children:s}),void 0),(0,n.jsx)(y.Z,Object.assign({variant:"caption",sx:{color:"BUY"===t?"buy":"sell"}},{children:"BUY"===t?`${r} / ${a(`sideBuy${i}`,{defaultValue:"Buy"})}`:`${r} / ${a(`sideSell${i}`,{defaultValue:"Sell"})}`}),void 0)]}),void 0),(0,n.jsx)(w,Object.assign({variant:l,sx:{py:"2px",fontSize:0}},{children:a(`status-${(0,c.No)(o)}`,{defaultValue:o})}),void 0)]}),void 0)},Y=(0,s.memo)((e=>{const{side:t,status:i,reduceOnly:r,timeInForce:a,positionSide:l="BOTH",type:c,activatePrice:u,priceRate:p,workingType:g}=e,{getI18n:v}=(0,h.ZK)(),{getI18n:x}=(0,o.yk)(),{useColumn:y}=(0,s.useContext)(d.Z),b=y(e),{symbolName:j,nextDate:O,nextPair:w,nextAvgPrice:Y,nextPrice:D,nextType:C,nextAmount:P,nextFilled:I,nextTriggerConditions:V}=b,N=(0,s.useMemo)((()=>[{label:[v("filled",{defaultValue:"Filled"}),v("amount",{defaultValue:"Amount"})].join(T),value:[I,P].join(T)},{label:[v("average",{defaultValue:"Average"}),v("price",{defaultValue:"Price"})].join(T),value:[Y,D].join(T)},{label:v("reduceOnly",{defaultValue:"Reduce Only"}),value:r?v("YES",{defaultValue:"YES"}):v("NO",{defaultValue:"NO"})},{label:x("orderType-postOnly",{defaultValue:"Post Only"}),value:"GTX"===a?v("YES",{defaultValue:"YES"}):v("NO",{defaultValue:"NO"})},{label:x("time",{defaultValue:"Time"}),value:O}]),[v,I,P,Y,D,r,x,a,O]);return(0,n.jsxs)("div",Object.assign({className:"row-wrap"},{children:[(0,n.jsxs)(m.Z,Object.assign({px:"16px"},{children:[(0,n.jsx)(Z,{symbolName:j,side:t,positionSide:l,nextPair:w,nextType:C,status:i},void 0),N.map((({label:e,value:t})=>(0,n.jsxs)(k,{children:[(0,n.jsx)(M,{children:e},void 0),(0,n.jsx)(S,{children:t},void 0)]},e))),(0,n.jsxs)(k,{children:[(0,n.jsx)(M,{children:v("triggerConditions",{defaultValue:"Trigger Conditions"})},void 0),(0,n.jsxs)(f.Z,Object.assign({alignItems:"center"},{children:[(0,n.jsx)(S,{children:V},void 0),(0,n.jsx)($.Z,{type:c,workingType:g,activatePrice:u,priceRate:p},void 0)]}),void 0)]},"triggerConditions")]}),void 0),(0,n.jsx)("div",{className:"line"},void 0)]}),void 0)})),D=(0,s.memo)((e=>{const{side:t,status:i,reduceOnly:r,timeInForce:a,positionSide:l="BOTH",type:c,activatePrice:u,priceRate:p,workingType:g}=e,{getI18n:v}=(0,h.ZK)(),{getI18n:x}=(0,o.yk)(),{useColumn:y}=(0,s.useContext)(d.Z),b=y(e),{symbolName:j,nextDate:O,nextPair:w,nextAvgPrice:k,nextPrice:T,nextType:Y,nextAmount:D,nextFilled:C,nextTriggerConditions:P}=b,I=(0,s.useMemo)((()=>[{columnKey:"filled",label:v("filled",{defaultValue:"Filled"}),value:C},{columnKey:"amount",label:v("amount",{defaultValue:"Amount"}),value:D},{columnKey:"reduceOnly",label:v("reduceOnly",{defaultValue:"Reduce Only"}),value:r?v("YES",{defaultValue:"YES"}):v("NO",{defaultValue:"NO"})},{columnKey:"average",label:v("average",{defaultValue:"Average"}),value:k},{columnKey:"price",label:v("price",{defaultValue:"Price"}),value:T},{columnKey:"postOnly",label:x("orderType-postOnly",{defaultValue:"Post Only"}),value:"GTX"===a?v("YES",{defaultValue:"YES"}):v("NO",{defaultValue:"NO"})},{columnKey:"date",label:x("time",{defaultValue:"Time"}),value:O}]),[v,C,D,r,k,T,x,a,O]);return(0,n.jsxs)("div",Object.assign({className:"row-wrap"},{children:[(0,n.jsxs)(m.Z,Object.assign({px:"16px"},{children:[(0,n.jsx)(Z,{symbolName:j,side:t,positionSide:l,nextPair:w,nextType:Y,status:i},void 0),(0,n.jsxs)("div",Object.assign({className:"row-grid"},{children:[I.map((({label:e,value:t,columnKey:i})=>(0,n.jsxs)("div",Object.assign({className:i},{children:[(0,n.jsx)(M,{children:e},void 0),(0,n.jsx)(S,{children:t},void 0)]}),i))),(0,n.jsxs)("div",Object.assign({className:"triggerConditions"},{children:[(0,n.jsxs)(f.Z,Object.assign({alignItems:"center"},{children:[(0,n.jsx)(M,{children:v("triggerConditions",{defaultValue:"Trigger Conditions"})},void 0),(0,n.jsx)($.Z,{type:c,workingType:g,activatePrice:u,priceRate:p},void 0)]}),void 0),(0,n.jsx)(S,{children:P},void 0)]}),"triggerConditions")]}),void 0)]}),void 0),(0,n.jsx)("div",{className:"line"},void 0)]}),void 0)})),C={position:"relative",flexDirection:"column",flex:"1 0",".action-bar":{display:"flex",alignItems:"center",height:32,pt:10},".empty":{display:"flex",minHeight:120,alignItems:"center",justifyContent:"center",color:"t.secondary",fontSize:0},".row-wrap":{color:"t.primary",pt:15,".line":{bg:"line",height:"1px",mx:"16px",mt:"16px"},"&:last-of-type":{mb:102},"& .row-item":{justifyContent:"space-between",alignItems:"center",py:"minor"},"& .symbol-wrap":{display:"flex",flexDirection:"column",fontSize:0,"& .symbolText":{display:"flex",alignItems:"center"},"& .symbol":{mr:"minor",fontSize:1,fontWeight:"medium"}}}},P={position:"relative",flexDirection:"column",height:"100%",".action-bar":{display:"flex",alignItems:"center",height:32,pb:10},".empty":{display:"flex",minHeight:120,alignItems:"center",justifyContent:"center",color:"t.secondary",fontSize:0},".row-list":{height:"calc(100% - 32px)",overflow:"auto","&::-webkit-scrollbar":{display:"none"},"&::-webkit-scrollbar-thumb":{bg:"transparent"}},".row-wrap":{color:"t.primary",pt:15,".line":{bg:"line",height:"1px",mx:"16px",mt:"16px"},"&:last-of-type":{mb:20},".row-grid":{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(3, 1fr)",gridGap:"12px 16px",gridTemplateAreas:'"filled amount reduceOnly"\n        "average price postOnly"\n        "triggerConditions date ."',"& .reduceOnly, & .postOnly":{textAlign:"right"}},"& .row-item":{justifyContent:"space-between",alignItems:"center"},"& .symbol-wrap":{display:"flex",alignItems:"center",fontSize:0,"& .symbolText":{display:"flex",alignItems:"center",mr:"xs"},"& .symbol":{mr:"minor",fontSize:1,fontWeight:"medium"}}}};var I=i(38254),V=i(10015);const N=({isMobile:e,items:t,loading:i,hasMore:r,loadMore:o,timeRange:a,onSearch:l})=>{const{emptyText:c}=s.useContext(d.Z);return(0,n.jsxs)(f.Z,Object.assign({sx:e?C:P},{children:[(0,n.jsx)(g.Z,{fullScreen:!0,show:i},void 0),(0,n.jsxs)(m.Z,Object.assign({px:"16px"},{children:[(0,n.jsx)(b,{},void 0),e?(0,n.jsx)(V.Z,{onSearch:l},void 0):(0,n.jsx)(I.Z,Object.assign({},a,{onSearch:l,loadMore:o}),void 0)]}),void 0),i||t&&t.length?(0,n.jsxs)(n.Fragment,{children:[e?t.map(((e,t)=>(0,n.jsx)(Y,Object.assign({},e),t))):(0,n.jsx)("div",Object.assign({className:"row-list"},{children:t.map(((e,t)=>(0,n.jsx)(D,Object.assign({},e),t)))}),void 0),r?(0,n.jsx)(p.Z,{showMore:o,check:{offset:200},loading:i},void 0):null]},void 0):(0,n.jsx)(v.pB,Object.assign({className:"empty"},{children:c}),void 0)]}),void 0)};var E=i(71318),H=i(92790),L=i(31023),z=i(10337);const _={pl:0,alignItems:"center",borderBottom:"1px solid",borderBottomColor:"newLine"},R=s.memo((({headers:e=[],sx:t={}})=>{const[i,r]=(0,s.useState)("down"),o=e=>{r(e?"up":"down")};return(0,n.jsx)(f.Z,Object.assign({__css:_,sx:t},{children:e.map((({text:e,overlay:t,sx:s={}},r)=>t?(0,n.jsx)(L.Z,Object.assign({trigger:"click",overlay:t,sx:{userSelect:"none",display:"flex"},enablePortal:!0,style:(0,h.VE)(r),onVisibleChange:o},{children:(0,n.jsxs)(f.Z,Object.assign({"data-area":"left",sx:{alignItems:"center",cursor:"pointer",height:"24px"}},{children:[(0,n.jsx)(y.Z,Object.assign({title:e,sx:Object.assign({fontSize:0,color:"up"===i?"primary":"t.third"},s)},{children:e}),void 0),(0,n.jsx)(z.Z,{sx:{transform:"up"===i?"rotate(180deg)":"rotate(0deg)",color:"up"===i?"primary":"t.third",ml:"4px"},size:20},void 0)]}),void 0)}),r):(0,n.jsx)(f.Z,Object.assign({"data-area":"left",style:(0,h.VE)(r),sx:{alignItems:"center",cursor:t?"pointer":"auto"}},{children:(0,n.jsx)(y.Z,Object.assign({title:e,sx:Object.assign({fontSize:0,color:"t.third"},s)},{children:e}),void 0)}),r)))}),void 0)}));var A=i(23131),W=i(44951);const F=A.K3.orderhistory,U=({type:e,endTime:t,startTime:i,onSearch:a,loadMore:l,sx:c={}})=>{(0,r.v9)((e=>e.pageStore.page));const{isMobile:u}=(0,o.Fs)(),{getI18n:h}=(0,o.yk)(),{getI18n:m}=(0,o.Vw)(),{handleHideOtherPairs:p,checked:g}=(0,s.useContext)(d.Z),v="hideOtherSymbol",b=h(v,{defaultValue:"Hide Other Symbol"});return(0,n.jsxs)(f.Z,Object.assign({__css:{flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},sx:c},{children:[(0,n.jsx)(I.Z,{type:e,onSearch:a,loadMore:l},void 0),(0,n.jsxs)(f.Z,Object.assign({sx:{alignItems:"center",fontSize:[1,0],color:"t.third",cursor:["auto","pointer"],lineHeight:["30px","24px"],position:"absolute",top:"-40px",right:"44px",zIndex:"999",height:"40px"},onClick:()=>p(!g)},{children:[(0,n.jsx)(x.Z,{name:v,size:u?18:16,checked:g,onChange:()=>!1},void 0),(0,n.jsx)(y.Z,Object.assign({sx:{userSelect:"none"}},{children:b}),void 0)]}),void 0),(0,n.jsx)(W.Z,{dateTime:{startTime:i,endTime:t},downloadUrl:F.uri,title:m(F.key)},void 0)]}),void 0)};var B=i(31615),K=i(42902),G=i(65916),X=i(56851),Q=i(8826);const q=e=>(0,n.jsx)(y.Z,Object.assign({__css:{fontWeight:400}},e),void 0),J=s.memo((e=>{const{getI18n:t,i18n:{language:i}}=(0,h.ZK)(),{useColumn:r}=(0,s.useContext)(d.Z),{side:o,status:a,reduceOnly:l,timeInForce:u,positionSide:p="BOTH",symbol:g,orderId:v,id:x,type:b,activatePrice:j,priceRate:O,workingType:w}=e,M=(x&&x.split("_")[0],p),S="BUY"===o?{color:"buy",children:t(`sideBuy${M}`,{defaultValue:"Buy"})}:{color:"sell",children:t(`sideSell${M}`,{defaultValue:"Sell"})},k=r(e),T="canceled"===(null==a?void 0:a.toLowerCase())||"expired"===(null==a?void 0:a.toLowerCase())?"0.5":"1",Z=()=>l?t("YES",{defaultValue:"YES"}):t("NO",{defaultValue:"NO"}),Y=()=>"GTX"===u?t("YES",{defaultValue:"YES"}):t("NO",{defaultValue:"NO"}),{nextDate:D,nextPair:C,symbolName:P,nextAvgPrice:I,nextPrice:V,nextType:N,nextAmount:E,nextFilled:H,nextTriggerConditions:L,orderType:z,formatedMarkPrice:_}=k;let R=0;return(0,n.jsx)(m.Z,Object.assign({sx:{width:"100%"}},{children:(0,n.jsx)(m.Z,Object.assign({px:"sm"},{children:(0,n.jsxs)(f.Z,Object.assign({sx:{width:"100%",alignItems:"center",color:"t.secondary",fontSize:[0],height:"40px",borderBottom:"1px solid",borderBottomColor:"newLine","> *":{fontWeight:"normal"},opacity:T,":hover":{backgroundColor:"bg3",".symbol":{color:"t.yellow"}}}},{children:[(0,n.jsx)(y.Z,Object.assign({"data-area":"left",style:(0,h.VE)(R++),title:D,sx:{color:"table.timeColor"}},{children:D}),void 0),(0,n.jsx)(y.Z,Object.assign({"data-area":"left",style:(0,h.VE)(R++),title:C,className:"symbol"},{children:(0,n.jsx)(G.O,{symbolName:P,fallbackText:g},void 0)}),void 0),(0,n.jsx)(y.Z,Object.assign({"data-area":"left",style:(0,h.VE)(R++),title:N},{children:N}),void 0),(0,n.jsx)(y.Z,Object.assign({},S,{"data-area":"left",style:(0,h.VE)(R++),title:S.children}),void 0),(0,n.jsx)(q,Object.assign({"data-area":"left",style:(0,h.VE)(R++),title:I},{children:I}),void 0),(0,n.jsx)(q,Object.assign({"data-area":"left",style:(0,h.VE)(R++),title:V},{children:(0,n.jsxs)(f.Z,Object.assign({alignItems:"center"},{children:[V,"LIQUIDATION"===z&&(0,n.jsx)(X.m,Object.assign({placement:"right",learnMoreLink:(0,Q.C)(A.Wh.LIQ_PRICE,{locale:(0,K.sU)(i)}),tip:t("Bankruptcy-Price",{markPrice:_,defaultValue:"The price is the bankruptcy price at which margin loss reaches zero. The liquidation order will be replaced with the bankruptcy price. The liquidation price (the mark price when liquidated) is {{markPrice}}."})},{children:(0,n.jsx)(B.Z,{size:16,ml:"2px"},void 0)}),void 0)]}),void 0)}),void 0),(0,n.jsx)(q,Object.assign({"data-area":"left",style:(0,h.VE)(R++),title:H},{children:H}),void 0),(0,n.jsx)(q,Object.assign({"data-area":"left",style:(0,h.VE)(R++),title:E},{children:E}),void 0),(0,n.jsx)(q,Object.assign({"data-area":"left",style:(0,h.VE)(R++),title:Z()},{children:Z()}),void 0),(0,n.jsx)(q,Object.assign({"data-area":"left",style:(0,h.VE)(R++),title:Y()},{children:Y()}),void 0),(0,n.jsxs)(f.Z,Object.assign({alignItems:"center",style:(0,h.VE)(R++)},{children:[(0,n.jsx)("div",Object.assign({style:{whiteSpace:"pre",textAlign:"left"}},{children:L}),void 0),(0,n.jsx)($.Z,{type:b,workingType:w,activatePrice:j,priceRate:O},void 0)]}),void 0),(0,n.jsx)(y.Z,Object.assign({"data-area":"left",sx:A.Pd,style:(0,h.VE)(R++)},{children:t(`status-${(0,c.No)(a)}`,{defaultValue:a||""})}),void 0),(0,n.jsx)(y.Z,{style:(0,h.VE)(R++)},void 0)]}),void 0)}),void 0)}),void 0)})),ee=s.memo((({items:e,loading:t,hasMore:i,loadMore:r,timeRange:o,onSearch:a,emptyText:l})=>{const c=(0,u.g4)(),d=!(!e.length&&t)&&t,f=(0,s.useCallback)((e=>(0,s.createElement)(J,Object.assign({},e,{key:e.orderId}))),[]);return(0,n.jsxs)(E.Z,Object.assign({sx:{position:"relative",px:0},"data-testid":"DataTable"},{children:[(0,n.jsx)(U,Object.assign({},o,{onSearch:a,loadMore:r,sx:{height:"32px",px:"16px"}}),void 0),(0,n.jsxs)(m.Z,Object.assign({sx:{height:"calc(100% - 32px)",overflowX:"auto"}},{children:[(0,n.jsx)(R,{headers:c,sx:{height:"32px",px:"16px",overflowX:"hidden",minWidth:h.ih}},void 0),(0,n.jsx)(H.i,{sx:{height:"calc(100% - 32px)",overflowY:"auto",overflowX:"hidden",minWidth:h.ih},data:e,renderItem:f,loading:d,hasMore:i,loadMore:r,emptyText:l},void 0)]}),void 0)]}),void 0)})),te=s.memo((()=>{const[e]=(0,a.z4)(),{getI18n:t}=(0,h.ZK)(),i=(0,r.I0)(),{isMobile:f,isIPad:m}=(0,o.Fs)(),[p,g]=(0,s.useState)((0,l.OQ)(m?"1w":"1d")),{preHistory:v,loading:x,updateTime:y,hasMore:b,loadMore:j}=(0,u.aM)(100,p.startTime,p.endTime,"MAIN"),{isOrderHistoryHideOtherPairs:O}=(0,a.VX)(),[w,$]=(0,s.useState)(O),[M,S]=(0,s.useState)("All"),k=(0,s.useCallback)((e=>{$(e),i.userProfile.save({key:"isOrderHistoryHideOtherPairs",value:e})}),[i.userProfile]),T=(0,s.useCallback)((e=>{S(e)}),[]),Z=(0,c.Nm)(v,w,e),Y=(0,c.vL)(Z,M),D=t("nodata",{defaultValue:"You have no order history."}),C=(0,s.useMemo)((()=>({symbol:e,emptyText:D,checked:w,status:M,handleHideOtherPairs:k,handleStatusFilter:T,useColumn:u.R7})),[w,D,k,T,M,e]);return(0,n.jsx)(d.Z.Provider,Object.assign({value:C},{children:m?(0,n.jsx)(N,{isMobile:f,items:Y,loading:x,hasMore:b,loadMore:j,timeRange:p,onSearch:g},void 0):(0,n.jsx)(ee,{items:Y,loading:x,hasMore:b,loadMore:j,timeRange:p,onSearch:g,emptyText:D},void 0)}),void 0)}))},65916:(e,t,i)=>{"use strict";i.d(t,{O:()=>o});var n=i(52322),s=i(62143);const r={display:"flex",flexDirection:"column",".pair":{fontWeight:"semibold"},".extra":{fontWeight:"normal"}},o=e=>{var{symbolName:t,fallbackText:i=""}=e,o=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["symbolName","fallbackText"]);return(0,n.jsx)(s.Z,Object.assign({__css:r},o,{children:t?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",Object.assign({className:"pair"},{children:t.symbol}),void 0),(0,n.jsx)("div",Object.assign({className:"extra"},{children:`${t.contractTypeI18n} ${t.deliveryDateFormat}`}),void 0)," "]},void 0):i}),void 0)}},55137:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var n=i(52322),s=i(53935),r=i(2784),o=i(56851),a=i(97060);const l=r.memo((({type:e,workingType:t,activatePrice:i,priceRate:r})=>{const{getI18n:l,i18n:{language:c}}=(0,a.yk)();if("TRAILING_STOP_MARKET"!==e)return null;const d=l("trailing-stop-market-tip",{defaultValue:"Activation Price: {{activatePrice}}, Trigger Type: {{workingType}}, Callback Rate: {{priceRate}}%. ",activatePrice:Number(i)?Number(i):l("advancedStrategy-marketPrice"),workingType:l("CONTRACT_PRICE"===t?"lastPrice":"tradeHistory-positions-markPriceTitle"),priceRate:r});return(0,n.jsx)(o.m,Object.assign({hideUnderLine:!0,sx:{flex:"none"},learnMoreLink:`/${c}/support/faq/360042299292`,tip:d},{children:(0,n.jsx)(s.Z,{size:16},void 0)}),void 0)}))},71318:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r});var n=i(52322),s=i(92036);function r(e){return(0,n.jsx)(s.Z,Object.assign({__css:{flexDirection:"column",height:"100%",px:"sm"}},e),void 0)}},56851:(e,t,i)=>{"use strict";i.d(t,{m:()=>f});var n=i(52322),s=i(2784),r=i(62143),o=i(48658),a=i(21030),l=i(33656);const c={display:"flex",alignItems:"center",cursor:"help",color:"t.third",borderBottom:["1px dotted","1px dotted","none"],borderBottomColor:"t.third","&:hover":{color:"t.primary",borderBottomColor:"t.primary"}},d={maxWidth:"296px",margin:"-4px 0",lineHeight:"16px",color:"t.white",whiteSpace:"pre-line"};var u=i(97060);const h=e=>{var{link:t}=e,i=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["link"]);const{getI18n:s}=(0,u.yk)();return(0,n.jsx)(o.Z,Object.assign({as:"a",variant:"addressLink",href:t,target:"_blank",color:"t.yellow",fontSize:12},i,{children:s("learnMore",{defaultValue:"Learn More"})}),void 0)};const f=s.memo((e=>{var{children:t,tip:i,learnMoreLink:s,placement:u,hideUnderLine:f,sx:m,tipSx:p,labelSx:g,onTipClick:v}=e,x=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["children","tip","learnMoreLink","placement","hideUnderLine","sx","tipSx","labelSx","onTipClick"]);const{isIPad:y}=(0,l.F)(),b=(0,n.jsxs)(r.Z,Object.assign({sx:Object.assign(Object.assign({},d),p)},v&&{onClick:v},{children:[i,s&&(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsx)(h,{link:s},void 0)]},void 0)]}),void 0);return(0,n.jsx)(a.ZP,Object.assign({tip:b,delay:500,sx:m,bg:"bg4",placement:u,arrow:!0,enablePortal:!y},x,{children:(0,n.jsx)(o.Z,Object.assign({sx:Object.assign(Object.assign(Object.assign({},c),g),f?{borderBottom:"none"}:{})},{children:t}),void 0)}),void 0)}))}}]);