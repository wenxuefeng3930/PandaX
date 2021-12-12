var M=Object.defineProperty;var I=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var v=(e,r,a)=>r in e?M(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,T=(e,r)=>{for(var a in r||(r={}))H.call(r,a)&&v(e,a,r[a]);if(I)for(var a of I(r))z.call(r,a)&&v(e,a,r[a]);return e};import{I as K}from"./index.6df0c7e0.js";import{_ as q,u as R,K as j,M as P,N as W}from"./index.d7413c26.js";import{r as X,i as $,t as G,k as i,a4 as J,l as b,y as l,z as u,a6 as Q,b as N,C as s,w as Y,m as c,s as F,x as V,X as g,W as _,P as d,K as f,F as Z}from"./vendor.14d7a511.js";import"./getStyleSheets.289f5a1f.js";const x={name:"editMenu",components:{IconSelector:K},props:{title:{type:String,default:()=>""}},setup(){R();const{proxy:e}=Z(),r=X(null),a=$({isShowDialog:!1,ruleForm:{menuId:0,menuName:"",menuType:"",parentId:0,component:"",sort:1,status:"",title:"",icon:"",isHide:"",isKeepAlive:"",isAffix:"",isLink:"",isFrame:"",permission:"",remark:""},isHideOptions:[],statusOptions:[],menuTypeOptions:[],yesOrNoOptions:[],menuOptions:[],ruleRules:{menuName:[{required:!0,message:"\u83DC\u5355\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],parentId:[{required:!0,message:"\u7236\u83DC\u5355\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],menuType:[{required:!0,message:"\u83DC\u5355\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],status:[{required:!0,message:"\u83DC\u5355\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],sort:[{required:!0,message:"\u83DC\u5355\u987A\u5E8F\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}}),C=t=>{t.menuId&&t.menuId!=null&&t.menuId!=0?a.ruleForm=t:(n(),a.ruleForm.parentId=t.parentId),a.isShowDialog=!0,e.getDicts("sys_show_hide").then(m=>{a.isHideOptions=m.data}),e.getDicts("sys_normal_disable").then(m=>{a.statusOptions=m.data}),e.getDicts("sys_menu_type").then(m=>{a.menuTypeOptions=m.data}),e.getDicts("sys_num_yes_no").then(m=>{a.yesOrNoOptions=m.data}),j().then(m=>{a.menuOptions=[];const p={menuId:0,menuName:"\u4E3B\u7C7B\u76EE",children:[]};p.children=m.data,a.menuOptions.push(p)})},D=t=>{n(),e.mittBus.emit("onEditMenuModule",t),a.isShowDialog=!1},B=()=>{D(),n()},k=()=>{const t=Q(r);!t||t.validate(m=>{m&&(a.ruleForm.component==""&&(a.ruleForm.menuType=="F"?a.ruleForm.component="":a.ruleForm.component="Layout"),a.ruleForm.menuId!=null&&a.ruleForm.menuId!=0?P(a.ruleForm).then(p=>{N.success("\u4FEE\u6539\u6210\u529F"),D()}):W(a.ruleForm).then(p=>{N.success("\u65B0\u589E\u6210\u529F"),D()}))})},n=()=>{a.ruleForm.menuId=0,a.ruleForm.menuName="",a.ruleForm.menuType="",a.ruleForm.parentId=0,a.ruleForm.component="",a.ruleForm.sort=1,a.ruleForm.status="",a.ruleForm.title="",a.ruleForm.icon="",a.ruleForm.isHide="",a.ruleForm.isKeepAlive="",a.ruleForm.isAffix="",a.ruleForm.isLink="",a.ruleForm.isFrame="",a.ruleForm.permission="",a.ruleForm.remark=""};return T({ruleFormRef:r,openDialog:C,closeDialog:D,onCancel:B,onSubmit:k},G(a))}},ee={class:"system-menu-container"},ue={style:{"font-size":"large"}},le=c("i",{class:"el-icon-info ml10 mt10"},null,-1),oe=c("i",{class:"el-icon-info ml10 mt10"},null,-1),ae=c("i",{class:"el-icon-info ml10 mt10"},null,-1),re=c("i",{class:"el-icon-info ml10 mt10"},null,-1),te={class:"dialog-footer"},se=F("\u53D6 \u6D88"),ne=F("\u7F16 \u8F91");function me(e,r,a,C,D,B){const k=i("el-cascader"),n=i("el-form-item"),t=i("el-col"),m=i("el-radio"),p=i("el-radio-group"),y=i("el-input"),h=i("el-input-number"),S=i("IconSelector"),A=i("el-tooltip"),E=i("el-row"),U=i("el-form"),O=i("el-button"),w=i("el-dialog"),L=J("drag");return s(),b("div",ee,[l(w,{modelValue:e.isShowDialog,"onUpdate:modelValue":r[15]||(r[15]=o=>e.isShowDialog=o),width:"769px"},{title:u(()=>[Y(c("div",ue,[F(V(a.title),1)],512),[[L,[".system-menu-container .el-dialog",".system-menu-container .el-dialog__header"]]])]),footer:u(()=>[c("span",te,[l(O,{onClick:C.onCancel,size:"small"},{default:u(()=>[se]),_:1},8,["onClick"]),l(O,{type:"primary",onClick:C.onSubmit,size:"small"},{default:u(()=>[ne]),_:1},8,["onClick"])])]),default:u(()=>[l(U,{model:e.ruleForm,size:"small",rules:e.ruleRules,ref:"ruleFormRef","label-width":"80px"},{default:u(()=>[l(E,{gutter:35},{default:u(()=>[l(t,{span:24,class:"mb20"},{default:u(()=>[l(n,{label:"\u4E0A\u7EA7\u83DC\u5355",prop:"parentId"},{default:u(()=>[l(k,{modelValue:e.ruleForm.parentId,"onUpdate:modelValue":r[0]||(r[0]=o=>e.ruleForm.parentId=o),options:e.menuOptions,size:"small",class:"w100",props:{label:"menuName",value:"menuId",checkStrictly:!0,emitPath:!1},clearable:"",filterable:"",placeholder:"\u9009\u62E9\u4E0A\u7EA7\u83DC\u5355","show-all-levels":!1},null,8,["modelValue","options"])]),_:1})]),_:1}),l(t,{span:24,class:"mb20"},{default:u(()=>[l(n,{label:"\u83DC\u5355\u7C7B\u578B",prop:"menuType"},{default:u(()=>[l(p,{modelValue:e.ruleForm.menuType,"onUpdate:modelValue":r[1]||(r[1]=o=>e.ruleForm.menuType=o)},{default:u(()=>[(s(!0),b(g,null,_(e.menuTypeOptions,o=>(s(),d(m,{key:o.dictValue,label:o.dictValue},{default:u(()=>[F(V(o.dictLabel),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(t,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:u(()=>[l(n,{label:"\u83DC\u5355\u540D\u79F0",prop:"menuName"},{default:u(()=>[l(y,{modelValue:e.ruleForm.menuName,"onUpdate:modelValue":r[2]||(r[2]=o=>e.ruleForm.menuName=o),placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(t,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:u(()=>[l(n,{label:"\u83DC\u5355\u6392\u5E8F",prop:"sort"},{default:u(()=>[l(h,{modelValue:e.ruleForm.sort,"onUpdate:modelValue":r[3]||(r[3]=o=>e.ruleForm.sort=o),placeholder:"\u83DC\u5355\u6392\u5E8F",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e.ruleForm.menuType!="F"?(s(),d(t,{key:0,xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:u(()=>[l(n,{label:"\u83DC\u5355\u56FE\u6807",prop:"icon"},{default:u(()=>[l(S,{placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u56FE\u6807",modelValue:e.ruleForm.icon,"onUpdate:modelValue":r[4]||(r[4]=o=>e.ruleForm.icon=o),type:"all"},null,8,["modelValue"])]),_:1})]),_:1})):f("",!0),l(t,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:u(()=>[l(E,{gutter:8},{default:u(()=>[l(t,{span:22},{default:u(()=>[l(n,{label:"\u6743\u9650\u6807\u8BC6",prop:"permission"},{default:u(()=>[l(y,{modelValue:e.ruleForm.permission,"onUpdate:modelValue":r[5]||(r[5]=o=>e.ruleForm.permission=o),placeholder:"\u8DEF\u7531\u6743\u9650\u6807\u8BC6",clearable:"",disabled:e.ruleForm.menuType=="M"},null,8,["modelValue","disabled"])]),_:1})]),_:1}),l(t,{span:2},{default:u(()=>[l(A,{content:"\u8DEF\u7531\u6743\u9650\u6807\u8BC6\uFF08\u591A\u4E2A\u8BF7\u7528\u9017\u53F7\u9694\u5F00\uFF09",placement:"top"},{default:u(()=>[le]),_:1})]),_:1})]),_:1})]),_:1}),e.ruleForm.menuType!="F"?(s(),d(t,{key:1,xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:u(()=>[l(E,{gutter:8},{default:u(()=>[l(t,{span:22},{default:u(()=>[l(n,{label:"\u7EC4\u4EF6\u5730\u5740"},{default:u(()=>[l(y,{modelValue:e.ruleForm.component,"onUpdate:modelValue":r[6]||(r[6]=o=>e.ruleForm.component=o),placeholder:"\u7EC4\u4EF6\u5730\u5740",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(t,{span:2},{default:u(()=>[l(A,{content:"\u83DC\u5355\u5BF9\u5E94\u7684\u5177\u4F53vue\u9875\u9762\u6587\u4EF6\u8DEF\u5F84views\u7684\u4E0B\u7EA7\u8DEF\u5F84/system/user/index",placement:"top"},{default:u(()=>[oe]),_:1})]),_:1})]),_:1})]),_:1})):f("",!0),e.ruleForm.menuType!="F"?(s(),d(t,{key:2,xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:u(()=>[l(E,{gutter:8},{default:u(()=>[l(t,{span:22},{default:u(()=>[l(n,{label:"\u8DEF\u7531\u5730\u5740"},{default:u(()=>[l(y,{modelValue:e.ruleForm.path,"onUpdate:modelValue":r[7]||(r[7]=o=>e.ruleForm.path=o),placeholder:"\u8BF7\u8F93\u5165\u8DEF\u7531\u5730\u5740",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(t,{span:2},{default:u(()=>[l(A,{content:"\u8981\u548C\u9875\u9762name\u4FDD\u6301\u4E00\u81F4:\u4F8B\u5982 /system/role",placement:"top"},{default:u(()=>[ae]),_:1})]),_:1})]),_:1})]),_:1})):f("",!0),l(t,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:u(()=>[l(n,{label:"\u83DC\u5355\u72B6\u6001",prop:"status"},{default:u(()=>[l(p,{modelValue:e.ruleForm.status,"onUpdate:modelValue":r[8]||(r[8]=o=>e.ruleForm.status=o)},{default:u(()=>[(s(!0),b(g,null,_(e.statusOptions,o=>(s(),d(m,{key:o.dictValue,label:o.dictValue},{default:u(()=>[F(V(o.dictLabel),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e.ruleForm.menuType!="F"?(s(),d(t,{key:3,xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:u(()=>[l(n,{label:"\u662F\u5426\u9690\u85CF"},{default:u(()=>[l(p,{modelValue:e.ruleForm.isHide,"onUpdate:modelValue":r[9]||(r[9]=o=>e.ruleForm.isHide=o)},{default:u(()=>[(s(!0),b(g,null,_(e.isHideOptions,o=>(s(),d(m,{key:o.dictValue,label:o.dictValue},{default:u(()=>[F(V(o.dictLabel),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})):f("",!0),e.ruleForm.menuType!="F"?(s(),d(t,{key:4,xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:u(()=>[l(n,{label:"\u662F\u5426\u7F13\u5B58"},{default:u(()=>[l(p,{modelValue:e.ruleForm.isKeepAlive,"onUpdate:modelValue":r[10]||(r[10]=o=>e.ruleForm.isKeepAlive=o)},{default:u(()=>[(s(!0),b(g,null,_(e.yesOrNoOptions,o=>(s(),d(m,{key:o.dictValue,label:o.dictValue},{default:u(()=>[F(V(o.dictLabel),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})):f("",!0),e.ruleForm.menuType!="F"?(s(),d(t,{key:5,xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:u(()=>[l(E,{gutter:8},{default:u(()=>[l(t,{span:22},{default:u(()=>[l(n,{label:"\u662F\u5426\u56FA\u5B9A"},{default:u(()=>[l(p,{modelValue:e.ruleForm.isAffix,"onUpdate:modelValue":r[11]||(r[11]=o=>e.ruleForm.isAffix=o)},{default:u(()=>[(s(!0),b(g,null,_(e.yesOrNoOptions,o=>(s(),d(m,{key:o.dictValue,label:o.dictValue},{default:u(()=>[F(V(o.dictLabel),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(t,{span:2},{default:u(()=>[e.ruleForm.menuType!="F"?(s(),d(A,{key:0,content:"\u662F\u5426\u8981\u56FA\u5B9A\u5230tag\u5934\u90E8",placement:"top"},{default:u(()=>[re]),_:1})):f("",!0)]),_:1})]),_:1})]),_:1})):f("",!0),e.ruleForm.menuType!="F"?(s(),d(t,{key:6,xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:u(()=>[l(n,{label:"\u662F\u5426\u5916\u94FE"},{default:u(()=>[l(p,{modelValue:e.ruleForm.isFrame,"onUpdate:modelValue":r[12]||(r[12]=o=>e.ruleForm.isFrame=o)},{default:u(()=>[(s(!0),b(g,null,_(e.yesOrNoOptions,o=>(s(),d(m,{key:o.dictValue,label:o.dictValue},{default:u(()=>[F(V(o.dictLabel),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})):f("",!0),e.ruleForm.menuType!="F"?(s(),d(t,{key:7,xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:u(()=>[l(n,{label:"\u94FE\u63A5\u5730\u5740"},{default:u(()=>[l(y,{modelValue:e.ruleForm.isLink,"onUpdate:modelValue":r[13]||(r[13]=o=>e.ruleForm.isLink=o),placeholder:"\u5916\u94FE/\u5185\u5D4C\u65F6\u94FE\u63A5\u5730\u5740\uFF08http:xxx.com\uFF09",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})):f("",!0),l(t,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:u(()=>[l(n,{label:"\u5907\u6CE8"},{default:u(()=>[l(y,{modelValue:e.ruleForm.remark,"onUpdate:modelValue":r[14]||(r[14]=o=>e.ruleForm.remark=o),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8\u5185\u5BB9",clearable:"",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}var be=q(x,[["render",me]]);export{be as default};
