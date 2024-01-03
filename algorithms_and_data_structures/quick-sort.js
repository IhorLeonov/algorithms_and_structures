const arr = [6, 4, 5, 3, 2, 50, 6, 13, 0, 1, 7, 9, 8, 1, -1, 2, 13, 31, -10];
let count = 0;

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let coreIndex = Math.floor(array.length / 2);
  let core = array[coreIndex];
  let less = [];
  let greater = [];

  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (i === coreIndex) continue;
    if (array[i] < core) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  return [...quickSort(less), core, ...quickSort(greater)];
}

console.log("quickSort: ", quickSort(arr));
console.log("length: ", arr.length); // O(log2n*n)
console.log("count = ", count);
