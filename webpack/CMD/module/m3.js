define(function(require, exports, module) {
    var m2 = require('./m2');
    function bar() {
        m2.foo();
        console.log('m3');
    }
    module.exports = {bar};
})