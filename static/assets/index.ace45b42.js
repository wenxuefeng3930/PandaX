var me=Object.defineProperty;var te=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable;var ae=(e,t,c)=>t in e?me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[t]=c,ue=(e,t)=>{for(var c in t||(t={}))ce.call(t,c)&&ae(e,c,t[c]);if(te)for(var c of te(t))fe.call(t,c)&&ae(e,c,t[c]);return e};import{r as W,i as he,o as ye,t as Ce,k as p,a4 as Y,l as R,w as E,m as I,y as o,z as n,F as ge,b as O,a6 as C,E as Z,n as ne,C as B,D as re,X as $,W as ee,P as le,x as de,v as se,s as m}from"./vendor.14d7a511.js";import{s as A,_ as Fe,O as ke,K as Ee}from"./index.c04616ec.js";import{g as be,b as De}from"./api.509fbd7f.js";import{r as Ae}from"./dept.cf20d4c3.js";function Ve(e){return A({url:"/system/role/list",method:"get",params:e})}function ie(e){return A({url:"/system/role/"+e,method:"get"})}function _e(e){return A({url:"/system/role",method:"post",data:e})}function Be(e){return A({url:"/system/role",method:"put",data:e})}function Se(e){return A({url:"/system/role/dataScope",method:"put",data:e})}function ve(e,t){return A({url:"/system/role/changeStatus",method:"put",data:{roleId:e,status:t}})}function Ne(e){return A({url:"/system/role/"+e,method:"delete"})}function Ke(e){return A({url:"/system/role/export",method:"get",params:e})}const we={name:"systemRole",setup(){const{proxy:e}=ge(),t=W(null),c=W(null),s=W(null),V=W(null),a=he({activeName:"first",loading:!0,ids:[],total:0,title:"",open:!1,roleList:[],showSearch:!0,single:!0,multiple:!0,statusOptions:[],menuOptions:[],apiOptions:[],menuCheckedKeys:[],apiCheckedKeys:[],deptOptions:[],openDataScope:!1,menuExpand:!1,menuNodeAll:!1,apiExpand:!1,apiNodeAll:!1,deptExpand:!0,deptNodeAll:!1,queryParams:{pageNum:1,pageSize:10,roleName:void 0,roleKey:void 0,status:void 0},dataScopeOptions:[{value:"1",label:"\u5168\u90E8\u6570\u636E\u6743\u9650"},{value:"2",label:"\u81EA\u5B9A\u6570\u636E\u6743\u9650"},{value:"3",label:"\u672C\u90E8\u95E8\u6570\u636E\u6743\u9650"},{value:"4",label:"\u672C\u90E8\u95E8\u53CA\u4EE5\u4E0B\u6570\u636E\u6743\u9650"},{value:"5",label:"\u4EC5\u672C\u4EBA\u6570\u636E\u6743\u9650"}],roleForm:{},rules:{roleName:[{required:!0,message:"\u89D2\u8272\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],roleKey:[{required:!0,message:"\u6743\u9650\u5B57\u7B26\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],roleSort:[{required:!0,message:"\u89D2\u8272\u987A\u5E8F\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}}),g=()=>{a.menuExpand=!1,a.menuNodeAll=!1,a.apiExpand=!1,a.apiNodeAll=!1,a.deptExpand=!0,a.deptNodeAll=!1,a.roleForm={roleId:void 0,roleName:void 0,roleKey:void 0,roleSort:0,status:"0",menuIds:[],apiIds:[],deptIds:[],menuCheckStrictly:!0,deptCheckStrictly:!0,remark:void 0},a.roleForm={}},h=()=>{a.queryParams.pageNum=1,a.queryParams.pageSize=10,a.queryParams.roleName="",a.queryParams.roleKey="",a.queryParams.status="",v()},F=()=>{a.loading=!0,Ve(a.queryParams).then(u=>{a.roleList=u.data.data,a.total=u.data.total,a.loading=!1})},z=u=>{a.queryParams.pageSize=u,v()},y=u=>{a.queryParams.pageNum=u,v()},N=()=>{a.roleForm.roleId!=null&&(a.roleForm.deptIds=S(),Se(a.roleForm).then(u=>{O.success("\u4FEE\u6539\u6210\u529F"),a.openDataScope=!1,F()}))},S=()=>{const u=C(V);let r=u.getCheckedKeys(),i=u.getHalfCheckedKeys();return r.unshift.apply(r,i),r},v=()=>{a.queryParams.pageNum=1,F()},k=()=>{Ee().then(u=>{a.menuOptions=u.data})},P=()=>{De({}).then(u=>{const r=u.data;a.apiOptions=L(r)})},L=u=>{const r=new Object;u&&u.map(d=>{d.onlyId="p:"+d.path+"m:"+d.method,Object.prototype.hasOwnProperty.call(r,d.apiGroup)?r[d.apiGroup].push(d):Object.assign(r,{[d.apiGroup]:[d]})});const i=[];for(const d in r){const f={onlyId:d,description:d+"\u7EC4",children:r[d]};i.push(f)}return i},M=u=>{a.ids=u.map(r=>r.roleId),a.single=u.length!=1,a.multiple=!u.length},j=u=>{let r=u.status==="0"?"\u542F\u7528":"\u505C\u7528";Z({closeOnClickModal:!1,closeOnPressEscape:!1,title:"\u8B66\u544A",message:'\u786E\u8BA4\u8981"'+r+'""'+u.roleName+'"\u89D2\u8272\u5417?',showCancelButton:!0,confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88"}).then(function(){return ve(u.roleId,u.status)}).then(()=>{O.success(r+"\u6210\u529F")}).catch(function(){u.status=u.status==="0"?"1":"0"})},Q=u=>{g();const r=K(u.roleId);ie(u.roleId).then(i=>{a.roleForm=i.data,a.openDataScope=!0,ne(()=>{r.then(d=>{C(V).setCheckedKeys(d.checkedKeys)})}),a.title="\u5206\u914D\u6570\u636E\u6743\u9650"})},G=()=>{g(),k(),P(),a.open=!0,a.title="\u6DFB\u52A0\u89D2\u8272"},H=u=>{const r=u.roleId;P();const i=w(r);ie(r).then(d=>{a.roleForm=d.data,a.open=!0,a.title="\u4FEE\u6539\u89D2\u8272",ne(()=>{i.then(f=>{a.menuCheckedKeys=f.checkedKeys,C(c).setCheckedKeys(f.checkedKeys)}),be({roleKey:a.roleForm.roleKey}).then(f=>{let U=[];f.data&&f.data.map(oe=>{U.push("p:"+oe.path+"m:"+oe.method)}),console.log("apiKes",U),C(s).setCheckedKeys(U)})})})},X=u=>{const r=u.roleId||a.ids;Z({message:'\u662F\u5426\u786E\u8BA4\u5220\u9664\u89D2\u8272\u7F16\u53F7\u4E3A"'+r+'"\u7684\u6570\u636E\u9879?',title:"\u8B66\u544A",showCancelButton:!0,confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88"}).then(function(){return Ne(r)}).then(()=>{F(),O.success("\u5220\u9664\u6210\u529F")})},b=()=>{const u=a.queryParams;Z({message:"\u662F\u5426\u786E\u8BA4\u5BFC\u51FA\u6240\u6709\u89D2\u8272\u6570\u636E\u9879?",title:"\u8B66\u544A",showCancelButton:!0,confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88"}).then(function(){return Ke(u)}).then(r=>{})},K=u=>Ae(u).then(r=>(a.deptOptions=r.data.depts,r.data)),w=u=>ke(u).then(r=>(a.menuOptions=r.data.menus,r.data)),x=()=>{const u=C(t);!u||u.validate(r=>{r&&(a.roleForm!=null&&a.roleForm.roleId!=null?(a.roleForm.menuIds=q(),a.roleForm.apiIds=D(),Be(a.roleForm).then(()=>{O.success("\u4FEE\u6539\u6210\u529F"),a.open=!1,F()})):(a.roleForm.menuIds=q(),a.roleForm.apiIds=D(),_e(a.roleForm).then(()=>{O.success("\u65B0\u589E\u6210\u529F"),a.open=!1,F()})))})},T=()=>{a.open=!1,g()},q=()=>{const u=C(c);if(!u)return;let r=u.getCheckedKeys(),i=u.getHalfCheckedKeys();return r.unshift.apply(r,i),r},D=()=>{const u=C(s);if(!u)return;let r=u.getCheckedNodes(!0),i=[];return r&&r.map(d=>{let f={path:d.path,method:d.method};i.push(f)}),i},J=()=>{a.openDataScope=!1,g()},l=u=>{const r=C(V);u!=="2"&&r.setCheckedKeys([])},_=(u,r)=>{if(r=="menu"){let i=a.menuOptions;for(let d=0;d<i.length;d++){const f=C(c);console.log("treeList",i[d]),f.store.nodesMap[i[d].menuId].expanded=u}}else if(r=="api"){let i=a.apiOptions;for(let d=0;d<i.length;d++){const f=C(s);console.log("treeList",i[d]),console.log("formWrap",f),f.store.nodesMap[i[d].onlyId].expanded=u}}else if(r=="dept"){let i=a.deptOptions;for(let d=0;d<i.length;d++){const f=C(V);f.store.nodesMap[i[d].deptId].expanded=u}}},pe=(u,r)=>{r=="menu"?C(c).setCheckedNodes(u?a.menuOptions:[]):r=="api"?C(s).setCheckedNodes(u?a.apiOptions:[]):r=="dept"&&C(V).setCheckedNodes(u?a.deptOptions:[])};return ye(()=>{F(),e.getDicts("sys_normal_disable").then(u=>{a.statusOptions=u.data})}),ue({roleFormRef:t,menuRef:c,deptRef:V,apiRef:s,handleAdd:G,handleUpdate:H,handleDelete:X,handleExport:b,handleSelectionChange:M,handleDataScope:Q,handleStatusChange:j,handleSizeChange:z,handleCurrentChange:y,submitForm:x,handleQuery:v,resetQuery:h,submitDataScope:N,getDeptAllCheckedKeys:S,getRoleMenuTreeselect:w,cancel:T,dataScopeSelectChange:l,cancelDataScope:J,getList:F,handleCheckedTreeExpand:_,handleCheckedTreeNodeAll:pe},Ce(a))}},Ie={class:"app-container"},Oe=m("\u641C\u7D22 "),ze=m("\u91CD\u7F6E "),Pe=m("\u65B0\u589E "),Te=m("\u5220\u9664 "),qe=m("\u5BFC\u51FA "),Ue=m("\u4FEE\u6539 "),We=m("\u6570\u636E\u6743\u9650 "),Re=m("\u5220\u9664 "),Le=m("\u5C55\u5F00/\u6298\u53E0 "),Me=m("\u5168\u9009/\u5168\u4E0D\u9009 "),je=m("\u5C55\u5F00/\u6298\u53E0 "),Qe=m("\u5168\u9009/\u5168\u4E0D\u9009 "),Ge={class:"dialog-footer"},He=m("\u786E \u5B9A"),Xe=m("\u53D6 \u6D88"),xe=m("\u5C55\u5F00/\u6298\u53E0 "),Je=m("\u5168\u9009/\u5168\u4E0D\u9009 "),Ye={class:"dialog-footer"},Ze=m("\u786E \u5B9A"),$e=m("\u53D6 \u6D88");function el(e,t,c,s,V,a){const g=p("el-input"),h=p("el-form-item"),F=p("el-option"),z=p("el-select"),y=p("el-button"),N=p("el-form"),S=p("el-col"),v=p("el-row"),k=p("el-table-column"),P=p("el-switch"),L=p("el-table"),M=p("el-divider"),j=p("el-pagination"),Q=p("el-card"),G=p("el-input-number"),H=p("el-radio"),X=p("el-radio-group"),b=p("el-checkbox"),K=p("el-tree"),w=p("el-tab-pane"),x=p("el-tabs"),T=p("el-dialog"),q=Y("drag"),D=Y("auth"),J=Y("loading");return B(),R("div",Ie,[E(I("div",null,null,512),[[q,[".app-container .el-dialog",".app-container .el-dialog__header"]]]),o(Q,{shadow:"always"},{default:n(()=>[o(N,{model:e.queryParams,ref:"queryForm",inline:!0},{default:n(()=>[o(h,{label:"\u89D2\u8272\u540D\u79F0",prop:"roleName"},{default:n(()=>[o(g,{placeholder:"\u89D2\u8272\u540D\u79F0\u6A21\u7CCA\u67E5\u8BE2",clearable:"",size:"small",onKeyup:re(s.handleQuery,["enter"]),style:{width:"240px"},modelValue:e.queryParams.roleName,"onUpdate:modelValue":t[0]||(t[0]=l=>e.queryParams.roleName=l)},null,8,["onKeyup","modelValue"])]),_:1}),o(h,{label:"\u6743\u9650\u5B57\u7B26",prop:"roleKey"},{default:n(()=>[o(g,{placeholder:"\u6743\u9650\u5B57\u7B26\u6A21\u7CCA\u67E5\u8BE2",clearable:"",size:"small",onKeyup:re(s.handleQuery,["enter"]),style:{width:"240px"},modelValue:e.queryParams.roleKey,"onUpdate:modelValue":t[1]||(t[1]=l=>e.queryParams.roleKey=l)},null,8,["onKeyup","modelValue"])]),_:1}),o(h,{label:"\u72B6\u6001",prop:"status"},{default:n(()=>[o(z,{modelValue:e.queryParams.status,"onUpdate:modelValue":t[2]||(t[2]=l=>e.queryParams.status=l),placeholder:"\u89D2\u8272\u72B6\u6001",clearable:"",size:"small",style:{width:"240px"}},{default:n(()=>[(B(!0),R($,null,ee(e.statusOptions,l=>(B(),le(F,{key:l.dictValue,label:l.dictLabel,value:l.dictValue},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(h,null,{default:n(()=>[o(y,{type:"primary",icon:"el-icon-search",size:"mini",onClick:s.handleQuery},{default:n(()=>[Oe]),_:1},8,["onClick"]),o(y,{icon:"el-icon-refresh",size:"mini",onClick:s.resetQuery},{default:n(()=>[ze]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"]),o(v,{gutter:10,"custom-class":"mb8"},{default:n(()=>[o(S,{span:1.5},{default:n(()=>[E(o(y,{type:"primary",plain:"",icon:"el-icon-plus",size:"mini",onClick:s.handleAdd},{default:n(()=>[Pe]),_:1},8,["onClick"]),[[D,"system:role:add"]])]),_:1},8,["span"]),o(S,{span:1.5},{default:n(()=>[E(o(y,{type:"danger",plain:"",icon:"el-icon-delete",size:"mini",disabled:e.multiple,onClick:s.handleDelete},{default:n(()=>[Te]),_:1},8,["disabled","onClick"]),[[D,"system:role:delete"]])]),_:1},8,["span"]),o(S,{span:1.5},{default:n(()=>[E(o(y,{type:"warning",plain:"",icon:"el-icon-download",size:"mini",onClick:s.handleExport},{default:n(()=>[qe]),_:1},8,["onClick"]),[[D,"system:role:export"]])]),_:1},8,["span"])]),_:1}),E(o(L,{data:e.roleList,onSelectionChange:s.handleSelectionChange},{default:n(()=>[o(k,{type:"selection",width:"55",align:"center"}),o(k,{label:"\u89D2\u8272\u7F16\u53F7",prop:"roleId",width:"120"}),o(k,{label:"\u89D2\u8272\u540D\u79F0",prop:"roleName","show-overflow-tooltip":!0,width:"150"}),o(k,{label:"\u6743\u9650\u5B57\u7B26",prop:"roleKey","show-overflow-tooltip":!0,width:"150"}),o(k,{label:"\u663E\u793A\u987A\u5E8F",prop:"roleSort",width:"100"}),o(k,{label:"\u72B6\u6001",align:"center",width:"100"},{default:n(l=>[o(P,{modelValue:l.row.status,"onUpdate:modelValue":_=>l.row.status=_,"active-value":"0","inactive-value":"1",onClick:_=>s.handleStatusChange(l.row)},null,8,["modelValue","onUpdate:modelValue","onClick"])]),_:1}),o(k,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"create_time",width:"180"},{default:n(l=>[I("span",null,de(e.dateStrFormat(l.row.create_time)),1)]),_:1}),o(k,{label:"\u64CD\u4F5C",align:"center","class-name":"small-padding fixed-width"},{default:n(l=>[E(o(y,{size:"mini",type:"text",icon:"el-icon-edit",onClick:_=>s.handleUpdate(l.row)},{default:n(()=>[Ue]),_:2},1032,["onClick"]),[[D,"system:role:edit"]]),o(y,{size:"mini",type:"text",icon:"el-icon-circle-check",onClick:_=>s.handleDataScope(l.row)},{default:n(()=>[We]),_:2},1032,["onClick"]),E(o(y,{size:"mini",type:"text",icon:"el-icon-delete",onClick:_=>s.handleDelete(l.row)},{default:n(()=>[Re]),_:2},1032,["onClick"]),[[D,"system:role:delete"]])]),_:1})]),_:1},8,["data","onSelectionChange"]),[[J,e.loading]]),E(I("div",null,[o(M),o(j,{background:"",total:e.total,"current-page":e.queryParams.pageNum,"page-size":e.queryParams.pageSize,layout:"total, sizes, prev, pager, next, jumper",onSizeChange:s.handleSizeChange,onCurrentChange:s.handleCurrentChange},null,8,["total","current-page","page-size","onSizeChange","onCurrentChange"])],512),[[se,e.total>0]])]),_:1}),o(T,{title:e.title,modelValue:e.open,"onUpdate:modelValue":t[17]||(t[17]=l=>e.open=l),width:"700px"},{footer:n(()=>[I("span",Ge,[o(y,{type:"primary",size:"small",onClick:s.submitForm},{default:n(()=>[He]),_:1},8,["onClick"]),o(y,{size:"small",onClick:s.cancel},{default:n(()=>[Xe]),_:1},8,["onClick"])])]),default:n(()=>[o(N,{ref:"roleFormRef",model:e.roleForm,rules:e.rules,"label-width":"120px","label-position":"right"},{default:n(()=>[o(h,{label:"\u89D2\u8272\u540D\u79F0",prop:"roleName"},{default:n(()=>[o(g,{modelValue:e.roleForm.roleName,"onUpdate:modelValue":t[3]||(t[3]=l=>e.roleForm.roleName=l),placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0"},null,8,["modelValue"])]),_:1}),o(h,{label:"\u6743\u9650\u5B57\u7B26",prop:"roleKey"},{default:n(()=>[o(g,{modelValue:e.roleForm.roleKey,"onUpdate:modelValue":t[4]||(t[4]=l=>e.roleForm.roleKey=l),placeholder:"\u8BF7\u8F93\u5165\u6743\u9650\u5B57\u7B26"},null,8,["modelValue"])]),_:1}),o(h,{label:"\u89D2\u8272\u987A\u5E8F",prop:"roleSort"},{default:n(()=>[o(G,{modelValue:e.roleForm.roleSort,"onUpdate:modelValue":t[5]||(t[5]=l=>e.roleForm.roleSort=l),"controls-position":"right",min:0},null,8,["modelValue"])]),_:1}),o(h,{label:"\u72B6\u6001"},{default:n(()=>[o(X,{modelValue:e.roleForm.status,"onUpdate:modelValue":t[6]||(t[6]=l=>e.roleForm.status=l)},{default:n(()=>[(B(!0),R($,null,ee(e.statusOptions,l=>(B(),le(H,{key:l.dictValue,label:l.dictValue},{default:n(()=>[m(de(l.dictLabel),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(h,{label:"\u6743\u9650\u8BBE\u7F6E"},{default:n(()=>[o(x,{modelValue:e.activeName,"onUpdate:modelValue":t[15]||(t[15]=l=>e.activeName=l),onTabClick:e.handleClick},{default:n(()=>[o(w,{label:"\u83DC\u5355\u6743\u9650",name:"first"},{default:n(()=>[o(b,{modelValue:e.menuExpand,"onUpdate:modelValue":t[7]||(t[7]=l=>e.menuExpand=l),onChange:t[8]||(t[8]=l=>s.handleCheckedTreeExpand(l,"menu"))},{default:n(()=>[Le]),_:1},8,["modelValue"]),o(b,{modelValue:e.menuNodeAll,"onUpdate:modelValue":t[9]||(t[9]=l=>e.menuNodeAll=l),onChange:t[10]||(t[10]=l=>s.handleCheckedTreeNodeAll(l,"menu"))},{default:n(()=>[Me]),_:1},8,["modelValue"]),o(K,{class:"tree-border",data:e.menuOptions,"show-checkbox":"",ref:"menuRef","node-key":"menuId","empty-text":"\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u540E",props:{label:"menuName",children:"children"},"default-checked-keys":e.menuCheckedKeys},null,8,["data","default-checked-keys"])]),_:1}),o(w,{label:"API\u6743\u9650",name:"second"},{default:n(()=>[o(b,{modelValue:e.apiExpand,"onUpdate:modelValue":t[11]||(t[11]=l=>e.apiExpand=l),onChange:t[12]||(t[12]=l=>s.handleCheckedTreeExpand(l,"api"))},{default:n(()=>[je]),_:1},8,["modelValue"]),o(b,{modelValue:e.apiNodeAll,"onUpdate:modelValue":t[13]||(t[13]=l=>e.apiNodeAll=l),onChange:t[14]||(t[14]=l=>s.handleCheckedTreeNodeAll(l,"api"))},{default:n(()=>[Qe]),_:1},8,["modelValue"]),o(K,{class:"tree-border",data:e.apiOptions,"show-checkbox":"",ref:"apiRef","node-key":"onlyId","empty-text":"\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u540E",props:{children:"children",label:"description"},"default-checked-keys":e.apiCheckedKeys},null,8,["data","default-checked-keys"])]),_:1})]),_:1},8,["modelValue","onTabClick"])]),_:1}),o(h,{label:"\u5907\u6CE8"},{default:n(()=>[o(g,{modelValue:e.roleForm.remark,"onUpdate:modelValue":t[16]||(t[16]=l=>e.roleForm.remark=l),type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue"]),o(T,{title:e.title,modelValue:e.openDataScope,"onUpdate:modelValue":t[25]||(t[25]=l=>e.openDataScope=l),width:"700px"},{footer:n(()=>[I("span",Ye,[o(y,{type:"primary",size:"small",onClick:s.submitDataScope},{default:n(()=>[Ze]),_:1},8,["onClick"]),o(y,{size:"small",onClick:s.cancelDataScope},{default:n(()=>[$e]),_:1},8,["onClick"])])]),default:n(()=>[o(N,{model:e.roleForm,"label-width":"80px"},{default:n(()=>[o(h,{label:"\u89D2\u8272\u540D\u79F0"},{default:n(()=>[o(g,{modelValue:e.roleForm.roleName,"onUpdate:modelValue":t[18]||(t[18]=l=>e.roleForm.roleName=l),disabled:!0},null,8,["modelValue"])]),_:1}),o(h,{label:"\u6743\u9650\u5B57\u7B26"},{default:n(()=>[o(g,{modelValue:e.roleForm.roleKey,"onUpdate:modelValue":t[19]||(t[19]=l=>e.roleForm.roleKey=l),disabled:!0},null,8,["modelValue"])]),_:1}),o(h,{label:"\u6743\u9650\u8303\u56F4"},{default:n(()=>[o(z,{modelValue:e.roleForm.dataScope,"onUpdate:modelValue":t[20]||(t[20]=l=>e.roleForm.dataScope=l),onChange:s.dataScopeSelectChange},{default:n(()=>[(B(!0),R($,null,ee(e.dataScopeOptions,l=>(B(),le(F,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"])]),_:1}),E(o(h,{label:"\u6570\u636E\u6743\u9650"},{default:n(()=>[o(b,{modelValue:e.deptExpand,"onUpdate:modelValue":t[21]||(t[21]=l=>e.deptExpand=l),onChange:t[22]||(t[22]=l=>s.handleCheckedTreeExpand(l,"dept"))},{default:n(()=>[xe]),_:1},8,["modelValue"]),o(b,{modelValue:e.deptNodeAll,"onUpdate:modelValue":t[23]||(t[23]=l=>e.deptNodeAll=l),onChange:t[24]||(t[24]=l=>s.handleCheckedTreeNodeAll(l,"dept"))},{default:n(()=>[Je]),_:1},8,["modelValue"]),o(K,{class:"tree-border",data:e.deptOptions,"show-checkbox":"","default-expand-all":"",ref:"deptRef","node-key":"deptId","empty-text":"\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u540E",props:{label:"deptName",children:"children"}},null,8,["data"])]),_:1},512),[[se,e.roleForm.dataScope==2]])]),_:1},8,["model"])]),_:1},8,["title","modelValue"])])}var rl=Fe(we,[["render",el]]);export{rl as default};
