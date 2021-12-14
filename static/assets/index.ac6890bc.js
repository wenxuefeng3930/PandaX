var k=Object.defineProperty;var F=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var _=(n,o,t)=>o in n?k(n,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[o]=t,x=(n,o)=>{for(var t in o||(o={}))L.call(o,t)&&_(n,t,o[t]);if(F)for(var t of F(o))B.call(o,t)&&_(n,t,o[t]);return n};import{r as E,i as z,I as W,o as D,O,t as R,k as r,C as u,l as P,y as h,z as f,m as i,p as d,T as j,w as N,v as M,x as U,P as C,X as K,W as X,K as T,n as q}from"./vendor.14d7a511.js";import{i as g}from"./getStyleSheets.289f5a1f.js";import{_ as A}from"./index.1f7143d6.js";const G={name:"iconSelector",emits:["update:modelValue","get","clear"],props:{prepend:{type:String,default:()=>"el-icon-thumb"},placeholder:{type:String,default:()=>"\u8BF7\u8F93\u5165\u5185\u5BB9\u641C\u7D22\u56FE\u6807\u6216\u8005\u9009\u62E9\u56FE\u6807"},size:{type:String,default:()=>"small"},title:{type:String,default:()=>"\u8BF7\u9009\u62E9\u56FE\u6807"},type:{type:String,default:()=>"ele"},disabled:{type:Boolean,default:()=>!1},clearable:{type:Boolean,default:()=>!0},emptyDescription:{type:String,default:()=>"\u65E0\u76F8\u5173\u56FE\u6807"},modelValue:String},setup(n,{emit:o}){const t=E(),e=z({fontIconPrefix:"",fontIconVisible:!1,fontIconWidth:0,fontIconSearch:"",fontIconTabsIndex:0,fontIconSheetsList:[],fontIconType:"ele",fontIconPlaceholder:""}),y=()=>{if(!n.modelValue)return!1;e.fontIconSearch="",e.fontIconPlaceholder=n.modelValue},V=()=>{setTimeout(()=>{e.fontIconSheetsList.filter(a=>a===e.fontIconSearch).length<=0&&(e.fontIconSearch="")},300)},I=()=>{if(n.modelValue==="")return!1;e.fontIconPlaceholder=n.modelValue,e.fontIconPrefix=n.modelValue},p=W(()=>{if(!e.fontIconSearch)return e.fontIconSheetsList;let l=e.fontIconSearch.trim().toLowerCase();return e.fontIconSheetsList.filter(a=>{if(a.toLowerCase().indexOf(l)!==-1)return a})}),m=()=>{q(()=>{e.fontIconWidth=t.value.$el.offsetWidth})},S=()=>{window.addEventListener("resize",()=>{m()})},c=l=>{e.fontIconType=l,b(l)},b=async l=>{l==="ali"?await g.ali().then(a=>{e.fontIconTabsIndex=0,e.fontIconSheetsList=a.map(v=>`iconfont ${v}`)}):l==="ele"?await g.ele().then(a=>{e.fontIconTabsIndex=1,e.fontIconSheetsList=a}):l==="awe"&&await g.awe().then(a=>{e.fontIconTabsIndex=2,e.fontIconSheetsList=a.map(v=>`fa ${v}`)}),e.fontIconPlaceholder=n.placeholder,I()},s=l=>{e.fontIconPlaceholder=l,e.fontIconVisible=!1,e.fontIconTabsIndex===0?e.fontIconPrefix=`${l}`:e.fontIconTabsIndex===1?e.fontIconPrefix=`${l}`:e.fontIconTabsIndex===2&&(e.fontIconPrefix=`${l}`),o("get",e.fontIconPrefix),o("update:modelValue",e.fontIconPrefix)},w=()=>{e.fontIconPrefix="",o("clear",e.fontIconPrefix),o("update:modelValue",e.fontIconPrefix)};return D(()=>{var l,a;n.type==="all"?((l=n.modelValue)==null?void 0:l.indexOf("iconfont"))>-1?c("ali"):((a=n.modelValue)==null?void 0:a.indexOf("fa"))>-1?c("awe"):c("ele"):c(n.type),S(),m()}),O(()=>n.modelValue,()=>{I()}),x({inputWidthRef:t,fontIconSheetsFilterList:p,onColClick:s,onIconChange:c,onClearFontIcon:w,onIconFocus:y,onIconBlur:V},R(e))}},H={class:"icon-selector"},J={class:"icon-selector-warp"},Q={class:"icon-selector-warp-title flex"},Y={class:"flex-auto"},Z={class:"icon-selector-warp-title-tab"},$={class:"icon-selector-warp-row"},ee={class:"flex-margin"},ne={class:"icon-selector-warp-item-value"};function oe(n,o,t,e,y,V){const I=r("el-input"),p=r("el-col"),m=r("el-row"),S=r("el-empty"),c=r("el-scrollbar"),b=r("el-popover");return u(),P("div",H,[h(b,{placement:"bottom",width:n.fontIconWidth,visible:n.fontIconVisible,"onUpdate:visible":o[4]||(o[4]=s=>n.fontIconVisible=s),"popper-class":"icon-selector-popper"},{reference:f(()=>[h(I,{modelValue:n.fontIconSearch,"onUpdate:modelValue":o[0]||(o[0]=s=>n.fontIconSearch=s),placeholder:n.fontIconPlaceholder,clearable:t.clearable,disabled:t.disabled,size:t.size,ref:"inputWidthRef",onClear:e.onClearFontIcon,onFocus:e.onIconFocus,onBlur:e.onIconBlur},{prepend:f(()=>[i("i",{class:d([[n.fontIconPrefix===""?t.prepend:n.fontIconPrefix,{iconfont:n.fontIconTabsIndex===0},{ele:n.fontIconTabsIndex===1},{fa:n.fontIconTabsIndex===2}],"font14"])},null,2)]),_:1},8,["modelValue","placeholder","clearable","disabled","size","onClear","onFocus","onBlur"])]),default:f(()=>[h(j,{name:"el-zoom-in-top"},{default:f(()=>[N(i("div",J,[i("div",Q,[i("div",Y,U(t.title),1),i("div",Z,[i("span",{class:d([{"span-active":n.fontIconType==="ali"},"ml10"]),onClick:o[1]||(o[1]=s=>e.onIconChange("ali")),title:"iconfont \u56FE\u6807"},"ali",2),i("span",{class:d([{"span-active":n.fontIconType==="ele"},"ml10"]),onClick:o[2]||(o[2]=s=>e.onIconChange("ele")),title:"elementPlus \u56FE\u6807"},"ele",2),i("span",{class:d([{"span-active":n.fontIconType==="awe"},"ml10"]),onClick:o[3]||(o[3]=s=>e.onIconChange("awe")),title:"fontawesome \u56FE\u6807"},"awe",2)])]),i("div",$,[h(c,null,{default:f(()=>[e.fontIconSheetsFilterList.length>0?(u(),C(m,{key:0,gutter:10},{default:f(()=>[(u(!0),P(K,null,X(e.fontIconSheetsFilterList,(s,w)=>(u(),C(p,{xs:6,sm:4,md:4,lg:4,xl:4,onClick:l=>e.onColClick(s),key:w},{default:f(()=>[i("div",{class:d(["icon-selector-warp-item",{"icon-selector-active":n.fontIconPrefix===s}])},[i("div",ee,[i("div",ne,[i("i",{class:d(s)},null,2)])])],2)]),_:2},1032,["onClick"]))),128))]),_:1})):T("",!0),e.fontIconSheetsFilterList.length<=0?(u(),C(S,{key:1,"image-size":100,description:t.emptyDescription},null,8,["description"])):T("",!0)]),_:1})])],512),[[M,n.fontIconVisible]])]),_:1})]),_:1},8,["width","visible"])])}var se=A(G,[["render",oe]]);export{se as I};