// Array.prototype.mfilter =  function (fun) {
//     var filtered = [];
//     for(let i = 0; i < this.length; i++) {
//       if (fun(this[i], i, this)) filtered.push(this[i]);
//     }
//     return filtered;
//   };
  
//   var returnedArr = [1,2,3,4,5,6].mfilter(function(element, index, arr) {
//     return element > 5;
//   });
  
//   console.log(returnedArr);

// const a = 5;
// const obj = {
//     a: 4,
//     b: this.a,
//     getData: () => console.log(b)
// }

// obj.getData()


// var x = 1;

// function foo() {
//   console.log(this.x);
// }

// var obj = { x: 2 };
// obj.foo = foo;

// obj.foo(); // 2
// foo(); // 1

// const obj = {
//     name: 'amit',
// }
// var func = () => {
//     console.log(this);
//     const newFunc = () => {
//         console.log(this);
//     }
//     newFunc()
// }

// obj.func = func

// obj.func()
const url = ['/a']
const fun = (path = '') => url.some(url => url === path.toLowerCase());

console.log(fun())