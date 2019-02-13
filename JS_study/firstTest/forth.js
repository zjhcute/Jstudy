var n = parseInt(prompt('please input a three-digits number'));
var one = 0,//定义个位初始值 = 0
    ten = 0,//定义十位初始值 = 0
    hundred = 0;//定义百位初始值 = 0
ten = n % 100;//456 % 100 = 56
hundred = (n - ten) / 100;//(456 - 56) / 100 = 4
one = ten % 10;//56 % 10 = 6
ten = (ten - one) / 10;//(56 - 6) / 10 = 5
document.write(n + "反过来写是: " + one + ten + hundred); 