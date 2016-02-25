var kp = require('kpreload.js');
var adjustObj = {fontSize: 40, height: 1100, width: 750}, adjustclock;
function adjust(){
	clearTimeout(adjustclock);
	adjustObj.height = $(window).height();
	adjustObj.width = $(window).width();
	adjustObj.fontSize = adjustObj.width / 16;
	document.documentElement.style.fontSize = adjustObj.fontSize + 'px';
	adjustclock = setTimeout(function(){
		var fs = parseInt($('html').css('fontSize'));
		if(fs !== adjustObj.fontSize){
			document.documentElement.style.fontSize = adjustObj.fontSize * adjustObj.fontSize / fs + 'px';
		}
	},300);
}
function log(txt){
	if(txt)$('#info').html(txt);
	else{return $('#info').html();}
}
var util = {
  hash: function(item){
    if(!item){
      var Obj = {}, result;
      var t = location.hash;
      var r = new RegExp("[\#\&]([^=]*)=([^&])","ig")
      while(result = r.exec(t)){
        Obj[result[1]] = result[2];
      }
      return Obj;
    }
    if(typeof item == 'object'){
      var txt = '', o;
      for(o in item){
        txt += o + '=' + item[o] + '&';
      }
      txt = txt.slice(0,-1);
      location.hash = txt;
    }
    else{
      var svalue = location.hash.match(new RegExp("[\#\&]" + item + "=([^\&]*)(\&?)","i"));
        return svalue ? svalue[1] :"";
    }
  }
};
(function($, _) {
  'use strict';
	var isTouch = "ontouchend" in document.createElement("div");
  var ev = {
    start: isTouch ? 'touchstart' : 'mousedown',
    end: isTouch ? 'touchend' : 'mouseup',
    move: isTouch ? 'touchmove' : 'mousemove',
    cancel: isTouch ? 'touchcancel' : 'mousecancel'
  };
  $.event.special[_] = {
    setup: function() {
      $(this).off('click').on(ev.start + ' ' + ev.end, function(e) {
        ev.E = e.originalEvent.changedTouches ? e.originalEvent.changedTouches[0] : e;
      }).on(ev.start, function(e) {
        if (e.which && e.which !== 1) {
          return;
        }
        ev.target = e.target;
        ev.time = new Date().getTime();
        ev.X = ev.E.pageX;
        ev.Y = ev.E.pageY;
      }).on(ev.end, function(e) {
        if (
          ev.target === e.target &&
          ((new Date().getTime() - ev.time) < 750) &&
          (ev.X === ev.E.pageX && ev.Y === ev.E.pageY)
        ) {

          e.type = _;
          e.pageX = ev.E.pageX;
          e.pageY = ev.E.pageY;

          $.event.dispatch.call(this, e);
        }
      });
    },
    remove: function() {
      $(this).off(ev.start + ' ' + ev.end);
    }
  };
  $.fn[_] = function(fn) {
    return this[fn ? 'on' : 'trigger'](_, fn);
  };
})(jQuery, 'tap');
(function(){
  var lastTime = 0;
  var prefixes = 'webkit moz ms o'.split(' '); //各浏览器前缀

  var requestAnimationFrame = window.requestAnimationFrame;
  var cancelAnimationFrame = window.cancelAnimationFrame;

  var prefix;
  //通过遍历各浏览器前缀，来得到requestAnimationFrame和cancelAnimationFrame在当前浏览器的实现形式
  for( var i = 0; i < prefixes.length; i++ ) {
      if ( requestAnimationFrame && cancelAnimationFrame ) {
        break;
      }
      prefix = prefixes[i];
      requestAnimationFrame = requestAnimationFrame || window[ prefix + 'RequestAnimationFrame' ];
      cancelAnimationFrame  = cancelAnimationFrame  || window[ prefix + 'CancelAnimationFrame' ] || window[ prefix + 'CancelRequestAnimationFrame' ];
  }

  //如果当前浏览器不支持requestAnimationFrame和cancelAnimationFrame，则会退到setTimeout
  if ( !requestAnimationFrame || !cancelAnimationFrame ) {
      requestAnimationFrame = function( callback, element ) {
        var currTime = new Date().getTime();
        //为了使setTimteout的尽可能的接近每秒60帧的效果
        var timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) ); 
        var id = window.setTimeout( function() {
          callback( currTime + timeToCall );
        }, timeToCall );
        lastTime = currTime + timeToCall;
        return id;
      };
      
      cancelAnimationFrame = function( id ) {
        window.clearTimeout( id );
      };
  }

  //得到兼容各浏览器的API
  window.requestAnimationFrame = requestAnimationFrame; 
  window.cancelAnimationFrame = cancelAnimationFrame;
})();
var clock,
    framenum = 1,
    flag_load = {
      begin:false,
      click:false,
      dbclick:false,
      a1:false,
      a2:false,
      a3:false,
      a4:false,
      a5:false,
      a6:false
    },
    flag_run = false,
    defaultframe = 40,
    framearray = {
      begin:{start: 1, end: 40},
      click:{start: 50, end: 61},
      dbclick:{start: 100, end: 130},
      a1:{start: 200, end: 234},
      a2:{start: 300, end: 334},
      a3:{start: 400, end: 434},
      a4:{start: 500, end: 534},
      a5:{start: 600, end: 634},
      a6:{start: 700, end: 734}
    },
    audio = new Audio();
