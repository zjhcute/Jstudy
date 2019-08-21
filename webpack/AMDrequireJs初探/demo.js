(function() {
    require.config({
        paths: {
            m1: './modules/m1',
            m2: './modules/m2',
            jquery: './libs/jQuery'
        }
    })
    require(['m1', 'm2', 'jquery'], function(m1, m2, $) {
        console.log(m1.getName());
        m2.show();
        $('body').css('backgroundColor', '#000');

    })
})()