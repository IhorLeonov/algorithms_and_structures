const arr = [1, 3, 5, 3, 6, 8, 10, 2, 7, 5];
let count = 0;

function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    count += 1;
    if (arr[i] == item) {
      return i;
    }
  }
  return null;
}

console.log(linearSearch(arr, 1));
console.log("count = ", count);

// O(10)
