const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count = 0;
let countRecusive = 0;

function binarySearch(arr, item) {
  let start = 0;
  let end = arr.length;
  let mid;
  let found = false;
  let position = -1;

  while (found === false && start <= end) {
    count += 1;
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === item) {
      found = true;
      position = mid;
      return position;
    }
    if (item < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
}

function recursiveBinarySearch(array, item, start, end) {
  let mid = Math.floor((start + end) / 2);
  countRecusive += 1;

  if (item === array[mid]) {
    return mid;
  }
  if (item < array[mid]) {
    return recursiveBinarySearch(array, item, 0, mid - 1);
  } else {
    return recursiveBinarySearch(array, item, mid + 1, end);
  }
}

console.log("recursiveBinarySearch: ", recursiveBinarySearch(arr, 1, 0, arr.length));
console.log("countRecusive = ", countRecusive);

console.log("binarySearch: ", binarySearch(arr, 1));
console.log("count = ", count);
// O(log2n) = O(log2(16)) = 4
