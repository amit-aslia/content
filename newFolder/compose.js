const g = n => n + 1;
const f = n => n * 2;
const t = n => n + 8;

const compose = (...fns) => x => { 
     const hello =  fns.reduce((acc, cv) => {
         console.log(acc,cv);
       return cv(acc) , x
     })
     return hello;
     };

const h = compose(t, f, g);

console.log(h(20))
