// let sum = (a, b) => {
//     return a + b;
// }
// let sum = (a, b) => (a + b)

// let sum = (a, b) => ({a: a, b: b})

// let sum = (a, b) => [a, b]

// var a = function(x) {
//     return function(y) {
//         return function(z) {
//             return x + y + z;
//         }
//     }
// }
// let a = (x) => (y) => (z) => (x + y + z);
// let a = x => y => z => (x + y + z);

// ------------------------------------------------------
// 箭头函数的arguments

// function outer() {
//     let sum = (a, b) => {
//         console.log(arguments, a, b);
//     }
//     sum(1, 2);
// }
// function outer() {
//     return (a, b) => {
//         return (arguments, a, b);
//     }
// }

// ----------------------------------------------------
// 箭头函数this指向
// let sum = () => {
//     console.log(this);
// }

let obj = {
    ms: 'inner',
    fn () {
        console.log(this);
        let sum = () => {
            console.log(this);
        }
        sum()
    }
}
obj.fn();