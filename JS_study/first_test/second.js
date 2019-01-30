var n = parseInt(prompt('please input a number'));
var result = n;
if(n == 0) {
    result = 1;
}
else{
    for(var i = n; i > 1; i --) {
        result *= i - 1;
    }
}
document.write(n + '! = ' + result);