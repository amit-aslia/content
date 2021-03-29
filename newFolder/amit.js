// const studentSubscribe = [
//     {
//         name: 'gate'
//     },
//     {
//         name: 'cat'
//     },
//     {
//         name: 'ssc'
//     }
// ];
// // prior can be btw 1 to 3
// const examnsP = [
//     {
//         name: 'ssc',
//         prior: 2
//     },
//     {
//         name: 'cat',
//         prior: 3
//     }
// ]

// // highest rating will come first

// const output = [
//     {
//         name: 'cat'
//     },
//     {
//         name: 'ssc'
//     },
//     {
//         name: 'gate'
//     }
// ];
// const getPlatform = () => '/blog/travel-tips-for-himachal-pradesh/'.match(/\/blog/i) ? 'blog' : 'product';
// console.log(getPlatform())


const obj = {
    inbox: {
        category: [{name: 'amit'}]
    }
}

const path = 'inbox.category';
    path.split('.').reduce((p,c)=> p&&p[c]||null, obj) = [];

    console.log(obj)
