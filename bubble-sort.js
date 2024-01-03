const arr = [6, 4, 5, 3, 2, 50, 6, 0, 1, 7, 9, 8, 1, -1, 2, 13, 31, -10];
let count = 0;

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
      count += 1;
    }
  }
  return array;
}

console.log(bubbleSort(arr));
console.log("length", arr.length); // O(n*n)
console.log("count = ", count);
