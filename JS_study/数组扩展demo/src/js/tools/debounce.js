function debounce(handler, delay) {
    return function(e) {
        var _self = this,
            _arg = arguments;                
        clearTimeout(this.timer);
        this.timer = setTimeout(function() {
            handler.apply(_self, _arg);
        }, delay)
    }
}