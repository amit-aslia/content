// const createObject = function (firstName, lastName)  {
//     this.firstName = firstName,
//     this.lastName = lastName,
//     this.fullName = () => `${this.firstName} ${this.lastName}`
// }

// const person1 = new createObject('amit', 'aslia');
// const person2 = new createObject('puneet', 'aslia');

// console.log(person1, person2);

// const name = function(firstName, lastName) {
//     this.firstname = firstName,
//     this.lastname = lastName
// }

// name.prototype.getName = function() {
//     return `${this.firstname} ${this.lastname}`
// }

// let name1 = new name('amit', 'aslia');

// console.dir(name1);

// let func = function() {

// };

// console.dir(func)

// const hello = (name) => {
//     console.log(name)
//     return (mesage) => {
//         console.log(name, mesage)
//     }
// };

// const h = hello('amit');
// console.dir(h);

const compareVersions = (v1, v2) => {
    let v1Nums = v1;
    let v2Nums = v2;
    let isV1LengthGreater = v1Nums.length > v2Nums.length;
    let length = isV1LengthGreater ? v2Nums.length : v1Nums.length;
    for (let i = 0; i < length; i++) {
      if (parseInt(v1Nums[i], 10) !== parseInt(v2Nums[i], 10)) {
        console.log('inside if');
        parseInt(v1Nums[i], 10) > parseInt(v2Nums[i], 10) ? 1 : -1;
      }
    }
    console.log('after if')
    // if (v1Nums.length === v2Nums.length) {
    //     return 0;
    // }
    let vNums = isV1LengthGreater ? v1Nums : v2Nums;
    for (let i = length; i < vNums.length; i++) {
      if (parseInt(v1Nums[i], 10) !== 0) {
          console.log('In secnd if')
            return isV1LengthGreater ? 1 : -1;
        }
    }
    return 0;
  }

  let v1=["3","4","8"];
  let v2 = ["3",'4','9']
  const helllo = compareVersions(v1,v2)
  console.log(helllo)


