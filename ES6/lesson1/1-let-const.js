// {
//     let a = 10;
//     {   
//         let a = 20;
//         console.log(a);
//     }
// }
// console.log(a);
// let a = 10;
var arr = []; 
for(let i = 0; i < 10; i ++) {
    arr[i] = function() {
        console.log(i);
    }
}
arr[0]();
arr[4]();
arr[5]();