var kl = kp({
	list:[
    {src: 'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/index/logo.png'},
    {src: 'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/index/tips_open.png'},
    {src: 'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/index/title.png'},
    {src: 'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/award/bg_no.jpg'},
    {src: 'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/award/btn.png'},
    {src: 'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/award/code_no.png'},
    {src: 'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/award/detail_1_no.png'},
    {src: 'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/award/mask_opacity.png'},
    {src: 'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/award/title_1.png'},
    {src: 'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/award/popup_share.png'},
    {src: 'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/award/btn_share.png'},
    {src: 'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/index/loading.png'},
    {src: 'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/sound.mp3', type: 'audio', obj: audio}
	],
	success:function(){
    flag_load.dbclick = true;
    flag_load['a'+tararr[0]] = true;
    flag_load.click = true;
    $('#loading').addClass('hide').removeClass('active');
		flag_load.begin = true;
    drawanimate('begin', false, function(){
      $('#btn_open').removeClass('hide');
      $('.p1title').css({opacity: 0}).transit({opacity: 1}, 1000);
      $('.logo').css({opacity: 0}).transit({opacity: 1}, 1000);
      $('.tips_open').css({opacity: 0}).transit({opacity: 1}, 1000);
      $('.tips_tri').addClass('active').css({opacity: 0}).transit({opacity: 1}, 1000);
      $('.tips_openflower').addClass('active');
    });
    audio.autoplay = false;
    audio.loop = true;
    audio.play();
    if (audio.paused) {
      var ev = function() {
        document.removeEventListener('touchstart', ev, true);
        audio.play();
      }
      if (/MicroMessenger/i.test(navigator.userAgent)) {
        if (window.WeixinJSBridge) {
          WeixinJSBridge.invoke('getNetworkType', {}, function(e) {
            audio.play();
          });
        } else {
          document.addEventListener("WeixinJSBridgeReady", function() {
            WeixinJSBridge.invoke('getNetworkType', {}, function(e) {
              audio.play();
            });
          }, false);
        }
      } else {
        document.addEventListener('touchstart', ev, true);
      }
    }
    window.klarr[1].start();
	},
	progressmethod:function(n){
    $('#loadpercent').html('红包赶来中 ' + n + "%");
	}
});
for(var _i1 = framearray.begin.start; _i1 <= framearray.begin.end ; _i1++){
  kl.push({src:'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/pic_begin/'+_i1+'.jpg', name: ""+_i1});
}
// for(let i = framearray.click.start; i <= framearray.click.end ; i++){
//  kl.push({src:'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/pic_click/'+i+'.jpg', name: ""+i});
// }
for(_i1 = framearray.dbclick.start; _i1 <= framearray.dbclick.end ; _i1++){
  kl.push({src:'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/pic_dbclick/'+_i1+'.jpg', name: ""+_i1});
} 

