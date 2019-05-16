(function() {
    function jQuery(selector) {
        return new jQuery.prototype.init(selector);
    }
    jQuery.prototype.init = function(selector) {
        this.length = 0;
        // 参数是null 或者 undefined, ==来判断的话, null == undefined
        if(selector == null) {
            return this;
        }
        // 如果参数类型是字符串并且是class名
        if(typeof selector == 'string' && selector.indexOf('.') != -1) {
            var dom = document.getElementsByClassName(selector.slice(1));
        }else if(typeof selector == 'string' && selector.indexOf('#') != -1) {
            var dom = document.getElementById(selector.slice(1));
        }
        // 如果selector的构造函数是Element
        if(selector instanceof Element || dom.length == undefined) {
            this[0] = dom || selector;
            this.length++;
        }else {
            for(var i = 0; i < dom.length; i ++) {
                this[i] = dom[i];
                this.length ++;
            }
        }
        return this;
    }
    jQuery.prototype.css = function(config) {
        for(var i = 0; i < this.length; i ++) {
            for(var attr in config) {
                this[i].style[attr] = config[attr];
            }
        }
        return this;
    }
    jQuery.prototype.get = function(num) {
        return num != null ? (num >= 0 ? this[num] : this[this.length + num]) : [].slice.call(this, 0);
    }
    jQuery.prototype.pushStack = function (dom) {
        if(dom.constructor != jQuery) {
            dom = jQuery(dom);
        }
        dom.prevObject = this;
        return dom;
    }
    jQuery.prototype.eq = function(num) {
        var dom = num != null ? (num >= 0 ? this[num] : this[this.length + num]) : null;
        return this.pushStack(dom);
    }
    jQuery.prototype.add = function(dom) {
        var curDom = jQuery(dom),
            baseDom = this,
            newDom = jQuery(newDom);
        for(var i = 0; i < baseDom.length; i ++) {
            newDom[newDom.length ++] = baseDom[i];
        }
        for(var i = 0; i < curDom.length; i ++) {
            newDom[newDom.length ++] = curDom[i];
        }
        return this.pushStack(newDom);
    }
    jQuery.prototype.end = function() {
        return this.prevObject;
    }


    jQuery.prototype.init.prototype = jQuery.prototype;
    window.$ = window.jQuery = jQuery;
})();