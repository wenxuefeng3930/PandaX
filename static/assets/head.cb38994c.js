var r=Object.defineProperty;var n=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var o=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&o(e,a,t[a]);if(n)for(var a of n(t))_.call(t,a)&&o(e,a,t[a]);return e};import{_ as p,d as c}from"./index.c04616ec.js";import{i as m,M as l,j as f,t as v,l as h,m as s,x,A as Q,B as S,C as Y}from"./vendor.14d7a511.js";const w={name:"chartHead",setup(){const e=m({time:{txt:"",fun:0}}),t=()=>{e.time.txt=c(new Date,"YYYY-mm-dd HH:MM:SS WWW QQQQ"),e.time.fun=window.setInterval(()=>{e.time.txt=c(new Date,"YYYY-mm-dd HH:MM:SS WWW QQQQ")},1e3)};return l(()=>{t()}),f(()=>{window.clearInterval(e.time.fun)}),d({},v(e))}},i=e=>(Q("data-v-15b57a46"),e=e(),S(),e),B={class:"big-data-up mb15"},H={class:"up-left"},I=i(()=>s("i",{class:"el-icon-time mr5"},null,-1)),M=i(()=>s("div",{class:"up-center"},[s("span",null,"\u667A\u6167\u519C\u4E1A\u7CFB\u7EDF\u5E73\u53F0")],-1));function W(e,t,a,D,b,C){return Y(),h("div",B,[s("div",H,[I,s("span",null,x(e.time.txt),1)]),M])}var j=p(w,[["render",W],["__scopeId","data-v-15b57a46"]]);export{j as default};
