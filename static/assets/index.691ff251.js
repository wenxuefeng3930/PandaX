var T=Object.defineProperty;var x=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var w=(l,u,t)=>u in l?T(l,u,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[u]=t,B=(l,u)=>{for(var t in u||(u={}))z.call(u,t)&&w(l,t,u[t]);if(x)for(var t of x(u))N.call(u,t)&&w(l,t,u[t]);return l};import{i as O,o as j,t as I,k as n,l as f,y as r,z as o,C as a,X as _,W as F,w as K,v as L,P as i,K as A,m as C,F as M,s as D}from"./vendor.14d7a511.js";import{_ as P}from"./index.d7413c26.js";const W=[{label:"\u59D3\u540D",prop:"name",placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D",clearable:!0,disabled:!1,required:!0,type:"input",i18n:!1,i18nText:"",isShow:!0,xs:24,sm:12,md:8,lg:6,xl:4},{label:"\u90AE\u7BB1",prop:"email",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u90AE\u7BB1",clearable:!0,disabled:!1,required:!0,type:"input",i18n:!1,i18nText:"",isShow:!0,xs:24,sm:12,md:8,lg:6,xl:4},{label:"\u767B\u9646\u65F6\u95F4",prop:"autograph",placeholder:"\u9009\u62E9\u65F6\u95F4",clearable:!0,disabled:!1,required:!0,type:"date",i18n:!1,i18nText:"",isShow:!0,xs:24,sm:12,md:8,lg:6,xl:4},{label:"\u804C\u52A1",prop:"occupation",placeholder:"\u8BF7\u9009\u62E9\u804C\u52A1",clearable:!0,disabled:!1,required:!0,type:"select",i18n:!1,i18nText:"",options:[{label:"\u8BA1\u7B97\u673A / \u4E92\u8054\u7F51 / \u901A\u4FE1",value:"1"},{label:"\u751F\u4EA7 / \u5DE5\u827A / \u5236\u9020",value:"2"},{label:"\u533B\u7597 / \u62A4\u7406 / \u5236\u836F",value:"3"}],isShow:!0,xs:24,sm:12,md:8,lg:6,xl:4},{label:"",prop:"",placeholder:"",clearable:!0,disabled:!1,required:!0,type:"",i18n:!1,i18nText:"",isShow:!0,xs:24,sm:24,md:24,lg:24,xl:24},{label:"\u5907\u6CE8",prop:"remarks",placeholder:"\u8BF7\u8F93\u5165",clearable:!0,disabled:!1,required:!0,type:"textarea",i18n:!1,i18nText:"",isShow:!0,xs:24,sm:24,md:24,lg:24,xl:24}],X={name:"pagesDynamicForm",setup(){const{proxy:l}=M(),u=O({formData:W,form:{name:"",email:"",autograph:"",occupation:"",list:[{year:"",month:"",day:""}],remarks:""}}),t=()=>{u.form.list.push({year:"",month:"",day:""})},p=m=>{u.form.list.splice(m,1)},V=()=>{l.$refs.formRulesOneRef.validate(m=>{if(m)l.$message.success("\u9A8C\u8BC1\u6210\u529F");else return!1})},E=()=>{l.$refs.formRulesOneRef.resetFields()};return j(()=>{}),B({onAddRow:t,onDelRow:p,onSubmitForm:V,onResetForm:E},I(u))}},G={class:"dynamic-form-container"},H=C("span",{class:"ml10"},"\u5E74\u5EA6",-1),J={class:"flex-margin"},Q=D("\u91CD\u7F6E\u8868\u5355"),Y=D("\u9A8C\u8BC1\u8868\u5355");function Z(l,u,t,p,V,E){const m=n("el-input"),k=n("el-date-picker"),U=n("el-option"),R=n("el-select"),h=n("el-form-item"),b=n("el-button"),y=n("el-col"),g=n("el-row"),q=n("el-form"),S=n("el-card");return a(),f("div",G,[r(S,{shadow:"hover",header:"\u52A8\u6001\u590D\u6742\u8868\u5355"},{default:o(()=>[r(q,{model:l.form,ref:"formRulesOneRef",size:"small","label-width":"100px",class:"mt35"},{default:o(()=>[r(g,{gutter:35},{default:o(()=>[(a(!0),f(_,null,F(l.formData,(e,$)=>K((a(),i(y,{xs:e.xs,sm:e.sm,md:e.md,lg:e.md,xl:e.xl,class:"mb20",key:$},{default:o(()=>[e.type!==""?(a(),f(_,{key:0},[e.type!==""?(a(),i(h,{key:0,label:e.label,prop:e.prop,rules:[{required:e.required,message:`${e.label}\u4E0D\u80FD\u4E3A\u7A7A`,trigger:e.type==="input"?"blur":"change"}]},{default:o(()=>[e.type==="input"?(a(),i(m,{key:0,modelValue:l.form[e.prop],"onUpdate:modelValue":s=>l.form[e.prop]=s,placeholder:e.placeholder,clearable:"",style:{width:"100%"},disabled:e.disabled},null,8,["modelValue","onUpdate:modelValue","placeholder","disabled"])):e.type==="date"?(a(),i(k,{key:1,modelValue:l.form[e.prop],"onUpdate:modelValue":s=>l.form[e.prop]=s,type:"date",placeholder:e.placeholder,style:{width:"100%"},disabled:e.disabled},null,8,["modelValue","onUpdate:modelValue","placeholder","disabled"])):e.type==="select"?(a(),i(R,{key:2,modelValue:l.form[e.prop],"onUpdate:modelValue":s=>l.form[e.prop]=s,placeholder:e.placeholder,style:{width:"100%"},disabled:e.disabled},{default:o(()=>[(a(!0),f(_,null,F(e.options,s=>(a(),i(U,{key:s.value,label:s.label,value:s.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder","disabled"])):A("",!0),e.type==="textarea"?(a(),i(m,{key:3,type:"textarea",modelValue:l.form[e.prop],"onUpdate:modelValue":s=>l.form[e.prop]=s,placeholder:e.placeholder,clearable:"",style:{width:"100%"},disabled:e.disabled},null,8,["modelValue","onUpdate:modelValue","placeholder","disabled"])):A("",!0)]),_:2},1032,["label","prop","rules"])):A("",!0)],64)):(a(!0),f(_,{key:1},F(l.form.list,(s,d)=>(a(),i(g,{gutter:35,key:d},{default:o(()=>[r(y,{xs:24,sm:12,md:8,lg:8,xl:6,class:"mb20"},{default:o(()=>[r(h,{label:"\u5E74\u5EA6",prop:`list[${d}].year`,rules:[{required:!0,message:"\u5E74\u5EA6\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]},{label:o(()=>[d===0?(a(),i(b,{key:0,type:"primary",icon:"el-icon-plus",circle:"",size:"mini",onClick:p.onAddRow},null,8,["onClick"])):(a(),i(b,{key:1,type:"danger",icon:"el-icon-delete",circle:"",size:"mini",onClick:c=>p.onDelRow(d)},null,8,["onClick"])),H]),default:o(()=>[r(m,{modelValue:l.form.list[d].year,"onUpdate:modelValue":c=>l.form.list[d].year=c,style:{width:"100%"},placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:2},1024),r(y,{xs:24,sm:12,md:8,lg:8,xl:6,class:"mb20"},{default:o(()=>[r(h,{label:"\u6708\u5EA6",prop:`list[${d}].month`,rules:[{required:!0,message:"\u6708\u5EA6\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]},{default:o(()=>[r(m,{modelValue:l.form.list[d].month,"onUpdate:modelValue":c=>l.form.list[d].month=c,style:{width:"100%"},placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:2},1024),r(y,{xs:24,sm:12,md:8,lg:8,xl:6,class:"mb20"},{default:o(()=>[r(h,{label:"\u65E5\u5EA6",prop:`list[${d}].day`,rules:[{required:!0,message:"\u65E5\u5EA6\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]},{default:o(()=>[r(m,{modelValue:l.form.list[d].day,"onUpdate:modelValue":c=>l.form.list[d].day=c,style:{width:"100%"},placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:2},1024)]),_:2},1024))),128))]),_:2},1032,["xs","sm","md","lg","xl"])),[[L,e.isShow]])),128))]),_:1})]),_:1},8,["model"])]),_:1}),r(g,{class:"flex mt15"},{default:o(()=>[C("div",J,[r(b,{size:"small",icon:"el-icon-refresh-right",onClick:p.onResetForm},{default:o(()=>[Q]),_:1},8,["onClick"]),r(b,{size:"small",type:"primary",icon:"iconfont icon-shuxing",onClick:p.onSubmitForm},{default:o(()=>[Y]),_:1},8,["onClick"])])]),_:1})])}var oe=P(X,[["render",Z]]);export{oe as default};
