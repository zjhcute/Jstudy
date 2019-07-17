(function() {
    function DropDown(options) {
        // 接受一下参数
        this.wrap = options.wrap;
        this.width = options.width;
        // sumWidth用于存放计算得出的总的width
        this.sumWidth = 0;
        this.height = options.height;
        this.padLeft = options.padLeft;
        this.padTop = options.padTop;
        // 记录dlWrap朝向的参数
        this.position = options.position || 'right';
        // 记录dl方向的参数
        this.direction = options.direction || 'y';
        this.linkTitle = options.linkTitle;
        this.menuList = options.menuList;
        // 记录总的列数
        this.sumColumn = 0;
        this.init = function() {
            // 创建Dom
            this.createDom();
            // 初始化样式
            this.initStyle();
            // 绑定事件
            this.bindEvent();
        }
    }
    DropDown.prototype.createDom = function() {
        var self = this;
        $(this.wrap).append($('<a href="#">'+ this.linkTitle +'</a>'));
        $(this.wrap).append($('<div class="dlWrap"></div>'));
        this.menuList.forEach(function(ele, index) {
            // console.log(ele);
            var oDl = $('<dl></dl>');
            if(ele.title) {
                var oDt = $('<dt>'+ ele.title +'</dt>');
                oDt.appendTo(oDl);
            }
            ele.content.forEach(function(ele, index) {
                // console.log(ele);
                var oDd = $('<dd>'+ ele +'</dd>');
                oDd.appendTo(oDl);
            })
            oDl.appendTo($('.dlWrap', self.wrap));
        })
    }
    DropDown.prototype.initStyle = function() {
        var self = this;
        $(this.wrap).css({
            position: 'relative',
            fontSize: '12px',
            whiteSpace: 'nowrap',
            zIndex: 100
        });
        $('.dlWrap', this.wrap).css({
            position: 'absolute',
            backgroundColor: '#fff',
            display: 'none'
        })
        if(this.position == 'right') {
            $('.dlWrap').css({
                left: 0
            })
        }else if(this.position == 'left') {
            $('.dlWrap').css({
                right: 0
            })
        }
        $('dl', this.wrap).css({
            paddingLeft: self.padLeft,
            paddingTop: self.padTop,
            paddingBottom: self.padTop,
            // borderBottom: '1px solid #f1f1f1' 
            float: 'left'
        })
        $('dt', this.wrap).css({
            // width: self.width,
            height: self.height,
            paddingLeft: self.padLeft,
            color: '#424242',
            fontWeight: 'bold',
            float: 'left'
        })
        $('dd', this.wrap).css({
            width: self.width,
            height: self.height,
            paddingLeft: self.padLeft,
            float: 'left'
        })
        this.menuList.forEach(function(ele, index) {
            self.sumColumn += ele.column;
            $('dt', self.wrap).eq(index).css({
                width: (self.width + self.padLeft) * ele.column
            })
            $('dl', self.wrap).eq(index).css({
                width: (self.width + self.padLeft) * ele.column + self.padLeft,
                height: Math.ceil(ele.content.length / ele.column) * self.height + self.padTop * 2
            })
        })
        if(this.direction == 'x') {
            $('dl', this.wrap).css({
                borderRight: '1px solid #f1f1f1',
            })
            $('dl', this.wrap).each(function(index, ele) {
                self.sumWidth += $(ele).outerWidth();
            })
            $('.dlWrap', self.wrap).css({
                right: '-84px',
                width: self.sumWidth
            })
        }else if(this.direction == 'y') {
            $('dl', this.wrap).css({
                borderBottom: '1px solid #f1f1f1' 
            })
            $('.dlWrap', self.wrap).css({
                width: $('dl').eq(0).outerWidth()
            })
        }
    }
    DropDown.prototype.bindEvent = function() {
        $(this.wrap).hover(function() {
            $(this).css({
                backgroundColor: '#fff'
            })
            $('.dlWrap', this).show()
        }, function() {
            $(this).css({
                backgroundColor: '#e3e4e5'
            })
            $('.dlWrap', this).hide()
        })
    }
    $.fn.extend({
        dropDown: function(options) {
            options.wrap = this;
            var dropDown = new DropDown(options);
            dropDown.init();
        }
    })
}())