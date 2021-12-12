import{i as x}from"./index.7e63b932.js";import{C as d}from"./countUp.min.90cf0ff4.js";import{_ as O,u as j,f as U}from"./index.d7413c26.js";import{h as H,i as V,I as w,o as T,a5 as P,O as q,k as m,l as h,y as t,z as o,n as D,C as c,m as e,a6 as l,x as u,X as C,W as v,P as J,p as N,J as B,A as W,B as X,F as G}from"./vendor.14d7a511.js";const K=[{title:"\u4ECA\u65E5\u8BBF\u95EE\u4EBA\u6570",titleNum:"123",tip:"\u5728\u573A\u4EBA\u6570",tipNum:"911",color:"#F95959",iconColor:"#F86C6B",icon:"iconfont icon-jinridaiban"},{title:"\u5B9E\u9A8C\u5BA4\u603B\u6570",titleNum:"123",tip:"\u4F7F\u7528\u4E2D",tipNum:"611",color:"#8595F4",iconColor:"#92A1F4",icon:"iconfont icon-AIshiyanshi"},{title:"\u7533\u8BF7\u4EBA\u6570\uFF08\u6708\uFF09",titleNum:"123",tip:"\u901A\u8FC7\u4EBA\u6570",tipNum:"911",color:"#FEBB50",iconColor:"#FDC566",icon:"iconfont icon-shenqingkaiban"}],Q=[{icon:"iconfont icon-yangan",label:"\u70DF\u611F",value:"2.1%OBS/M",iconColor:"#F72B3F"},{icon:"iconfont icon-wendu",label:"\u6E29\u5EA6",value:"30\u2103",iconColor:"#91BFF8"},{icon:"iconfont icon-shidu",label:"\u6E7F\u5EA6",value:"57%RH",iconColor:"#88D565"},{icon:"iconfont icon-zaosheng",label:"\u566A\u58F0",value:"57DB",iconColor:"#FBD4A0"}],Y=[{time1:"\u4ECA\u5929",time2:"12:20:30",title:"\u66F4\u540D",label:"\u6B63\u5F0F\u66F4\u540D\u4E3A PandaUi"},{time1:"02-17",time2:"12:20:30",title:"\u9875\u9762",label:"\u5B8C\u6210\u5BF9\u9996\u9875\u7684\u5F00\u53D1"},{time1:"02-14",time2:"12:20:30",title:"\u9875\u9762",label:"\u65B0\u589E\u4E2A\u4EBA\u4E2D\u5FC3"}];const I=f=>(W("data-v-b659d4be"),f=f(),X(),f),Z={class:"home-container"},ee={class:"home-card-item home-card-first"},te={class:"flex-margin flex"},ae=["src"],se={class:"home-card-first-right ml15"},oe={class:"flex-margin"},ie={class:"home-card-first-right-title"},ue={class:"home-card-first-right-msg mt5"},le={class:"home-card-item-flex"},ne={class:"home-card-item-title pb3"},re=["id"],ce={class:"home-card-item-tip pb3"},de=["id"],me={class:"home-monitor"},he={class:"flex-warp"},_e={class:"flex-warp-item-box"},fe={class:"pl5"},pe={class:"mt10"},be={class:"home-dynamic"},Fe={class:"home-dynamic-item-left"},ge={class:"home-dynamic-item-left-time1 mb5"},ye={class:"home-dynamic-item-left-time2"},Ce=I(()=>e("div",{class:"home-dynamic-item-line"},[e("i",{class:"iconfont icon-fangkuang"})],-1)),ve={class:"home-dynamic-item-right"},Be={class:"home-dynamic-item-right-title mb5"},Ae=I(()=>e("i",{class:"el-icon-s-comment"},null,-1)),Ee={class:"home-dynamic-item-right-label"},xe=H({setup(f){const{proxy:A}=G(),E=j(),n=V({topCardItemList:K,environmentList:Q,activitiesList:Y,tableData:{data:[{date:"2016-05-02",name:"1\u53F7\u5B9E\u9A8C\u5BA4",address:"\u70DF\u611F2.1%OBS/M"},{date:"2016-05-04",name:"2\u53F7\u5B9E\u9A8C\u5BA4",address:"\u6E29\u5EA630\u2103"},{date:"2016-05-01",name:"3\u53F7\u5B9E\u9A8C\u5BA4",address:"\u6E7F\u5EA657%RH"}]},myCharts:[]}),p=w(()=>E.state.userInfos.userInfos),$=w(()=>U(new Date)),L=()=>{D(()=>{new d("titleNum1",Math.random()*1e4).start(),new d("titleNum2",Math.random()*1e4).start(),new d("titleNum3",Math.random()*1e4).start(),new d("tipNum1",Math.random()*1e3).start(),new d("tipNum2",Math.random()*1e3).start(),new d("tipNum3",Math.random()*1e3).start()})},S=()=>{const s=x(A.$refs.homeLaboratoryRef),b={grid:{top:50,right:20,bottom:30,left:30},tooltip:{trigger:"axis"},legend:{data:["\u9884\u8D2D\u961F\u5217","\u6700\u65B0\u6210\u4EA4\u4EF7"],right:13},color:["#63caff","#49beff","#03387a","#03387a","#03387a","#6c93ee","#a9abff","#f7a23f","#27bae7","#ff6d9d","#cb79ff","#f95b5a","#ccaf27","#38b99c","#93d0ff","#bd74e0","#fd77da","#dea700"],xAxis:{data:["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"]},yAxis:[{type:"value",name:"\u4EF7\u683C"}],series:[{name:"\u9884\u8D2D\u961F\u5217",type:"bar",data:[200,85,112,275,305,415,441,405,275,305,415,441],itemStyle:{barBorderRadius:[4,4,0,0],color:{x:0,y:0,x2:0,y2:1,type:"linear",global:!1,colorStops:[{offset:0,color:"#0b9eff"},{offset:1,color:"#63caff"}]}}},{name:"\u6700\u65B0\u6210\u4EA4\u4EF7",type:"line",data:[50,85,22,155,170,25,224,245,285,300,415,641],itemStyle:{color:"#febb50"}}]};s.setOption(b),n.myCharts.push(s)},R=()=>{const s=x(A.$refs.homeOvertimeRef),b={grid:{top:50,right:20,bottom:30,left:30},tooltip:{trigger:"axis"},legend:{data:["\u8BA2\u5355\u6570\u91CF","\u8D85\u65F6\u6570\u91CF","\u5728\u7EBF\u6570\u91CF","\u9884\u8B66\u6570\u91CF"],right:13},xAxis:{data:["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"]},yAxis:[{type:"value",name:"\u6570\u91CF"}],series:[{name:"\u8BA2\u5355\u6570\u91CF",type:"bar",data:[5,20,36,10,10,20,11,13,10,9,17,19]},{name:"\u8D85\u65F6\u6570\u91CF",type:"bar",data:[15,12,26,15,11,16,31,13,5,16,13,15]},{name:"\u5728\u7EBF\u6570\u91CF",type:"line",data:[15,20,16,20,30,8,16,19,12,18,19,14]},{name:"\u9884\u8B66\u6570\u91CF",type:"line",data:[10,10,13,12,15,18,19,10,12,15,11,17]}]};s.setOption(b),n.myCharts.push(s)},g=()=>{D(()=>{for(let s=0;s<n.myCharts.length;s++)n.myCharts[s].resize()})},k=()=>{window.addEventListener("resize",g)};return T(()=>{L(),S(),R(),k()}),P(()=>{g()}),q(()=>E.state.tagsViewRoutes.isTagsViewCurrenFull,()=>{g()}),(s,b)=>{const r=m("el-col"),F=m("el-row"),_=m("el-card"),y=m("el-table-column"),M=m("el-table"),z=m("el-scrollbar");return c(),h("div",Z,[t(F,{gutter:15},{default:o(()=>[t(r,{sm:6,class:"mb15"},{default:o(()=>[e("div",ee,[e("div",te,[e("img",{src:l(p).photo},null,8,ae),e("div",se,[e("div",oe,[e("div",ie,u(l($))+"\uFF0C"+u(l(p).username===""?"test":l(p).username)+"\uFF01 ",1),e("div",ue,u(l(p).username==="admin"?"\u8D85\u7EA7\u7BA1\u7406":"\u666E\u901A\u7528\u6237"),1)])])])])]),_:1}),(c(!0),h(C,null,v(l(n).topCardItemList,(a,i)=>(c(),J(r,{sm:6,class:"mb15",key:i},{default:o(()=>[e("div",{class:"home-card-item home-card-item-box",style:B({background:a.color})},[e("div",le,[e("div",ne,u(a.title),1),e("div",{class:"home-card-item-title-num pb6",id:`titleNum${i+1}`},null,8,re),e("div",ce,u(a.tip),1),e("div",{class:"home-card-item-tip-num",id:`tipNum${i+1}`},null,8,de)]),e("i",{class:N(a.icon),style:B({color:a.iconColor})},null,6)],4)]),_:2},1024))),128))]),_:1}),t(F,{gutter:15},{default:o(()=>[t(r,{xs:24,sm:14,md:14,lg:16,xl:16,class:"mb15"},{default:o(()=>[t(_,{shadow:"hover",header:s.$t("message.card.title1")},{default:o(()=>[e("div",{style:{height:"200px"},ref:(a,i)=>{i.homeLaboratoryRef=a}},null,512)]),_:1},8,["header"])]),_:1}),t(r,{xs:24,sm:10,md:10,lg:8,xl:8},{default:o(()=>[t(_,{shadow:"hover",header:s.$t("message.card.title2")},{default:o(()=>[e("div",me,[e("div",he,[(c(!0),h(C,null,v(l(n).environmentList,(a,i)=>(c(),h("div",{class:"flex-warp-item",key:i},[e("div",_e,[e("i",{class:N(a.icon),style:B({color:a.iconColor})},null,6),e("span",fe,u(a.label),1),e("div",pe,u(a.value),1)])]))),128))])])]),_:1},8,["header"])]),_:1})]),_:1}),t(F,{gutter:15},{default:o(()=>[t(r,{xs:24,sm:14,md:14,lg:16,xl:16,class:"home-warning-media"},{default:o(()=>[t(_,{shadow:"hover",header:s.$t("message.card.title3"),class:"home-warning-card"},{default:o(()=>[t(M,{data:l(n).tableData.data,style:{width:"100%"},stripe:""},{default:o(()=>[t(y,{prop:"date",label:s.$t("message.table.th1")},null,8,["label"]),t(y,{prop:"name",label:s.$t("message.table.th2")},null,8,["label"]),t(y,{prop:"address",label:s.$t("message.table.th3")},null,8,["label"])]),_:1},8,["data"])]),_:1},8,["header"])]),_:1}),t(r,{xs:24,sm:10,md:10,lg:8,xl:8,class:"home-dynamic-media"},{default:o(()=>[t(_,{shadow:"hover",header:s.$t("message.card.title4")},{default:o(()=>[e("div",be,[t(z,null,{default:o(()=>[(c(!0),h(C,null,v(l(n).activitiesList,(a,i)=>(c(),h("div",{class:"home-dynamic-item",key:i},[e("div",Fe,[e("div",ge,u(a.time1),1),e("div",ye,u(a.time2),1)]),Ce,e("div",ve,[e("div",Be,[Ae,e("span",null,u(a.title),1)]),e("div",Ee,u(a.label),1)])]))),128))]),_:1})])]),_:1},8,["header"])]),_:1})]),_:1}),t(F,null,{default:o(()=>[t(r,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mt15"},{default:o(()=>[t(_,{shadow:"hover",header:s.$t("message.card.title5")},{default:o(()=>[e("div",{style:{height:"200px"},ref:(a,i)=>{i.homeOvertimeRef=a}},null,512)]),_:1},8,["header"])]),_:1})]),_:1})])}}});var $e=O(xe,[["__scopeId","data-v-b659d4be"]]);export{$e as default};
