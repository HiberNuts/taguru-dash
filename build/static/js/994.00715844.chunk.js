"use strict";(self.webpackChunkberry_material_react_free=self.webpackChunkberry_material_react_free||[]).push([[994],{5994:function(e,s,t){t.r(s),t.d(s,{default:function(){return h}});var o=t(3971),a=t(9190),n=t(2791),i=t(5396),l=t(4316),r=t(1243),c=t(2739),d=t(4554),g=t(7787),u=t(627),m=t(184);var h=()=>{const{active:e,account:s,library:t}=(0,o.Ge)(),{LoggedInUser:c,setLoggedInUser:d}=(0,l.R)();console.log({LoggedInUser:c});const[g,u]=(0,n.useState)(""),[h,x]=(0,n.useState)("");console.log({userCV:h});const[p,b]=(0,n.useState)({exists:!1,message:"Loading"}),f=async()=>{const e=await(null===t||void 0===t?void 0:t.getSigner(s)),o=await new a.CH(i.m,i.P,e),n=await o.displayCv(),l=await o.getCandCvs();console.log({displayCvContract:n}),console.log({getCandCvs:l}),await r.Z.get(n).then((e=>{console.log(">>>>>>>>>>>>>>>>>>>>>>>",{res:e}),x(e.data)})).catch((e=>console.log(e)))};(0,n.useEffect)((()=>{e&&s?f():b({exists:!1,message:"Connect your wallet"})}),[]);const[w,v]=(0,n.useState)(!1),[j,y]=(0,n.useState)([]),[k,S]=(0,n.useState)(1),L=Math.ceil(j.length/4),Z=j.slice(4*(k-1),4*k);return(0,n.useEffect)((()=>{(async()=>{if(e&&s&&c.email&&!c.isCand){console.log("admin");const e=await(null===t||void 0===t?void 0:t.getSigner(s)),o=await new a.CH(i.m,i.P,e),n=await o.getCandCvs();console.log({res:n});let l=[];for(const s of n){console.log({item:s});const e=await r.Z.get(s);console.log(e.data),l.push(null===e||void 0===e?void 0:e.data)}console.log({imgsarr:l}),y(l)}})()}),[]),(0,n.useEffect)((()=>{e&&s?f():b({exists:!1,message:"Connect your wallet"})}),[s]),console.log({userCV:h}),(0,m.jsxs)("div",{children:[e&&c.email&&c.isCand&&(0,m.jsxs)(m.Fragment,{children:["cand ",(0,m.jsx)("br",{}),(0,m.jsx)("img",{style:{margin:"10px"},width:500,src:h,alt:"Create your CV"})]}),e&&c.email&&!c.isCand&&(0,m.jsxs)(m.Fragment,{children:["admin",(0,m.jsxs)("div",{children:[(0,m.jsx)("button",{disabled:1===k,onClick:()=>S(k-1),children:"Previous"}),(0,m.jsx)("button",{disabled:k===L,onClick:()=>S(k+1),children:"Next"})]}),j&&Z.map((e=>(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(C,{imgLink:e})})))]})]})};const x={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"40%",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function C(e){let{imgLink:s}=e;const[t,o]=n.useState(!1);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("span",{onClick:()=>o(!0),style:{cursor:"pointer"},children:(0,m.jsx)("img",{style:{margin:"10px"},width:300,src:s,alt:""})}),(0,m.jsx)(g.Z,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:t,onClose:()=>o(!1),closeAfterTransition:!0,slots:{backdrop:c.Z},slotProps:{backdrop:{timeout:500}},children:(0,m.jsx)(u.Z,{in:t,children:(0,m.jsx)(d.Z,{sx:x,children:(0,m.jsx)("div",{style:{height:"80vh",overflow:"auto"},children:(0,m.jsx)("img",{src:s,alt:"",width:"100%"})})})})})]})}}}]);
//# sourceMappingURL=994.00715844.chunk.js.map