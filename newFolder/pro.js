const INITAL_STATE = [
    {
        name: 'MRF Bat',
        description: 'Light weight bat',
        price: 500,
        quantity: 7
    },
    {
        name: 'Iphone 11',
        description: 'Come with latest features',
        price: 45000,
        quantity: 10
    },
    {
        name: 'Samsung j7 prime',
        description: 'has a metal body and a 5.5-inch 2.5D glass display that comes with 1920x1080 pixels resolution and Gorilla Glass 4',
        price: 14000,
        quantity: 17
    },
    {
        name: 'Sandwich maker',
        description: 'has metal lid and can make two sandwich at a time',
        price: 1500,
        quantity: 2
    }
];
let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len -1; i++) {
            console.log(inputArr[i].price)
            if (inputArr[i].price > inputArr[i + 1].price) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return inputArr;
};
console.log(bubbleSort(INITAL_STATE))