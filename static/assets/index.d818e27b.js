var v=Object.defineProperty;var r=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var i=(e,s,t)=>s in e?v(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,_=(e,s)=>{for(var t in s||(s={}))x.call(s,t)&&i(e,t,s[t]);if(r)for(var t of r(s))g.call(s,t)&&i(e,t,s[t]);return e};import{i as w}from"./getStyleSheets.289f5a1f.js";import{_ as y}from"./index.c04616ec.js";import{i as F,o as I,t as k,k as n,l as d,y as u,z as a,C as c,X as B,W as E,P as L,m as o,p as S,x as $}from"./vendor.14d7a511.js";const A={name:"pagesElement",setup(){const e=F({sheetsIconList:[]}),s=()=>{w.ele().then(t=>e.sheetsIconList=t)};return I(()=>{s()}),_({},k(e))}},C={class:"element-container"},j={class:"iconfont-warp"},z={class:"flex-margin"},D={class:"iconfont-warp-value"},N={class:"iconfont-warp-label mt10"};function V(e,s,t,b,G,M){const p=n("el-col"),m=n("el-row"),f=n("el-card");return c(),d("div",C,[u(f,{shadow:"hover",header:`element plus \u5B57\u4F53\u56FE\u6807(\u81EA\u52A8\u8F7D\u5165)\uFF1A${e.sheetsIconList.length-2}\u4E2A`},{default:a(()=>[u(m,{class:"iconfont-row"},{default:a(()=>[(c(!0),d(B,null,E(e.sheetsIconList,(l,h)=>(c(),L(p,{xs:12,sm:8,md:6,lg:4,xl:2,key:h},{default:a(()=>[o("div",j,[o("div",z,[o("div",D,[o("i",{class:S(l)},null,2)]),o("div",N,$(l),1)])])]),_:2},1024))),128))]),_:1})]),_:1},8,["header"])])}var q=y(A,[["render",V],["__scopeId","data-v-5258838a"]]);export{q as default};
