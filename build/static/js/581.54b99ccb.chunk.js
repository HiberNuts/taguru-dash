(self.webpackChunkberry_material_react_free=self.webpackChunkberry_material_react_free||[]).push([[581],{1043:function(e,a,l){"use strict";l.d(a,{Z:function(){return i}});l(2791);var t="InputControl_container__irnaO",s=l(184);var i=function(e){let{label:a,...l}=e;return(0,s.jsxs)("div",{className:t,children:[a&&(0,s.jsx)("label",{children:a}),(0,s.jsx)("input",{type:"text",...l})]})}},1330:function(e,a,l){"use strict";l.d(a,{Z:function(){return E}});var t=l(3971),s=l(9190),i=l(2791),o=l(638),n=l(2945),r=l(2109),c=l(5396),d="LiveDisplay_container__N3ST5",h="LiveDisplay_header__B2B6m",v="LiveDisplay_heading__Sg3MZ",u="LiveDisplay_subHeading__g2ZAd",m="LiveDisplay_links__8dpOX",p="LiveDisplay_link__gku8Y",y="LiveDisplay_main__tdsd1",x="LiveDisplay_col1__JQyls",g="LiveDisplay_col2__0O91N",j="LiveDisplay_section__vSyfz",b="LiveDisplay_sectionTitle__+kYhF",f="LiveDisplay_content__jSaof",N="LiveDisplay_item__jYWck",S="LiveDisplay_title__j7eL+",_="LiveDisplay_subTitle__ucvd4",w="LiveDisplay_overview__-BuKx",C="LiveDisplay_date__EfrCK",D=l(184);function k(e){var a=new Date(1e3*e),l=a.getFullYear(),t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][a.getMonth()],s=a.getDate(),i=a.getHours(),o=a.getMinutes(),n=(a.getSeconds(),s+" "+t+" "+l);const r=a.getMonth()+1;return{timeshow:n,timeforinput:l+"-"+(r<=9?"0"+r:r)+"-"+(s<=9?"0"+s:s)+"T"+(i<=9?"0"+i:i)+":"+(o<=9?"0"+o:o)}}var E=e=>{let{values:a,ref:l}=e;const{active:E,account:Z,library:L}=(0,t.Ge)(),[O,W]=(0,i.useState)(""),[$,T]=(0,i.useState)({exists:!1,message:"Loading"}),A=async()=>{const e=await(null===L||void 0===L?void 0:L.getSigner(Z)),a=await new s.CH(c.m,c.P,e),l=await a.displayCv();console.log({displayCv:l});if(l[0][1]==Z){var t,i,o,n,r,d,h,v,u,m,p,y,x,g,j,b,f,N;const e={persdetName:null===(t=l[0][0])||void 0===t?void 0:t.toString(),persdetAddress:null===(i=l[0][1])||void 0===i?void 0:i.toString(),persdetEmail:null===(o=l[0][2])||void 0===o?void 0:o.toString(),persdetPhone:null===(n=l[0][3])||void 0===n?void 0:n.toString(),personalStatement:null===(r=l[0][4])||void 0===r?void 0:r.toString(),OtherkeysSkills:null===(d=l[0][5])||void 0===d?void 0:d.toString(),hobbies:null===(h=l[0][6])||void 0===h?void 0:h.toString(),summary:null===(v=l[0][7])||void 0===v?void 0:v.toString()},a=k(null===(u=l[1][3])||void 0===u?void 0:u.toString()).timeshow,s=k(null===(m=l[1][3])||void 0===m?void 0:m.toString()).timeshow,c={jobTitle:null===(p=l[1][0])||void 0===p?void 0:p.toString(),companyName:null===(y=l[1][1])||void 0===y?void 0:y.toString(),companyLocation:null===(x=l[1][2])||void 0===x?void 0:x.toString(),companystartDate:null===a||void 0===a?void 0:a.toString(),companyendDate:null===s||void 0===s?void 0:s.toString(),achvResp:null===(g=l[1][5])||void 0===g?void 0:g.toString()},S=k(null===(j=l[2][1])||void 0===j?void 0:j.toString()).timeshow,_=k(null===(b=l[2][2])||void 0===b?void 0:b.toString()).timeshow,w={SchoolorcollegeName:null===(f=l[2][0])||void 0===f?void 0:f.toString(),SchoolorcollegestartDate:null===S||void 0===S?void 0:S.toString(),SchoolorcollegeEndDate:null===_||void 0===_?void 0:_.toString(),SchoolorcollegeDesc:null===(N=l[2][3])||void 0===N?void 0:N.toString()};console.log({PersDetails:e,Employement:c,Education:w}),W({PersDetails:e,Employement:c,Education:w}),T({exists:!0,message:"Data Exists"})}else T({exists:!1,message:"Data does not Exist"})};return(0,i.useEffect)((()=>{E&&Z?A():T({exists:!1,message:"Connect your wallet"})}),[]),(0,i.useEffect)((()=>{E&&Z?A():T({exists:!1,message:"Connect your wallet"})}),[Z]),(0,D.jsx)("div",{children:(0,D.jsx)("div",{children:(0,D.jsxs)("div",{id:"livepreview",className:d,children:[(0,D.jsxs)("div",{className:h,children:[(0,D.jsx)("p",{className:v,children:null===a||void 0===a?void 0:a.persdetName}),(0,D.jsx)("p",{className:u,children:Z}),(0,D.jsx)("p",{className:"text-dark",children:null===a||void 0===a?void 0:a.personalStatement}),(0,D.jsxs)("div",{className:m,children:[(0,D.jsxs)("a",{className:p,href:`mailto:${null===a||void 0===a?void 0:a.persdetEmail}`,children:[(0,D.jsx)(o.Z,{})," ",null===a||void 0===a?void 0:a.persdetEmail]}),(0,D.jsx)("a",{className:p,href:`tel:${null===a||void 0===a?void 0:a.persdetPhone}`,children:null===a||void 0===a?void 0:a.persdetPhone})]})]}),(0,D.jsxs)("div",{className:y,children:[(0,D.jsx)("div",{className:x,children:(0,D.jsxs)("div",{draggable:!0,className:`${j}`,children:[(0,D.jsx)("div",{className:b,children:"Work Experience"}),(0,D.jsxs)("div",{className:f,children:[(0,D.jsxs)("div",{className:`mt-3 ${N}`,children:[(0,D.jsx)("p",{className:`p-0 m-0 ${S}`,children:null===a||void 0===a?void 0:a.jobTitle}),(0,D.jsx)("p",{className:`p-0 m-0 ${_}`,children:null===a||void 0===a?void 0:a.companyName}),(0,D.jsxs)("p",{className:"p-0 m-0",children:["location: ",null===a||void 0===a?void 0:a.companyLocation]}),(0,D.jsx)("i",{className:"border-bottom",children:"Achievements and Responsibilities:"}),(0,D.jsx)("div",{className:`p-0 m-0 ${f}`,children:(0,D.jsx)("p",{className:w,children:null===a||void 0===a?void 0:a.achvResp})}),(0,D.jsxs)("div",{className:C,children:[(0,D.jsx)(n.Z,{})," ",null===a||void 0===a?void 0:a.companystartDate,"-",null===a||void 0===a?void 0:a.companyendDate]}),(0,D.jsxs)("p",{className:C,children:[(0,D.jsx)(r.Z,{})," Remote"]})]}),(0,D.jsxs)("div",{draggable:!0,className:`${j} `,children:[(0,D.jsx)("div",{className:b,children:"Education"}),(0,D.jsx)("div",{className:f,children:(0,D.jsxs)("div",{className:`p-0 mt-2 ${N}`,children:[(0,D.jsx)("p",{className:`p-0 m-0 ${S}`,children:null===a||void 0===a?void 0:a.SchoolorcollegeDesc}),(0,D.jsx)("p",{className:`p-0 m-0 ${_}`,children:null===a||void 0===a?void 0:a.SchoolorcollegeName}),(0,D.jsxs)("div",{className:C,children:[(0,D.jsx)(n.Z,{})," ",null===a||void 0===a?void 0:a.SchoolorcollegestartDate,"-",null===a||void 0===a?void 0:a.SchoolorcollegeEndDate]})]})})]},"education")]})]},"workexp")}),(0,D.jsxs)("div",{className:g,children:[(0,D.jsxs)("div",{draggable:!0,className:`${j} `,children:[(0,D.jsx)("div",{className:b,children:"Summary"}),(0,D.jsx)("div",{className:f,children:(0,D.jsx)("p",{className:w,children:null===a||void 0===a?void 0:a.summary})})]},"summary"),(0,D.jsxs)("div",{draggable:!0,className:`${j}`,children:[(0,D.jsx)("div",{className:b,children:"Others"}),(0,D.jsxs)("div",{className:f,children:[(0,D.jsxs)("p",{className:w,children:[(0,D.jsx)("h5",{className:"m-0 p-0 fw-bold",style:{fontSize:"15px"},children:"Hobbies"}),(0,D.jsx)("p",{className:"p-0 m-0",children:null===a||void 0===a?void 0:a.hobbies})]}),(0,D.jsxs)("p",{className:w,children:[(0,D.jsx)("h5",{className:"m-0 p-0 fw-bold",style:{fontSize:"15px"},children:"Other Skills"}),(0,D.jsx)("p",{className:"p-0 m-0",children:null===a||void 0===a?void 0:a.OtherkeysSkills})]})]})]},"other")]})]})]})})})}},9228:function(e,a,l){"use strict";l.r(a),l.d(a,{default:function(){return Z}});var t=l(2791),s=l(1043),i="Create_container__asZ4d",o="Create_header__ibLCs",n="Create_section__iE9zS",r="Create_active__quxkr",c="Create_body__ypSmG",d="Create_detail__j0hCC",h="Create_row__ZBFm4",v="Create_column__dRTqb",u=l(184);var m=l(5396),p=l(3971),y=l(9190),x=l(1330),g=l(4554),j=l(6151),b=l(7787);const f=["What type of role are you interested in?","Have you worked in the technology industry before?","What are your core technical skills?","What is your leadership experience?","What programming languages are you proficient in?","What is your level of experience with Blockchain Development?","What is your preferred work location?","What is your salary expectation for this role?","Are you looking for a permanent or contract role?","When are you available to start a new role?","Do you have any experience with agile development methodologies?","What is your experience with DevOps?","What type of projects have you worked on in the past?","How do you stay up-to-date with the latest technology trends?","What is your level of experience with machine learning and artificial intelligence?","Have you worked with any specific technology platforms or frameworks?","Do you have any certifications related to technology?","Are you willing to relocate for a new role?","What is your level of experience with cloud computing?","What is your level of experience with data analytics?","What is your level of experience with cybersecurity?","What is your level of experience with mobile app development?","What is your level of experience with Cryptocurrency?","What is your current salary/daily rate/hourly rate?","What are your salary/daily rate/hourly rate expectations?"];var N=l(6689);var S=e=>{let{chatbotAnswers:a,setchatbotAnswers:l,setOpen:t,open:s,handleClose:i,handleOpen:o,ref:n,image:r}=e;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(b.Z,{open:s,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,u.jsxs)(g.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"80%",bgcolor:"background.paper",boxShadow:24,p:4,height:"90%",justifyContent:"space-evenly",display:"flex",flexWrap:"wrap",overflow:"scroll"},children:[f.map((e=>(0,u.jsx)(N.Z,{sx:{m:1,width:"50ch"},onChange:t=>((e,t)=>{e.preventDefault(),0==e.target.value.length?delete a[t]:l({...a,[t]:e.target.value})})(t,e),id:"outlined-basic",label:`${e}`,variant:"filled",size:"small",margin:"normal",value:a[e]}))),(0,u.jsx)(j.Z,{onClick:i,sx:{width:"100px",backgroundColor:"rgb(94,53,177)"},variant:"contained",children:"Save"})]})})})},_=l(7125),w=l(786),C=l(493),D=l(5484),k=l(5498),E=l.n(k);var Z=()=>{var e;const[a,l]=(0,t.useState)({persdetName:"",persdetAddress:"",persdetEmail:"",persdetPhone:"",jobTitle:"",companyName:"",companyLocation:"",companystartDate:"",companyendDate:"",achvResp:"",SchoolorcollegeName:"",SchoolorcollegeDesc:"",SchoolorcollegestartDate:"",SchoolorcollegeEndDate:"",hobbies:"",summary:"",OtherkeysSkills:"",personalStatement:""}),{account:g,active:j,library:b}=(0,p.Ge)(),f="Basic "+btoa("2Ne3Tz73itt94vQ4ZhEInyiRQz3:199219aedb4bde3b5a6542fba994d4e6"),k=(0,_.Ue)({url:"https://ipfs.infura.io:5001",headers:{authorization:f}}),[Z,L]=t.useState(!1),O=(0,t.createRef)(null),W=(0,t.createRef)(null),[$,T]=(0,w.K)(),[A,R]=(0,w.K)(),[I,P]=(0,t.useState)([]),H={basicInfo:"Personal Details",workExp:"Employement",education:"Education",achievement:"Hobbies",summary:"Reference",other:"Others"},[z,B]=(0,t.useState)(0),[F,M]=(0,t.useState)(Object.keys(H)[0]),Y=()=>{let e=z+1;M(Object.keys(H)[e]),K(Object.keys(H)[e]),B(e)},[J,K]=(0,t.useState)(H[Object.keys(H)[0]]),q=(0,u.jsxs)("div",{className:d,children:[(0,u.jsxs)("div",{className:h,children:[(0,u.jsx)(s.Z,{label:"Name",placeholder:"Enter your full",value:a.persdetName,onChange:e=>{l((a=>({...a,persdetName:e.target.value})))}}),(0,u.jsx)(s.Z,{label:"Address",value:g,placeholder:"",onChange:e=>l((a=>({...a,persdetAddress:e.target.value}))),disabled:!0})]}),(0,u.jsxs)("div",{className:h,children:[(0,u.jsx)(s.Z,{label:"Email",value:a.persdetEmail,placeholder:"Enter your email",onChange:e=>l((a=>({...a,persdetEmail:e.target.value})))}),(0,u.jsx)(s.Z,{label:"Enter phone",value:a.persdetPhone,placeholder:"Enter your phone number",onChange:e=>l((a=>({...a,persdetPhone:e.target.value})))})]}),(0,u.jsx)("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"left"},children:(0,u.jsx)("button",{type:"button",onClick:Y,children:"next"})})]}),G=(0,u.jsxs)("div",{className:d,children:[(0,u.jsxs)("div",{className:h,children:[(0,u.jsx)(s.Z,{label:"Job Title",placeholder:"Enter job title ",value:a.jobTitle,onChange:e=>l((a=>({...a,jobTitle:e.target.value})))}),(0,u.jsx)(s.Z,{label:"Company Name",placeholder:"Enter company name",value:a.companyName,onChange:e=>l((a=>({...a,companyName:e.target.value})))})]}),(0,u.jsx)("div",{className:h,children:(0,u.jsx)(s.Z,{label:"Location",placeholder:"Enter company location",value:a.companyLocation,onChange:e=>l((a=>({...a,companyLocation:e.target.value})))})}),(0,u.jsxs)("div",{className:h,children:[(0,u.jsx)(s.Z,{label:"Start Date",type:"date",placeholder:"Enter start date of work",value:a.companystartDate,onChange:e=>l((a=>({...a,companystartDate:e.target.value})))}),(0,u.jsx)(s.Z,{label:"End Date",type:"date",placeholder:"Enter end date of work",value:a.companyendDate,onChange:e=>l((a=>({...a,companyendDate:e.target.value})))})]}),(0,u.jsxs)("div",{className:v,children:[(0,u.jsx)("label",{children:"Achievements and Responsibilities"}),(0,u.jsx)(s.Z,{placeholder:"Describe your achievements and responsibilities",value:a.achvResp,onChange:e=>l((a=>({...a,achvResp:e.target.value})))})]}),(0,u.jsx)("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"left"},children:(0,u.jsx)("button",{type:"button",onClick:Y,children:"next"})})]}),Q=(0,u.jsxs)("div",{className:d,children:[(0,u.jsx)("div",{className:h,children:(0,u.jsx)(s.Z,{label:"College/School Name",value:a.SchoolorcollegeName,placeholder:"Enter college/school name",onChange:e=>l((a=>({...a,SchoolorcollegeName:e.target.value})))})}),(0,u.jsx)(s.Z,{label:"Description",value:a.SchoolorcollegeDesc,placeholder:"Enter description",onChange:e=>l((a=>({...a,SchoolorcollegeDesc:e.target.value})))}),(0,u.jsxs)("div",{className:h,children:[(0,u.jsx)(s.Z,{label:"Start Date",type:"date",placeholder:"Enter start date of this education",value:a.SchoolorcollegestartDate,onChange:e=>l((a=>({...a,SchoolorcollegestartDate:e.target.value})))}),(0,u.jsx)(s.Z,{label:"End Date",type:"date",placeholder:"Enter end date of this education",value:a.SchoolorcollegeEndDate,onChange:e=>l((a=>({...a,SchoolorcollegeEndDate:e.target.value})))})]}),(0,u.jsx)("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"left"},children:(0,u.jsx)("button",{type:"button",onClick:Y,children:"next"})})]}),U=(0,u.jsxs)("div",{className:d,children:[(0,u.jsxs)("div",{className:v,children:[(0,u.jsx)("label",{children:" Your Hobbies"}),(0,u.jsx)(s.Z,{placeholder:"Enter Your Hobbies",value:a.hobbies,onChange:e=>l((a=>({...a,hobbies:e.target.value})))})]}),(0,u.jsx)("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"left"},children:(0,u.jsx)("button",{type:"button",onClick:Y,children:"next"})})]}),X=(0,u.jsxs)("div",{className:d,children:[(0,u.jsx)(s.Z,{label:"Summary",value:a.summary,placeholder:"Enter your Reference",onChange:e=>l((a=>({...a,summary:e.target.value})))}),(0,u.jsx)("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"left"},children:(0,u.jsx)("button",{type:"button",onClick:Y,children:"next"})})]}),V=(0,u.jsxs)("div",{className:d,children:[(0,u.jsx)(s.Z,{label:"Key Skills",value:a.OtherkeysSkills,placeholder:"Enter key skills",onChange:e=>l((a=>({...a,OtherkeysSkills:e.target.value})))}),(0,u.jsx)(s.Z,{label:"Personal Statement",value:a.personalStatement,placeholder:"Enter personal statement",onChange:e=>l((a=>({...a,personalStatement:e.target.value})))}),(0,u.jsx)("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"left"},children:(0,u.jsx)("button",{type:"button",onClick:async()=>{L(!0)},children:"Submit"})})]}),[ee,ae]=((0,t.useRef)(),(0,t.useState)({[H.basicInfo]:{id:H.basicInfo,sectionTitle:H.basicInfo,detail:{}},[H.workExp]:{id:H.workExp,sectionTitle:H.workExp,details:[]},[H.education]:{id:H.education,sectionTitle:H.education,details:[]},[H.achievement]:{id:H.achievement,sectionTitle:H.achievement,points:[]},[H.summary]:{id:H.summary,sectionTitle:H.summary,detail:""},[H.other]:{id:H.other,sectionTitle:H.other,detail:""}}));return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:"container-fluid",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("div",{className:"col-12 col-xl-6",children:(0,u.jsxs)("div",{className:`border rounded ${i}`,children:[(0,u.jsx)("div",{className:o,children:null===(e=Object.keys(H))||void 0===e?void 0:e.map(((e,a)=>(0,u.jsx)("div",{className:`${n} ${F===e?r:""}`,onClick:()=>{M(e),K(e),B(a)},children:H[e]},e)))}),(0,u.jsxs)("div",{className:c,children:[(0,u.jsx)(s.Z,{label:"Section",placeholder:"Enter section title",value:J,onChange:e=>K(e.target.value),disabled:!0}),(()=>{switch(H[F]){case H.basicInfo:return q;case H.workExp:return G;case H.education:return Q;case H.achievement:return U;case H.summary:return X;case H.other:return V;default:return null}})()]})]})}),(0,u.jsxs)("div",{className:"col-12 col-xl-6",children:[(0,u.jsx)(S,{handleClose:async()=>{try{!j&&alert("Connect wallet"),console.log({values:a}),await T(O.current);const e=await k.add($);await console.log("result",e);const l=`https://raghav.infura-ipfs.io/ipfs/${await e.path.replace(/"|'/g,"")}`;console.log(l),L(!1),E()(document.getElementById("livepreview")).then((async e=>{const a=e.toDataURL();console.log(a);const t=await k.add(a),s=`https://raghav.infura-ipfs.io/ipfs/${await t.path.replace(/"|'/g,"")}`;console.log(s,[[I],l]);const i=await(null===b||void 0===b?void 0:b.getSigner(g)),o=await new y.CH(m.m,m.P,i);console.log({cont:o}),console.log(s,[[I],l]);const n=await o.inputCvDet(s,[[I],l]);await n.wait()}))}catch(e){console.log(e)}},handleOpen:()=>L(!0),open:Z,setOpen:L,image:$,chatbotAnswers:I,setchatbotAnswers:P}),(0,u.jsxs)("div",{ref:O,children:[(0,u.jsx)("h2",{children:"Answered questions:"}),(0,u.jsx)(C.Z,{children:Object.keys(I).map((e=>(0,u.jsx)(D.ZP,{children:(0,u.jsx)(N.Z,{sx:{m:1,width:"50ch"},id:"outlined-basic",label:`${e}`,variant:"filled",size:"small",value:I[e],margin:"normal"})})))})]}),(0,u.jsx)("div",{children:(0,u.jsx)("div",{ref:W,style:{background:"white"},children:(0,u.jsx)(x.Z,{values:a})})})]})]})})})}},3897:function(){}}]);
//# sourceMappingURL=581.54b99ccb.chunk.js.map