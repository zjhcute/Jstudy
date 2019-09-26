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
async function read(url) {
    let val1 = await readFile(url);
    let val2 = await readFile(val1);
    let val3 = await readFile(val2);
    return val3;
}
read('./data/number.txt').then((val) => {
    console.log(val);
})