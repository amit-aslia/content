let data = {
    name: 'one',
    sName: 'two',
    address: {
        city: 'one',
        place : {
            b: 'amit',
            places: {
                city: 'jaipur'
            }
        }
    }
}

// console.log(data.address.place.places)



// const addKeyToObj = (newObj, key, value) => {
//     if(typeof(value) !== 'object') {
//         newObj[key] = value;
//         return;
//     }
//     else if (typeof(value) === 'object') {
        
//     }
    
// };

// const deepCopy = (data) => {
//     const newObj = {};
//     Object.entries(data).forEach(d => {
//         addKeyToObj(newObj, d[0], d[1]);
//     })
//     console.log(newObj)
// }

const deepCopy = data => {
    return Object.keys(data).reduce((acc,cv) => {
        if(typeof(data[cv]) !== 'object') {
            return {...acc, [cv]: data[cv]}
        }
        else {
            return {...acc, [cv]: deepCopy(data[cv])}
        }
    },{});
};



const t = deepCopy(data);
t.address.city = 'hello'

console.log(t,'\n',data)

