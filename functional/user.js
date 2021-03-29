const prompt = require('prompt-sync')();

const checkPrime = num => {
    let flag = true;
    for(let i=2; i<num; i++) {
        if(num % i === 0) {
            flag = false
            break;
        }
    }
    return flag ? 'Prime Number' : 'Not a Prime Number'
};

num = prompt('Enter a number');
console.log(checkPrime(num))