// double the value of each element of an array
// Space complexity for this algorithm is O(n)
const doubleElementOfArray = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
};
console.log(doubleElementOfArray([1, 2, 3]));
