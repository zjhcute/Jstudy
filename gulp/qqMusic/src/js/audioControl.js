(function($, root) {
    // 构造函数, 具有播放, 暂停, 获取音频的功能
    function AudioManage() {
        this.audio = new Audio();
        this.status = 'pause';
    }
    AudioManage.prototype = {
        play: function() {
            this.audio.play();
            this.status = 'play';
        },
        pause: function() {
            this.audio.pause();
            this.status = 'pause';
        },
        getAudio: function(src) {
            this.audio.src = src;
            this.audio.load();
        },
        playTo: function(time) {
            this.audio.currentTime = time;
        }
    }
    root.audioManage = new AudioManage()
})(window.Zepto, window.player || (window.player = {}))