$.fn.extend({
    myFullPage: function(config) {
        // 初始化变量, 把要多次用到的数据初始化一下, 优化性能
        var colorsArray = config.colorsArray;
        var $wrap = $(this);
        var $section = $wrap.find('.section');
        // 表示当前的section位置
        var curIndex = 0;
        // 控制移动的锁
        var lock = true;
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
        $wrap.css({textAlign: 'center', position: 'absolute', top: 0, color: '#fff'})
            .find('.section')
                .each(function(index, ele) {
                    $(ele).css({backgroundColor: colorsArray[index % 3], position: 'relative'})
                        .find('.slide')
                            .wrapAll('<div class="slideWrapper"></div>')
                                .css({float: 'left', width: clientWidth, height: clientHeight, position: 'relative'});
                })
        $section.find('.slideWrapper')
                .each(function(index, ele) {
                    $(ele)
                        .css({position: 'absolute', height: clientHeight, width: clientWidth * $(ele).find('.slide').length, left: 0})
                })
        // js控制移动
        // 先给第一个section加一个active类名作为标记
        // 同时还有每一个slideWrapper下面的第一个slide加一个innerActive类名作为标记
        $section.eq(0)
                .addClass('active')
                    .end().find('.slideWrapper').each(function(index, ele) {
                        $(ele).find('.slide').eq(0).addClass('innerActive');
                    });
        // 判断移动的方向
        // left -> 37, top -> 38, right -> 39, bottom -> 40
        $(document).on('keydown', function(e) {
            if(lock) {
                // 锁住
                if(e.which == 37 || e.which == 38 || e.which == 39 || e.which == 40) {
                    lock = false;
                }
                // 新建一个当前位置的变量
                var newTop = $wrap.offset().top;
                var direction = '';
                // 控制垂直移动
                if(e.which == 38 || e.which == 40) {
                    // 如果按了上并且不是第一个section
                    if(e.which == 38 && curIndex != 0) {
                        direction = 'top';
                        config.onLeave(curIndex, direction);
                        curIndex --;
                        newTop += clientHeight;
                    }else if (e.which == 40 && curIndex != $section.length - 1) {
                        direction = 'bottom';
                        config.onLeave(curIndex, direction);
                        curIndex ++;
                        newTop -= clientHeight;
                    }
                    $wrap.animate({
                        top: newTop
                    }, 350, 'swing', function() {
                        lock = true;
                        $section.eq(curIndex).addClass('active');
                        if(direction == 'top') {
                            $section.eq(curIndex + 1).removeClass('active');
                        }else{
                            $section.eq(curIndex - 1).removeClass('active');
                        }
                        config.afterLoad(curIndex, direction);
                    })
                }
                // 控制slideWrapper水平移动
                if(e.which == 37 || e.which == 39) {
                    var $sw = $('.active').find('.slideWrapper');
                    if($sw.length != 0) {
                        var curSlide = $sw.find('.innerActive');
                        var newLeft = $sw.offset().left;
                        var direction = '';
                        if(e.which == 37 && curSlide.index() != 0) {
                            newLeft += clientWidth;
                            direction = 'left';
                        }else if(e.which == 39 && curSlide.index() != $sw.find('.slide').length - 1) {
                            newLeft -= clientWidth;
                            direction = 'right';
                        }
                        $sw.animate({
                            left: newLeft
                        }, 350, 'swing', function() {
                            lock = true;
                            direction != '' ? curSlide.removeClass('innerActive') : '';
                            if(direction == 'left') {
                                curSlide.prev().addClass('innerActive');
                            }else if(direction == 'right') {
                                curSlide.next().addClass('innerActive');
                            }
                        })
                    }else{
                        lock = true;
                    }
                }
            }
        })               
    }
})