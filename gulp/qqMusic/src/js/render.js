(function($, root) {
    function renderImg(src) {
        var img = new Image();
        img.src = src;
        img.onload = function() {
            $('.img-box img').attr('src', src);
            root.blurImg(img, $('body'));
        }
    };
    function renderInfo(song, singer, album) {
        $('.song-name').text(song);
        $('.singer-name').text(singer);
        $('.album-name').text(album);
    };
    function renderIsLike(islike) {
        if(islike) {
            $('.like').addClass('liking');
        }else {
            $('.like').removeClass('liking');
        }
    }
    root.render = function(data) {
        renderImg(data.image);
        renderInfo(data.song, data.singer, data.album);
        renderIsLike(data.isLike);
    }
})(window.Zepto, window.player || (window.player = {}))