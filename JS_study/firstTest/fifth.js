var a = parseInt(prompt('please input a:'));
var b = parseInt(prompt('please input b:'));
var c = parseInt(prompt('please input c:'));
document.write(a + " " + b + " " + c + "三个数");
for(var i = 0; i < 2; i ++) {
    if(a > b) {
        a += b;
        b = a - b;
        a = a - b;  
    }
    if(b > c) {
        b += c;
        c = b - c;
        b = b - c;
    }
}
document.write("<br>");
document.write("从小到大排序是: " + a + " " + b + " " + c);
document.write("<br>");
document.write("从大到小排序是: " + c + " " + b + " " + a);
document.write("<br>");
document.write("其中最大的是: " + c);