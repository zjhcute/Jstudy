let fs = require('fs');
function readFile(path) {
    return new Promise((res, rej) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if(data) {
                res(data);
            }else {
                rej(err);
            }
        })
    })
}
// 采取Promise.then的方式线性解决回调地狱
// let oP = readFile('./data/number.txt');
// oP.then((val) => {
//     return readFile(val);
// }).then((val) => {
//     return readFile(val);
// }).then((val) => {
//     console.log(val);
// })

// 采取Generator更优雅的解决回调地狱问题
// 先采取一种不优雅的方式
function* read() {
    let val1 = yield readFile('./data/number.txt');
    let val2 = yield readFile(val1);
    let val3 = yield readFile(val2);
    return val3;
}
let oR = read();
let {value, done} = oR.next();
value.then((val) => {
    let {value, done} = oR.next(val);
    value.then((val) => {
        let {value, done} = oR.next(val);
        value.then((val) => {
            console.log(val);
        })
    })
})

// 优化代码
