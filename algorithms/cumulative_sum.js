/* 
Problem: Create a function that takes an array of numbers 
and returns a number that is the sum of all values in the array.
*/

export function cumulativeSum (arr) {
    let sum = 0;
    for (const val of arr){
        sum += val;
    }
    return sum;
}

const arr = Array(5).fill(1);
console.log("Cumulative sum is: " + cumulativeSum(arr));