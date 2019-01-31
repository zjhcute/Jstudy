var n = parseInt(prompt('please input a number'));
var result = 1;//定义result的初始值 = 1
for(var i = 1; i <= n; i ++) {
    result *= i; //n的阶乘就从1 * 2 * 3 * ... * n
}
document.write(n + '! = ' + result);