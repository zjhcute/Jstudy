let obj = {
    name: 'zjh',
    age: 21
}
// let {name, age} = obj;
let name, age;
({name, age} = obj);

let arr = [1, 2, 3];
let {length} = arr;
console.log(length);
let [, , x] = arr;
console.log(x);
let [a, b, c] = arr;
console.log(a, b, c);