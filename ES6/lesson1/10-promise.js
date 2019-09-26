let oP = new Promise((resolve, reject) => {
    // console.log(0)
    resolve(1);
    // reject(2);
    // console.log(3);
});
// then也可以进行链式操作
// 上一个then不报错的话, 执行下一个then的成功函数
// 上一个then的返回值, 作为下一个then的参数
// 第一个then的返回值是Promise对象的话, 第二个then取决于这个Promise
oP.then((val) => {
    console.log(val);
    return 20;
}, (reason) => {
    console.log(reason);
    return 30;
}).then((val) => {
    console.log('ok then' + val);
}, (reason) => {
    console.log('no then' + reason);
})

// console.log(4);