document.write("100以内的质数有: ");
for(var i = 1; i < 101; i ++) {
    var flag = 0;//定义标志位
    for(var j = 2; j < i; j ++) {
        if(i % j == 0) {
            flag = 1;
        }
    }//从2循环到i - 1, 如果有可以除尽的,flag = 1,不输出 
    if(flag == 0) {
        document.write(i + " ");//flag == 0, 说明是质数,输出
    }
}