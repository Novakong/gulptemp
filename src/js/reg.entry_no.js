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
var kl = kp({
  list:[
    {src:'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/awardpage/bg_reg.jpg'},
    {src:'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/awardpage/bg_share.jpg'},
    {src:'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/awardpage/btn_share.png'},
    {src:'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/awardpage/btn_share1.png'},
    {src:'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/awardpage/btn_submit.png'},
    {src:'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/awardpage/label_addr.png'},
    {src:'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/awardpage/label_mobile.png'},
    {src:'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/awardpage/label_name.png'},
    {src:'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/awardpage/label_addr.png'},
    {src:'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/awardpage/popup_success.png'}
  ],
  success:function(){
    $('#loading').removeClass('active').addClass('hide');
  },
  progressmethod:function(n){
    // $('#loadpercent').html('红包赶来中 '+n+'%');
  }
});
var cvs, ctx;
$(window).on('resize', adjust);
adjust();
$(function(){
  
  $('#btn_submit').on('touchstart', function(e){
    var addr = $('#addr').val(),
        mobile = $('#mobile').val(),
        name = $('#name').val();
    if(check(name, mobile, addr)){
      postmsg(name, mobile, addr);
    }
    _smq.push(['custom','info','BCconfirm']);
    gaClick('submitprofile');
  });
  $('.btn_share1').on('touchstart', function(e){
    _smq.push(['custom','end','restart']);
    gaClick('restart');
  });
  kl.start();
})
function postmsg(name, mobile, addr){
  $('.mask_ajax').css({opacity: 0}).removeClass('hide').transit({opacity: 1});
  $('.loadpic2').addClass('active');
  $.ajax({
    type:'POST',
    url:"http://campaign.olay.com.cn/2016olaycny/act/?type=submit",
    data:{fullname:name,phone:mobile,address:addr},
    success:function(data){
      var da = JSON.parse(data);
      $('.mask_ajax').addClass('hide');
      $('.loadpic2').removeClass('active');
      if(da.result == "0" || da.result == 0){
        $('.page_tips').css({opacity: 0}).removeClass('hide').transit({opacity: 1});
      }
    },
    error:function(){
      $('.mask_ajax').addClass('hide');
      $('.loadpic2').removeClass('active');
      $('.tips').html('上传资料出错，请您检查手机的网络');
    }
 });
}

function check(n, m, a){
  var result = true, fname = true, fphone = true, faddr = true;
  if(n == ""){
    fname = false;
  }
  if(m == "" || !m.match(/[0-9]{11}/)){
    fphone = false;
  }
  if(a == ""){
    faddr = false;
  }
  var txt = "";
  if(!faddr){
    txt = "请输入您的地址";
  }
  if(!fphone){
    txt = "请您输入正确的手机号码";
  }
  if(!fname){
    txt = "请输入您的个人姓名";
  }
  $('.tips').html(txt);
  return faddr && fphone && fname;
}
share.content.imgurl = 'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/share1.jpg';
share.content.title = '新年第一波礼赞来袭，价值千元好礼就这么任性！';
share.callback = function(){
  $('.page_success').css({opacity: 0}).removeClass('hide').transit({opacity: 1});
  _smq.push(['pageview','/end','end']);
  gaClick('sharesuccess');
};
share.wxSign();