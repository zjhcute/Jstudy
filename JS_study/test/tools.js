//封装函数, 兼容IE, 获取dom元素的指定属性
function getStyle(elem, prop) {
    if(window.getComputedStyle) {
        return window.getComputedStyle(elem, null).prop;
    }else {
        return elem.currentStyle.prop;
    }
}
var div = document.getElementsByTagName('div')[0];


//封装函数, 兼容IE, 获取一个dom元素相对于文档的位置
function getElementPosition(elem) {
    var leftX = 0, topY = 0;
    if(elem.offsetParent == document.body) {
        return {
            leftX : elem.offsetLeft,
            topY : elem.offsetTop
        }
    }else {
        leftX += getelementPostion(elem.parent).leftX;
        topY += getElementPostion(elem.parent).topY;
    }
    return {
        leftX : leftX,
        topY : topY
    }
}


//封装一个函数, ,兼容IE, 返回当前窗口尺寸
function getViewportOffset() {
    if(window.innerWidth) {
        return {
            x : window.innerWidth,
            y : window.innerHeight
        }
    }else {
        if(document.compatMode == 'CSS1Compat') {
            return {
                x : document.documentElement.clientWidth,
                y : document.documentElement.clientHeight
            }
        }else {
            return {
                x : document.body.clientWidth,
                y : document.body.clientHeight
            }
        } 
    }
}

// 封装一个函数, 兼容IE, 返回当前滚动条滚动距离
function getScrollOffset() {
    if(window.pageXoffset) {
        return {
            x : window.pageXOffset,
            y : window.pageYOffset
        }
    }else {
        return {
            x : document.body.scrollLeft + document.documentElement.scrollLeft,
            y : document.body.scrollTop + document.documentElement.scrollTop
        }
    }
}

//事件处理函数的兼容性写法
function addEvent(elem, type, handle) {
    if(elem.addEventListener) {
        elem.addEventListener(type, handle, false);
    }else if(elem.attachEvent) {
        elem.attachEvent('on' + type, function() {
            handle.call(elem);
        })
    }else {
        elem['on' + type] = handle;
    }
}


//封装一个函数, stopBubble, 兼容浏览器, 取消冒泡
function stopBubble(event) {
    if(event.stopPropagation) {
        event.stopPropagation();
    }else {
        event.cancelBubble = true;
    }
}


//封装一个函数, 兼容性, 阻止默认事件
function cancelHandler(evnet) {
    if(event.preventDefault) {
        event.preventDefault();
    }else {
        event.returnValue = false;
    }
}


// 究极运动缓冲函数
function startMove(oDom, attrObj, callBack) {
    clearInterval(oDom.timer);
    var iSpeed = null, iCur = null;
    oDom.timer = setInterval(function() {
        var bStop = true;
        for(var attr in attrObj) {
            if(attr == 'opacity') {
                iCur = parseFloat(getStyle(oDom, attr) * 100);
            }else{
                iCur = parseInt(getStyle(oDom, attr));
            }
            iSpeed = (attrObj[attr] - iCur) / 7;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            if(attr == 'opacity') {
                oDom.style[attr] = (iCur + iSpeed) / 100;
            }else {
                oDom.style[attr] = iCur + iSpeed + 'px';
            }
            if(iCur != attrObj[attr]) {
                bStop = false;
            }
        }
        if(bStop) {
            clearInterval(oDom.timer);
            typeof callBack == 'function' && callBack();
        }
    }, 30)
}