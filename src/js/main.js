var loadflag=false,swipeable=true,_W =$(window).width(),_H=$(window).height()+2,_CH,pageindex=0,MAX_PAGE=3;
function getparam(str){
	return str.substr(str.indexOf('?')+1);
}
function isMicroM(){
	if(!navigator.userAgent.match(/MicroMessenger/i)){
		return false;
	}
	else{
        return true;
    }
}
window.aaa={k:1};