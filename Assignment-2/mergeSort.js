arr = [1, 9, 17]
anotherArr = [8, 15]

function split(array) {
  const n = array.length;
  console.log(n);

  const halfLength = Math.ceil(n/2);
  console.log(halfLength)

  const firstHalf = array.slice(0, halfLength);
  console.log(firstHalf)

  const secondHalf = array.slice(halfLength-1, -1);
  console.log(secondHalf);
}

function merge(array1, array2) {
  const len1 = array1.length;
  const len2 = array2.length;
  const result = [];
  
  let i = 0, j=0;

  while (i < len1 && j < len2) {
    array1[i] < array2[i] 
    ? result.push(array1[i++]) 
    : result.push(array2[j++]);
  }
  
  for (; i < len1; i++) {
    result.push(array1[i])
  }
  for (; j < len2; j++) {
    result.push(array2[j])
  }

  return result;
}

// split(arr);

console.log(merge(arr, anotherArr))