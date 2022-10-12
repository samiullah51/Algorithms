// console log at least 5 values
// Time Complexity for this is O(n)

const logAtLeast5 = (n) => {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
};

logAtLeast5(1);
