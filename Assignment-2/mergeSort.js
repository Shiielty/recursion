arr = [1,2,3,4,5]

function splitTest(array) {
  const n = array.length;
  console.log(n);

  const halfLength = Math.ceil(n/2);
  console.log(halfLength)

  const firstHalf = array.slice(0, halfLength);
  console.log(firstHalf)

  const secondHalf = array.slice(halfLength-1, -1);
  console.log(secondHalf);
}

splitTest(arr);