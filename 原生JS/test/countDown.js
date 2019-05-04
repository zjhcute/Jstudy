function initTime(oDom) {
    oUl = document.createElement('ul');
    oUl.setAttribute('class', 'oUl');
    oDom.appendChild(oUl);
    var oLi = [];
    for(var i = 0; i < 8; i ++) {
        oLi[i] = document.createElement('li');
        oLi[i].setAttribute('class', 'oLi');
        oUl.appendChild(oLi[i]);
    }
    oLi[0].style.backgroundColor = '#ff69b4';
    oLi[1].style.backgroundColor = '#9400d3';
    oLi[2].style.backgroundColor = '#6495ed';
    oLi[3].style.backgroundColor = '#5f9ea0';
    oLi[4].style.backgroundColor = '#ffe411';
    oLi[5].style.backgroundColor = '#ffa500';
    oLi[6].style.backgroundColor = '#03f';
    oLi[7].style.backgroundColor = '#a58';
}
function countDown(oDom, callBack) {
    clearInterval(oDom.timer);
    var iSpeed = 1;
    oDom.timer = setInterval(function() {
        if(oDom.offsetWidth > 0) {
            iSpeed = iSpeed;
        }else {
            iSpeed = 0;
        }
        oDom.style.width = oDom.offsetWidth - iSpeed + 'px';
        if(typeof(callBack) == 'function' && oDom.offsetWidth == 0) {
            clearInterval(oDom.timer);
            callBack();
        }
    }, 25)
    
}