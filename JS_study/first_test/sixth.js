document.write("100以内的质数有: ");
for(var i = 1; i < 101; i ++) {
    var flag = 0;
    for(var j = 2; j < i; j ++) {
        if(i % j == 0) {
            flag = 1;
        }
    }
    if(flag == 0) {
        document.write(i + " ");
    }
}