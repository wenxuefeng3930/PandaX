var x=Object.defineProperty;var i=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var l=(e,t,s)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,c=(e,t)=>{for(var s in t||(t={}))f.call(t,s)&&l(e,s,t[s]);if(i)for(var s of i(t))g.call(t,s)&&l(e,s,t[s]);return e};import{_ as v}from"./index.c04616ec.js";import{i as w,t as F,k as o,l as d,y as r,z as u,C as n,X as b,W as C,P as k,m as _,x as B}from"./vendor.14d7a511.js";const E={name:"FunGridLayout",setup(){const e=w({layouts:[{x:0,y:0,w:2,h:2,i:"0"},{x:2,y:0,w:2,h:4,i:"1"},{x:4,y:0,w:2,h:5,i:"2"},{x:6,y:0,w:2,h:3,i:"3"},{x:8,y:0,w:2,h:3,i:"4"},{x:10,y:0,w:2,h:3,i:"5"},{x:0,y:5,w:2,h:5,i:"6"}]});return c({},F(e))}},$={class:"grid-layout-container"},j={class:"w100 h100 flex"},D={class:"flex-margin font14"};function z(e,t,s,A,L,N){const y=o("el-alert"),p=o("grid-item"),h=o("grid-layout"),m=o("el-card");return n(),d("div",$,[r(m,{shadow:"hover",header:"vue-grid-layout \u62D6\u62FD\u5E03\u5C40\u6F14\u793A"},{default:u(()=>[r(y,{title:"\u611F\u8C22\u4F18\u79C0\u7684 `vue-grid-layout`\uFF0C\u9879\u76EE\u5730\u5740\uFF1Ahttps://github.com/jbaysolutions/vue-grid-layout",type:"success",closable:!1,class:"mb15"}),r(h,{layout:e.layouts,"onUpdate:layout":t[0]||(t[0]=a=>e.layouts=a),"col-num":12,"row-height":30,"is-draggable":!0,"is-resizable":!0,"is-mirrored":!1,"vertical-compact":!0,margin:[10,10],"use-css-transforms":!0},{default:u(()=>[(n(!0),d(b,null,C(e.layouts,a=>(n(),k(p,{x:a.x,y:a.y,w:a.w,h:a.h,i:a.i,key:a.i},{default:u(()=>[_("div",j,[_("span",D,B(a.i),1)])]),_:2},1032,["x","y","w","h","i"]))),128))]),_:1},8,["layout"])]),_:1})])}var P=v(E,[["render",z],["__scopeId","data-v-67b98807"]]);export{P as default};
