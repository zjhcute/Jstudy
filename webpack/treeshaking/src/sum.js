import lodash from 'lodash-es';
var sum = function(a, b) {
    return a + b;
}
var isArray = function(arg) {
    return lodash.isArray(arg);
}
export {
    sum, 
    isArray
}