//封装函数, 兼容IE, 获取dom元素的指定属性
function getStyle(elem, prop) {
    if(window.elem.getComputedStyle) {
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
