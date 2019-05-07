// 页面初始化函数
function init() {
    timer = setTimeout(autoMove, 3000);
    bindEvent();
}
var ul = document.getElementsByClassName('hidden-ul')[0],
    moveWidth = ul.children[0].offsetWidth,
    direction = '',
    timer = null,
    num = ul.children.length - 1,
    lock = true,
    spanIndex = 0,
    btnWrapper = document.getElementsByClassName('button-wrapper')[0],
    len = btnWrapper.children.length;
// console.log(moveWidth);
// 绑定事件
function bindEvent() {
    var leftBtn = document.getElementsByClassName('left')[0],
        rightBtn = document.getElementsByClassName('right')[0];
    leftBtn.addEventListener('click', function() {
        autoMove('right->left');
    })
    rightBtn.addEventListener('click', function() {
        autoMove('left->right');
    })
    btnWrapper.addEventListener('click', function(e) {
        var target = e.target;
        if(target.tagName == 'SPAN') {
            btnActive(target);
        }
    })
}
// 按钮点击
function btnActive(target) {
    lock = false;
    clearTimeout(timer);
    var index = target.getAttribute('data-id');
    for(var i = 0; i < len; i ++) {
        btnWrapper.children[i].className = 'btn';
    }
    target.className = 'btn active';
    startMove(ul, {left: -index * moveWidth}, function() {
        lock = true;
        timer = setTimeout(autoMove(), 3000);
    })
}
// 自动运动
function autoMove(direction) {
    if(lock) {
        lock = false;
        clearTimeout(timer);
        if(!direction || direction == 'left->right') {
            startMove(ul, {left: ul.offsetLeft - moveWidth}, function() {
                if(ul.offsetLeft == -num * moveWidth) {
                    ul.style.left = '0px';
                }
                spanIndex = -ul.offsetLeft / moveWidth;
                for(var i = 0; i < len; i ++) {
                    btnWrapper.children[i].className = 'btn';
                }
                btnWrapper.children[spanIndex].className = 'btn active';
                timer = setTimeout(autoMove, 1500);
                lock = true;
            })
        }else if(direction == 'right->left') {
            if(ul.offsetLeft == 0) {
                ul.style.left = -num * moveWidth + 'px';
            }
            startMove(ul, {left: ul.offsetLeft + moveWidth}, function() {
                timer = setTimeout(autoMove, 1500);
                lock = true;
            })
        }
    }
}
init();
