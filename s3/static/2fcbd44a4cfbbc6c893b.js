"use strict";(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[2364],{2364:(e,t,i)=>{i.r(t),i.d(t,{default:()=>I,openDepositModal:()=>y,openDepositWithdrawLiteModal:()=>C,openWithdrawModal:()=>_});var a=i(52322),n=i(51072),o=i(62143),s=i(92036),r=i(45362),c=i(48658),l=i(72779),d=i.n(l),u=i(2784),b=i(1253),h=i(97060),p=i(4724),v=i(4946),w=i(32181),T=i(10631),f=i(22521),k=i(77542),W=i(22994),g=i(80941);const j=(0,u.memo)((({isDrawerLayout:e=!1,defaultToken:t})=>{const{getI18n:i,t:n,refreshBalance:o,unlimitWithdrawAssets:s}=(0,f.s)(),{showWalletConnectDialog:r}=(0,T.dc)(),{onTransactionButtonClick:c,onTransactionSuccess:l,onTransactionFail:d}=(0,W.zU)({isDrawerLayout:e,type:"withdraw"}),{onSelectTokenOptionClick:u,onSelectTokenDrawerPopup:b,onSelectTokenButtonClick:h}=(0,g.u)({isDrawerLayout:e});return(0,a.jsx)(w.bO,{onSelectTokenButtonClick:h,onSelectTokenDrawerPopup:b,onSelectTokenOptionClick:u,onWithdrawButtonClick:c,onTransactionSuccess:l,onTransactionFail:d,isDrawerLayout:e,defaultCoin:t||"BNB",getI18n:i,tradeType:w.v3.Futures,isSupportSpot:!1,t:n,refreshBalance:o,topfoldUI:(0,a.jsx)(k.L,{direction:"withdraw"},void 0),onConnectWalletButtonClick:r,unlimitWithdrawAssets:s},void 0)}));var D=i(98735);const m={bg:"bg3",borderRadius:"16px",mb:"16px",button:{height:"40px",borderRadius:"16px",flex:1,bg:"bg3",color:"t.white","&:hover:not(:disabled):not(:active):not(.inactive)":{color:"t.white"},"&.active":{bg:"primary"},"& > div":{fontWeight:600}}},x={pageName:"liteMode",$element_id:"transferPopups"},O=(0,u.memo)((({activeTab:e,setActiveTab:t,defaultToken:i})=>{const{getI18n:n}=(0,h.HK)(),{layout:l}=(0,D.vT)();(0,h.Tb)(x,l===D.dJ);const{trackWebClickWithWalletAddress:u}=(0,h.fM)();return(0,a.jsxs)(o.Z,Object.assign({pb:"24px"},{children:[(0,a.jsxs)(s.Z,Object.assign({sx:m},{children:[(0,a.jsx)(r.Z,Object.assign({onClick:()=>{u({pageName:"liteMode",$element_id:"switchTabTransferModule",$element_content:"Deposit"}),t("deposit")},type:"button",variant:"quiet",className:d()({active:"deposit"===e})},{children:(0,a.jsx)(c.Z,Object.assign({variant:"subtitle2",color:"t.primary"},{children:n("Deposit",{defaultValue:"Deposit"})}),void 0)}),void 0),(0,a.jsx)(r.Z,Object.assign({onClick:()=>{u({pageName:"liteMode",$element_id:"switchTabTransferModule",$element_content:"Withdrawal"}),t("withdraw")},type:"button",variant:"quiet",className:d()({active:"withdraw"===e})},{children:(0,a.jsx)(c.Z,Object.assign({variant:"subtitle2",color:"t.primary"},{children:n("Withdraw",{defaultValue:"Withdraw"})}),void 0)}),void 0)]}),void 0),"deposit"===e&&(0,a.jsx)(p.I,{isDrawerLayout:!0,defaultToken:i},void 0),"withdraw"===e&&(0,a.jsx)(j,{isDrawerLayout:!0,defaultToken:i},void 0)]}),void 0)})),S=(0,u.memo)((()=>{const{getI18n:e}=(0,h.yk)(),[t,i]=(0,u.useState)(!1),[s,r]=(0,u.useState)("deposit"),[l,d]=(0,u.useState)("BNB");return(0,u.useEffect)((()=>v.ee.on("SHOW_DEPOSIT_WITHDRAW_DRAWER",(({tab:e,token:t})=>{d(t||"BNB"),i(!0),r(e)}))),[]),(0,a.jsxs)(n.ZP.Modal,Object.assign({visible:t},{children:[(0,a.jsx)(n.ZP.ModalTitle,{title:(0,a.jsx)(c.Z,Object.assign({color:"t.primary"},{children:e("Balance",{defaultValue:"Balance"})}),void 0),variant:"center",onClose:()=>i(!1)},void 0),(0,a.jsx)(b.V,Object.assign({isDrawerVisible:t},{children:(0,a.jsx)(o.Z,Object.assign({height:"440px"},{children:(0,a.jsx)(O,{activeTab:s,setActiveTab:r,defaultToken:l},void 0)}),void 0)}),void 0)]}),void 0)})),_=()=>v.ee.emit("SHOW_DEPOSIT_WITHDRAW_DRAWER",{tab:"withdraw"}),y=()=>v.ee.emit("SHOW_DEPOSIT_WITHDRAW_DRAWER",{tab:"deposit"}),C=({tab:e,token:t})=>v.ee.emit("SHOW_DEPOSIT_WITHDRAW_DRAWER",{tab:e,token:t}),I=S},1253:(e,t,i)=>{i.d(t,{V:()=>o});var a=i(52322),n=i(2784);const o=({children:e,isDrawerVisible:t})=>{const[i,o]=(0,n.useState)(t),s=(0,n.useRef)(null);return(0,n.useEffect)((function(){t&&!i&&o(!0)}),[t,i]),(0,n.useEffect)((function(){const e=new IntersectionObserver((e=>{e.forEach((e=>{!e.isIntersecting&&i&&o(!1)}))}),{threshold:0});return s.current&&e.observe(s.current),()=>e.disconnect()}),[i]),(0,a.jsx)("div",Object.assign({ref:s},{children:(t||i)&&e}),void 0)}}}]);