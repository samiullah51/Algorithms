// console log at Most 5 values
// Time Complexity for this is O(1)

const logAtMost5 = (n) => {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
};

logAtMost5(2);
