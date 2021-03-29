
// const trace = label => value => {
//     console.log(`${ label }: ${ value }`);
//     return value;
//   };
// const compose = (...fns) => x => fns.reduce((acc, cv) => cv(acc), x)

// const g = n => n + 2;
// const f = n => n * 2;

// const h = compose(g, trace('after g'), f , trace('after f'));

// console.log(h(20))

// const map = fn => mappable => mappable.map(fn); // It takes an function and on each iteration It will execute.
// const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x); // It is used to pipe function so that one fnction call will be input to next fuction calll
// const log = (...args) => console.log(...args); // It simply console arguments
// const arr = [1, 2, 3, 4];
// const isEven = n => n % 2 === 0;
// const stripe = n => isEven(n) ? 'dark' : 'light';
// const stripeAll = map(stripe); // mappable => mappable.map(n => isEven(n) ? 'dark' : 'light';)
// const striped = stripeAll(arr); // send array to fuction taken as mappable contain output of above expression
// log(striped);
// // => ["light", "dark", "light", "dark"]
// const double = n => n * 2;
// const doubleAll = map(double);
// const doubled = doubleAll(arr);
// log(doubled);
// => [2, 4, 6, 8]


// ********** Find the number of words in a sentence *****************
// const sentence = 'hello there, I am amit and I am learning functional programming';
// const splitSentence = sentence => sentence.split(' ')
// const countWords = splitWords => splitWords.length;

const compose = (...fns) => sentence => fns.reduce((acc, cv) => cv(acc), sentence);

// const composedFunction = compose(splitSentence, countWords);
// console.log(composedFunction(sentence));

// *************Find number of digit in a sentence**********

const sentence = 'PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).';

const split = sentence => sentence.split('');
const parseToInteger = wordsArray =>  wordsArray.map(number => parseInt(number));
const filter = parseToInteger =>  parseToInteger.filter(number => Number.isInteger(number));
const getLength = sentence => sentence.length;

const composedFunction = compose(split, parseToInteger, filter, getLength)
console.log(composedFunction(sentence))




