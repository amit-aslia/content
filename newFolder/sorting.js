// let arr = [
//     [5,4,3,2,1],
//     [4,3,2,1,5],
//     [3,2,1,5,4],
//     [2,1,5,4,3],
//     [1,5,4,3,2]
// ];
// let k=0;
// let n= arr.length;
// for(let i=0; i < n-1; i++ )
// {

//     for(let j=0; j< n-i-1; j++)
//     {
//         if(arr[j][k]>arr[j+1][k])
//         {
//             let temp;
//             temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//         }
//     }
// }
// console.log(arr);



// var slice = [].slice;
// /**
//  * Bind `obj` to `fn`.
//  *
//  * @param {Object} obj
//  * @param {Function|String} fn or string
//  * @return {Function}
//  * @api public
//  */
// function hello(obj, fn){
//   if ('string' == typeof fn) {
//       fn = obj[fn];
// } 
//   if ('function' != typeof fn) throw new Error('bind() requires a function');
//   var args = slice.call(arguments, 2);
// return function(){
//     return fn.apply(obj, args.concat(slice.call(arguments)));
//   }
// };



const hello = require('./practice');

const sum = function(a,b,c) {

   console.log( `${a}::${b}::${c}::${this.name}`);
} 
const obj = {
    name: 'elena'
}

const newFunc = hello(obj, sum) // this is used to bind object to function
newFunc(1,2,3)

// console.log(newFunc(1,2,3));