var n = parseInt(prompt("please input a number"));
var result = 1;//设置result的初始值为 1
for(var i = 0; i < n; i ++) {
    result *= 2;//n次幂就是1 * n个2
}//如果n = 0, 不进行循环, 满足2的0次幂 = 1
document.write('2的' + n + '次幂 = ' + result);
