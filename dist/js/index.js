!function(t){function e(a){if(o[a])return o[a].exports;var n=o[a]={exports:{},id:a,loaded:!1};return t[a].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var o={};return e.modules=t,e.cache=o,e.p="dist/js/",e(0)}([function(t,e,o){function a(){clearTimeout(r),l.height=$(window).height(),l.width=$(window).width(),l.fontSize=l.width/16,document.documentElement.style.fontSize=l.fontSize+"px",r=setTimeout(function(){var t=parseInt($("html").css("fontSize"));t!==l.fontSize&&(document.documentElement.style.fontSize=l.fontSize*l.fontSize/t+"px")},300)}function n(t){f.files[t]&&k.drawImage(f.files[t],0,0)}function i(t,e,o){console.log(t),m[t]&&(clearTimeout(p),u=h[t].start,p=setInterval(function(){u>h[t].end?(clearTimeout(p),e&&n(g),o&&o()):(n(u),u++)},84))}function s(){$(".tips_openflower").removeClass("active")}function c(t){share.content.imgurl="http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/share_"+t+".jpg",share.content.title=x[t-1],wx&&share.wxShare()}var r,d=o(1),l={fontSize:40,height:1100,width:750};!function(t,e){"use strict";var o="ontouchend"in document.createElement("div"),a={start:o?"touchstart":"mousedown",end:o?"touchend":"mouseup",move:o?"touchmove":"mousemove",cancel:o?"touchcancel":"mousecancel"};t.event.special[e]={setup:function(){t(this).off("click").on(a.start+" "+a.end,function(t){a.E=t.originalEvent.changedTouches?t.originalEvent.changedTouches[0]:t}).on(a.start,function(t){t.which&&1!==t.which||(a.target=t.target,a.time=(new Date).getTime(),a.X=a.E.pageX,a.Y=a.E.pageY)}).on(a.end,function(o){a.target===o.target&&(new Date).getTime()-a.time<750&&a.X===a.E.pageX&&a.Y===a.E.pageY&&(o.type=e,o.pageX=a.E.pageX,o.pageY=a.E.pageY,t.event.dispatch.call(this,o))})},remove:function(){t(this).off(a.start+" "+a.end)}},t.fn[e]=function(t){return this[t?"on":"trigger"](e,t)}}(jQuery,"tap"),function(){for(var t,e=0,o="webkit moz ms o".split(" "),a=window.requestAnimationFrame,n=window.cancelAnimationFrame,i=0;i<o.length&&(!a||!n);i++)t=o[i],a=a||window[t+"RequestAnimationFrame"],n=n||window[t+"CancelAnimationFrame"]||window[t+"CancelRequestAnimationFrame"];a&&n||(a=function(t){var o=(new Date).getTime(),a=Math.max(0,16-(o-e)),n=window.setTimeout(function(){t(o+a)},a);return e=o+a,n},n=function(t){window.clearTimeout(t)}),window.requestAnimationFrame=a,window.cancelAnimationFrame=n}();for(var p,u=1,m={begin:!1,click:!1,dbclick:!1,a1:!1,a2:!1,a3:!1,a4:!1,a5:!1,a6:!1},g=40,h={begin:{start:1,end:40},click:{start:50,end:61},dbclick:{start:100,end:130},a1:{start:200,end:234},a2:{start:300,end:334},a3:{start:400,end:434},a4:{start:500,end:534},a5:{start:600,end:634},a6:{start:700,end:734}},b=new Audio,f=d({list:[{src:"http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/index/logo.png"},{src:"http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/index/tips_open.png"},{src:"http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/index/title.png"},{src:"http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/award/bg.jpg"},{src:"http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/award/btn.png"},{src:"http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/award/code.png"},{src:"http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/award/detail_1.png"},{src:"http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/award/mask_opacity.png"},{src:"http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/award/title_1.png"},{src:"http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/award/popup_share.png"},{src:"http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/award/btn_share.png"},{src:"http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/index/loading.png"},{src:"http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/sound.mp3",type:"audio",obj:b}],success:function(){if(m.dbclick=!0,m["a"+j[0]]=!0,m.click=!0,$("#loading").addClass("hide").removeClass("active"),m.begin=!0,i("begin",!1,function(){$("#btn_open").removeClass("hide"),$(".p1title").css({opacity:0}).transit({opacity:1},1e3),$(".logo").css({opacity:0}).transit({opacity:1},1e3),$(".tips_open").css({opacity:0}).transit({opacity:1},1e3),$(".tips_tri").addClass("active").css({opacity:0}).transit({opacity:1},1e3),$(".tips_openflower").addClass("active")}),b.autoplay=!1,b.loop=!0,b.play(),b.paused){var t=function(){document.removeEventListener("touchstart",t,!0),b.play()};/MicroMessenger/i.test(navigator.userAgent)?window.WeixinJSBridge?WeixinJSBridge.invoke("getNetworkType",{},function(){b.play()}):document.addEventListener("WeixinJSBridgeReady",function(){WeixinJSBridge.invoke("getNetworkType",{},function(){b.play()})},!1):document.addEventListener("touchstart",t,!0)}window.klarr[1].start()},progressmethod:function(t){$("#loadpercent").html("红包赶来中 "+t+"%")}}),y=h.begin.start;y<=h.begin.end;y++)f.push({src:"http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/pic_begin/"+y+".jpg",name:""+y});for(y=h.dbclick.start;y<=h.dbclick.end;y++)f.push({src:"http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/pic_dbclick/"+y+".jpg",name:""+y});for(var w,v,j=[1,2,3,4,5,6],_=1,y=0;6>y;y++)w=parseInt(6*Math.random()),v=j[y],j[y]=j[w],j[w]=v;for(y=h["a"+j[0]].start;y<=h["a"+j[0]].end;y++)f.push({src:"http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/pic_a"+j[0]+"/"+y+".jpg",name:""+y});for(f.push({src:"http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/award/bg"+j[0]+".jpg"}),f.push({src:"http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/award/ta"+j[0]+".png"}),f.push({src:"http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/award/tb"+j[0]+".png"}),window.klarr=[],y=1;6>y;y++){window.klarr[y]=d({list:[],idx:y,success:function(){m["a"+j[this.idx]]=!0,window.klarr[this.idx+1]&&window.klarr[this.idx+1].start(),_++}});for(var w=h["a"+j[y]].start;w<=h["a"+j[y]].end;w++)window.klarr[y].push({src:"http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/pic_a"+j[y]+"/"+w+".jpg",name:""+w});window.klarr[y].push({src:"http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/award/bg"+j[y]+".jpg"}),window.klarr[y].push({src:"http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/award/ta"+j[y]+".png"}),window.klarr[y].push({src:"http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/award/tb"+j[y]+".png"})}console.log(j,_);var x=["我的新年好运是【新肌】，允许你进来借点福气！","我的新年好运是【年轻】，你会跟我一起年轻吗？","我的新年好运是【桃花】，来比比咱们的桃花运！","我的新年好运是【倾心】，已经心有所属的快进来！","我的新年好运是【耀目】，你不会跟我一样出众吧？","我的新年好运是【美满】，能得到美满的人可不多哦！"];$(window).on("resize",a),a();var C,k,E=0,S=!1,T=!1,z=0,L=(3*Math.random()+2,!1);$(function(){C=$("#cvs")[0],k=C.getContext("2d"),k.fillStyle="#000000",k.fillRect(0,0,640,1136),f.start(),$("#btn_open").on("touchstart",function(){if(!S&&!T){T=!0,_smq.push(["custom","lucky","press"]),gaClick("gamestart"),s();var t=(new Date).getTime();console.log(t-E),z++,S=!0,gaClick("getpocket"),i("dbclick",!1,function(){var t=j[parseInt(Math.random()*_)];L=t,$(".tips_tag").attr("src","http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/award/tb"+t+".png").transit({opacity:1},1e3).transit({opacity:.9},3e3),$(".p2title").css({opacity:0}),$(".p2title_content").attr("src","http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/award/ta"+t+".png"),i("a"+t,!1,function(){c(t),$(".tips_tri").removeClass("active"),$(".page1").css({opacity:1}).transit({opacity:0},1500,function(){$(".p2title").transit({opacity:1},1e3,"cubic-bezier(.17,.67,.49,1)",function(){$(".p2title").addClass("active")}),$(".btn_getcoupon").css({opacity:0}).removeClass("hide").transit({opacity:1},1500),$(".page1").addClass("hide"),history.pushState("page2","","index.html#page=2"),_smq.push(["pageview","/first","first"])}),$(".page2").addClass("bg"+t).removeClass("hide")})}),$(".p1title").transit({opacity:0},2e3),$(".tips_open").transit({opacity:0},2e3),$(".tips_tri").transit({opacity:0},2e3),E=t,T=!1}}),$(".btn_getcoupon").on("touchstart",function(){switch(L){case"1":_smq.push(["custom","start","olay1"]),gaClick("applygift-skin");break;case"1":_smq.push(["custom","start","olay4"]),gaClick("applygift-young");break;case"1":_smq.push(["custom","start","olay2"]),gaClick("applygift-peach");break;case"1":_smq.push(["custom","start","YLY"]),gaClick("applygift-qingxin");break;case"1":_smq.push(["custom","start","prox"]),gaClick("applygift-dazzling");break;case"1":_smq.push(["custom","start","olay3"]),gaClick("applygift-meiman")}$(".logo").transit({opacity:0},1e3),$(".page3").removeClass("hide"),$(".page2").transit({opacity:0},1e3,function(){$(".page2").addClass("hide"),_smq.push(["pageview","/follow","follow"])})});var t=function(){T=!0,S=!1,z=0,k.fillStyle="#000000",k.fillRect(0,0,640,1136),$(".tips_tag").css({opacity:0}),$(".page2").removeClass("bg1 bg2 bg3 bg4 bg5 bg6 hide").css({opacity:1}),$(".logo").css({opacity:0}),$(".p2title").css({opacity:0}).removeClass("active"),$(".btn_getcoupon").css({opacity:0}),$(".page3").addClass("hide"),$(".page1").css({opacity:1}).removeClass("hide"),$(".p2title_content").attr("src",""),setTimeout(function(){T=!1},1800),i("begin",!1,function(){$("#btn_open").removeClass("hide"),$(".p1title").css({opacity:0}).transit({opacity:1},1e3),$(".tips_openflower").addClass("active"),$(".logo").css({opacity:0}).transit({opacity:1},1e3),$(".tips_open").css({opacity:0}).transit({opacity:1},1e3),$(".tips_tri").addClass("active").css({opacity:0}).transit({opacity:1},1e3)})};$(".btn_again").on("touchend",function(){t(),gaClick("again"),_smq.push(["custom","follow","tryagain"])}),$(".tips_tellfriends").on("touchstart",function(){$(".mask_share").removeClass("hide"),_smq.push(["custom","follow","tellothers"]),gaClick("result-share")}),$(".mask_share").on("touchstart",function(){$(".mask_share").addClass("hide")}),window.onpopstate=t,window.kp=d,window.drawanimate=i}),share.wxSign()},function(t){var e,o;e=[],o=function(){var t=function(e,o){"object"==typeof e&&(o=e,e=o.list);var a=new t.prototype.init;if(o)for(var n in o)a[n]=o[n];else a.list=e||[];return a.l=a.list.length,a.al=0,a.testobj=document.createElement("div"),a.testobj.style.cssText="width:0px;height:0px;overflow:hidden;z-index:-1;margin:0;padding:0;border:none;outline:none;",a};return t.prototype={files:{},total:0,max:0,init:function(){return this},setLoading:function(e){t.prototype.files[e.name]=e,t.prototype.total++,++this.al==this.l&&(this.success&&this.success(),this.notclean||document.body.removeChild(this.testobj)),this.progress=this.al/this.l*100>>0,this.progressmethod&&this.progressmethod(this.progress)},start:function(){console.log(this),document.body.appendChild(this.testobj);var e=this.l,o=0,a=this;this.al=0,setTimeout(function(){for(;e>o;)!function(e){var n;if(a.list[o].name||(a.list[o].name="auto"+t.prototype.max),t.prototype.max++,"script"==a.list[o].type){var i=a.list[o];$.cachedScript(i.src).done(function(){e({name:i.name,src:i.src,_com:!0})}).fail(function(){e({name:i.name,src:i.src,_com:!0})})}else if("audio"==a.list[o].type){var s,i=a.list[o];i.obj?(i.obj.addEventListener("canplaythrough",function(){i.obj._com=!0,t.prototype.files[i.obj.name]=i.obj,e(i.obj)}),i.obj.addEventListener("error",function(){i.obj._com=!1,console.log(i.obj.name),e(i.obj)}),i.obj.src=i.src,i.obj.name=i.name,i.obj.load()):(s=new Audio,s.addEventListener("canplaythrough",function(){s._com=!0,t.prototype.files[s.name]=s,e(s)}),s.addEventListener("error",function(){s._com=!1,console.log(s.name),e(s)}),s.src=i.src,s.name=i.name,s.load())}else{var n=new Image;n.src=a.list[o].src,n.name=a.list[o].name,a.testobj.appendChild(n),n.complete?(n._com=!0,e(n)):(n.onload=function(){n._com=!0,e(n)},n.onerror=function(){n._com=!1,console.log(n.name),e(n)})}}(function(t){a.setLoading.apply(a,[t])}),o++},20)},push:function(t){if("array"==typeof t)for(var e=0,o=t.length;e++;o>e)this.list.push(t[e]);else{if("object"!=typeof t)return;this.list.push(t)}this.l=this.list.length}},t.prototype.init.prototype=t.prototype,t}.apply(null,e),!(void 0!==o&&(t.exports=o))}]);