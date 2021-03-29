// const obj = {
//     name: 'amit',
//     lastName: 'aslia'
// }

// const sayHello = (a,b) => {
//     console.log(`${this.name}`,a,b);
// }

// sayHello.apply(obj, [1,2])

// const sum = a => b => b ? sum(a+b) : a;

// console.log(sum(12)(12)())

setTimeout(() => {
    for(let i = 0; i < 10000; i ++) {

    }
    console.log('Hello its me');
},1000);

setTimeout(() => console.log('second callback'),1000);