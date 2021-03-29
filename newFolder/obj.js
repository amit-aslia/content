// const obj = {
//     a: {b:2},
//     c:4,
//     d:{e:4},
//     f:6,
//     t:{
//         q:{
//             r:5
//         }
//     }
// }

// const data = 't.q';
// const x = data.split('.').reduce((acc,cv) => acc[cv],obj)
// console.log(x)
// let n = 3
// for(let i=n; i>0;i--) {
//     for(let j = 1; j<=n; j++) {
//         if(j<i) {
//             process.stdout.write(' ');
//         }
//         else {
//             process.stdout.write('#');
//         }
//     }
//     console.log('\n');
// }

let numberData = [{number:1}, {number:2}];
let itemData = [{id: 34, qty: 3}, {id: 35, qty: 2} ];
let newNumberData = numberData.map(data => {
    return (
        {...data, items: []}
    )
});
const sum = itemData.reduce((acc,cv) => acc + cv.qty, 0);
const itemIndex = itemData.length - 1;
let j = 0;
let numberDataIndex = 0
const quantity = itemData.map(data => data.qty)

addData = (j,numberDataIndex) => {
  const id = itemData[j].id;
    for(let i =0; i<newNumberData[numberDataIndex].items.length;i++) {
        if(newNumberData[numberDataIndex].items[i].id === id) {
            newNumberData[numberDataIndex].items[i] = {...newNumberData[numberDataIndex].items[i], qty: newNumberData[numberDataIndex].items[i].qty + 1}
            return
        }
}
newNumberData[numberDataIndex].items.push({id, qty: 1});
};

for(let i = 0; i<sum;i++) {
    if(j > itemIndex) j = 0;
    if(numberDataIndex == numberData.length) numberDataIndex = 0;
    if(quantity[j]) {
        addData(j,numberDataIndex);
        quantity[j] = quantity[j] - 1;
        numberDataIndex++;
    }
    j++;
}  

console.log(newNumberData[0].items)