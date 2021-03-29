const arr = [8, 3, 9, 2, 1, 10, 13];

const output = [];

// for(let i = 0; i <arr.length; i ++) {
//     if(arr[i] > arr[i-1] && arr[i] > arr[i+1]) {
//         output.push(arr[i])
//     }
// };

// React Lodable //

const newArray = arr.filter((data,index) => {
    if(index === 0 ) {
        return data > arr[index + 1]
    };
    if(index === arr.length - 1) {
        return data > arr[index - 1];
    }
    return data > arr[index + 1] && data > arr[index - 1];
});

console.log(newArray);