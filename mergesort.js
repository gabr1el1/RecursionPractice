function fibsRec(n, index = 0, ar = []) {
  if (index <= 1) {
    ar.push(index);
    fibsRec(n, index + 1, ar);
  } else if (index < n) {
    ar.push(ar[index - 2] + ar[index - 1]);
    fibsRec(n, index + 1, ar);
  }

  return ar;
}
console.log(fibsRec(8));

function mergesort(ar) {
  if (ar.length < 2) return ar;
  let left = mergesort(ar.slice(0, Math.round(ar.length / 2)));
  let right = mergesort(ar.slice(Math.round(ar.length / 2)));
  let sorted = [];

  while (true) {
    if (left[0] < right[0]) {
      sorted.push(left[0]);
      left.shift();
    } else {
      sorted.push(right[0]);
      right.shift();
    }
    if (left.length == 0) {
      sorted = sorted.concat(right);
      break;
    } else if (right.length == 0) {
      sorted = sorted.concat(left);
      break;
    }
  }
  return sorted;
}

console.log(mergesort([8, 4, 13, 9, 12]));
//CALL STACK
/*
mergesort([8, 4, 13, 9, 12])
left = mergesort([8,4,13]) ar = [8,4,13]
        left = mergesort([8,4]) ar=[8,4]
               left = mergesort([8]) ar=[8]
                    ar.length==1  return [8]
                right = [4] left=[8] ar=[8,4]
                return [4,8]    
        right = [13] left = [4,8] ar=[8,4,13]
        return [4,8,13] (after merging left an right in while true)
right = mergesort([9,12]) ar=[8,4,13,9,12] left=[4,8,13]
        left = mergesort([9]) ar=[9,12]
              return [9] ar.length==1
        right = mergesort([12]) left=[9]
                return([12]) ar.length==1
        return [9,12] (after merging in while true)
return [4,8,9,12,13] (after merging left and right in while true)



        




*/