var tararr = [1,2,3,4,5,6], tarcount = 1;
for(var _i1 = 0, j, k; _i1 < 6; _i1++){
  j = parseInt(Math.random() * 6);
  k = tararr[_i1];
  tararr[_i1] = tararr[j];
  tararr[j] = k;
}
for(_i1 = framearray['a'+tararr[0]].start; _i1 <= framearray['a'+tararr[0]].end ; _i1++){
  kl.push({src:'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/pic_a'+tararr[0]+'/'+_i1+'.jpg', name: ""+_i1});
}
kl.push({src:'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/award/bg'+tararr[0]+'.jpg'});
kl.push({src:'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/award/ta'+tararr[0]+'.png'});
kl.push({src:'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/award/tb'+tararr[0]+'.png'});

window.klarr = []
for(_i1 = 1; _i1<6; _i1++){
  window.klarr[_i1] = kp({
    list: [
    ],
    idx: _i1,
    success: function(){
      flag_load['a'+tararr[this.idx]] = true;
      if(window.klarr[this.idx+1])window.klarr[this.idx+1].start();
      tarcount ++;
    }
  })
  for(var j = framearray['a'+tararr[_i1]].start; j <= framearray['a'+tararr[_i1]].end ; j++){
    window.klarr[_i1].push({src:'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/pic_a'+tararr[_i1]+'/'+j+'.jpg', name: ""+j});
  }
  window.klarr[_i1].push({src:'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/award/bg'+tararr[_i1]+'.jpg'});
  window.klarr[_i1].push({src:'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/award/ta'+tararr[_i1]+'.png'});
  window.klarr[_i1].push({src:'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/award/tb'+tararr[_i1]+'.png'});
}
console.log(tararr,tarcount);
function drawpic(name){
  if(kl.files[name])ctx.drawImage(kl.files[name],0,0);
}
function cleanpic(){
  ctx.clearRect(0,0,500,888);
}
function drawanimate(name, df, callback){
  console.log(name);
  if(flag_load[name]){
    clearTimeout(clock);
    framenum = framearray[name].start;
    clock = setInterval(function(){
      // requestAnimationFrame(function(){
        // $('#logo').html(framenum);
        if(framenum > framearray[name].end){
          clearTimeout(clock);
          if(df){
            drawpic(defaultframe);
          }
          callback && callback();
        }
        else{
          drawpic(framenum);
          framenum++;
        }
      // });
    }, 84);
  }
}
function settips(){
  $('.tips_openflower').removeClass('active');
  
  // clearTimeout(tips_clock);
  // tips_clock = setTimeout(function(){
    // $('#btn_open').addClass('active');
  // },2000);
}
var sharetext = [
  '我的新年好运是【新肌】，允许你进来借点福气！',
  '我的新年好运是【年轻】，你会跟我一起年轻吗？',
  '我的新年好运是【桃花】，来比比咱们的桃花运！',
  '我的新年好运是【倾心】，已经心有所属的快进来！',
  '我的新年好运是【耀目】，你不会跟我一样出众吧？',
  '我的新年好运是【美满】，能得到美满的人可不多哦！'
]
function setshare(k){
  share.content.imgurl = 'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/share_'+k+'.jpg',
  share.content.title = sharetext[(k - 1)];
  if(wx)share.wxShare();
}
$(window).on('resize', adjust);
adjust();
var cvs, ctx, dbclicktime = 0, tips_clock, flag_dbclick = false, taplock = false, taptimes = 0, tartaptimes = Math.random() * 3 + 2, aidx = false;

