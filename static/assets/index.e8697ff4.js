var v=Object.defineProperty;var b=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var E=(t,e,l)=>e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[e]=l,f=(t,e)=>{for(var l in e||(e={}))F.call(e,l)&&E(t,l,e[l]);if(b)for(var l of b(e))x.call(e,l)&&E(t,l,e[l]);return t};import{_ as y}from"./index.c04616ec.js";import{i as B,M as T,t as S,k as c,a4 as w,l as g,y as d,z as C,b as N,C as k,w as V,m as u,x as _,K as I,F as L,A as $,B as z,s as M}from"./vendor.14d7a511.js";const j={name:"pagesTree",setup(){const{proxy:t}=L(),e=B({treeCheckAll:!1,treeLoading:!1,treeTableData:[],treeDefaultProps:{children:"children",label:"label"},treeSelArr:[],treeLength:0}),l=a=>{let r=0;a.map(n=>{n.children&&(r+=n.children.length)}),e.treeLength=r+a.length},s=()=>{e.treeCheckAll?t.$refs.treeTable.setCheckedNodes(e.treeTableData):t.$refs.treeTable.setCheckedKeys([])},p=()=>{e.treeSelArr=[],e.treeSelArr=t.$refs.treeTable.getCheckedNodes(),e.treeSelArr.length==e.treeLength?e.treeCheckAll=!0:e.treeCheckAll=!1},D=()=>{if(t.$refs.treeTable.getCheckedNodes().length<=0){N.warning("\u8BF7\u9009\u62E9\u5143\u7D20");return}else console.log(t.$refs.treeTable.getCheckedNodes())},o=()=>{e.treeTableData=[{id:1,label:"12987121",label1:"\u597D\u6ECB\u597D\u5473\u9E21\u86CB\u4ED4",label2:"\u8377\u5170\u4F18\u8D28\u6DE1\u5976\uFF0C\u5976\u9999\u6D53\u800C\u4E0D\u817B",isShow:!0,children:[{id:11,label:"\u4E00\u7EA7 1-1",label1:"\u597D\u6ECB\u597D\u5473\u9E21\u86CB\u4ED4",label2:"\u8377\u5170\u4F18\u8D28\u6DE1\u5976\uFF0C\u5976\u9999\u6D53\u800C\u4E0D\u817B"},{id:12,label:"\u4E00\u7EA7 1-2"}]},{id:2,label:"12987122",label1:"\u597D\u6ECB\u597D\u5473\u9E21\u86CB\u4ED4",label2:"\u8377\u5170\u4F18\u8D28\u6DE1\u5976\uFF0C\u5976\u9999\u6D53\u800C\u4E0D\u817B",isShow:!0,children:[{id:21,label:"\u4E8C\u7EA7 2-1",isShow:!1},{id:22,label:"\u4E8C\u7EA7 2-2"}]},{id:3,label:"12987123",label1:"\u597D\u6ECB\u597D\u5473\u9E21\u86CB\u4ED4",label2:"\u8377\u5170\u4F18\u8D28\u6DE1\u5976\uFF0C\u5976\u9999\u6D53\u800C\u4E0D\u817B",isShow:!0,children:[{id:31,label:"\u4E8C\u7EA7 3-1"},{id:32,label:"\u4E8C\u7EA7 3-2"},{id:33,label:"\u4E8C\u7EA7 3-3"}]}],l(e.treeTableData)};return T(()=>{o()}),f({getTreeData:o,onCheckAllChange:s,onCheckTree:p,onSelect:D},S(e))}},m=t=>($("data-v-0579655e"),t=t(),z(),t),K={class:"tree-container"},P={class:"tree-head"},R={class:"tree-head-check"},U=m(()=>u("div",{class:"tree-head-one"},"\u5546\u54C1 ID",-1)),q=m(()=>u("div",{style:{flex:"1",display:"flex"}},[u("div",{class:"tree-head-two"},"\u5546\u54C1\u540D\u79F0"),u("div",{class:"tree-head-three"},"\u63CF\u8FF0")],-1)),G={class:"tree-custom-node"},H={style:{flex:"1"}},J={key:0,style:{flex:"1",display:"flex"}},O={type:"text",size:"mini",style:{flex:"1"}},Q={type:"text",size:"mini",style:{flex:"1"}},W=M("\u9009\u62E9\u5143\u7D20");function X(t,e,l,s,p,D){const o=c("el-checkbox"),a=c("el-tree"),r=c("el-button"),n=c("el-card"),A=w("loading");return k(),g("div",K,[d(n,{shadow:"hover",header:"element plus Tree \u6811\u5F62\u63A7\u4EF6\u6539\u6210\u8868\u683C"},{default:C(()=>[V(u("div",null,[u("div",P,[u("div",R,[d(o,{modelValue:t.treeCheckAll,"onUpdate:modelValue":e[0]||(e[0]=i=>t.treeCheckAll=i),onChange:s.onCheckAllChange},null,8,["modelValue","onChange"])]),U,q]),d(a,{data:t.treeTableData,"show-checkbox":"","node-key":"id",ref:"treeTable",props:t.treeDefaultProps,onCheck:s.onCheckTree},{default:C(({node:i,data:h})=>[u("span",G,[u("span",H,_(i.label),1),h.isShow?(k(),g("span",J,[u("span",O,_(h.label1),1),u("span",Q,_(h.label2),1)])):I("",!0)])]),_:1},8,["data","props","onCheck"])],512),[[A,t.treeLoading]]),d(r,{onClick:s.onSelect,class:"mt15",size:"small",type:"primary",icon:"iconfont icon-shuxingtu"},{default:C(()=>[W]),_:1},8,["onClick"])]),_:1})])}var te=y(j,[["render",X],["__scopeId","data-v-0579655e"]]);export{te as default};
