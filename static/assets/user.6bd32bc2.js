import{s as t}from"./index.c04616ec.js";function n(e){return t({url:"/system/user/list",method:"get",params:e})}function o(e,s){return t({url:"/system/user/changeStatus",method:"put",data:{userId:e,status:s}})}function a(e){return t({url:"/system/user/getById/"+e,method:"get"})}function m(){return t({url:"/system/user/getInit",method:"get"})}function d(){return t({url:"/system/user/getRoPo",method:"get"})}function c(e){return t({url:"/system/user/"+e,method:"delete"})}function i(e){return t({url:"/system/user",method:"post",data:e})}function l(e){return t({url:"/system/user",method:"put",data:e})}function g(e){return t({url:"/system/user/pwd",method:"put",data:e})}function h(e){return t({url:"/system/user/export",method:"get",params:e})}export{l as a,a as b,o as c,c as d,h as e,i as f,d as g,m as h,n as l,g as u};
