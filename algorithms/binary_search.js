/*
Problem: Create a function that takes a sorted array and a target value. 
Return the index of the target value in the array. If the target value is not in the array, return -1.
*/

export function binarySearch(arr, tgt, start=0, end=arr.length-1){
    if (start > end){
        return -1;
    }
    
    const look = Math.floor((start+end)/2);
    if (arr[look] === tgt){
        return look;
    }
    if (arr[look] > tgt){
        return binarySearch(arr, tgt, start, look-1);
    }
    if (arr[look] < tgt){
        return binarySearch(arr, tgt, look+1, end);
    }
   

}

const fib = [0,1,1,2,3,5,8,13,21]
console.log("Index of target: " + binarySearch(fib,3))