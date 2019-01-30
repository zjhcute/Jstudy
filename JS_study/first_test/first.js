var input = parseInt(prompt("please input a number"));
var result = 1;
for(var i = 0; i < input; i++) {
    result *= 2;
}
document.write('2的' + input + '次幂 = ' + result);
