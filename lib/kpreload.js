//start()->开始加载
//push(obj)->向队列加入对象或包含多个对象的数组
//krpeload(list,obj)->初始化加载队列为list,obj中可定义成功函数success,进度函数progressmethod(n);
//属性:
// l:当前加载总数
// al:已加载的数量
// progress:当前加载进度(0-100)
// files:包含加载对象的对象
// max:全局要加载的数量
// total:全局加载完的数量
// 对象结构{name:"",src:"",type:"audio|空",obj:""};obj为当type为audio时传入的赋值对象
// (function(){
define([],function(){
var kpreload = function(list,obj){
  if(typeof list == 'object'){
    // console.log('isobj');
    obj = list;
    list = obj.list;
  }
  var kobj = new kpreload.prototype.init();
  if(obj){
    for(var k in obj){
      kobj[k] = obj[k];
    };
  }
  else{
    kobj.list = list || [];
  }
  kobj.l = kobj.list.length;
  kobj.al = 0;
  kobj.testobj = document.createElement('div');
  kobj.testobj.style.cssText = 'width:0px;height:0px;overflow:hidden;z-index:-1;margin:0;padding:0;border:none;outline:none;';
  return kobj;
}
kpreload.prototype = {
  files:{},
  total:0,
  max:0,
  init:function(){
    return this;
  },
  setLoading:function(img){
    kpreload.prototype.files[img.name]=img;
    kpreload.prototype.total ++;
    if(++this.al == this.l){
      this.success && this.success();
      if(!this.notclean)document.body.removeChild(this.testobj);
    }
    this.progress = this.al / this.l * 100 >> 0;
    this.progressmethod && this.progressmethod(this.progress);
  },
  start:function(){
    console.log(this);
    document.body.appendChild(this.testobj);
    var ll = this.l,
        i = 0,
        _this = this;
    this.al = 0;
    setTimeout(function() {
      while (i < ll) {
        (function(sl) {
          var img;
          if(!_this.list[i].name)_this.list[i].name = 'auto' + kpreload.prototype.max;
          kpreload.prototype.max ++;
          if(_this.list[i].type == 'script'){
            var k = _this.list[i];
            $.cachedScript(k.src).done(function(script,textStatus){
              sl({name:k.name,src:k.src,_com:true});
            }).fail(function(){
              sl({name:k.name,src:k.src,_com:true});
            });
          }
          else if(_this.list[i].type == 'audio'){
            var k = _this.list[i];
            var aud;
            if(k.obj){
              k.obj.addEventListener('canplaythrough',function() {
                k.obj._com = true;
                kpreload.prototype.files[k.obj.name]=k.obj;
                sl(k.obj);
              });
              k.obj.addEventListener('error',function() {
                k.obj._com = false;
                console.log(k.obj.name);
                sl(k.obj);
              });
              k.obj.src = k.src;
              k.obj.name = k.name;
              k.obj.load();
            }else{
              aud = new Audio();
              aud.addEventListener('canplaythrough',function() {
                aud._com = true;
                kpreload.prototype.files[aud.name]=aud;
                sl(aud);
              });
              aud.addEventListener('error',function() {
                aud._com = false;
                console.log(aud.name);
                sl(aud);
              });
              aud.src = k.src;
              aud.name = k.name;
              aud.load();
            }
          }
          else{
            var img = new Image();
            img.src = _this.list[i].src;
            img.name = _this.list[i].name;
            _this.testobj.appendChild(img);
            if (img.complete) {
              img._com = true;
              sl(img);
            } else {
              img.onload = function() {
                img._com = true;
                sl(img);
              }
              img.onerror = function() {
                img._com = false;
                console.log(img.name);
                sl(img);
              }
            }
          }
        })(function(img){
          _this.setLoading.apply(_this,[img]);
        });
        i++;
      }
    }, 20);
  },
  push:function(array){
    if(typeof array == 'array'){
      var i = 0, l = array.length;
      for(;i++;i<l){
        this.list.push(array[i]);
      }
    }
    else if(typeof array == 'object'){
      this.list.push(array);
    }
    else{
      return;
    }
    this.l = this.list.length;
  }
}
kpreload.prototype.init.prototype = kpreload.prototype;
return kpreload;
});
// export default kpreload
// })();

// var kl = kpreload({
// list:[
// 	{src:'dist/assets/img/share.jpg'},
// 	{src:'dist/assets/img/logo.png'},
// 	{src:'dist/assets/img/menubtn.png'},
// 	{src:'dist/assets/img/navbg.png'},
// 	{src:'dist/assets/img/nexticon.png'},
// 	{src:'dist/assets/img/nexticonbg.png'},
// 	{src:'dist/assets/img/testdrive.png'},
// 	{src:'dist/assets/img/details/close.png'},
// 	{src:'dist/assets/img/details/icon_close.png'},
// 	{src:'dist/assets/img/details/icon_open.png'},
// 	{src:'dist/assets/img/details/open.png'}
// ],
// success:function(){
//   console.log('load finish');
// },
// progressmethod:function(n){
// 	console.log('loading'+n+'%');
// }
// });