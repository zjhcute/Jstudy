(function($, root) {
    function RotateZ(select) {
        this.deg = 0;
        this.timer = null;
        this.imgEle = $(select);
    }
    RotateZ.prototype = {
        startRotate: function() {
            var self = this;
            clearInterval(this.timer);
            this.timer = setInterval(function() {
                self.deg += 10;
                self.deg %= 360;
                self.imgEle.css({
                    'transform': 'rotatez('+ self.deg +'deg)',
                    'transition': 'all 1s linear'
                });
            }, 1000)
        },
        stopRotate: function() {
            clearInterval(this.timer);
        }, 
        resetRotate: function() {
            this.deg = 0;
            this.imgEle.css({
                'transform': 'rotatez('+ this.deg +'deg)',
                'transition': 'all 0s linear'
            });
        }
    }
    root.rotateImg = RotateZ;
})(window.Zepto, window.player || (window.player = {}))