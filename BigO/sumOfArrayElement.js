// Sum all the elements of an array
// Space Complexity for this is O(1)
const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(sumArray([10, 10]));
