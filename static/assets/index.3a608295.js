var T=Object.defineProperty;var k=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var F=(s,e,t)=>e in s?T(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,M=(s,e)=>{for(var t in e||(e={}))I.call(e,t)&&F(s,t,e[t]);if(k)for(var t of k(e))P.call(e,t)&&F(s,t,e[t]);return s};import{_ as S}from"./index.1f7143d6.js";import{C as u,l as f,m as n,p as g,J as l,a9 as C,K as v,s as _,x as y,w as V,v as E,i as A,t as D,k as x,y as o,z as B}from"./vendor.14d7a511.js";import{D as O}from"./dragVerifyImgRotate.6a55b6bf.js";const R={name:"dragVerify",props:{isPassing:{type:Boolean,default:!1},width:{type:Number,default:250},height:{type:Number,default:40},text:{type:String,default:"swiping to the right side"},successText:{type:String,default:"success"},background:{type:String,default:"#eee"},progressBarBg:{type:String,default:"#76c61d"},completedBg:{type:String,default:"#76c61d"},circle:{type:Boolean,default:!1},radius:{type:String,default:"4px"},handlerIcon:{type:String},successIcon:{type:String},handlerBg:{type:String,default:"#fff"},textSize:{type:String,default:"14px"},textColor:{type:String,default:"#333"}},mounted:function(){const s=this.$refs.dragVerify;s.style.setProperty("--textColor",this.textColor),s.style.setProperty("--width",Math.floor(this.width/2)+"px"),s.style.setProperty("--pwidth",-Math.floor(this.width/2)+"px"),console.log(this.$slots)},computed:{handlerStyle:function(){return{width:this.height+"px",height:this.height+"px",background:this.handlerBg}},message:function(){return this.isPassing?this.successText:this.text},dragVerifyStyle:function(){return{width:this.width+"px",height:this.height+"px",lineHeight:this.height+"px",background:this.background,borderRadius:this.circle?this.height/2+"px":this.radius}},progressBarStyle:function(){return{background:this.progressBarBg,height:this.height+"px",borderRadius:this.circle?this.height/2+"px 0 0 "+this.height/2+"px":this.radius}},textStyle:function(){return{height:this.height+"px",width:this.width+"px",fontSize:this.textSize}}},data(){return{isMoving:!1,x:0,isOk:!1}},methods:{dragStart:function(s){this.isPassing||(this.isMoving=!0,this.x=s.pageX||s.touches[0].pageX),this.$emit("handlerMove")},dragMoving:function(s){if(this.isMoving&&!this.isPassing){var e=(s.pageX||s.touches[0].pageX)-this.x,t=this.$refs.handler;e>0&&e<=this.width-this.height?(t.style.left=e+"px",this.$refs.progressBar.style.width=e+this.height/2+"px"):e>this.width-this.height&&(t.style.left=this.width-this.height+"px",this.$refs.progressBar.style.width=this.width-this.height/2+"px",this.passVerify())}},dragFinish:function(s){if(this.isMoving&&!this.isPassing){var e=(s.pageX||s.changedTouches[0].pageX)-this.x;if(e<this.width-this.height){this.isOk=!0;var t=this;setTimeout(function(){t.$refs.handler.style.left="0",t.$refs.progressBar.style.width="0",t.isOk=!1},500),this.$emit("passfail")}else{var h=this.$refs.handler;h.style.left=this.width-this.height+"px",this.$refs.progressBar.style.width=this.width-this.height/2+"px",this.passVerify()}this.isMoving=!1}},passVerify:function(){this.$emit("update:isPassing",!0),this.isMoving=!1;var s=this.$refs.handler;s.children[0].className=this.successIcon,this.$refs.progressBar.style.background=this.completedBg,this.$refs.message.style["-webkit-text-fill-color"]="unset",this.$refs.message.style.animation="slidetounlock2 3s infinite",this.$refs.message.style.color="#fff",this.$emit("passcallback")},reset:function(){const s=this.$options.data();for(const h in s)Object.prototype.hasOwnProperty.call(s,h)&&(this[h]=s[h]);var e=this.$refs.handler,t=this.$refs.message;e.style.left="0",this.$refs.progressBar.style.width="0",e.children[0].className=this.handlerIcon,t.style["-webkit-text-fill-color"]="transparent",t.style.animation="slidetounlock 3s infinite",t.style.color=this.background}}};function N(s,e,t,h,a,i){return u(),f("div",{ref:"dragVerify",class:"drag_verify",style:l(i.dragVerifyStyle),onMousemove:e[2]||(e[2]=(...r)=>i.dragMoving&&i.dragMoving(...r)),onMouseup:e[3]||(e[3]=(...r)=>i.dragFinish&&i.dragFinish(...r)),onMouseleave:e[4]||(e[4]=(...r)=>i.dragFinish&&i.dragFinish(...r)),onTouchmove:e[5]||(e[5]=(...r)=>i.dragMoving&&i.dragMoving(...r)),onTouchend:e[6]||(e[6]=(...r)=>i.dragFinish&&i.dragFinish(...r))},[n("div",{class:g(["dv_progress_bar",{goFirst2:a.isOk}]),ref:"progressBar",style:l(i.progressBarStyle)},null,6),n("div",{class:"dv_text",style:l(i.textStyle),ref:"message"},[s.$slots.textBefore?C(s.$slots,"textBefore",{key:0},void 0,!0):v("",!0),_(" "+y(i.message)+" ",1),s.$slots.textAfter?C(s.$slots,"textAfter",{key:1},void 0,!0):v("",!0)],4),n("div",{class:g(["dv_handler dv_handler_bg",{goFirst:a.isOk}]),onMousedown:e[0]||(e[0]=(...r)=>i.dragStart&&i.dragStart(...r)),onTouchstart:e[1]||(e[1]=(...r)=>i.dragStart&&i.dragStart(...r)),ref:"handler",style:l(i.handlerStyle)},[n("i",{class:g(t.handlerIcon)},null,2)],38)],36)}var X=S(R,[["render",N],["__scopeId","data-v-495af628"]]);const z={name:"dragVerify",props:{isPassing:{type:Boolean,default:!1},width:{type:Number,default:250},height:{type:Number,default:40},text:{type:String,default:"swiping to the right side"},successText:{type:String,default:"success"},background:{type:String,default:"#eee"},progressBarBg:{type:String,default:"#76c61d"},completedBg:{type:String,default:"#76c61d"},circle:{type:Boolean,default:!1},radius:{type:String,default:"4px"},handlerIcon:{type:String},successIcon:{type:String},handlerBg:{type:String,default:"#fff"},textSize:{type:String,default:"14px"},textColor:{type:String,default:"#333"},imgsrc:{type:String},barWidth:{type:Number,default:70},barHeight:{type:Number,default:40},barRadius:{type:Number,default:2},showRefresh:{type:Boolean,default:!1},refreshIcon:{type:String},showTips:{type:Boolean,default:!0},successTip:{type:String,default:"\u9A8C\u8BC1\u901A\u8FC7\uFF0C\u8D85\u8FC780%\u7528\u6237"},failTip:{type:String,default:"\u9A8C\u8BC1\u672A\u901A\u8FC7\uFF0C\u62D6\u52A8\u6ED1\u5757\u5C06\u60AC\u6D6E\u56FE\u50CF\u6B63\u786E\u5408\u5E76"},diffWidth:{type:Number,default:20}},mounted:function(){const s=this.$refs.dragVerify;s.style.setProperty("--textColor",this.textColor),s.style.setProperty("--width",Math.floor(this.width/2)+"px"),s.style.setProperty("--pwidth",-Math.floor(this.width/2)+"px")},computed:{handlerStyle:function(){return{width:this.height+"px",height:this.height+"px",background:this.handlerBg}},message:function(){return this.isPassing?"":this.text},successMessage:function(){return this.isPassing?this.successText:""},dragVerifyStyle:function(){return console.log(this.width,"width"),{width:this.width+"px",height:this.height+"px",lineHeight:this.height+"px",background:this.background,borderRadius:this.circle?this.height/2+"px":this.radius}},dragVerifyImgStyle:function(){return{width:this.width+"px",position:"relative",overflow:"hidden"}},progressBarStyle:function(){return{background:this.progressBarBg,height:this.height+"px",borderRadius:this.circle?this.height/2+"px 0 0 "+this.height/2+"px":this.radius}},textStyle:function(){return{height:this.height+"px",width:this.width+"px",fontSize:this.textSize}}},data(){return{isMoving:!1,x:0,isOk:!1,isKeep:!1,movebarStyle:{},clipbarStyle:{},showBar:!1,clipBarx:0,showErrorTip:!1}},methods:{checkimgLoaded:function(){var s=this.barWidth,e=this.barHeight,t=this.$refs.checkImg.height,h=Math.floor(this.width/2),a=25,i=20,r=h+Math.ceil(Math.random()*(h-s)),d=a+Math.floor(Math.random()*(t-e-a-i));this.clipbarStyle={width:s+"px",height:e+"px",top:d+"px",left:r+"px","border-radius":this.barRadius+"px"},this.clipBarx=r;var p=this.imgsrc,m=this.width;this.movebarStyle={background:`url(${p})`,"background-position":`-${r}px -${d}px`,"background-size":`${m}px`,width:s+"px",height:e+"px",top:d+"px","border-radius":this.barRadius+"px"}},dragStart:function(s){this.isPassing||(this.isMoving=!0,this.x=s.pageX||s.touches[0].pageX),this.showBar=!0,this.showErrorTip=!1,this.$emit("handlerMove")},dragMoving:function(s){if(this.isMoving&&!this.isPassing){var e=(s.pageX||s.touches[0].pageX)-this.x,t=this.$refs.handler;t.style.left=e+"px",this.$refs.progressBar.style.width=e+this.height/2+"px",this.$refs.moveBar.style.left=e+"px"}},dragFinish:function(s){if(this.isMoving&&!this.isPassing){var e=(s.pageX||s.changedTouches[0].pageX)-this.x;if(Math.abs(e-this.clipBarx)>this.diffWidth){this.isOk=!0;var t=this;setTimeout(function(){t.$refs.handler.style.left="0",t.$refs.progressBar.style.width="0",t.$refs.moveBar.style.left="0",t.isOk=!1},500),this.showErrorTip=!0,this.$emit("passfail")}else this.passVerify();this.isMoving=!1}},passVerify:function(){this.$emit("update:isPassing",!0),this.isMoving=!1;var s=this.$refs.handler;s.children[0].className=this.successIcon,this.$refs.progressBar.style.background=this.completedBg,this.$refs.message.style["-webkit-text-fill-color"]="unset",this.$refs.message.style.animation="slidetounlock2 3s infinite",this.$refs.progressBar.style.color="#fff",this.$refs.progressBar.style.fontSize=this.textSize,this.isKeep=!0,setTimeout(()=>{this.$refs.moveBar.style.left=this.clipBarx+"px",setTimeout(()=>{this.isKeep=!1},200)},100),this.$emit("passcallback")},reset:function(){this.reImg(),this.checkimgLoaded()},reImg:function(){this.$emit("update:isPassing",!1);const s=this.$options.data();for(const h in s)Object.prototype.hasOwnProperty.call(s,h)&&(this[h]=s[h]);var e=this.$refs.handler,t=this.$refs.message;e.style.left="0",this.$refs.progressBar.style.width="0",e.children[0].className=this.handlerIcon,t.style["-webkit-text-fill-color"]="transparent",t.style.animation="slidetounlock 3s infinite",t.style.color=this.background},refreshimg:function(){this.$emit("refresh")}},watch:{imgsrc:{immediate:!1,handler:function(){this.reImg()}}}},W={class:"drag-verify-container"},H=["src"],$={key:0,class:"refresh"},j={key:1,class:"tips success"},K={key:2,class:"tips danger"};function L(s,e,t,h,a,i){return u(),f("div",W,[n("div",{style:l(i.dragVerifyImgStyle)},[n("img",{ref:"checkImg",src:t.imgsrc,onLoad:e[0]||(e[0]=(...r)=>i.checkimgLoaded&&i.checkimgLoaded(...r)),style:{width:"100%"},alt:""},null,40,H),V(n("div",{class:g(["move-bar",{goFirst:a.isOk,goKeep:a.isKeep}]),style:l(a.movebarStyle),ref:"moveBar"},null,6),[[E,a.showBar]]),n("div",{class:"clip-bar",style:l(a.clipbarStyle),ref:"clipBar"},null,4),t.showRefresh&&!t.isPassing?(u(),f("div",$,[n("i",{class:g(t.refreshIcon),onClick:e[1]||(e[1]=(...r)=>i.refreshimg&&i.refreshimg(...r))},null,2)])):v("",!0),t.showTips&&t.isPassing?(u(),f("div",j,y(t.successTip),1)):v("",!0),t.showTips&&!t.isPassing&&a.showErrorTip?(u(),f("div",K,y(t.failTip),1)):v("",!0)],4),n("div",{ref:"dragVerify",class:"drag_verify",style:l(i.dragVerifyStyle),onMousemove:e[4]||(e[4]=(...r)=>i.dragMoving&&i.dragMoving(...r)),onMouseup:e[5]||(e[5]=(...r)=>i.dragFinish&&i.dragFinish(...r)),onMouseleave:e[6]||(e[6]=(...r)=>i.dragFinish&&i.dragFinish(...r)),onTouchmove:e[7]||(e[7]=(...r)=>i.dragMoving&&i.dragMoving(...r)),onTouchend:e[8]||(e[8]=(...r)=>i.dragFinish&&i.dragFinish(...r))},[n("div",{class:g(["dv_progress_bar",{goFirst2:a.isOk}]),ref:"progressBar",style:l(i.progressBarStyle)},y(i.successMessage),7),n("div",{class:"dv_text",style:l(i.textStyle),ref:"message"},y(i.message),5),n("div",{class:g(["dv_handler dv_handler_bg",{goFirst:a.isOk}]),onMousedown:e[2]||(e[2]=(...r)=>i.dragStart&&i.dragStart(...r)),onTouchstart:e[3]||(e[3]=(...r)=>i.dragStart&&i.dragStart(...r)),ref:"handler",style:l(i.handlerStyle)},[n("i",{class:g(t.handlerIcon)},null,2)],38)],36)])}var U=S(z,[["render",L],["__scopeId","data-v-3cc93469"]]);const G={name:"dragVerifyImgChip",props:{isPassing:{type:Boolean,default:!1},width:{type:Number,default:250},height:{type:Number,default:40},text:{type:String,default:"swiping to the right side"},successText:{type:String,default:"success"},background:{type:String,default:"#eee"},progressBarBg:{type:String,default:"#76c61d"},completedBg:{type:String,default:"#76c61d"},circle:{type:Boolean,default:!1},radius:{type:String,default:"4px"},handlerIcon:{type:String},successIcon:{type:String},handlerBg:{type:String,default:"#fff"},textSize:{type:String,default:"14px"},textColor:{type:String,default:"#333"},imgsrc:{type:String},barWidth:{type:Number,default:40},barRadius:{type:Number,default:8},showRefresh:{type:Boolean,default:!1},refreshIcon:{type:String},showTips:{type:Boolean,default:!0},successTip:{type:String,default:"\u9A8C\u8BC1\u901A\u8FC7\uFF0C\u8D85\u8FC780%\u7528\u6237"},failTip:{type:String,default:"\u9A8C\u8BC1\u672A\u901A\u8FC7\uFF0C\u62D6\u52A8\u6ED1\u5757\u5C06\u60AC\u6D6E\u56FE\u50CF\u6B63\u786E\u5408\u5E76"},diffWidth:{type:Number,default:20}},mounted:function(){const s=this.$refs.dragVerify;s.style.setProperty("--textColor",this.textColor),s.style.setProperty("--width",Math.floor(this.width/2)+"px"),s.style.setProperty("--pwidth",-Math.floor(this.width/2)+"px")},computed:{handlerStyle:function(){return{width:this.height+"px",height:this.height+"px",background:this.handlerBg}},message:function(){return this.isPassing?"":this.text},successMessage:function(){return this.isPassing?this.successText:""},dragVerifyStyle:function(){return{width:this.width+"px",height:this.height+"px",lineHeight:this.height+"px",background:this.background,borderRadius:this.circle?this.height/2+"px":this.radius}},dragVerifyImgStyle:function(){return{width:this.width+"px",position:"relative",overflow:"hidden"}},progressBarStyle:function(){return{background:this.progressBarBg,height:this.height+"px",borderRadius:this.circle?this.height/2+"px 0 0 "+this.height/2+"px":this.radius}},textStyle:function(){return{height:this.height+"px",width:this.width+"px",fontSize:this.textSize}}},data(){return{isMoving:!1,x:0,isOk:!1,isKeep:!1,clipBarx:0,showErrorTip:!1}},methods:{draw:function(s,e,t,h){var a=this.barWidth,i=this.barRadius;const r=Math.PI;s.beginPath(),s.moveTo(e,t),s.arc(e+a/2,t-i+2,i,.72*r,2.26*r),s.lineTo(e+a,t),s.arc(e+a+i-2,t+a/2,i,1.21*r,2.78*r),s.lineTo(e+a,t+a),s.lineTo(e,t+a),s.arc(e+i-2,t+a/2,i+.4,2.76*r,1.24*r,!0),s.lineTo(e,t),s.lineWidth=2,s.fillStyle="rgba(255, 255, 255, 0.8)",s.strokeStyle="rgba(255, 255, 255, 0.8)",s.stroke(),s[h](),s.globalCompositeOperation="destination-over"},checkimgLoaded:function(){var s=this.barWidth,e=this.$refs.checkImg.height,t=this.$refs.checkImg.width,h=Math.floor(this.width/2),a=25,i=20,r=h+Math.ceil(Math.random()*(h-s-this.barRadius-5)),d=a+Math.floor(Math.random()*(e-s-a-i));this.$refs.maincanvas.setAttribute("width",t),this.$refs.maincanvas.setAttribute("height",e),this.$refs.maincanvas.style.display="block";var p=this.$refs.maincanvas.getContext("2d");this.draw(p,r,d,"fill"),this.clipBarx=r;var m=this.$refs.movecanvas;m.setAttribute("width",t),m.setAttribute("height",e),this.$refs.movecanvas.style.display="block";const b=s+this.barRadius*2+3;var w=this.$refs.movecanvas.getContext("2d");w.clearRect(0,0,t,e),this.draw(w,r,d,"clip"),w.drawImage(this.$refs.checkImg,0,0,t,e);var d=d-this.barRadius*2-1;const c=w.getImageData(r,d,b,b);m.setAttribute("width",b),m.setAttribute("height",e),w.putImageData(c,0,d)},dragStart:function(s){this.isPassing||(this.isMoving=!0,this.x=s.pageX||s.touches[0].pageX),this.showBar=!0,this.showErrorTip=!1,this.$emit("handlerMove")},dragMoving:function(s){if(this.isMoving&&!this.isPassing){var e=(s.pageX||s.touches[0].pageX)-this.x,t=this.$refs.handler;t.style.left=e+"px",this.$refs.progressBar.style.width=e+this.height/2+"px",this.$refs.movecanvas.style.left=e+"px"}},dragFinish:function(s){if(this.isMoving&&!this.isPassing){var e=(s.pageX||s.changedTouches[0].pageX)-this.x;if(Math.abs(e-this.clipBarx)>this.diffWidth){this.isOk=!0;var t=this;setTimeout(function(){t.$refs.handler.style.left="0",t.$refs.progressBar.style.width="0",t.$refs.movecanvas.style.left="0",t.isOk=!1},500),this.$emit("passfail"),this.showErrorTip=!0}else this.passVerify();this.isMoving=!1}},passVerify:function(){this.$emit("update:isPassing",!0),this.isMoving=!1;var s=this.$refs.handler;s.children[0].className=this.successIcon,this.$refs.progressBar.style.background=this.completedBg,this.$refs.message.style["-webkit-text-fill-color"]="unset",this.$refs.message.style.animation="slidetounlock2 3s infinite",this.$refs.progressBar.style.color="#fff",this.$refs.progressBar.style.fontSize=this.textSize,this.isKeep=!0,setTimeout(()=>{this.$refs.movecanvas.style.left=this.clipBarx+"px",setTimeout(()=>{this.isKeep=!1,this.$refs.maincanvas.style.display="none",this.$refs.movecanvas.style.display="none"},200)},100),this.$emit("passcallback")},reset:function(){this.reImg(),this.checkimgLoaded()},reImg:function(){this.$emit("update:isPassing",!1);const s=this.$options.data();for(const h in s)Object.prototype.hasOwnProperty.call(s,h)&&(this[h]=s[h]);var e=this.$refs.handler,t=this.$refs.message;e.style.left="0",this.$refs.progressBar.style.width="0",e.children[0].className=this.handlerIcon,t.style["-webkit-text-fill-color"]="transparent",t.style.animation="slidetounlock 3s infinite",t.style.color=this.background,this.$refs.movecanvas.style.left="0px"},refreshimg:function(){this.$emit("refresh")}},watch:{imgsrc:{immediate:!1,handler:function(){this.reImg()}}}},J={class:"drag-verify-container"},Q=["src"],Y={ref:"maincanvas",class:"main-canvas"},q={key:0,class:"refresh"},Z={key:1,class:"tips success"},ee={key:2,class:"tips danger"};function se(s,e,t,h,a,i){return u(),f("div",J,[n("div",{style:l(i.dragVerifyImgStyle)},[n("img",{ref:"checkImg",crossOrigin:"anonymous",src:t.imgsrc,onLoad:e[0]||(e[0]=(...r)=>i.checkimgLoaded&&i.checkimgLoaded(...r)),style:{width:"100%"},alt:""},null,40,Q),n("canvas",Y,null,512),n("canvas",{ref:"movecanvas",class:g([{goFirst:a.isOk,goKeep:a.isKeep},"move-canvas"])},null,2),t.showRefresh&&!t.isPassing?(u(),f("div",q,[n("i",{class:g(t.refreshIcon),onClick:e[1]||(e[1]=(...r)=>i.refreshimg&&i.refreshimg(...r))},null,2)])):v("",!0),t.showTips&&t.isPassing?(u(),f("div",Z,y(t.successTip),1)):v("",!0),t.showTips&&!t.isPassing&&a.showErrorTip?(u(),f("div",ee,y(t.failTip),1)):v("",!0)],4),n("div",{ref:"dragVerify",class:"drag_verify",style:l(i.dragVerifyStyle),onMousemove:e[4]||(e[4]=(...r)=>i.dragMoving&&i.dragMoving(...r)),onMouseup:e[5]||(e[5]=(...r)=>i.dragFinish&&i.dragFinish(...r)),onMouseleave:e[6]||(e[6]=(...r)=>i.dragFinish&&i.dragFinish(...r)),onTouchmove:e[7]||(e[7]=(...r)=>i.dragMoving&&i.dragMoving(...r)),onTouchend:e[8]||(e[8]=(...r)=>i.dragFinish&&i.dragFinish(...r))},[n("div",{class:g(["dv_progress_bar",{goFirst2:a.isOk}]),ref:"progressBar",style:l(i.progressBarStyle)},y(i.successMessage),7),n("div",{class:"dv_text",style:l(i.textStyle),ref:"message"},y(i.message),5),n("div",{class:g(["dv_handler dv_handler_bg",{goFirst:a.isOk}]),onMousedown:e[2]||(e[2]=(...r)=>i.dragStart&&i.dragStart(...r)),onTouchstart:e[3]||(e[3]=(...r)=>i.dragStart&&i.dragStart(...r)),ref:"handler",style:l(i.handlerStyle)},[n("i",{class:g(t.handlerIcon)},null,2)],38)],36)])}var te=S(G,[["render",se],["__scopeId","data-v-30ca048b"]]);const ie={name:"funDragVerify",components:{DragVerify:X,DragVerifyImg:U,DragVerifyImgChip:te,DragVerifyImgRotate:O},setup(){const s=A({isPassingOne:!1,isPassingTwo:!1,isPassingThree:!1,isPassingFour:!1,imgTwo:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1813762643,1914315241&fm=26&gp=0.jpg",imgThree:"https://img1.baidu.com/it/u=2813520958,2218166536&fm=26&fmt=auto&gp=0.jpg"});return M({},D(s))}},re={class:"dragVerify-container"};function ae(s,e,t,h,a,i){const r=x("el-alert"),d=x("DragVerify"),p=x("el-card"),m=x("DragVerifyImg"),b=x("DragVerifyImgChip"),w=x("DragVerifyImgRotate");return u(),f("div",re,[o(p,{shadow:"hover",header:"\u9A8C\u8BC1\u5668\uFF1A\u57FA\u672C\u6ED1\u5757\u9A8C\u8BC1\u7EC4\u4EF6"},{default:B(()=>[o(r,{title:"\u611F\u8C22\u4F18\u79C0\u7684 `vue-drag-verify`\uFF0C\u9879\u76EE\u5730\u5740\uFF1Ahttps://github.com/yimijianfang/vue-drag-verify",type:"success",closable:!1,class:"mb15"}),o(d,{isPassing:s.isPassingOne,"onUpdate:isPassing":e[0]||(e[0]=c=>s.isPassingOne=c),text:"\u8BF7\u6309\u4F4F\u6ED1\u5757\u62D6\u52A8",successText:"\u9A8C\u8BC1\u901A\u8FC7",handlerIcon:"el-icon-d-arrow-right",successIcon:"el-icon-circle-check"},null,8,["isPassing"])]),_:1}),o(p,{shadow:"hover",header:"\u9A8C\u8BC1\u5668\uFF1A\u56FE\u7247\u6ED1\u5757\u7EC4\u4EF6",class:"mt15"},{default:B(()=>[o(r,{title:"\u611F\u8C22\u4F18\u79C0\u7684 `vue-drag-verify`\uFF0C\u9879\u76EE\u5730\u5740\uFF1Ahttps://github.com/yimijianfang/vue-drag-verify",type:"success",closable:!1,class:"mb15"}),o(m,{imgsrc:s.imgTwo,isPassing:s.isPassingTwo,"onUpdate:isPassing":e[1]||(e[1]=c=>s.isPassingTwo=c),showRefresh:!0,text:"\u8BF7\u6309\u4F4F\u6ED1\u5757\u62D6\u52A8",successText:"\u9A8C\u8BC1\u901A\u8FC7",handlerIcon:"el-icon-d-arrow-right",successIcon:"el-icon-circle-check"},null,8,["imgsrc","isPassing"])]),_:1}),o(p,{shadow:"hover",header:"\u9A8C\u8BC1\u5668\uFF1A\u56FE\u7247\u6ED1\u5757\u7EC4\u4EF6(\u62FC\u56FE)",class:"mt15"},{default:B(()=>[o(r,{title:"\u611F\u8C22\u4F18\u79C0\u7684 `vue-drag-verify`\uFF0C\u9879\u76EE\u5730\u5740\uFF1Ahttps://github.com/yimijianfang/vue-drag-verify",type:"success",closable:!1,class:"mb15"}),o(b,{imgsrc:s.imgThree,isPassing:s.isPassingThree,"onUpdate:isPassing":e[2]||(e[2]=c=>s.isPassingThree=c),showRefresh:!0,text:"\u8BF7\u6309\u4F4F\u6ED1\u5757\u62D6\u52A8",successText:"\u9A8C\u8BC1\u901A\u8FC7",handlerIcon:"el-icon-d-arrow-right",successIcon:"el-icon-circle-check"},null,8,["imgsrc","isPassing"])]),_:1}),o(p,{shadow:"hover",header:"\u9A8C\u8BC1\u5668\uFF1A\u65CB\u8F6C\u56FE\u7247\u6ED1\u5757\u7EC4\u4EF6",class:"mt15"},{default:B(()=>[o(r,{title:"\u611F\u8C22\u4F18\u79C0\u7684 `vue-drag-verify`\uFF0C\u9879\u76EE\u5730\u5740\uFF1Ahttps://github.com/yimijianfang/vue-drag-verify",type:"success",closable:!1,class:"mb15"}),o(w,{imgsrc:s.imgThree,isPassing:s.isPassingFour,"onUpdate:isPassing":e[3]||(e[3]=c=>s.isPassingFour=c),showRefresh:!0,text:"\u8BF7\u6309\u4F4F\u6ED1\u5757\u62D6\u52A8",successText:"\u9A8C\u8BC1\u901A\u8FC7",handlerIcon:"el-icon-d-arrow-right",successIcon:"el-icon-circle-check"},null,8,["imgsrc","isPassing"])]),_:1})])}var de=S(ie,[["render",ae]]);export{de as default};
