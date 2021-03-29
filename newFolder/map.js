const arr = [1,2,3,4,5,6,7,8,9];

const squareArray = arr.map(item =>  item * item);

const evenNumber = arr.filter((item, index) =>  !(item % 2));

const sumOfArr = arr.reduce((acc, cv) => acc + cv, 0);




console.log(arr, squareArray, evenNumber);
console.log(sumOfArr)

const greeting = name => console.log(`Hello ${name}`);

const getMessage = greeting => {
    console.log("Hello vaibhav I am ");
    greeting('Amit');
}

getMessage(greeting);