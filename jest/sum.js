const fetch = require("node-fetch");

sum = (a, b) =>
{
    return a + b;
}

 check = async () =>
{
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    return new Promise()
    console.log(data);
    return data;
};
check();

prime = (num) =>
{
    for(let i=2;i < num/2; i++)
    {
        if(num % i === 0 )
        {
            return 'not prime'
        }
    }
    return 'prime'
};

checkobject = (number) =>
{
    return {hello:number};
};

module.exports = sum;