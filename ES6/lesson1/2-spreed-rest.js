// 练习, 一个求平均值的函数, 一个去掉最大值最小值的函数, 使用...
function avearge(...arg) {
    arg.sort(function(a, b) {
        return a - b;
    })
    arg.pop();
    arg.shift();
    return computedScore(...arg);
}
function computedScore(...arg) {
    let sum = 0;
    arg.forEach(function(ele, index) {
        sum += ele;
    })
    return sum / arg.length;
}
let zjh = {
    name: 'zjh',
    age: 21,
    girlFriend: {
        name: 'hhq'
    }
}
let hobby = {
    football: '业余'
}
let obj = {
    ...zjh,
    ...hobby
}