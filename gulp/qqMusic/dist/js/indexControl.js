!function(n,t){function e(n){this.len=n,this.curIndex=0}e.prototype={prev:function(){return this.getIndex(-1)},next:function(){return this.getIndex(1)},getIndex:function(n){return this.curIndex=(this.curIndex+n)%this.len,this.curIndex}},t.indexControl=e}(window.Zepto,window.player||(window.player={}));