// var x = 3;

// var hello = function() {
//     let x = 5;
//     console.log(x)
// }


// // for(var i=0;i<=4;i++){
// //   setTimeout(() => {
// //     console.log(i) //4,4,4,4,4
// //   }, 0)
// // }
// // console.log('I am ',i)




// // for(let i=0;i<=4;i++){
// //     setTimeout(() => {
// //       console.log(i) //0,1,2,3,4
// //     }, 0)
// //   }

// // console.log('this is i',i)

// let a = {
//     a:1,
//     b:2,
//     c:3
//   }
  
//   var Company = {
//     name: 'travelTriangle'
//   }
//   var emp1 = Object.create(Company);
//   delete emp1.company
//   console.log(emp1.company);

//   var value = 5;

//   const displayValue = () => {
//     console.log(value);
//   }
  
//   displayValue()

//   var value = 5;

const str = '?name=amit&id=1';

newStr = str.substring(1);
const vars = newStr.split('&')
console.log(vars);