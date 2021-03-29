// const arr = [1,2,3,4,5,6,7,8,9,10]

// const sum = (a,l) => {
//     if(l === 0) {
//         return a[l];
//     }
//     else {
//         return a[l] + sum(a, l-1)
//     }

// }

// console.log(sum(arr,arr.length - 1))


//  Fib.

// const fib = num => num == 0 || num===1  ? num : fib(num-1) + fib(num-2)

// console.log(fib(4))

// const p = Promise.resolve('hello');

// p.then(val => {
//     console.log(val);
//     return `${val} world`
// }).then(newVal => console.log(newVal))

// function* counter() {
//     let index = 0;
//     while(true) {
//         yield index++;
//          console.log(index)
//     }
// }

// const gen = counter()

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);




var slice = [].slice;
/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */
module.exports = function(obj, fn){
  if ('string' == typeof fn) {
      fn = obj[fn];
} 
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = slice.call(arguments, 2); // argument is the refernce so argument will be array nd it will slice 2 to length
return function(){
    return fn.apply(obj, args.concat(slice.call(arguments))); // here object is refernce, using this I can access the properties of this
  }
};
