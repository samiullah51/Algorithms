// sum of a number from 1 up to n
// Solution 1
const sumOfNumberFrom1UpToN_1 = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};
console.log(sumOfNumberFrom1UpToN_1(4));
// Solution 2
const sumOfNumberFrom1UpToN_2 = (n) => {
  return (n * (n + 1)) / 2;
};
console.log(sumOfNumberFrom1UpToN_2(4));
