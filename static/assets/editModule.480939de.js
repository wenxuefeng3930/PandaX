var j=Object.defineProperty;var k=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var h=(l,o,e)=>o in l?j(l,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[o]=e,C=(l,o)=>{for(var e in o||(o={}))M.call(o,e)&&h(l,e,o[e]);if(k)for(var e of k(o))z.call(o,e)&&h(l,e,o[e]);return l};import{t as R}from"./dept.7edbaa9e.js";import{b as L,a as P,f as q,h as T}from"./user.f5215e5c.js";import{_ as G}from"./index.1f7143d6.js";import{r as J,i as W,t as $,k as m,a4 as H,l as b,y as s,z as a,a6 as K,b as I,C as p,w as X,m as A,s as V,x as O,P as f,K as U,X as B,W as v,F as Q}from"./vendor.14d7a511.js";const Y={name:"editUser",props:{title:{type:String,default:()=>""}},setup(){const{proxy:l}=Q(),o=J(null),e=W({isShowDialog:!1,sexOptions:[],roleOptions:[],statusOptions:[],deptOptions:[],postOptions:[],ruleForm:{userId:void 0,username:"",nickName:"",deptId:"",roleId:"",postId:"",phone:"",email:"",status:"",password:"",avatar:"",sex:"",remark:"",postIds:"",roleIds:""},postIds:[],roleIds:[],isHideOptions:[],menuTypeOptions:[],yesOrNoOptions:[],menuOptions:[],ruleRules:{username:[{required:!0,message:"\u7528\u6237\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],nickName:[{required:!0,message:"\u7528\u6237\u6635\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],password:[{required:!0,message:"\u7528\u6237\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],email:[{type:"email",message:"'\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740",trigger:["blur","change"]}],phone:[{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7\u7801",trigger:"blur"}]}}),c=r=>{r&&r.userId&&r.userId!=null&&r.userId!=0?L(r.userId).then(t=>{e.ruleForm=t.data.data,e.postOptions=t.data.posts,e.roleOptions=t.data.roles,e.postIds=t.data.postIds.split(",").map(i=>Number(i)),e.roleIds=t.data.roleIds.split(",").map(i=>Number(i)),e.ruleForm.password=""}):d(),F(),e.isShowDialog=!0,l.getDicts("sys_user_sex").then(t=>{e.sexOptions=t.data}),l.getDicts("sys_normal_disable").then(t=>{e.statusOptions=t.data})},g=r=>{l.mittBus.emit("onEditUserModule",r),e.isShowDialog=!1},E=()=>{g(),d()},F=async()=>{R().then(r=>{e.deptOptions=r.data})},n=()=>{const r=K(o);!r||r.validate(t=>{t&&(e.ruleForm.postId=e.postIds[0],e.ruleForm.roleId=e.roleIds[0],e.ruleForm.postIds=e.postIds.join(","),e.ruleForm.roleIds=e.roleIds.join(","),e.ruleForm.userId!=null?P(e.ruleForm).then(i=>{I.success("\u4FEE\u6539\u6210\u529F"),g()}):q(e.ruleForm).then(i=>{I.success("\u65B0\u589E\u6210\u529F"),g()}))})},d=()=>{T().then(r=>{e.postOptions=r.data.posts,e.roleOptions=r.data.roles}),e.ruleForm.userId=void 0,e.ruleForm.username="",e.ruleForm.nickName="",e.ruleForm.deptId="",e.ruleForm.phone="",e.ruleForm.email="",e.ruleForm.status="",e.ruleForm.password="",e.ruleForm.avatar="",e.ruleForm.sex="",e.ruleForm.remark="",e.ruleForm.postIds="",e.ruleForm.roleIds=""};return C({ruleFormRef:o,openDialog:c,closeDialog:g,onCancel:E,onSubmit:n,beforeAvatarUpload:r=>{const t=r.type==="image/jpeg",i=r.size/1024/1024<2;return t||I.error("\u4E0A\u4F20\u5934\u50CF\u56FE\u7247\u53EA\u80FD\u662F JPG \u683C\u5F0F!"),i||I.error("\u4E0A\u4F20\u5934\u50CF\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 2MB!"),t&&i},handleAvatarSuccess:r=>{}},$(e))}},Z={class:"system-menu-container"},ee={style:{"font-size":"large"}},le={class:"dialog-footer"},ue=V("\u53D6 \u6D88"),oe=V("\u7F16 \u8F91");function se(l,o,e,c,g,E){const F=m("el-input"),n=m("el-form-item"),d=m("el-col"),D=m("el-cascader"),_=m("el-option"),r=m("el-select"),t=m("el-radio"),i=m("el-radio-group"),w=m("el-row"),N=m("el-form"),y=m("el-button"),x=m("el-dialog"),S=H("drag");return p(),b("div",Z,[s(x,{modelValue:l.isShowDialog,"onUpdate:modelValue":o[11]||(o[11]=u=>l.isShowDialog=u),width:"769px"},{title:a(()=>[X(A("div",ee,[V(O(e.title),1)],512),[[S,[".system-menu-container .el-dialog",".system-menu-container .el-dialog__header"]]])]),footer:a(()=>[A("span",le,[s(y,{onClick:c.onCancel,size:"small"},{default:a(()=>[ue]),_:1},8,["onClick"]),s(y,{type:"primary",onClick:c.onSubmit,size:"small"},{default:a(()=>[oe]),_:1},8,["onClick"])])]),default:a(()=>[s(N,{ref:"ruleFormRef",model:l.ruleForm,rules:l.ruleRules,"label-width":"80px"},{default:a(()=>[s(w,{gutter:35},{default:a(()=>[s(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[s(n,{label:"\u7528\u6237\u6635\u79F0",prop:"nickName"},{default:a(()=>[s(F,{modelValue:l.ruleForm.nickName,"onUpdate:modelValue":o[0]||(o[0]=u=>l.ruleForm.nickName=u),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u6635\u79F0"},null,8,["modelValue"])]),_:1})]),_:1}),s(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[s(n,{label:"\u5F52\u5C5E\u90E8\u95E8",prop:"deptId"},{default:a(()=>[s(D,{modelValue:l.ruleForm.deptId,"onUpdate:modelValue":o[1]||(o[1]=u=>l.ruleForm.deptId=u),options:l.deptOptions,props:{label:"deptName",value:"deptId",checkStrictly:!0,emitPath:!1},class:"w100",clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u5F52\u5C5E\u90E8\u95E8","show-all-levels":!1},null,8,["modelValue","options"])]),_:1})]),_:1}),s(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[l.ruleForm.userId==null?(p(),f(n,{key:0,label:"\u7528\u6237\u540D\u79F0",prop:"username"},{default:a(()=>[s(F,{modelValue:l.ruleForm.username,"onUpdate:modelValue":o[2]||(o[2]=u=>l.ruleForm.username=u),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D\u79F0"},null,8,["modelValue"])]),_:1})):U("",!0)]),_:1}),s(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[l.ruleForm.userId==null?(p(),f(n,{key:0,label:"\u7528\u6237\u5BC6\u7801",prop:"password"},{default:a(()=>[s(F,{modelValue:l.ruleForm.password,"onUpdate:modelValue":o[3]||(o[3]=u=>l.ruleForm.password=u),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u5BC6\u7801",type:"password"},null,8,["modelValue"])]),_:1})):U("",!0)]),_:1}),s(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[s(n,{label:"\u624B\u673A\u53F7\u7801",prop:"phone"},{default:a(()=>[s(F,{modelValue:l.ruleForm.phone,"onUpdate:modelValue":o[4]||(o[4]=u=>l.ruleForm.phone=u),placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801",maxlength:"11"},null,8,["modelValue"])]),_:1})]),_:1}),s(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[s(n,{label:"\u90AE\u7BB1",prop:"email"},{default:a(()=>[s(F,{modelValue:l.ruleForm.email,"onUpdate:modelValue":o[5]||(o[5]=u=>l.ruleForm.email=u),placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1",maxlength:"50"},null,8,["modelValue"])]),_:1})]),_:1}),s(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[s(n,{label:"\u7528\u6237\u6027\u522B",prop:"sex"},{default:a(()=>[s(r,{modelValue:l.ruleForm.sex,"onUpdate:modelValue":o[6]||(o[6]=u=>l.ruleForm.sex=u),placeholder:"\u8BF7\u9009\u62E9"},{default:a(()=>[(p(!0),b(B,null,v(l.sexOptions,u=>(p(),f(_,{key:u.dictValue,label:u.dictLabel,value:u.dictValue},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),s(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[s(n,{label:"\u72B6\u6001"},{default:a(()=>[s(i,{modelValue:l.ruleForm.status,"onUpdate:modelValue":o[7]||(o[7]=u=>l.ruleForm.status=u)},{default:a(()=>[(p(!0),b(B,null,v(l.statusOptions,u=>(p(),f(t,{key:u.dictValue,label:u.dictValue},{default:a(()=>[V(O(u.dictLabel),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),s(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[s(n,{label:"\u5C97\u4F4D"},{default:a(()=>[s(r,{modelValue:l.postIds,"onUpdate:modelValue":o[8]||(o[8]=u=>l.postIds=u),multiple:"","collapse-tags":"true",placeholder:"\u8BF7\u9009\u62E9"},{default:a(()=>[(p(!0),b(B,null,v(l.postOptions,u=>(p(),f(_,{key:u.postId,label:u.postName,value:u.postId,disabled:u.status==1},null,8,["label","value","disabled"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),s(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[s(n,{label:"\u89D2\u8272"},{default:a(()=>[s(r,{modelValue:l.roleIds,"onUpdate:modelValue":o[9]||(o[9]=u=>l.roleIds=u),multiple:"","collapse-tags":"true",placeholder:"\u8BF7\u9009\u62E9"},{default:a(()=>[(p(!0),b(B,null,v(l.roleOptions,u=>(p(),f(_,{key:u.roleId,label:u.roleName,value:u.roleId,disabled:u.status==1},null,8,["label","value","disabled"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),s(d,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:a(()=>[s(n,{label:"\u5907\u6CE8"},{default:a(()=>[s(F,{modelValue:l.ruleForm.remark,"onUpdate:modelValue":o[10]||(o[10]=u=>l.ruleForm.remark=u),type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}var me=G(Y,[["render",se],["__scopeId","data-v-1b582486"]]);export{me as default};
