// Simple regex

// const str = 'the dog chased cat';
// let regex = /dog/;  // match dog in str (__case_Senitive__)
// let result = regex.test(str);
// console.log(result)

// let petString = 'james has a pet cat';
// let petRegex = /cat|dog|fish/; // OR operator in regex
// console.log(petRegex.test(petString))

// Ignore case

// const istr = 'FreeCodeCamp';
// const iRegex = /freecodecamp/i; // It match freecodecamp, in any case // 'i' means not case sensitive
// // console.log(iRegex.test(istr));

// let str = 'Extract the word "coding" from this string';
// let regex = /coding/;  // It will extract first matched word from string and its index.
// let result  = str.match(regex);
// console.log(result)

// let str = 'Twinkle twinkle little star';
// let regex = /twinkle/ig;  // Find all the matched words // 'g' all words matched regex
// console.log(str.match(regex)); // Output:  ['Twinkle', 'twinkle']


// Match for prefix and postfix

/*
let humStr = 'I will hum a song';
let hugStr = 'Bear hug';
let huRegex = /hu./ig;
console.log(humStr.match(huRegex)); // return ['hum'] // prefix
console.log(hugStr.match(huRegex)); // return ['hug']

let exampleStr = 'let have fun and run';
let unRegex = /.un/ig;
console.log(exampleStr.match(unRegex)); // return ['fun', 'run'];

*/

// Match single caracter with multiple possiblities
/*
let str = 'bug big btg bag';
const regex = /b[aiu]g/ig; // 2nd caracter should be a or i or u
console.log(str.match(regex))

let quoteSample = 'Beware of dog in the above code';
const vowelRegex = /[aeiou]/ig;
console.log(quoteSample.match(vowelRegex));

*/

// Match letter of the alphabets 
 /*
let quoteSample = 'The quick brown fox jump over the little lazy dog';
const alphabetRegex = /[a-z]/ig; //  It will match every alphabet from a-z
let result = quoteSample.match(alphabetRegex);
console.log(result)
*/

// Match numbers and letter of the alphabets
/*
const quoteSample = 'Hey Pi 3.14159  is awesome';
let myRegex = /[2-4a-f]/ig;  // match number from 2 to 4 and aphabet btw a to f
console.log(quoteSample.match(myRegex));
*/

// Match everything except ___

// let quoteSample = '3 blind mices';
// let myRegex = /[^0-9aeiou]/ig; // it includes everything except number and vowels
// console.log(quoteSample.match(myRegex)); // [' ', 'b', 'l', 'n', 'd', ' ', 'm', 'c', 's' ]

// Match caracter that occurs one or more times

// let difficultSpelling = 'Mississippsi';
// let myRegex = /s+/g; // It check for one or more s in string
// console.log(difficultSpelling.match(myRegex));  // [ 'sss', 'ss', 's' ]

// Match caharacter that occurs zero or more times

// let soccerWord = 'gooooooooooooooooooooal';
// let gPhrase = 'gut feeling!!!';
// let oPhrase = 'over the mood';
// let goRegex = /go*/;
// console.log(soccerWord.match(goRegex));
// console.log(gPhrase.match(goRegex));

// ***********Lazy and greedy match :: bydefault regex have greedy match
// i.e match one or more occurences
// let string = 'titanic';
// let regex = /t[a-z]*i/;  // It start with t and end with i ( in btw anything from a-z having 0 or more occurence )
// console.log(string.match(regex)); // Output : ['titani']

// let lazyRegex = /t[a-z]*?i/;
// console.log(string.match(lazyRegex)); // OutPut : ['ti']

// let text = '<h1>Winter is comnig</h1>'
// let regex = /<.*>/
// console.log(text.match(regex)) // output: '<h1>Winter is comnig</h1>

// let digit = '123avd$2.3'
// const regex =  /\d/g;
// console.log(digit.match(regex).length)

/*
    1. If there are numbers, they must be at end
    2. letters can be lower case or upper case
    3. Atleast 2 character long . Two letter name cannot have numbers
*/
// const userName = 'Ja6';
// let userCheck = /^[a-zA-Z]{2,}\d*$/;
// const result = userCheck.test(userName);
// console.log(result);

// let ohString = 'Ohhh no'
// let ohRegex = /Oh{3,6} no/
// console.log(ohRegex.test(ohString));

/*
    Postive and negative lookAheads
*/
// let quit = 'qu';
// let noQuit = 'qt';
// let quRegex = /q(?=u)/;  // ?= means positive lookAheads
// let qRegex = /q(?!u)/;   // ?! means negative lookAheads
// console.log(quit.match(quRegex));
// console.log(noQuit.match(qRegex));

// let sampleWord = 'astronaut';
// let pwdRegex = /(?=\w{5})(?=\D*\d{2})/;
// // console.log(sampleWord.match(pwdRegex))
// console.log(pwdRegex.test(sampleWord))

let repeatStr = 'regex regex';
let repeatRegex = /(\w+)\s\1/;
console.log(repeatStr.match(repeatRegex));


let repeatNum = '42 42 42';
let reRegex = /^(\d+)\s\1\s\1$/;
console.log(repeatNum.match(reRegex));