(function() {
    // 创建轮播图对象的构造函数
    function Swiper(options) {
        // 把options里面的参数都接收一下
        this.wrap = options.wrap;
        this.imgList = options.imgList;
        this.imgNum = this.imgList.length;
        this.width = options.width || $(this.wrap).width();
        this.height = options.height || $(this.wrap).height();
        this.isAuto = options.isAuto || false;
        this.direction = options.direction || "right";
        this.animateType = options.animateType || "animate";
        // 小圆点的大小和间距, 方便动态设置dot-wrapper的大小
        this.dotSize = 14,
        this.dotMargin = 5,
        // 当前图片的索引值
        this.nowIndex = 0;
        // 点击事件的开关
        this.flag = true;
        this.isResize = options.isResize || null;
        this.init = function() {
            // 创建轮播图所需要的dom结构
            this.createDom();
            // 赋予dom结构样式
            this.initStyle();
            // 绑定事件
            this.bindEvent();
            if(this.isAuto) {
                this.autoMove();
            }
        }
    }
    // 创建dom结构函数
    Swiper.prototype.createDom = function() {
        // 创建一个ul
        var oUl = $('<ul class="swiper"></ul>');
        // 创建一个用于放小圆点的div
        var oDot = $('<div class="dot-wrapper"></div>');
        // 遍历图片列表, 同时创建li存放图片和对应的小圆点
        this.imgList.forEach(function(ele, index) {
            var oLi = $('<li><a herf="#"><img src="'+ ele +'"></img></a></li>');
            var oSpan = $('<span class="dot"></span>');
            // 把创建的li添加到ul中
            $(oUl).append(oLi);
            // 把创建的span添加到dot-wrapper中
            $(oDot).append(oSpan);
        })
        if(this.animateType == 'animate') {
            $('<li><a herf="#"><img src="'+ this.imgList[0] +'"></img></a></li>').appendTo(oUl);
        }
        // 创建左右两边的按钮
        var leftBtn = $('<div class="left-btn">&lt;</div>');
        var rightBtn = $('<div class="right-btn">&gt;</div>');
        // 把左右两边的按钮, 图片列表和圆点都加入到this.wrap中
        $(this.wrap).append(oUl)
                    .append(oDot)
                    .append(leftBtn)
                    .append(rightBtn);

    }
    // 初始化样式函数
    Swiper.prototype.initStyle = function() {
        // this.wrap下面的所有的元素初始化
        $('*', this.wrap).css({
            listStyle: 'none',
            padding: 0,
            margin: 0
        })
        // 给this.wrap样式
        $(this.wrap).css({
            overflow: 'hidden',
            position: 'relative'
        })
        // swiper样式
        $('.swiper', this.wrap).css({
            width: this.animateType == 'animate' ? (this.imgNum + 1) * this.width : this.width,
            height: this.height,
            overflow: 'hidden',
            position: 'absolute',
            left: 0
        })
        // swiper下面的li的样式
        $('.swiper > li', this.wrap).css({
            width: this.width,
            height: this.height,
            float: 'left'
        })
        // img样式
        $('img', this.wrap).css({
            display: 'block',
            width: this.width,
            height: this.height,
        })   
        // 给左右按钮设置相同的样式
        $('.left-btn, .right-btn', this.wrap).css({
            width: 30,
            height: 50,
            backgroundColor: '#c1dff0',
            position: 'absolute',
            opacity: 0.5,
            color: '#424242',
            fontSize: 30,
            textAlign: 'center',
            lineHeight: '50px',
            top: this.height / 2 - 25,
            cursor: 'pointer'
        })
        // 分别位置左右按钮靠左还是靠右
        $('.right-btn', this.wrap).css({
            right: 0
        })
        // 设置小圆点按钮的样式
        $('.dot-wrapper', this.wrap).css({
            position: 'absolute',
            width: (this.dotSize + this.dotMargin * 2) * this.imgNum,
            height: 20,
            backgroundColor: '#c1dff0',
            opacity: 0.5,
            borderRadius: 10,
            bottom: 0,
            left: this.width / 2 - (this.dotSize + this.dotMargin * 2) * this.imgNum / 2,
        })
        $('.dot', this.wrap).css({
            display: 'inline-block',
            width: this.dotSize,
            height: this.dotSize,
            backgroundColor: '#424242',
            marginLeft: this.dotMargin,
            marginRight: this.dotMargin,
            borderRadius: this.dotSize / 2
        }).eq(this.nowIndex).css({
            backgroundColor: '#0f0',
        })
    } 
    // 绑定事件的函数
    Swiper.prototype.bindEvent = function() {
        var self = this;
        // 绑定做按钮点击事件
        $('.left-btn', this.wrap).on('click', function(e) {
            self.direction = 'left';
            if(self.animateType == 'animate') {
                self.move(self.direction);
            }else if(self.animateType == 'fade') {
                self.fade(self.direction);
            }
        })
        // 绑定右按扭点击事件
        $('.right-btn', this.wrap).on('click', function(e) {
            self.direction = 'right';
            if(self.animateType == 'animate') {
                self.move(self.direction);
            }else if(self.animateType == 'fade') {
                self.fade(self.direction);
            }
        })
        // 绑定圆点点击事件, 采用事件委托的方式
        $('.dot-wrapper', this.wrap).on('click', function(e) {
            // console.log($(e.target).index());
            if(e.target.tagName == 'SPAN') {
                self.dotClick($(e.target).index());
            }
        })
        // 鼠标移入主体的时候清除定时器
        if(this.isAuto) {
            $('.swiper', this.wrap).on('mouseenter', function() {
                clearInterval(self.timer);
            }).on('mouseleave', function() {
                self.autoMove();
            })
        }
        if(this.isResize) {
            $(window).resize(function() {
                self.width = $(self.wrap).width();
                self.initStyle();
            })
        }
        
        
    }
    // animate移动函数
    Swiper.prototype.move = function(direction) {
        var self = this;
        if(this.flag) {
            this.flag = false;
            if(direction == 'left') {
                if(this.nowIndex == 0) {
                    this.nowIndex = this.imgNum;
                    $('.swiper', this.wrap).css({
                        left: -self.width * self.nowIndex
                    })
                }
                this.nowIndex --;
            }else if(direction == 'right') {
                if(this.nowIndex == this.imgNum) {
                    this.nowIndex = 0;
                    $('.swiper', this.wrap).css({
                        left: 0
                    })
                }
                this.nowIndex ++;
            }
            $('.swiper', this.wrap).animate({
                left: self.nowIndex * -self.width
            }, function() {
                self.flag = true;
                $('.dot', self.wrap).css('backgroundColor', '#424242').eq(self.nowIndex % self.imgNum).css('backgroundColor', '#0f0');
            })
        }
    }
    // fade方式函数
    Swiper.prototype.fade = function(direction) {
        var self = this;
        if(direction == 'left') {
            if(this.nowIndex == 0) {
                this.nowIndex = this.imgNum;
            }
            this.nowIndex --;
        }else if(direction == 'right') {
            if(this.nowIndex == this.imgNum - 1) {
                this.nowIndex = -1;
            }
            this.nowIndex ++;
        }
        $('.swiper', this.wrap).children().fadeOut().eq(self.nowIndex).fadeIn(function() {
            self.flag = true;
            $('.dot', self.wrap).css('backgroundColor', '#424242').eq(self.nowIndex % self.imgNum).css('backgroundColor', '#0f0');
        });
    }
    // 圆点点击函数
    Swiper.prototype.dotClick = function(index) {
        var self = this;
        self.nowIndex = index;
        $('.dot', this.wrap).css('backgroundColor', '#424242').eq(index).css('backgroundColor', '#0f0');
        if(this.animateType == 'animate') {
            $('.swiper', this.wrap).animate({
                left: -index * self.width
            })
        }else if(this.animateType == 'fade') {
            $('.swiper', this.wrap).children().fadeOut().eq(index).fadeIn();
        } 
    }
    // 自动轮播函数
    Swiper.prototype.autoMove = function() {
        var self = this;
        this.timer = setInterval(function() {
            $('.right-btn', self.wrap).trigger('click');
        }, 3000)
    }
    // 扩展实例方法
    $.fn.extend({
        swiper: function(options) {
            // 把当前的this记录一下
            options.wrap = this;
            // 构建轮播图对象
            var swiper = new Swiper(options);
            swiper.init();
        }
    })    
} ())