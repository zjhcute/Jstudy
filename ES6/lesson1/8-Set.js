// let oS = new Set(['a', 'b', 'c', 'd']);
// oS.forEach((a, b, c) => {
//     console.log(a, b, c);
// })
// for(let prop of oS) {
//     console.log(prop);
// }
// let arr = [10, 9, 8]
// for(let prop in arr) {
//     console.log(prop);
// }

// --------------------
// Set小练习
// let zjh = {
//     name: 'zjh'
// }
// let hhq = {
    // name: 'hhq'
// }
// let arr = [1, 2, 4, 3, 4, 5, 6, 7, 1, 9, 4, zjh, hhq];
// let obj = {}
// let newArr = []
// for(let prop of arr) {
//     obj[prop] ? obj[prop] += 1 : obj[prop] = 1 && newArr.push(prop);
// }
// newArr = new Set(arr);
// newArr = [...newArr]

// Set取交集
// let arr1 = [1, 2, 3, 4, 5, 6, 1, 2, 3]
// let arr2 = [1, 2, 5, 6, 7, 20, 10]
// let oS1 = new Set(arr1);
// let oS2 = new Set(arr2);
// let newArr = new Set([...arr1, ...arr2]);
// newArr = [...newArr];

// Set取交集
// let arr1 = [1, 2, 3, 4, 5, 6, 1, 2, 3]
// let arr2 = [1, 2, 5, 6, 7, 20, 10]
// let oS1 = new Set(arr1);
// let oS2 = new Set(arr2);
// let newArr = [...oS1].filter(ele => oS2.has(ele));

// Set取差集
let arr1 = [1, 2, 3, 4, 5, 6, 1, 2, 3]
let arr2 = [1, 2, 5, 6, 7, 20, 10]
let oS1 = new Set(arr1)
let oS2 = new Set(arr2)
let newArr1 = [...oS1].filter(ele => !oS2.has(ele))
let newArr2 = [...oS2].filter(ele => !oS1.has(ele))
let newArr3 = [...newArr1, ...newArr2];
