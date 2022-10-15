const arr = ["sami", "haroon", "yaseen"];
console.log(arr);

// insert at the end is ok -- O(1)
arr.push("kamal");
// console.log(arr);

// but the problem is inserting at the beginning of the array because
// it the indexes are changed of each element in array -- O(n)

arr.unshift("jamal");
// console.log(arr);

// Same for the removal from the end is -- O(1)
arr.pop();
// console.log(arr);

// but removal from the beginning is -- O(n)
arr.shift();
console.log(arr);

/*                 Big O of Array Methods
O(1) -- push()
O(1) -- pop()
O(n) -- shift()
O(n) -- unshift()
O(n) -- concat()
O(n) -- slice()
O(n) -- splice()
O(n * log n) -- sort()
O(n) -- forEach()/map()/filter()/reduce()
*/
