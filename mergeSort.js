/*
mergeSort arr
if arr length is 1 arr is sorted return arr
mergeSort left from 0 to middle, middle is length / 2 - 0.5 + 1
mergeSort right from middle, length / 2 - 0.5 + 1 to end
pick lowest from list a and b until one is empty 
then add the remaining elements of the other list
and return this merged sorted list 
PRUEBA
[4,1,3,2]
mergeSort [4,1,3,2]
    mergeSort[4,1]
        mergeSort [4]
            return [4]
        mergeSort [1]
            return [1]
        return [1,4]
    mergeSort [3,2]
        mergeSort [3]
            return [3]
        mergeSort [2]
            return [2]
        return [2,3]
    return [1,2,3,4]
    

*/
function mergeSort(arr){
    if(arr.length==1){
        return arr
    }else{
        let middle = arr.length % 2 == 0 ? arr.length / 2 - 1 : arr.length / 2 - 0.5
        let left = mergeSort(arr.slice(0,middle+1))
        let right = mergeSort(arr.slice(middle+1,arr.length))
        return merge(left,right)
    }
}

function merge(left,right){
    let mergedArr = []
    while(left.length>0 && right.length>0){
        let min = left[0] < right[0] ? left.shift() : right.shift()
        mergedArr.push(min) 
    }

    if(left.length==0){
            return [...mergedArr, ...right]
        }else{
            return [...mergedArr, ...left]
        }
        
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));


