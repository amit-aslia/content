

  const curry = (func) => 
    curried = (...args) => args.length >= func.length ? 
          func.apply(this,args)  
          : 
        (...args2) => curried.apply(this, args.concat(args2));

  function sum(a, b, c,d) {
    return a + b + c + d;
  }
  
  let curriedSum = curry(sum);
  console.log(curriedSum(1,2,3,4)); // 6, full currying

// function curry(f) { // curry(f) does the currying transform
//     return function(a) {
//       return function(b) {
//         return f(a, b);
//       };
//     };
//   }
  
//   // usage
//   function sum(a, b) {
//     return a + b;
//   }
  
//   let curriedSum = curry(sum);
  
//   console.log( curriedSum(1)(2) ); // 3


let count = 0
let getData = () => {
  console.log('Function is called...', count++)
}

let throttleFunction = (func, limit) => {
  console.log('hello');
  let flag = true
  return () => {
      if(flag) {
          func();
          flag = false;
          setTimeout(() => {
              flag = true;
          }, limit)
      }
  };
}

const add = () => {
  let count = 0;
  return () => {
    console.log(count++);
  }
}

const click = add();

