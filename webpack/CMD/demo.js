define(function(require, exports, module) {
    var m1 = require('./module/m1');
    m1.show();
    var m3 = require('./module/m3');
    m3.bar();
    require.async('./module/m4', function(m4) {
        m4.input();
    })
    console.log('end');
})