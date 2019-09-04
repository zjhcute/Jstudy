(function($, root) {
    // 播放进度条模块
    // 1. 渲染总时间, 以及渲染当前时间
    // 2. 进度条会自己动
    // 3, 进度条可以进行拖拽, 可以进行点击
    function ProgControl(time) {
        this.time = time;
        this.timer = null;
        this.curTime = 0;
        this.originOffset = 0;
    }
    ProgControl.prototype = {
        renderTime: function(time) {
            var m, s;
            m = Math.floor(time / 60);
            s = time - m * 60;
            m = m < 10 ? '0' + m : m;
            s = s < 10 ? '0' + s : s;
            $('.all-time').text(m + ':' + s);
            $('.cur-time').text('00:00');
        },
        progMove: function() {
            var self = this;
            this.timer = setInterval(function() {
                if(self.curTime != self.time) {
                   self.curTime++;
                    var x = self.curTime / self.time * 100;
                    self.progChange(x); 
                    self.timeChange(self.curTime);
                }else {
                    clearInterval(self.timer);
                }
            }, 1000)
        },
        progStop: function() {
            clearInterval(this.timer);
        },
        progReset: function() {
            clearInterval(this.timer);
            this.curTime = 0;
            this.progChange(0); 
        },
        timeChange: function(nowTime) {
            var m, s;
            m = Math.floor(nowTime / 60);
            s = nowTime - m * 60;
            m = m < 10 ? '0' + m : m;
            s = s < 10 ? '0' + s : s;
            $('.cur-time').text(m + ':' + s);
        },
        progChange: function(x) {
            $('.prog-top').css({
                transform: 'translateX('+ (-100 + x) +'%)'
            })
        },
        progStart: function(e) {
            clearInterval(this.timer);
            this.originOffset = $('.prog-wrap').offset();
        },
        progTmove: function(e) {
            var left = this.originOffset.left;
            var width = this.originOffset.width;
            var disX = e.changedTouches[0].clientX - left;
            var per = disX / width;
            if(per > 0 && per < 1) {
                this.progChange(per * 100);
                this.curTime = Math.floor(per * this.time);
                this.timeChange(this.curTime);
                console.log(per);
            }
        },
    }
    root.progControl = ProgControl;
})(window.Zepto, window.player || (window.player = {}))