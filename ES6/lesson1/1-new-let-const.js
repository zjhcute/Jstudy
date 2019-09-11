"use strict";

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

var _loop = function _loop(i) {
  arr[i] = function () {
    console.log(i);
  };
};

for (var i = 0; i < 10; i++) {
  _loop(i);
}

arr[0]();
arr[4]();
arr[5]();
