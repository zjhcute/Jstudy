window.onload = function() {
    // console.log(1);
    var img = $('img');
    var len = img.length;
    for(var i = 0; i < len; i ++) {
        img.eq(i).css({
            'transform': 'rotateY(' + i * 30 + 'deg) translatez(500px)',
            'transition': 'transform .3s linear ' + (len - i - 1) * 0.1 + 's'
        })
    }
    bindEvent();
}
function bindEvent() {
    var lastX, lastY, nowX, nowY, disX, disY, rotX = 0, rotY = 0, timer;
    $('body').on('mousedown', function(e) {
        e.preventDefault();
        clearInterval(timer);
        lastX = e.clientX;
        lastY = e.clientY;
        $('body').on('mousemove', function (e) {
            // console.log(this);
            nowX = e.clientX;
            nowY = e.clientY;
            disX = nowX - lastX;
            disY = nowY -lastY;
            rotX -= disY * 0.2;
            rotY += disX * 0.2; 
            $('.box').css({
                'transform': 'rotatex('+ rotX +'deg) rotatey('+ rotY +'deg)'
            })
            lastX = nowX;
            lastY = nowY;
        })
    }).on('mouseup', function() {
        $('body').off('mousemove');
        timer = setInterval(function() {
            disX *= 0.95;
            disY *= 0.95;
            rotX -= disY * 0.5;
            rotY += disX * 0.5; 
            $('.box').css({
                'transform': 'rotatex('+ rotX +'deg) rotatey('+ rotY +'deg)'
            })
            if(Math.abs(rotX) <= 0.01 && Math.abs(rotY) <= 0.01) {
                clearInterval(timer);
            }
        }, 20)
    })
}