$.fn.extend({
    myFullPage: function(config) {
        // 初始化变量, 把要多次用到的数据初始化一下, 优化性能
        var colorsArray = config.colorsArray;
        var $wrap = $(this);
        var $section = $wrap.find('.section');
        // 有一些重复写好几次的样式, 我们在这里初始化一下
        var clientWidth = $(window).outerWidth();
        var clientHeight = $(window).outerHeight();
        var commonStyle = {
            width: '100%',
            height: '100%'
        }
        // 初始化样式
        $('html')
            .add('body')
                .css({margin: 0, overflow: 'hidden'})
                    .add($wrap)
                        .add($section)
                            .css(commonStyle)
        $wrap.css({textAlign: 'center', position: 'absolute', top: 0})
            .find('.section')
                .each(function(index, ele) {
                    $(ele).css({backgroundColor: colorsArray[index], position: 'relative'})
                        .find('.slide')
                            .wrapAll('<div class="slideWrapper"></div>')
                                .css({float: 'left', width: clientWidth, height: clientHeight});
                })
        $section.find('.slideWrapper')
                .each(function(index, ele) {
                    $(ele)
                        .css({position: 'absolute', height: clientHeight, width: clientWidth * $(ele).find('.slide').length})
                })
        
    }
})