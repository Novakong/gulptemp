!function(t){function e(a){if(o[a])return o[a].exports;var n=o[a]={exports:{},id:a,loaded:!1};return t[a].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var o={};return e.modules=t,e.cache=o,e.p="dist/js/",e(0)}([function(t,e,o){function a(){clearTimeout(s),r.height=$(window).height(),r.width=$(window).width(),r.fontSize=r.width/16,document.documentElement.style.fontSize=r.fontSize+"px",s=setTimeout(function(){var t=parseInt($("html").css("fontSize"));t!==r.fontSize&&(document.documentElement.style.fontSize=r.fontSize*r.fontSize/t+"px")},300)}function n(t,e,o){$(".mask_ajax").css({opacity:0}).removeClass("hide").transit({opacity:1}),$(".loadpic2").addClass("active"),$.ajax({type:"POST",url:"http://campaign.olay.com.cn/2016olaycny/act/?type=submit",data:{fullname:t,phone:e,address:o},success:function(t){var e=JSON.parse(t);$(".mask_ajax").addClass("hide"),$(".loadpic2").removeClass("active"),("0"==e.result||0==e.result)&&$(".page_tips").css({opacity:0}).removeClass("hide").transit({opacity:1})},error:function(){$(".mask_ajax").addClass("hide"),$(".loadpic2").removeClass("active"),$(".tips").html("上传资料出错，请您检查手机的网络")}})}function i(t,e,o){var a=!0,n=!0,i=!0;""==t&&(a=!1),""!=e&&e.match(/[0-9]{11}/)||(n=!1),""==o&&(i=!1);var s="";return i||(s="请输入您的地址"),n||(s="请您输入正确的手机号码"),a||(s="请输入您的个人姓名"),$(".tips").html(s),i&&n&&a}var s,c=o(1),r={fontSize:40,height:1100,width:750};!function(t,e){"use strict";var o="ontouchend"in document.createElement("div"),a={start:o?"touchstart":"mousedown",end:o?"touchend":"mouseup",move:o?"touchmove":"mousemove",cancel:o?"touchcancel":"mousecancel"};t.event.special[e]={setup:function(){t(this).off("click").on(a.start+" "+a.end,function(t){a.E=t.originalEvent.changedTouches?t.originalEvent.changedTouches[0]:t}).on(a.start,function(t){t.which&&1!==t.which||(a.target=t.target,a.time=(new Date).getTime(),a.X=a.E.pageX,a.Y=a.E.pageY)}).on(a.end,function(o){a.target===o.target&&(new Date).getTime()-a.time<750&&a.X===a.E.pageX&&a.Y===a.E.pageY&&(o.type=e,o.pageX=a.E.pageX,o.pageY=a.E.pageY,t.event.dispatch.call(this,o))})},remove:function(){t(this).off(a.start+" "+a.end)}},t.fn[e]=function(t){return this[t?"on":"trigger"](e,t)}}(jQuery,"tap");var d=c({list:[{src:"http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/awardpage/bg_reg.jpg"},{src:"http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/awardpage/bg_share.jpg"},{src:"http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/awardpage/btn_share.png"},{src:"http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/awardpage/btn_share1.png"},{src:"http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/awardpage/btn_submit.png"},{src:"http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/awardpage/label_addr.png"},{src:"http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/awardpage/label_mobile.png"},{src:"http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/awardpage/label_name.png"},{src:"http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/awardpage/label_addr.png"},{src:"http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/awardpage/popup_success.png"}],success:function(){$("#loading").removeClass("active").addClass("hide")},progressmethod:function(){}});$(window).on("resize",a),a(),$(function(){$("#btn_submit").on("touchstart",function(){var t=$("#addr").val(),e=$("#mobile").val(),o=$("#name").val();i(o,e,t)&&n(o,e,t),_smq.push(["custom","info","confirm"]),gaClick("submitprofile")}),$(".btn_share1").on("touchstart",function(){_smq.push(["custom","end","restart"]),gaClick("restart")}),d.start()}),share.content.imgurl="http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/share1.jpg",share.content.title="新年第一波礼赞来袭，价值千元好礼就这么任性！",share.callback=function(){$(".page_success").css({opacity:0}).removeClass("hide").transit({opacity:1}),_smq.push(["pageview","/end","end"])},share.wxSign()},function(t){var e,o;e=[],o=function(){var t=function(e,o){"object"==typeof e&&(o=e,e=o.list);var a=new t.prototype.init;if(o)for(var n in o)a[n]=o[n];else a.list=e||[];return a.l=a.list.length,a.al=0,a.testobj=document.createElement("div"),a.testobj.style.cssText="width:0px;height:0px;overflow:hidden;z-index:-1;margin:0;padding:0;border:none;outline:none;",a};return t.prototype={files:{},total:0,max:0,init:function(){return this},setLoading:function(e){t.prototype.files[e.name]=e,t.prototype.total++,++this.al==this.l&&(this.success&&this.success(),this.notclean||document.body.removeChild(this.testobj)),this.progress=this.al/this.l*100>>0,this.progressmethod&&this.progressmethod(this.progress)},start:function(){console.log(this),document.body.appendChild(this.testobj);var e=this.l,o=0,a=this;this.al=0,setTimeout(function(){for(;e>o;)!function(e){var n;if(a.list[o].name||(a.list[o].name="auto"+t.prototype.max),t.prototype.max++,"script"==a.list[o].type){var i=a.list[o];$.cachedScript(i.src).done(function(){e({name:i.name,src:i.src,_com:!0})}).fail(function(){e({name:i.name,src:i.src,_com:!0})})}else if("audio"==a.list[o].type){var s,i=a.list[o];i.obj?(i.obj.addEventListener("canplaythrough",function(){i.obj._com=!0,t.prototype.files[i.obj.name]=i.obj,e(i.obj)}),i.obj.addEventListener("error",function(){i.obj._com=!1,console.log(i.obj.name),e(i.obj)}),i.obj.src=i.src,i.obj.name=i.name,i.obj.load()):(s=new Audio,s.addEventListener("canplaythrough",function(){s._com=!0,t.prototype.files[s.name]=s,e(s)}),s.addEventListener("error",function(){s._com=!1,console.log(s.name),e(s)}),s.src=i.src,s.name=i.name,s.load())}else{var n=new Image;n.src=a.list[o].src,n.name=a.list[o].name,a.testobj.appendChild(n),n.complete?(n._com=!0,e(n)):(n.onload=function(){n._com=!0,e(n)},n.onerror=function(){n._com=!1,console.log(n.name),e(n)})}}(function(t){a.setLoading.apply(a,[t])}),o++},20)},push:function(t){if("array"==typeof t)for(var e=0,o=t.length;e++;o>e)this.list.push(t[e]);else{if("object"!=typeof t)return;this.list.push(t)}this.l=this.list.length}},t.prototype.init.prototype=t.prototype,t}.apply(null,e),!(void 0!==o&&(t.exports=o))}]);