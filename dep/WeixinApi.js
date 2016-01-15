'use strict';
document.write('<script src="http://promotion.geely.com/mlsjs/jsapi.php?act=get_ticket&url='+encodeURIComponent(location.href)+'" type="text/javascript"></script>');
// var sharepiclc = location.href.replace('/index.html',"");
// if(sharepiclc[sharepiclc.length - 1] != '/'){
// 	sharepiclc += '/';
// }
// sharepiclc += 'dist/assets/img/shareimg.jpg';
var wxData = {
	imgUrl: 'http://promotion.geely.com/dihao_test/m/dist/assets/img/share.jpg',
	link: location.href,
	desc: window.location.href,
	title: '吉利帝豪 只为向上',
	share:function(){
		//获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
		wx.onMenuShareTimeline({
			title: wxData.title,
			link: wxData.link,
			imgUrl: wxData.imgUrl,
			success: function() {
				wxData.callback();
			},
			cancel: function() {
				
			}
		});
		
		//获取“分享给朋友”按钮点击状态及自定义分享内容接口
		wx.onMenuShareAppMessage({
			title: wxData.title,
			desc: wxData.desc,
			link: wxData.link,
			imgUrl: wxData.imgUrl,
			type: '', // 分享类型,music、video或link，不填默认为link
			dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
			success: function() {
				wxData.callback();
			},
			cancel: function() {
				
			}
		});
	},
	callback:function(){
		
	}
};
wx.ready(function() {
	wxData.share();
	// wx.hideOptionMenu();
});
wx.error(function(res) {
	// alert(JSON.stringify(res));
});