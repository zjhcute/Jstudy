(function() {
    function TurnPage(options) {
        this.wrap = options.wrap;
        this.allPageSize = options.allPageSize;
        this.pageSize = options.pageSize;
        this.nowPage = options.nowPage;
        this.allPage = Math.ceil(this.allPageSize / this.pageSize);
        this.changePageCb = options.changePageCb;
        this.init = function() {
            this.createDom();
            this.initStyle();
            this.bindEvent();
        }
    }
    // 创建DOM结构
    TurnPage.prototype.createDom = function() {
        // 清空之前的
        $(this.wrap).empty();
        // 先生成一个ul包裹li
        var oUl = $('<ul class="turnpage-ul"></ul>');
        // 如果nowPage > 1, 就插入上一页
        if(this.nowPage > 1) {
            $('<li class="prev-page">上一页</li>').appendTo(oUl);
        }
        // 插入1
        var firstLi = $('<li class="num">1</li>');
        firstLi.appendTo(oUl);
        // 如果大于4, 就插入...和nowPage之前的两页
        // 不大于4的话, 就不插入...,但是要插入nowPage前面所有的页
        if(this.nowPage > 4) {
            $('<li class="dot">...</li>').appendTo(oUl);
            for(var i = this.nowPage - 2; i < this.nowPage; i ++) {
                $('<li class="num">'+ i +'</li>').appendTo(oUl);
            }
        }else {
            for(var i = 2; i < this.nowPage; i ++) {
                $('<li class="num">'+ i +'</li>').appendTo(oUl);
            }
        }
        // 避免插入当前页和最开始和最末尾冲突
        if(this.nowPage != 1 && this.nowPage != this.allPage) {
            $('<li class="num active">'+ this.nowPage +'</li>').appendTo(oUl);
        }else if(this.nowPage == 1) {
            firstLi.addClass('active');
        }
        if(this.nowPage + 2 < this.allPage) {
            for(var i = this.nowPage + 1; i < this.nowPage + 3; i ++) {
                $('<li class="num">'+ i +'</li>').appendTo(oUl);
            }
            $('<li class="dot">...</li>').appendTo(oUl);
        }else {
            for(var i = this.nowPage + 1; i < this.allPage; i ++) {
                $('<li class="num">'+ i +'</li>').appendTo(oUl);
            }
        }
        // 只有在总页数比一多的时候, 才能插入最后一页
        if(this.allPage != 1) {
            var lastLi = $('<li class="num">'+ this.allPage +'</li>');
            lastLi.appendTo(oUl);
        }
        if(this.nowPage == this.allPage && this.allPage != 1) {
            lastLi.addClass('active');
        }
        if(this.nowPage < this.allPage) {
            $('<li class="next-page">下一页</li>').appendTo(oUl);
        }
        oUl.appendTo(this.wrap);
    }
    // 赋予样式
    TurnPage.prototype.initStyle = function() {
        $(this.wrap).css({
            textAlign: 'center'
        })
        $('ul', this.wrap).css({
            overflow: 'hidden',
            display: 'inline-block'
        })
        $('li', this.wrap).css({
            float: 'left',
            listStyle: 'none',
            cursor: 'pointer',
            padding: '4px 6px',
            margin: '0px 4px',
            fontSize: '16px'
        })
        $('.active', this.wrap).css({
            backgroundColor: '#23B8FF',
            fontWeight: 'bold',
            fontSize: '18px',
            color: '#fff'
        })
    }
    // 绑定事件
    TurnPage.prototype.bindEvent = function() {
        var self = this;
        $('.num').on('click', function() {
            self.changePage(parseInt($(this).text()));
        })
        $('.prev-page').on('click', function() {
            self.changePage(self.nowPage - 1);
        })
        $('.next-page').on('click', function() {
            self.changePage(self.nowPage + 1);
        })
    }
    // 改变页码时, 重新渲染
    TurnPage.prototype.changePage = function(page) {
        this.nowPage = page;
        this.init();
        this.changePageCb && this.changePageCb({
            nowPage: this.nowPage,
            pageSize: this.pageSize
        })
    }
    $.fn.extend({
        Page: function(options) {
            options.wrap = this;
            var page = new TurnPage(options);
            page.init();
            return this;
        } 
    }) 
}())