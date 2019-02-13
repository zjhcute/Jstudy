var n = parseInt(prompt('please input a number'));
var first_num = 1;//定义第一个数 = 1
var second_num = 1;//定义第二个数 = 1
var temp_num = 0;//定义一个临时变量 = 0
document.write('斐波那契数列前' + n + "项为:<br>");
for(var i = 0; i < n; i ++) {
    document.write(first_num + " ");//打印第一个数
    temp_num = first_num;//临时变量 = 第一个数
    first_num = second_num;//第一个数 = 第二个数
    second_num += temp_num; //第二个数 = 第二个数 + 临时变量
}