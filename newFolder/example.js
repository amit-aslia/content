// const sum = a => b => a + b;

// function sum (a) { 
//     return function(b) { 
//         return a + b;
//     }
// }

// console.log(sum(1)(2))

// const curry = (func) => 
// curried = (...args) => func.apply(this, [1,2]) 

  
//   const sum = (a,b) => a+ b  

//   let curriedSum = curry(sum);
//   console.log(curriedSum(3,4))

// var slice = [].slice
// const name = [1,2,34]

// function hello(a,b) {
//     console.log(arguments);
// }

// hello(1,2,2,3)
// setTimeout(console.log("Horse B"), 0)

// const email = (value) => {
//     if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i.test(value)) {
//       return 'Invalid Email';
//     }
//     return undefined;
//   };

// console.log(email('amit@gmail;.com'))

// Object destructing

// var, let , const

// restrict duplicate assignment

// Arrray and object

// const  arr1 = [1,2,3,4,5];  // 1000 base address

// const arr2 = arr1;


// arr2[1] = 123
// // arr1 = [1,2,3,4,5];
// // arr2 = [123, 2,3 4,5];  // both will point to same address // non-primitive
// console.log(arr1, arr2);

//const arr1 = ['amit','aslia', 'shaifali', 'Balodi']; 

// firstName, secondName, your full Name

// Coding,

// data structure and algorithms

// const str = '/popular/javascript';
// console.log(str.split('/').pop())

const hello = name => msg => console.log(name, msg);

// hello('amit')('puneet')
const hel = hello('puneet')
console.log(hel)









