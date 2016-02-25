import kp from 'kpreload.js';
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
	var h = adjustObj.height * 640 / adjustObj.width;
	var rate = ( -h + 833 + 207 ) / 207;
	adjustObj.rate = rate;
	if(rate < 0)rate = 0;
	if(rate > 1)rate = 1;
	$('.title').css({scale: 1 - 0.1 * rate});
	$('.car').css({scale: 1 - 0.1 * rate});
	$('.rulebtn').css({bottom: (1 - rate) * 5 + '%'})
}
function log(txt){
	if(txt)$('#info').html(txt);
	else{return $('#info').html();}
}
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
    defaultframe = 21,
    framearray = {
      begin:{start: 1, end: 21},
      click:{start: 22, end: 33},
      dbclick:{start: 34, end: 64},
      a1:{start: 65, end: 80},
      a2:{start: 81, end: 95},
      a3:{start: 96, end: 110},
      a4:{start: 111, end: 125},
      a5:{start: 126, end: 140},
      a6:{start: 141, end: 155}
    };
var kl = kp({
	list:[
	],
	success:function(){
    kl1.start();
	},
	progressmethod:function(n){
    // $('#loadpercent').html('loading ' + n + "%");
	}
});
var kl1 = kp({
  list:[
    {src: 'img/index/effect_click.png'},
    {src: 'img/index/logo.png'},
    {src: 'img/index/tips_open.png'},
    {src: 'img/index/title.png'}
  ],
  success:function(){
    flag_load.click = true;
    kl2.start();
  }
})
for(let i = framearray.click.start; i <= framearray.click.end ; i++){
  kl1.push({src:`img/pic_click/${i}.jpg`, name: ""+i});
}
var kl2 = kp({
  list:[
    {src: 'img/award/bg.jpg'},
    {src: 'img/award/bg1.jpg'},
    {src: 'img/award/bg2.jpg'},
    {src: 'img/award/bg3.jpg'},
    {src: 'img/award/bg4.jpg'},
    {src: 'img/award/bg5.jpg'},
    {src: 'img/award/bg6.jpg'},
    {src: 'img/award/btn.png'},
    {src: 'img/award/code.png'},
    {src: 'img/award/detail_1.png'},
    {src: 'img/award/mask_opacity.png'},
    {src: 'img/award/ta1.png'},
    {src: 'img/award/ta2.png'},
    {src: 'img/award/ta3.png'},
    {src: 'img/award/ta4.png'},
    {src: 'img/award/ta5.png'},
    {src: 'img/award/ta6.png'},
    {src: 'img/award/tips_share.png'},
    {src: 'img/award/title_1.png'}
  ],
  success:function(){
    flag_load.dbclick = true;
    kl3.start();
  }
})
for(let i = framearray.dbclick.start; i <= framearray.dbclick.end ; i++){
  kl2.push({src:`img/pic_dbclick/${i}.jpg`, name: ""+i});
}
var kl3 = kp({
  list:[
  ],
  success:function(){
    console.log(flag_load);
    flag_load.a1 = true;
    flag_load.a2 = true;
    flag_load.a3 = true;
    flag_load.a4 = true;
    flag_load.a5 = true;
    flag_load.a6 = true;
    $('#loading').addClass('hide');
    flag_load.begin = true;
    drawanimate('begin', false, function(){
      $('#btn_open').removeClass('hide');
      $('.p1title').css({opacity: 0}).transit({opacity: 1},function(){
        $('#btn_open').addClass('active');
      });
      $('.logo').css({opacity: 0}).transit({opacity: 1});
      $('.tips_open').css({opacity: 0}).transit({opacity: 1});
    });
  },
  progressmethod:function(n){
    $('#loadpercent').html('loading ' + n + "%");
  }
})
for(let i = framearray.a1.start; i <= framearray.a1.end ; i++){
  kl3.push({src:`img/pic_a1/${i}.jpg`, name: ""+i});
}
for(let i = framearray.a2.start; i <= framearray.a2.end ; i++){
  kl3.push({src:`img/pic_a2/${i}.jpg`, name: ""+i});
}
for(let i = framearray.a3.start; i <= framearray.a3.end ; i++){
  kl3.push({src:`img/pic_a3/${i}.jpg`, name: ""+i});
}
for(let i = framearray.a4.start; i <= framearray.a4.end ; i++){
  kl3.push({src:`img/pic_a4/${i}.jpg`, name: ""+i});
}
for(let i = framearray.a5.start; i <= framearray.a5.end ; i++){
  kl3.push({src:`img/pic_a5/${i}.jpg`, name: ""+i});
}
for(let i = framearray.a6.start; i <= framearray.a6.end ; i++){
  kl3.push({src:`img/pic_a6/${i}.jpg`, name: ""+i});
}
function drawpic(name){
  ctx.clearRect(0,0,500,888);
  if(kl.files[name])ctx.drawImage(kl.files[name],0,0);
}
function drawanimate(name, df, callback){
  if(flag_load[name]){
    clearTimeout(clock);
    framenum = framearray[name].start;
    clock = setInterval(function(){
      requestAnimationFrame(function(){
        drawpic(framenum);
        if(++framenum > framearray[name].end){
          clearTimeout(clock);
          setTimeout(function(){
            if(df){
              drawpic(defaultframe);
            }
            callback && callback();
          },80);
        }
      });
    }, 84); 
  }
}
function settips(){
  $('#btn_open').removeClass('active');
  // clearTimeout(tips_clock);
  // tips_clock = setTimeout(function(){
    $('#btn_open').addClass('active1');
  // },2000);
}
var cvs, ctx, dbclicktime = 0, tips_clock, flag_dbclick = false, taplock = false;
$(function(){
	$(window).on('resize', adjust);
	adjust();
   	cvs = $('#cvs')[0],
    ctx = cvs.getContext('2d');
    ctx.fillStyle = '#000000';
    ctx.fillRect(0,0,640,1136);
    for(let i = 1; i < 22; i++){
      kl.push({src:`img/pic_begin/${i}.jpg`, name: ""+i});
    }
    kl.start();
    $('#btn_open').on('touchstart', function(e){
      if(flag_dbclick || taplock)return;
      taplock = true;
      settips();
      var nt = new Date().getTime();
      console.log(nt - dbclicktime);
      if(flag_load.a1 && nt - dbclicktime < 400){
        flag_dbclick = true;
        drawanimate('dbclick', false, function(){
          var idx = (parseInt(Math.random() * 6) + 1);
          drawanimate('a'+idx, false, function(){
            $('.page2').addClass('bg' + idx).removeClass('hide');
            $('.page1').transit({opacity: 0}, 1000,function(){
              $('.p2title').attr('src', 'img/award/ta' + idx + '.png').transit({opacity: 1});
              $('.btn_getcoupon').css({opacity: 0}).removeClass('hide').transit({opacity: 1},1500);
              $('.page1').addClass('hide');
            });
          });
        });
        $('.p1title').transit({opacity: 0},2000);
        $('.tips_open').transit({opacity: 0},2000);
        // clearTimeout(tips_clock);
      }
      else{
        drawanimate('click', true);
      }
      dbclicktime = nt;
      taplock = false;
    });
    $('.btn_getcoupon').on('tap', function(e){
      $('.logo').transit({opacity: 0});
      $('.page3').removeClass('hide');
      $('.page2').transit({opacity: 0}, 1000,function(){
        $('.page2').addClass('hide');
      });
    });
    window.kp = kp;
});
share.wxSign();