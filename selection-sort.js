const arr = [6, 4, 5, 3, 2, 50, 6, 0, 1, 7, 9, 8, 1, -1, 2, 13, 31, -10];
let count = 0;

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let idxMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[idxMin]) {
        idxMin = j;
      }
      count += 1;
    }
    let tmp = array[i];
    array[i] = array[idxMin];
    array[idxMin] = tmp;
  }
  return array;
}

console.log(selectionSort(arr));
console.log("length", arr.length); // O(n*n)
console.log("count = ", count);
