function getStyle(oDom, attr) {
    if(window.getComputedStyle) {
        return window.getComputedStyle(oDom, null)[attr];
    }else {
        return oDom.currentStyle[attr];
    }
}
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