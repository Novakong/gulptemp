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
    {src:'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/awardpage/bg.jpg'},
    {src:'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/awardpage/btn_detail.png'},
    {src:'http://bos.bj.baidubce.com/we-gd/olay/2016cny/img/awardpage/detail.png'}
  ],
  success:function(){
    $('#loading').removeClass('active').addClass('hide');
  },
  progressmethod:function(n){
    // $('#loadpercent').html('红包赶来中 '+n+'%');
  }
});
$(window).on('resize', adjust);
adjust();
$(function(){
  kl.start();
  $('.abtn').on('touchstart', function(e){
    var tar = $(e.target);
    console.log(tar.index())
    if(tar.hasClass('a1')){
      _smq.push(['custom','back','freeget']);
      gaClick('finalluckydraw');
    }
    else if(tar.hasClass('a2')){
      _smq.push(['custom','back','20']);
      gaClick('coupon-JD');
    }
    else if(tar.hasClass('a3')){
      getfacialcard();
      _smq.push(['custom','back','118']);
      gaClick('coupon-facial');
    }
    else if(tar.hasClass('a4')){
      getskintest();
      _smq.push(['custom','back','skintest']);
      gaClick('coupon-skintest');
    }
  });
  $('.btn_detail').on('touchstart', function(e){
    $('.detailbox').removeClass('hide');
    gaClick('rule');
  });
  $('.detail_close').on('touchstart', function(e){
    $('.detailbox').addClass('hide');
  })
});
function getskintest(){
  $('.mask_ajax').css({opacity: 0}).removeClass('hide').transit({opacity: 1});
  $.ajax({
    type:'POST',
    url:'http://campaign.olay.com.cn/2016cny/act/?type=getSkinTestCard',
    success:function(data){
      var da = JSON.parse(data);
      $('.mask_ajax').addClass('hide');
      if(da.result == "0" || da.result == 0){
        wx.addCard({cardList:[
           {
            cardId:da.card.card_id,
            cardExt:da.card.card_ext
           }
          ],
          success:function(res){
            console.log(res.cardList);
          }
        });
      }
      $('.mask_ajax').addClass('hide');
    },
    error:function(){
      $('.mask_ajax').addClass('hide');
    }
  })
}
function getfacialcard(){
  $('.mask_ajax').css({opacity: 0}).removeClass('hide').transit({opacity: 1});
  $.ajax({
    type:'POST',
    url:'http://campaign.olay.com.cn/2016cny/act/?type=getFacialCard',
    success:function(data){
      var da = JSON.parse(data);
      $('.mask_ajax').addClass('hide');
      if(da.result == "0" || da.result == 0){
        wx.addCard({cardList:[
           {
            cardId:da.card.card_id,
            cardExt:da.card.card_ext
           }
          ],
          success:function(res){
            console.log(res.cardList);
          }
        });
      }
      $('.mask_ajax').addClass('hide');
    },
    error:function(){
      $('.mask_ajax').addClass('hide');
    }
  })
}

share.wxSign(function(){
  wx.hideOptionMenu();
});