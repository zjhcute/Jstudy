var n = parseInt(prompt('please input a three-digits number'));
var one = 0,
    ten = 0,
    hundred = 0;
ten = n % 100;
hundred = (n - ten) / 100;
one = ten % 10;
ten = (ten - one) / 10;
document.write(n + "反过来写是: " + one + ten + hundred); 