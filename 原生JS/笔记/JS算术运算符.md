## JS运算符

### +:
    1. 数学运算, 字符串链接
    2. 任何数据类型加字符串都等于字符串

### + - * / % = ()
    完全符合数学运算规范

### ++ -- += -= /= *= &=
    var a = 10;
    var b = a ++;
    b = 10;
    
    a = 10;
    b = a --;
    b = 10;
    
    a = 10;
    b = ++ a;
    b = 11;
    
    a = 10;
    b = -- a;
    b = 9
    
    a = 10;
    b = 0;
    b += a;
    b = 10;
    
    a = 10;
    b = 0;
    b -= a;
    b = -10;
    
    a = 10;
    b = 10;
    b *= a;
    b = 100;
    
    a = 10;
    b = 10;
    b /= a;
    b = 1;
    
    a = 10;
    b = 10;
    b %= a;
    b = 0