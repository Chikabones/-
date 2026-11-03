// --- Блок 1. Строки ---
const s = "JavaScript";
console.log(s.length);
console.log(s[0]);
console.log(s.at(-1));
console.log(s.toUpperCase());
console.log(s.slice(0, 4));
console.log(s.includes("script"));

function capitalize(str) {
  if (!str) return "";
  return str[0].toUpperCase() + str.slice(1);
}
console.log(capitalize("hello"));
console.log(capitalize(""));

function truncate(str, maxLength) {
  return str.length > maxLength ? str.slice(0, maxLength) + "…" : str;
}
console.log(truncate("Hello world", 5));
console.log(truncate("Hi", 5));

// --- Блок 2. Числа ---
console.log(0.1 + 0.2 === 0.3);
console.log((0.1 + 0.2).toFixed(2));
console.log(parseInt("100px"));
console.log(Number("100px"));
console.log(Math.round(4.5));
console.log(isNaN("abc"));

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let i = 0; i < 10; i++) {
  console.log(randomInt(1, 5));
}

// --- Блок 3. Массивы ---
const fruits = ["apple", "banana"];
fruits.push("orange");
fruits.unshift("kiwi");
fruits.pop();
fruits.shift();
console.log(fruits, fruits.length);

const arr = [1, 2, 3];
const copy = arr;
copy.push(4);
console.log(arr.length);
console.log([1, 2] === [1, 2]);
console.log(String([1, 2, 3]));

function findMax(arr) {
  let max = arr[0];
  for (const num of arr) {
    if (num > max) max = num;
  }
  return max;
}
console.log(findMax([10, 5, 25, 8]));

// --- Блок 4. Методы массивов ---
const users = [
  { name: "Aibek", age: 17 },
  { name: "Aigerim", age: 22 },
  { name: "Nurlan", age: 19 },
  { name: "Dana", age: 15 },
];

console.log(users.map(u => u.name));
console.log(users.filter(u => u.age >= 18));
console.log(users.find(u => u.name === "Nurlan"));
console.log(users.reduce((sum, u) => sum + u.age, 0));

console.log([10, 1, 5, 100].sort());
console.log([10, 1, 5, 100].sort((a, b) => a - b));

const a = [1, 2, 3, 4, 5];
console.log(a.slice(1, 3));
console.log(a);
console.log(a.splice(1, 2));
console.log(a);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numbers
  .filter(n => n % 2 === 0)
  .map(n => n ** 2)
  .reduce((sum, n) => sum + n, 0);
console.log(result);

// --- Блок 5. Object.keys, values, entries ---
const prices = { apple: 100, banana: 50, kiwi: 200 };

for (const [key, value] of Object.entries(prices)) {
  console.log(\: \);
}

const doublePrices = Object.fromEntries(
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);
console.log(doublePrices);

// --- Блок 6. Деструктуризация ---
const [b_a, , b_b = 10, ...rest] = [1, 2, undefined, 4, 5];
console.log(b_a, b_b, rest);

let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x, y);

function showUser({ name, age = "unknown" }) {
  console.log(name + ", " + age);
}
showUser({ name: "Chyngyz", age: 17 });
showUser({ name: "Aibek" });
