const sum = require('./sum');
const fetch = require("node-fetch");

test('adding 1 and 2 give 3' , ()=>
{
     expect(sum(1,2)).toBe(3);
});

test('adding 1 and 3 gives 4' , ()=>
{
    expect(sum(2,2)).toBe(4);
    expect(sum(2,2)).toBeGreaterThan(3);
    expect(sum(2,2)).toBeGreaterThanOrEqual(3.9);
    expect(sum(2,2)).toBeLessThan(123);
    expect(sum(2,2)).toEqual(4);
});

test('6 is not prime number', ()=>
{
    expect(prime(6)).toBe('not prime');
});

test('Object check', ()=>
{
    const data = {one:1};
    data['two'] = 2;
    expect(data).toEqual({one:1, two:2});
});

test('Object is', ()=>
{
    expect(checkobject(5)).toEqual({hello:5})
});

test('adding two positive number never zero',()=>
{
    for(let i=1;i<10; i++)
    {
        for(let j=1;j<9; j++)
        {
            expect(i+j).not.toBe(0);
        }
    }
})

test('check null',()=>
{
    const x = null;
    let y;
    const z=1;
    expect(x).toBeNull();
    expect(x).toBeDefined();
    expect(y).toBeUndefined();
    expect(y).toBeFalsy();
    expect(z).toBeTruthy();
});

test('check for floating numbers', ()=>
{
    const a = 1.1 + 1.1;
    expect(a).toBe(2.2000);
});

test('test for a string', ()=>
{
    const str = 'hello this is a team';
    expect(str).not.toMatch(/hello this is  team/);
});

test('check for array', ()=>
{
    const hello = [1,2,3,4,5];
    expect(hello).toContain(1);
});

test('check async',  () =>
{
    return new fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(data =>
        {
            console.log(data);
            expect(data).toEqual({
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
              });
        })
    // console.log(data)
})