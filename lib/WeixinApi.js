var os = (function(){
	var ua = navigator.userAgent;
	var obj = {
		name: ua,
		isAndroid: /android/i.test(ua),
		isIOS: /iphone os/i.test(ua),
		isIpad: /ipad/i.test(ua),
		isWM: /windows ce/i.test(ua) || /windows mobile/i.test(ua),
		isMidp: /midp/i.test(ua),
		isUc7: /rv:1.2.3.4/i.test(ua),
		isUc: /ucweb/i.test(ua),
		isWeiXin: /MicroMessenger/i.test(ua),
		isWebKit: /webkit/i.test(ua),
		isChrome: /Chrome/i.test(ua)
	}
	obj.isMobile = obj.isAndroid || obj.isIOS || obj.isIpad || obj.isWM || obj.isMidp || obj.isUc7 || obj.isUc;	
	return obj;
})();
var share = ConfigShare(), wx;
function ConfigShare(){
	var share = {};
	share.wxSigned = false;
	share.wxSign = function(callback){
		var onload = function onload(){
			if(wx){
				// wx.config({debug:true});
				wx.ready(function(){
					share.wxSigned = true;
					wx.showOptionMenu();
					callback && callback();
					share.wxShare && share.wxShare();
				});
				wx.error(function(res) {
					alert(JSON.stringify(res));
				});
			}else{
				setTimeout(onload, 500);
			}
		};
		onload();
	};
	share.wxShare = function(){
		wx.onMenuShareTimeline({
			title: share.content.title,
			link: share.content.link,
			imgUrl: share.content.imgurl,
			success: function() {
				// log('success')
				share.callback && share.callback();
			},
			cancel: function() {
				share.cancelcallback && share.cancelcallback();
			}
		});
		
		//获取“分享给朋友”按钮点击状态及自定义分享内容接口
		wx.onMenuShareAppMessage({
			desc: share.content.desc,
			title: share.content.title,
			link: share.content.link,
			imgUrl: share.content.imgurl,
			type: '', // 分享类型,music、video或link，不填默认为link
			dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
			success: function() {
				share.callback && share.callback();
			},
			cancel: function() {
				share.cancelcallback && share.cancelcallback();
			}
		});
	}
	//-------------------------------------------------------微博站外分享函数
	share.wbShare=function(option){
		var url,txt,img,imgHtml='';
		if(option.obj) var btn=option.obj;
		else var btn=$('a.btnShare,#btnShare');
		if(option && btn.length>0){
			url=option.url||window.location.href;
			txt=option.text||"";
			img=option.image;
			txt=encodeURIComponent(txt);
			url=encodeURIComponent(url);
			if(img && img.length>0){
				imgHtml="&pic=";
				if($.type(img) === "string") imgHtml+=img;
				else for(var i=0; i<img.length; i++){
					imgHtml+=img[i];
					if(i<img.length-1) imgHtml+='||'
				}//end for
				imgHtml+='&searchPic=false';
			}//end for
			btn.attr({target:'_blank',href:'http://service.weibo.com/share/share.php?url=' + url + '&title=' + txt + imgHtml });
		}//end if
	}//end func
	
	share.btnShare=function(btn,box){
		if(btn) var shareBtn=btn;
		else var shareBtn=$('a.btnShare,#btnShare');
		if(box) var shareBox=box;
		else var shareBox=$('#shareBox');
		if(shareBtn.length>0){
			if(os.weixin){
				if(shareBox.length==0) shareBox=$('<aside class="shareBox"><img src="images/common/share.png"></aside>').appendTo($('body'));
				shareBtn.on('touchend',shareBtn_click);
			}//end if
			else if(!os.weibo && shareBtn.length>0) ishare.wbShare({ obj: shareBtn, url: ishare.content.link, text: ishare.content.weibo, image: ishare.content.image });
		}//end if
		function shareBtn_click(e){
			shareBox.show().one('touchend',function(e){
				$(this).hide();
			});
		}//end func
	}//end func
	return share;
}
(function(){
	share.content = {
		imgurl: 'http://promotion.geely.com/ddchuxing/img/sharelt.jpg',
		link: location.href,
		desc: window.location.href,
		title: '新年向上吉口令！吉利新帝豪送您滴滴打车券'
	};
	if(os.isWeiXin){
		document.write('<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js" type="text/javascript" charset="utf-8"></script>');
		document.write('<script src="http://promotion.geely.com/mlsjs/jsapi.php?act=get_ticket&url='+encodeURIComponent(location.href)+'" type="text/javascript"></script>');
		share.wxSign();
	}
})();
