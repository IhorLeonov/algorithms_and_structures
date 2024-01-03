// const map = new Map();
// map.set("name", "ihor");
// console.log(map.get("name"));

const map = new Map();
const objKey = { id: 2 };
map.set(objKey, "ihor");
console.log(map.get(objKey));

// const set = new Set();
// set.add(3);
// set.add(3);
// set.add(2);
// set.add(1);
// set.add(5);
// console.log(set);

const arr = [1, 8, 1, 3, 20, 10, 2, 3, 10, 5];
console.log("arr: ", arr);

const setFromArr = new Set(arr); // сет уникальных чисел
console.log("setFromArr: ", setFromArr);

console.log("sort arr: ", Array.from(setFromArr).sort()); // массив уникальных отсортированных чисел
