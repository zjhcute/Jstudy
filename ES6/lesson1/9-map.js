let oMap = new Map([['name', 'zjh'], [1, 2], [{name: 'hhq'}, '18']])
oMap.set(['age', 21], 100)
// oMap.forEach((val, key) => {
//     console.log(val, key);
// })
for(let val of oMap) {
    console.log(val);
}