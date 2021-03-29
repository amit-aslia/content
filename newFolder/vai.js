const  lastindex = (li, n, si, index) => {
    if (si == li.length) {
        if (li[index]==n) 
            return index
        else
            return -1
    }
    else if (li[si] == n) {
        index=si;
        return lastindex(li, n, si+1, index);
    }
    else 
        return lastindex(li, n, si+1, index)
    
};

const list = [1,2,3,4,5,5,6,1,2,2]
const x = 3;
console.log(lastindex(list, x, 0, 0))