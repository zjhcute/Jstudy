// 点击dom操作
(function($){
    var obj = {
        init: function() {
            this.bindEvent();
            location.hash = 'student-sum';
        },
        bindEvent: function() {
            // 添加下拉菜单按钮的点击事件
            $('.list-btn').on('click', function() {
                $('.list-wrapper').slideToggle();
            })
            // 鼠标移出下拉菜单的事件
            $('.list-wrapper').on('mouseleave', function() {
                $('.list-wrapper').slideUp();
            })
            // 窗口大小大于768, 下拉菜单卷出 
            $(window).on('resize', function() {
                $('.list-wrapper').slideUp();
            })
            // 添加菜单点击使事件
            $('.student-items').on('click', function() {
                $('.active').removeClass('active');
                $(this).addClass('active');
                location.hash = $(this).data('id');
                return false;
            })
        }

    }
    obj.init();
} (window.jQuery))