const obj = {
  a: [1,2,3],
  b: [2,3,5],
  c: [1,5],
  d: [2,3,5]
}

const newObj = {};


Object.entries(obj).map(data => {
  const key = data[0];
  data[1].map(value => {
    if(newObj[value]) {
      newObj[value] = [...newObj[value], key]
    }
    else {
      newObj[value] = [key];
    }
  })
});

console.log(newObj);