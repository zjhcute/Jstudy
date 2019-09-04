(function($, root) {
    function IndexControl(length) {
        this.len = length;
        this.curIndex = 0;
    }
    IndexControl.prototype = {
        prev: function() {
            return this.getIndex(-1);
        },
        next: function() {
            return this.getIndex(1);
        },
        getIndex: function(num) {
            this.curIndex = (this.curIndex + num) % this.len;
            return this.curIndex;
        }
    }
    root.indexControl = IndexControl;
})(window.Zepto, window.player || (window.player = {}))