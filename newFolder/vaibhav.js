
const sol = (arr, num, defaultIndex, len, index) => {
    if(arr.length == 0) { // termination statement
        return defaultIndex;
    }
    if(arr[0] == num) {
        defaultIndex = index;
    }
    const [firstElement, ...restElements] = arr; // delete first elem
    return sol(restElements, num, defaultIndex, len, index + 1); // recursion
}
const arr = [1,2,3,4,1,2,3];
const num = 1;
const defaultIndex = -1;

const index  = sol(arr, num, defaultIndex, arr.length -1, 0);
console.log(index)