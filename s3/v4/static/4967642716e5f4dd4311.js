"use strict";(self.webpackChunkcloud_onchain_trade_sdk=self.webpackChunkcloud_onchain_trade_sdk||[]).push([[7757],{37757:(e,a,t)=>{t.d(a,{offchainLookup:()=>w,offchainLookupSignature:()=>y});var r=t(39614),s=t(98723),n=t(19194),o=t(91713);class c extends n.G{constructor({callbackSelector:e,cause:a,data:t,extraData:r,sender:s,urls:n}){super(a.shortMessage||"An error occurred while fetching for an offchain result.",{cause:a,metaMessages:[...a.metaMessages||[],a.metaMessages?.length?"":[],"Offchain Gateway Call:",n&&["  Gateway URL(s):",...n.map((e=>`    ${(0,o.Gr)(e)}`))],`  Sender: ${s}`,`  Data: ${t}`,`  Callback selector: ${e}`,`  Extra data: ${r}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class d extends n.G{constructor({result:e,url:a}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${(0,o.Gr)(a)}`,`Response: ${(0,s.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class l extends n.G{constructor({sender:e,to:a}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${a}`,`OffchainLookup sender address: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}var u=t(82181),i=t(98461),f=t(14307),p=t(3795),h=t(24227),b=t(35592);const y="0x556f1830",m={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function w(e,{blockNumber:a,blockTag:t,data:s,to:n}){const{args:o}=(0,i.p)({data:s,abi:[m]}),[d,u,b,y,w]=o,{ccipRead:k}=e,O=k&&"function"==typeof k?.request?k.request:g;try{if(!(0,p.E)(n,d))throw new l({sender:d,to:n});const s=await O({data:b,sender:d,urls:u}),{data:o}=await(0,r.R)(e,{blockNumber:a,blockTag:t,data:(0,h.zo)([y,(0,f.E)([{type:"bytes"},{type:"bytes"}],[s,w])]),to:n});return o}catch(e){throw new c({callbackSelector:y,cause:e,data:s,extraData:w,sender:d,urls:u})}}async function g({data:e,sender:a,urls:t}){let r=new Error("An unknown error occurred.");for(let n=0;n<t.length;n++){const o=t[n],c=o.includes("{data}")?"GET":"POST",l="POST"===c?{data:e,sender:a}:void 0;try{const t=await fetch(o.replace("{sender}",a).replace("{data}",e),{body:JSON.stringify(l),method:c});let n;if(n=t.headers.get("Content-Type")?.startsWith("application/json")?(await t.json()).data:await t.text(),!t.ok){r=new u.Gg({body:l,details:n?.error?(0,s.P)(n.error):t.statusText,headers:t.headers,status:t.status,url:o});continue}if(!(0,b.v)(n)){r=new d({result:n,url:o});continue}return n}catch(e){r=new u.Gg({body:l,details:e.message,url:o})}}throw r}}}]);