(function($, root) {
    var dataList, len;
    var nowIndex;
    var rotateImg = new root.rotateImg('.img-box');
    var progControl;
    function getData(url) {
        $.ajax({
            type: "GET",
            url: url,
            success: function(data) {
                dataList = data;
                len = data.length;
                nowIndex = new root.indexControl(len);
                var i = nowIndex.curIndex;
                $('body').trigger('play:change', i);
            },
            error: function() {
                console.log('error');
            }
        })
    }
    function bindEvent() {
        $('body').on('play:change', function(e, index) {
            root.render(dataList[index]);
            root.audioManage.getAudio(dataList[index].audio);
            if(root.audioManage.status == 'play') {
                root.audioManage.play();
            }
            if(progControl) {
                progControl.progReset();
            }
            rotateImg.resetRotate();
            progControl = new root.progControl(dataList[index].duration);
            progControl.renderTime(dataList[index].duration);
            if(root.audioManage.status == 'play') {
                progControl.progMove();
            }
        })
        $('.prev').on('click', function() {
            var i = nowIndex.prev();
            $('body').trigger('play:change', i);
        })
        $('.next').on('click', function() {
            var i = nowIndex.next();
            $('body').trigger('play:change', i);
        })
        $('.play').on('click', function() {
            if(root.audioManage.status == 'pause') {
                $(this).addClass('playing');
                root.audioManage.play();
                rotateImg.startRotate();
                progControl.progMove();
            }else {
                $(this).removeClass('playing');
                root.audioManage.pause();
                rotateImg.stopRotate();
                progControl.progStop();
            }
        })
        $('.slider').on('touchstart', function(e) {
            progControl.progStart(e);
            $(this).on('touchmove', function(e) {
            progControl.progTmove(e);
            })
        }).on('touchend', function() {
            root.audioManage.playTo(progControl.curTime);
            if(root.audioManage.status == 'play') {
                progControl.progMove();
            }
        })
    }
    getData('../mock/data.json');
    bindEvent();
}(window.Zepto, window.player || (window.player = {})))
// 信息+图片渲染到页面上            √
// 点击按钮                         √
// 音频的播放于暂停 切歌               √
// 进度条运动与拖拽
// 时间
// 图片旋转                         √
// 列表切歌     