$(function(){
   	cvs = $('#cvs')[0],
    ctx = cvs.getContext('2d');
    ctx.fillStyle = '#000000';
    ctx.fillRect(0,0,640,1136);
    kl.start();
    $('#btn_open').on('touchstart', function(e){
      if(flag_dbclick || taplock)return;
      taplock = true;
      _smq.push(['custom','BClucky','press']);
      gaClick('gamestart');
      settips();
      var nt = new Date().getTime();
      console.log(nt - dbclicktime);
      taptimes ++;
      if(true){//nt - dbclicktime < 400){
        flag_dbclick = true;
        gaClick('getpocket');
        drawanimate('dbclick', false, function(){
          var idx = tararr[parseInt(Math.random() * tarcount)];
          aidx = idx;
          $('.tips_tag').attr('src', 'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/award/tb' + idx + '.png').transit({opacity: 1}, 1000).transit({opacity: 0.9}, 3000);
          $('.p2title').css({opacity: 0});
          $('.p2title_content').attr('src', 'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/award/ta' + idx + '.png');
          drawanimate('a'+idx, false, function(){
            setshare(idx);
            $('.tips_tri').removeClass('active');
            $('.page1').css({opacity: 1}).transit({opacity: 0}, 1500, function(){
              $('.p2title').transit({opacity: 1}, 1000, 'cubic-bezier(.17,.67,.49,1)', function(){
                $('.p2title').addClass('active');
              });
              $('.btn_getcoupon').css({opacity: 0}).removeClass('hide').transit({opacity: 1},1500);
              $('.page1').addClass('hide');
              history.pushState('page2','','index.html#page=2');
              _smq.push(['pageview','/first','first']);
              // if(kl.ptototype)kl.ptototype.files = false;
              // if(kl__proto__)kl.__proto__.files = false;
            });
            $('.page2').addClass('bg' + idx).removeClass('hide');
          });
        });
        $('.p1title').transit({opacity: 0},2000);
        $('.tips_open').transit({opacity: 0},2000);
        $('.tips_tri').transit({opacity: 0},2000);
        // clearTimeout(tips_clock);
      }
      else{
        drawanimate('click', true);
      }
      dbclicktime = nt;
      taplock = false;
    });
    $('.btn_getcoupon').on('touchstart', function(e){
      switch(aidx){
        case '1':_smq.push(['custom','start','BColay1']);
          gaClick('applygift-skin');
          break;
        case '1':_smq.push(['custom','start','BColay4']);
          gaClick('applygift-young');
          break;
        case '1':_smq.push(['custom','start','BColay2']);
          gaClick('applygift-peach');
          break;
        case '1':_smq.push(['custom','start','BCYLY']);
          gaClick('applygift-qingxin');
          break;
        case '1':_smq.push(['custom','start','BCprox']);
          gaClick('applygift-dazzling');
          break;
        case '1':_smq.push(['custom','start','BColay3']);
          gaClick('applygift-meiman');
          break;
        default:break;
      }
      
      $('.logo').transit({opacity: 0}, 1000);
      $('.page3').removeClass('hide');
      $('.page2').transit({opacity: 0}, 1000,function(){
        $('.page2').addClass('hide');
        _smq.push(['pageview','/follow','follow']); 
      });
    });
    var againfunc = function(e){
      // if(e.state == 'page2'){
        taplock = true;
        flag_dbclick = false;
        taptimes = 0;
        ctx.fillStyle = '#000000';
        ctx.fillRect(0,0,640,1136);
        $('.tips_tag').css({opacity: 0});
        $('.page2').removeClass('bg1 bg2 bg3 bg4 bg5 bg6 hide').css({opacity: 1});
        $('.logo').css({opacity: 0});
        $('.p2title').css({opacity: 0}).removeClass('active');
        $('.btn_getcoupon').css({opacity: 0});
        $('.page3').addClass('hide');
        $('.page1').css({opacity: 1}).removeClass('hide');
        $('.p2title_content').attr('src', '');
        setTimeout(function(){
          taplock = false;
        },1800);
        drawanimate('begin', false, function(){
          $('#btn_open').removeClass('hide');
          $('.p1title').css({opacity: 0}).transit({opacity: 1}, 1000);
          $('.tips_openflower').addClass('active');
          $('.logo').css({opacity: 0}).transit({opacity: 1}, 1000);
          $('.tips_open').css({opacity: 0}).transit({opacity: 1}, 1000);
          $('.tips_tri').addClass('active').css({opacity: 0}).transit({opacity: 1}, 1000);
        });
      // }
    }
    $('.btn_again').on('touchend', function(e){
      againfunc();
      gaClick('again');
      _smq.push(['custom','follow','BCtryagain']);
    });
    $('.tips_tellfriends').on('touchstart', function(e){
      $('.mask_share').removeClass('hide');
      _smq.push(['custom','follow','BCtellothers']);
      gaClick('result-share');
    });
    $('.mask_share').on('touchstart', function(e){
      $('.mask_share').addClass('hide');
    });
    window.onpopstate = againfunc;
    window.kp = kp;
    window.drawanimate = drawanimate;
});
share.wxSign();