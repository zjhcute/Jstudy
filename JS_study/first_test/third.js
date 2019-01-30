var n = parseInt(prompt('please input a number'));
var first_num = 0;
var second_num = 1;
var temp_num = 0;
document.write('斐波那契数列前' + n + "项为:<br>");
for(var i = 0; i < n; i ++) {
    document.write(second_num + " ");
    temp_num = first_num;
    first_num = second_num;
    second_num += temp_num; 
}