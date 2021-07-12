var A=Object.defineProperty,e=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(e,a,t)=>a in e?A(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,o=(A,e)=>{for(var a in e||(e={}))s.call(e,a)&&n(A,a,e[a]);if(t)for(var a of t(e))l.call(e,a)&&n(A,a,e[a]);return A};import{o as c,c as i,m as r,a as g,b as u,d,e as I,f as Q,g as p,u as m,h as f,i as B,j as C,t as k,k as b,l as E,r as h,n as v,p as S,w as y,T as x,F as J,q as _,P as w,s as V,v as j,x as O,y as T,z as P,A as M,B as N,C as D,D as U,E as $,G as z,H as L,I as R,J as Y,K as F,L as q,M as H,V as K,N as Z,O as W,Q as G,R as X,S as AA,U as eA,W as aA,X as tA,Y as sA,Z as lA,_ as nA,$ as oA,a0 as cA,a1 as iA,a2 as rA,a3 as gA,a4 as uA,a5 as dA,a6 as IA,a7 as QA,a8 as pA,a9 as mA,aa as fA,ab as BA}from"./vendor.8a24bcde.js";const CA={class:"vue3-snackbar-message-wrapper"},kA={key:0,class:"vue3-snackbar-message-icon"},bA={class:"vue3-snackbar-message-content"},EA={class:"vue3-snackbar-message-title"},hA={key:0,class:"vue3-snackbar-message-additional"},vA=p("div",{class:"spacer"},null,-1),SA={class:"vue3-snackbar-message-close"},yA={props:{message:{type:Object,default:()=>({})},messageClass:String,dense:Boolean},emits:["dismiss"],setup(A,{emit:e}){const a=A;let t=null;c((()=>{a.message.duration?t=setTimeout((()=>{l()}),a.message.duration):a.message.duration||!1!==a.message.dismissible||(t=setTimeout((()=>{l()}),4e3))}));const s=()=>{t&&clearTimeout(t),l()},l=()=>{e("dismiss",a.message)},n=i((()=>{switch(a.message.type){case"success":return{path:d,type:"mdi"};case"info":return{path:u,type:"mdi"};case"warning":return{path:g,type:"mdi"};case"error":return{path:r,type:"mdi"}}return a.message.icon&&"object"==typeof a.message.icon&&(a.message.icon.path||a.message.icon.faIcon)?a.message.icon||{}:{path:"",type:"default"}}));return(A,e)=>(I(),Q("article",{class:["vue3-snackbar-message",[a.message.type,a.messageClass,{"has-background":a.message.background,"is-dense":a.dense}]],style:{"--message-background":a.message.background}},[p("div",CA,[m(n)?(I(),Q("div",kA,[p(m(f),B(m(n),{role:"img"}),null,16)])):C("",!0),p("div",bA,[p("div",EA,k(a.message.title||a.message.text),1),a.message.title&&a.message.text?(I(),Q("div",hA,k(a.message.text),1)):C("",!0)]),vA,p("div",SA,[!1!==a.message.dismissible?(I(),Q("button",{key:0,onClick:s},[p(m(f),{type:"mdi",path:m(b)},null,8,["path"])])):C("",!0)])])],6))}},xA={top:{type:Boolean,default:!1},bottom:{type:Boolean,default:!1},left:{type:Boolean,default:!1},right:{type:Boolean,default:!1},success:{type:String,default:"#4caf50"},error:{type:String,default:"#ff5252"},warning:{type:String,default:"#fb8c00"},info:{type:String,default:"#2196f3"},duration:{type:Number,default:null},messageClass:{type:String},zindex:{type:Number,default:1e4},dense:{type:Boolean,default:!1}};var JA=(...A)=>E.on(...A),_A=(...A)=>E.off(...A),wA=(...A)=>E.emit(...A);const VA=h([]),jA=Symbol();const OA={install:A=>{const e={add:A=>{wA("add",A)},clear:()=>{wA("clear")}};A.config.globalProperties.$snackbar=e,window&&(window.$snackbar=e),A.provide(jA,e)}};const TA={props:o({},xA),setup(A){const t=A,s=i((()=>({"is-top":t.top,"is-bottom":!1===t.top&&t.bottom,"is-left":t.left,"is-right":!1===t.left&&t.right,"is-middle":!1===t.top&&!1===t.bottom,"is-centre":!1===t.left&&!1===t.right}))),l=i((()=>({"--success-colour":t.success,"--error-colour":t.error,"--warning-colour":t.warning,"--info-colour":t.info,"--snackbar-zindex":t.zindex})));let n=1;c((()=>{JA("add",(A=>{t.duration&&!A.duration&&(A.duration=t.duration);const s=(l=o({},A),e(l,a({id:n})));var l;VA.value.push(s),n++})),JA("clear",(()=>{VA.value=[]}))})),S((()=>{_A("add"),_A("clear")}));return(A,e)=>(I(),Q("section",{id:"vue3-snackbar--container",class:[[m(s)],"vue3-snackbar"],style:m(l)},[p(x,{name:"vue3-snackbar-message",tag:"div"},{default:y((()=>[(I(!0),Q(J,null,_(m(VA),(A=>(I(),Q(yA,{key:A.id,message:A,"message-class":t.messageClass,dense:t.dense,onDismiss:e[1]||(e[1]=A=>{return e=A,void(VA.value=VA.value.filter((A=>A.id!==e.id)));var e})},null,8,["message","message-class","dense"])))),128))])),_:1})],6))}};var PA={props:{code:String,inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},setup(A,e){const a=A.code||(e.children&&e.children.length>0?e.children[0].text:""),t=A.language,s=w.languages[t],l=`language-${t}`;return()=>V("pre",{class:[e.attrs.class,l]},[V("code",{class:l,innerHTML:w.highlight(a,s)})])}};const MA={name:"Switch",inheritAttrs:!1,props:{label:{type:String,required:!0},checked:{type:Boolean,required:!0}}},NA=T("data-v-f88215b2");j("data-v-f88215b2");const DA={class:"container"},UA=p("span",{class:"switch"},null,-1),$A={class:"label"};O();const zA=NA(((A,e,a,t,s,l)=>(I(),Q("label",DA,[p("input",B(A.$attrs,{class:"input",type:"checkbox",checked:a.checked,onChange:e[1]||(e[1]=e=>A.$emit("update:checked",e.target.checked))}),null,16,["checked"]),UA,p("span",$A,k(a.label),1)]))));MA.render=zA,MA.__scopeId="data-v-f88215b2";const LA={props:{modelValue:{type:[String,Number],default:""},label:{type:String,default:""},name:{type:String,default:"text"}},emit:["update:modelValue"]},RA=T("data-v-a27ee446");j("data-v-a27ee446");const YA={class:"container d-flex flex-column"};O();const FA=RA(((A,e,a,t,s,l)=>(I(),Q("div",YA,[p("label",{for:a.name,class:"mb-1"},k(a.label),9,["for"]),p("input",{name:a.name,type:"text",value:a.modelValue,onInput:e[1]||(e[1]=e=>A.$emit("update:modelValue",parseFloat(e.target.value)))},null,40,["name","value"])]))));LA.render=FA,LA.__scopeId="data-v-a27ee446";const qA=T();j("data-v-0f24e16e");const HA=p("h1",{class:"logo-text text-uppercase"},"Snackbar",-1),KA=p("img",{style:{height:"36px",width:"36px"},src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAIkElEQVR4nO3ZgQmEQBAEwfMxI80/Ao1pP4wTuioDdxAa7piZWQBAys/cANAjAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAEnUbf7o5/P9D12H4fAfANb/0AQM5l8r08AQBAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAASdRoesy/Sf8NYPwB4CANqe+gE2u9Nfz1aeAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAEnUb/hKt+AAjz/7PFMTPj9ADQ4gkAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAICatdYfFxYQZ1Y924EAAAAASUVORK5CYII="},null,-1);O();const ZA={setup:A=>(A,e)=>{const a=P("v-icon"),t=P("v-spacer"),s=P("v-btn");return I(),Q(J,null,[p("img",{src:m("/vue3-snackbar/assets/v3-logo.aea13509.png"),class:"logo"},null,8,["src"]),HA,p(a,{icon:m(M),size:"24px"},null,8,["icon"]),p(t),p(s,{icon:"",href:"https://github.com/craigrileyuk/vue3-snackbar",target:"_blank"},{default:qA((()=>[p(a,{icon:m(N),size:"48px"},null,8,["icon"])])),_:1}),p(s,{icon:"",class:"ml-4",href:"https://www.npmjs.com/package/vue3-snackbar",target:"_blank"},{default:qA((()=>[KA])),_:1})],64)},__scopeId:"data-v-0f24e16e"};var WA=[{type:"success",title:"Mission Accomplished",text:"Something was completed"},{type:"info",title:"Important Information",text:"Some important information will appear here",dismissible:!1},{type:"info",text:"This message doesn't have a title",duration:5e3,dismissible:!1},{type:"warning",title:"Here Be Dragons",text:"This is a warning about something"},{type:"error",title:"Oh Damn",text:"Something went horribly wrong. Bad luck."},{title:"Custom Message",text:"This is a message with a custom background and icon",background:"steelblue",icon:{path:D,type:"mdi"}}];const GA=T();j("data-v-0efe1f5a");const XA=p("h2",{class:"title-card--text px-4"},"Easily notify users of application processes with Vue 3 Snackbar. A fully customisable, snackbar/toast messaging hub.",-1),Ae=H("Automatically stacks new messages."),ee=H("Choose from nine different locations for your hub."),ae=H("Set messages to disappear automatically, or manually."),te=H("Fully compatible with the Composition API and Options API."),se=H("Customise the appearance and behaviour of your messages."),le=p("code",null,[p("pre",null,"> npm install vue3-snackbar\n> yarn add vue3-snackbar\n")],-1),ne=p("div",{class:"text-h3"},"OR",-1),oe=p("h3",{class:"text-center text-uppercase text-bold",style:{width:"100%"}},"Sandbox",-1),ce={style:{"max-width":"400px"},class:"mr-auto"},ie=p("h4",{class:"mb-4"},"Component Properties",-1),re=p("div",{class:"text-overline"},"Position",-1),ge={class:"px-8"},ue={class:"mb-4"},de={class:"mb-4"},Ie={class:"mb-4"},Qe={class:"mb-4"},pe=p("div",{class:"text-overline"},"Messages",-1),me={class:"px-8"},fe={class:"mb-4"},Be={class:"mb-4"},Ce={class:"mb-4"},ke=H("Add Message"),be={class:"mb-4"},Ee=H("Clear All Messages"),he=p("h5",null,"Component Code",-1),ve={class:"align-self-center"},Se=p("h5",{class:"mt-4"},"Previous Message Code",-1),ye={class:"align-self-center"},xe=H("Vue 3 Snackbar is released under an MIT licence. © 2021 Craig Riley.");O();const Je={setup(A){const e=h(null);U((()=>[...VA.value]),(A=>{A[0]&&(e.value=JSON.parse(JSON.stringify(A[A.length-1]))),e.value&&e.value.id&&delete e.value.id}));const a=$({top:!1,bottom:!0,left:!1,right:!0,duration:0,dense:!1}),t=i((()=>{const A=[];a.top&&A.push("top"),a.bottom&&A.push("bottom"),a.left&&A.push("left"),a.right&&A.push("right");const e=[];return a.dense&&e.push("dense"),`<vue3-snackbar ${A.join(" ")} :duration="${a.duration}"${e.length>0?" "+e.join(" "):""}>\n</vue3-snackbar>`})),s=function(){const A=v(jA);if(!A)throw new Error("No Snackbar provided!");return A}(),l=()=>{s.add(WA[Math.floor(Math.random()*WA.length)])};return(A,n)=>{const o=P("v-app-bar"),c=P("v-icon"),i=P("v-list-item-avatar"),r=P("v-list-item-title"),g=P("v-list-item"),u=P("v-list"),d=P("v-col"),f=P("v-img"),B=P("v-row"),b=P("v-card"),E=P("v-container"),h=P("v-btn"),v=P("v-main"),S=P("v-footer"),y=P("v-app"),x=P("vue3-snackbar");return I(),Q(J,null,[p(y,null,{default:GA((()=>[p(o,{color:"secondary px-6",app:""},{default:GA((()=>[p(ZA)])),_:1}),p(v,null,{default:GA((()=>[p(E,{class:"pt-16"},{default:GA((()=>[p(b,{class:"mx-auto title-card",elevation:"0"},{default:GA((()=>[p(B,{class:"justify-space-between"},{default:GA((()=>[p(d,{cols:"12",md:"6"},{default:GA((()=>[XA,p(u,null,{default:GA((()=>[p(g,null,{default:GA((()=>[p(i,{class:"d-flex align-center"},{default:GA((()=>[p(c,{icon:m(z)},null,8,["icon"])])),_:1}),p(r,null,{default:GA((()=>[Ae])),_:1})])),_:1}),p(g,null,{default:GA((()=>[p(i,{class:"d-flex align-center"},{default:GA((()=>[p(c,{icon:m(L)},null,8,["icon"])])),_:1}),p(r,null,{default:GA((()=>[ee])),_:1})])),_:1}),p(g,null,{default:GA((()=>[p(i,{class:"d-flex align-center"},{default:GA((()=>[p(c,{icon:m(R)},null,8,["icon"])])),_:1}),p(r,null,{default:GA((()=>[ae])),_:1})])),_:1}),p(g,null,{default:GA((()=>[p(i,{class:"d-flex align-center"},{default:GA((()=>[p(c,{icon:m(Y)},null,8,["icon"])])),_:1}),p(r,null,{default:GA((()=>[te])),_:1})])),_:1}),p(g,null,{default:GA((()=>[p(i,{class:"d-flex align-center"},{default:GA((()=>[p(c,{icon:m(F)},null,8,["icon"])])),_:1}),p(r,null,{default:GA((()=>[se])),_:1})])),_:1})])),_:1})])),_:1}),p(d,{cols:"12",md:"6",class:"d-flex justify-end"},{default:GA((()=>[p(f,{src:m("/vue3-snackbar/assets/example.98dec26e.png"),class:"example-image"},null,8,["src"])])),_:1})])),_:1})])),_:1})])),_:1}),p(E,{fluid:"",class:"bg-accent d-flex justify-center my-16"},{default:GA((()=>[le])),_:1}),p(E,null,{default:GA((()=>[p(B,null,{default:GA((()=>[p(d,{cols:"6",offset:"3"},{default:GA((()=>[p(m(PA),{code:m('// main.js\nimport { createApp } from "vue";\nimport { SnackbarService, Vue3Snackbar } from "vue3-snackbar";\nimport "vue3-snackbar/dist/style.css";\nimport App from "./App.vue";\nconst app = createApp(App);\napp.use(SnackbarService);\napp.component("vue3-snackbar", Vue3Snackbar);\napp.mount("#app");'),language:"js"},null,8,["code"])])),_:1}),p(d,{cols:"6",offset:"3"},{default:GA((()=>[p(m(PA),{code:m('\x3c!-- App.vue --\x3e\n<template>\n\x3c!-- While teleporting the snackbar isn\'t required, it can help resolve z-index issues --\x3e\n<teleport to="body">\n    <vue3-snackbar bottom right :duration="4000"></vue3-snackbar>\n</teleport>\n</template>'),language:"html"},null,8,["code"])])),_:1}),p(d,{cols:"5"},{default:GA((()=>[p(m(PA),{code:m("// App.vue - Options API\n<script>\nexport default {\n    methods: {\n        successMessage() {\n            this.$snackbar.add({\n                type: 'success',\n                text: 'This is a snackbar message'\n            })\n        }\n    }\n}\n<\/script>"),language:"js",style:{height:"100%"}},null,8,["code"])])),_:1}),p(d,{cols:"2",class:"d-flex align-center justify-center"},{default:GA((()=>[ne])),_:1}),p(d,{cols:"5"},{default:GA((()=>[p(m(PA),{code:m("// App.vue - Composition API\n<script setup>\nimport { useSnackbar } from \"vue3-snackbar\";\nconst snackbar = useSnackbar();\nsnackbar.add({\n    type: 'success',\n    text: 'This is a snackbar message'\n})\n<\/script>"),language:"js",style:{height:"100%"}},null,8,["code"])])),_:1})])),_:1})])),_:1}),p(E,{fluid:"",class:"bg-accent my-16",elevation:"0"},{default:GA((()=>[oe])),_:1}),p(E,{style:{"max-width":"1100px"}},{default:GA((()=>[p(B,null,{default:GA((()=>[p(d,{cols:"6"},{default:GA((()=>[p("div",ce,[p(b,{class:"d-flex flex-column pa-6"},{default:GA((()=>[ie,re,p("div",ge,[p("div",ue,[p(MA,{checked:m(a).top,"onUpdate:checked":n[1]||(n[1]=A=>m(a).top=A),label:"Top"},null,8,["checked"])]),p("div",de,[p(MA,{checked:m(a).bottom,"onUpdate:checked":n[2]||(n[2]=A=>m(a).bottom=A),label:"Bottom"},null,8,["checked"])]),p("div",Ie,[p(MA,{checked:m(a).left,"onUpdate:checked":n[3]||(n[3]=A=>m(a).left=A),label:"Left"},null,8,["checked"])]),p("div",Qe,[p(MA,{checked:m(a).right,"onUpdate:checked":n[4]||(n[4]=A=>m(a).right=A),label:"Right"},null,8,["checked"])])]),pe,p("div",me,[p("div",fe,[p(LA,{modelValue:m(a).duration,"onUpdate:modelValue":n[5]||(n[5]=A=>m(a).duration=A),label:"Duration"},null,8,["modelValue"])]),p("div",Be,[p(MA,{checked:m(a).dense,"onUpdate:checked":n[6]||(n[6]=A=>m(a).dense=A),label:"Dense"},null,8,["checked"])])]),p("div",Ce,[p(h,{onClick:l,color:"secondary",block:""},{default:GA((()=>[ke])),_:1})]),p("div",be,[p(h,{onClick:n[7]||(n[7]=A=>m(s).clear()),color:"accent",block:""},{default:GA((()=>[Ee])),_:1})])])),_:1})])])),_:1}),p(d,{cols:"6",class:"d-flex flex-column"},{default:GA((()=>[he,p("code",ve,[p("pre",{textContent:k(m(t))},null,8,["textContent"])]),Se,p("code",ye,[e.value?(I(),Q("pre",{key:0,textContent:k(JSON.stringify(e.value,void 0,2).trim())},null,8,["textContent"])):C("",!0)])])),_:1})])),_:1})])),_:1})])),_:1}),p(S,{class:"bg-primary"},{default:GA((()=>[p(E,{class:"text-center text-caption"},{default:GA((()=>[xe])),_:1})])),_:1})])),_:1}),(I(),Q(q,{to:"body"},[p(x,{top:m(a).top,bottom:m(a).bottom,left:m(a).left,right:m(a).right,duration:m(a).duration,dense:m(a).dense},null,8,["top","bottom","left","right","duration","dense"])]))],64)}},__scopeId:"data-v-0efe1f5a"};var _e=pA({components:Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",VApp:K,VAppBar:Z,VAppBarTitle:W,VBanner:G,VBtn:X,VCard:AA,VCardTitle:eA,VCol:aA,VContainer:tA,VDivider:sA,VFooter:lA,VIcon:nA,VImg:oA,VList:cA,VListItem:iA,VListItemAvatar:rA,VListItemTitle:gA,VListItemSubtitle:uA,VMain:dA,VRow:IA,VSpacer:QA}),icons:{defaultSet:"mdi",aliases:mA,sets:{mdi:fA}},theme:{defaultTheme:"vueLightTheme",themes:{vueLightTheme:{dark:!1,colors:{primary:"#41b883",secondary:"#34495e",accent:"#fffde7"},variables:{}}}}});const we=BA(Je);we.use(OA),we.use(_e),we.component("vue3-snackbar",TA),we.mount("#app");