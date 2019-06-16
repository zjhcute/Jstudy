// 组件工厂
var ComponentFactory = function(config) {
    var $Div = config.element ? $(config.element) : $('<div class="component base"></div>');
    config.className && $Div.addClass(config.className);
    config.width && $Div.css('width', config.width);
    config.height && $Div.css('width', config.height);
    config.background && $Div.css('background', config.background);
    config.text && $Div.text(config.text);
    config.center && $Div.css({position: 'absolute', left: '50%', marginLeft: -config.width / 2});
    config.css && $Div.css(config.css);
    if(config.event) {
        for(var prop in config.event) {
            $Div.on(prop, config.event[prop]);
        }
    }
    $Div.on('cpLeave', function() {
        config.animateOut && $(this).animate(config.animateOut);
    });
    $Div.on('cpLoad', function() {
        config.animateIn && $(this).animate(config.animateIn);
    })
    return $Div;
}
